import React, { useState, useEffect, useCallback } from 'react';
import { getExperiences, createExperience, updateExperience, deleteExperience } from '../../services/experiences.service';

function ExperiencesTab() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: '', company: '', location: '', startDate: '', endDate: '', current: false, description: '', order: 0 });

  const fetchExperiences = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getExperiences();
      setExperiences(res.data.data || []);
    } catch {
      setExperiences([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchExperiences();
  }, [fetchExperiences]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...form };
      if (payload.current) payload.endDate = null;
      await createExperience(payload);
      setShowForm(false);
      setForm({ title: '', company: '', location: '', startDate: '', endDate: '', current: false, description: '', order: 0 });
      fetchExperiences();
    } catch (err) {
      alert("Erreur lors de la création de l'expérience");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Supprimer cette expérience ?')) return;
    try {
      await deleteExperience(id);
      fetchExperiences();
    } catch {}
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Gestion des Expériences</h2>
        <button onClick={() => setShowForm(!showForm)} className="px-4 py-2 bg-primary-container text-on-primary rounded-xl text-sm font-semibold hover:bg-primary transition-all">
          Nouvelle Expérience
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Titre (ex: Développeur React)" value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface text-sm" required />
            <input type="text" placeholder="Entreprise" value={form.company} onChange={e => setForm({...form, company: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface text-sm" required />
            <input type="text" placeholder="Lieu (ex: Paris, France)" value={form.location} onChange={e => setForm({...form, location: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface text-sm" />
            
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-xs font-semibold mb-1">Date de début</label>
                <input type="date" value={form.startDate} onChange={e => setForm({...form, startDate: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface text-sm" required />
              </div>
              <div className="w-1/2">
                <label className="block text-xs font-semibold mb-1">Date de fin</label>
                <input type="date" value={form.endDate} onChange={e => setForm({...form, endDate: e.target.value})} disabled={form.current} className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface text-sm disabled:opacity-50" />
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <input type="checkbox" checked={form.current} onChange={e => setForm({...form, current: e.target.checked})} className="w-4 h-4 accent-primary" />
              <label className="text-sm font-semibold text-on-surface">Poste actuel</label>
            </div>
            <input type="number" placeholder="Ordre d'affichage" value={form.order} onChange={e => setForm({...form, order: parseInt(e.target.value)})} className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface text-sm" />
          </div>
          <textarea placeholder="Description des tâches" value={form.description} onChange={e => setForm({...form, description: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface text-sm" rows={4} required />
          <button type="submit" className="px-5 py-2 bg-primary-container text-on-primary rounded-xl text-sm font-semibold hover:bg-primary">Sauvegarder</button>
        </form>
      )}

      {loading ? (
        <div className="text-center py-12 text-on-surface-variant">Chargement...</div>
      ) : (
        <div className="space-y-4">
          {experiences.sort((a,b) => a.order - b.order).map(exp => (
            <div key={exp.id} className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant/30 flex items-start justify-between">
              <div>
                <h3 className="font-bold text-on-surface text-lg">{exp.title}</h3>
                <p className="text-sm font-semibold text-primary">{exp.company} <span className="text-on-surface-variant font-normal">| {exp.location}</span></p>
                <p className="text-xs text-on-surface-variant mt-1 mb-3">
                  {new Date(exp.startDate).toLocaleDateString()} - {exp.current ? 'Présent' : new Date(exp.endDate).toLocaleDateString()}
                </p>
                <p className="text-sm text-on-surface-variant whitespace-pre-wrap">{exp.description}</p>
              </div>
              <button onClick={() => handleDelete(exp.id)} className="text-red-500 hover:text-red-700 bg-red-50 p-2 rounded-lg">
                <span className="material-symbols-outlined text-[20px]">delete</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExperiencesTab;
