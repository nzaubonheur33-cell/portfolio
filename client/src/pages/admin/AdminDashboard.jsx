import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutAdmin } from '../../services/auth.service';
import { getMessages, updateMessageStatus, deleteMessage } from '../../services/contact.service';
import { getProjects, createProject, deleteProject } from '../../services/projects.service';
import ArticlesTab from '../../components/admin/ArticlesTab';
import SkillsTab from '../../components/admin/SkillsTab';
import ExperiencesTab from '../../components/admin/ExperiencesTab';

const STATUS_LABELS = {
  UNREAD: { label: 'Non lu', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' },
  READ: { label: 'Lu', color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300' },
  REPLIED: { label: 'Répondu', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' },
  ARCHIVED: { label: 'Archivé', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' },
};

function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('messages');
  const [messages, setMessages] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loadingMessages, setLoadingMessages] = useState(true);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showProjectForm, setShowProjectForm] = useState(false);

  const [projectForm, setProjectForm] = useState({
    title: '', slug: '', description: '', githubUrl: '', liveUrl: '', featured: false,
    technologies: '',
  });

  const fetchMessages = useCallback(async () => {
    setLoadingMessages(true);
    try {
      const data = await getMessages();
      setMessages(data.data || []);
    } catch {
      setMessages([]);
    } finally {
      setLoadingMessages(false);
    }
  }, []);

  const fetchProjects = useCallback(async () => {
    setLoadingProjects(true);
    try {
      const data = await getProjects();
      setProjects(data.data || []);
    } catch {
      setProjects([]);
    } finally {
      setLoadingProjects(false);
    }
  }, []);

  useEffect(() => {
    fetchMessages();
    fetchProjects();
  }, [fetchMessages, fetchProjects]);

  const handleLogout = () => {
    logoutAdmin();
    navigate('/admin/login');
  };

  const handleStatusChange = async (id, status) => {
    try {
      await updateMessageStatus(id, status);
      setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, status } : m)));
      if (selectedMessage?.id === id) setSelectedMessage((m) => ({ ...m, status }));
    } catch {}
  };

  const handleDeleteMessage = async (id) => {
    if (!window.confirm('Supprimer ce message ?')) return;
    try {
      await deleteMessage(id);
      setMessages((prev) => prev.filter((m) => m.id !== id));
      if (selectedMessage?.id === id) setSelectedMessage(null);
    } catch {}
  };

  const handleDeleteProject = async (id) => {
    if (!window.confirm('Supprimer ce projet ?')) return;
    try {
      await deleteProject(id);
      setProjects((prev) => prev.filter((p) => p.id !== id));
    } catch {}
  };

  const handleCreateProject = async (e) => {
    e.preventDefault();
    try {
      const techs = projectForm.technologies.split(',').map((t) => t.trim()).filter(Boolean);
      await createProject({ ...projectForm, technologies: techs });
      setShowProjectForm(false);
      setProjectForm({ title: '', slug: '', description: '', githubUrl: '', liveUrl: '', featured: false, technologies: '' });
      fetchProjects();
    } catch {}
  };

  const filteredMessages = messages.filter((m) => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase()) ||
      m.subject.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === 'ALL' || m.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const unreadCount = messages.filter((m) => m.status === 'UNREAD').length;

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar Admin */}
      <nav className="sticky top-0 z-50 bg-surface-container-lowest border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">admin_panel_settings</span>
            <div>
              <p className="font-semibold text-on-surface text-sm leading-none">Dashboard Admin</p>
              <p className="text-xs text-on-surface-variant">Bonheur Nzau</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href="/" className="text-sm text-on-surface-variant hover:text-primary transition-colors px-3 py-1.5 rounded-lg hover:bg-surface-container">
              ← Portfolio
            </a>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-red-500 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
            >
              <span className="material-symbols-outlined text-[16px]">logout</span>
              Déconnexion
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: 'mail', label: 'Messages total', value: messages.length },
            { icon: 'mark_unread_chat_alt', label: 'Non lus', value: unreadCount, accent: true },
            { icon: 'folder_open', label: 'Projets', value: projects.length },
            { icon: 'star', label: 'Featured', value: projects.filter((p) => p.featured).length },
          ].map((stat) => (
            <div key={stat.label} className={`bg-surface-container-lowest rounded-2xl p-5 shadow-sm ${stat.accent && unreadCount > 0 ? 'ring-2 ring-primary/40' : ''}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className={`material-symbols-outlined text-[20px] ${stat.accent ? 'text-primary' : 'text-on-surface-variant'}`}>{stat.icon}</span>
                <p className="text-xs text-on-surface-variant">{stat.label}</p>
              </div>
              <p className={`text-3xl font-extrabold ${stat.accent && unreadCount > 0 ? 'text-primary' : 'text-on-surface'}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-surface-container-low rounded-2xl p-1 w-fit overflow-x-auto">
          {['messages', 'projects', 'articles', 'skills', 'experiences'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${activeTab === tab ? 'bg-surface-container-lowest text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              {tab === 'messages' ? `Messages ${unreadCount > 0 ? `(${unreadCount})` : ''}` : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* List */}
            <div className="lg:col-span-1 space-y-4">
              {/* Filters */}
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm placeholder:text-on-surface-variant/60"
                />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                >
                  <option value="ALL">Tous les statuts</option>
                  <option value="UNREAD">Non lus</option>
                  <option value="READ">Lus</option>
                  <option value="REPLIED">Répondus</option>
                  <option value="ARCHIVED">Archivés</option>
                </select>
              </div>

              {/* Message list */}
              <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
                {loadingMessages ? (
                  <div className="text-center py-8 text-on-surface-variant text-sm">Chargement...</div>
                ) : filteredMessages.length === 0 ? (
                  <div className="text-center py-8 text-on-surface-variant text-sm">Aucun message reçu.</div>
                ) : (
                  filteredMessages.map((msg) => (
                    <button
                      key={msg.id}
                      onClick={() => {
                        setSelectedMessage(msg);
                        if (msg.status === 'UNREAD') handleStatusChange(msg.id, 'READ');
                      }}
                      className={`w-full text-left p-4 rounded-2xl border transition-all ${selectedMessage?.id === msg.id ? 'border-primary bg-primary/5' : 'border-transparent bg-surface-container-lowest hover:bg-surface-container'}`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className={`text-sm font-semibold text-on-surface truncate ${msg.status === 'UNREAD' ? 'font-bold' : ''}`}>{msg.name}</p>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold shrink-0 ${STATUS_LABELS[msg.status]?.color}`}>
                          {STATUS_LABELS[msg.status]?.label}
                        </span>
                      </div>
                      <p className="text-xs text-on-surface-variant truncate mt-0.5">{msg.subject}</p>
                      <p className="text-xs text-on-surface-variant/60 mt-1">{new Date(msg.createdAt).toLocaleDateString('fr-FR')}</p>
                    </button>
                  ))
                )}
              </div>
            </div>

            {/* Message Detail */}
            <div className="lg:col-span-2">
              {!selectedMessage ? (
                <div className="h-full flex items-center justify-center text-on-surface-variant bg-surface-container-lowest rounded-3xl p-8">
                  <div className="text-center space-y-2">
                    <span className="material-symbols-outlined text-5xl text-on-surface-variant/40">inbox</span>
                    <p className="text-sm">Sélectionnez un message</p>
                  </div>
                </div>
              ) : (
                <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">{selectedMessage.subject}</h2>
                      <p className="text-sm text-on-surface-variant mt-1">
                        De <span className="font-semibold text-on-surface">{selectedMessage.name}</span> — <a href={`mailto:${selectedMessage.email}`} className="text-primary hover:underline">{selectedMessage.email}</a>
                      </p>
                      <p className="text-xs text-on-surface-variant/60 mt-0.5">
                        {new Date(selectedMessage.createdAt).toLocaleString('fr-FR')} · {selectedMessage.projectType}
                      </p>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold shrink-0 ${STATUS_LABELS[selectedMessage.status]?.color}`}>
                      {STATUS_LABELS[selectedMessage.status]?.label}
                    </span>
                  </div>

                  <div className="bg-surface-container p-5 rounded-2xl">
                    <p className="text-sm text-on-surface whitespace-pre-wrap leading-relaxed">{selectedMessage.message}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary-container text-on-primary text-sm font-semibold hover:bg-primary transition-all"
                    >
                      <span className="material-symbols-outlined text-[16px]">reply</span> Répondre
                    </a>
                    {['READ', 'REPLIED', 'ARCHIVED'].map((s) => (
                      selectedMessage.status !== s && (
                        <button
                          key={s}
                          onClick={() => handleStatusChange(selectedMessage.id, s)}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-container text-on-surface text-sm font-semibold hover:bg-surface-container-high transition-all"
                        >
                          {STATUS_LABELS[s]?.label}
                        </button>
                      )
                    ))}
                    <button
                      onClick={() => handleDeleteMessage(selectedMessage.id)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-semibold hover:bg-red-100 dark:hover:bg-red-900/40 transition-all ml-auto"
                    >
                      <span className="material-symbols-outlined text-[16px]">delete</span> Supprimer
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Gestion des projets</h2>
              <button
                onClick={() => setShowProjectForm(!showProjectForm)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary-container text-on-primary text-sm font-semibold hover:bg-primary transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">add</span> Nouveau projet
              </button>
            </div>

            {/* Project Form */}
            {showProjectForm && (
              <form onSubmit={handleCreateProject} className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm space-y-4">
                <h3 className="font-semibold text-on-surface">Nouveau projet</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'title', label: 'Titre', placeholder: 'Mon Projet' },
                    { id: 'slug', label: 'Slug', placeholder: 'mon-projet' },
                    { id: 'githubUrl', label: 'GitHub URL', placeholder: 'https://github.com/...' },
                    { id: 'liveUrl', label: 'Live URL', placeholder: 'https://...' },
                  ].map((field) => (
                    <div key={field.id}>
                      <label className="block text-xs font-semibold text-on-surface mb-1">{field.label}</label>
                      <input
                        type="text"
                        placeholder={field.placeholder}
                        value={projectForm[field.id]}
                        onChange={(e) => setProjectForm((p) => ({ ...p, [field.id]: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-on-surface mb-1">Description</label>
                  <textarea
                    rows={3}
                    value={projectForm.description}
                    onChange={(e) => setProjectForm((p) => ({ ...p, description: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Description courte..."
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-on-surface mb-1">Technologies (séparées par des virgules)</label>
                  <input
                    type="text"
                    value={projectForm.technologies}
                    onChange={(e) => setProjectForm((p) => ({ ...p, technologies: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="React, Node.js, MySQL"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="featured-check"
                    checked={projectForm.featured}
                    onChange={(e) => setProjectForm((p) => ({ ...p, featured: e.target.checked }))}
                    className="w-4 h-4 accent-primary"
                  />
                  <label htmlFor="featured-check" className="text-sm text-on-surface font-semibold">Projet featured</label>
                </div>
                <div className="flex gap-2">
                  <button type="submit" className="px-5 py-2 rounded-xl bg-primary-container text-on-primary text-sm font-semibold hover:bg-primary transition-all">
                    Créer le projet
                  </button>
                  <button type="button" onClick={() => setShowProjectForm(false)} className="px-5 py-2 rounded-xl bg-surface-container text-on-surface text-sm font-semibold hover:bg-surface-container-high transition-all">
                    Annuler
                  </button>
                </div>
              </form>
            )}

            {/* Projects List */}
            {loadingProjects ? (
              <div className="text-center py-12 text-on-surface-variant text-sm">Chargement...</div>
            ) : projects.length === 0 ? (
              <div className="text-center py-12 text-on-surface-variant text-sm bg-surface-container-lowest rounded-3xl">
                Aucun projet disponible.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                  <div key={project.id} className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-on-surface text-sm">{project.title}</h3>
                      {project.featured && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold shrink-0">Featured</span>
                      )}
                    </div>
                    <p className="text-xs text-on-surface-variant line-clamp-2">{project.description}</p>
                    {project.technologies?.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span key={tech.id} className="text-[10px] px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-medium">{tech.name}</span>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center gap-2 pt-1">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">code</span> GitHub
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">open_in_new</span> Live
                        </a>
                      )}
                      <button
                        onClick={() => handleDeleteProject(project.id)}
                        className="ml-auto text-xs text-red-500 hover:text-red-700 transition-colors flex items-center gap-0.5"
                      >
                        <span className="material-symbols-outlined text-[14px]">delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Articles Tab */}
        {activeTab === 'articles' && <ArticlesTab />}
        
        {/* Skills Tab */}
        {activeTab === 'skills' && <SkillsTab />}
        
        {/* Experiences Tab */}
        {activeTab === 'experiences' && <ExperiencesTab />}
      </div>
    </div>
  );
}

export default AdminDashboard;
