import React, { useState, useEffect, useCallback } from 'react';
import { getSkills, createSkill, updateSkill, deleteSkill } from '../../services/skills.service';

function SkillsTab() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', category: 'Frontend', level: 80, icon: '', order: 0 });

  const fetchSkills = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getSkills();
      setSkills(res.data.data || []);
    } catch {
      setSkills([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSkills();
  }, [fetchSkills]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createSkill(form);
      setShowForm(false);
      setForm({ name: '', category: 'Frontend', level: 80, icon: '', order: 0 });
      fetchSkills();
    } catch (err) {
      alert("Erreur lors de la création de la compétence");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Supprimer cette compétence ?')) return;
    try {
      await deleteSkill(id);
      fetchSkills();
    } catch {}
  };

  // Group by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Gestion des Compétences</h2>
        <button onClick={() => setShowForm(!showForm)} className="px-4 py-2 bg-primary-container text-on-primary rounded-xl text-sm font-semibold hover:bg-primary transition-all">
          Nouvelle Compétence
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm space-y-4 max-w-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Nom de la compétence (ex: React)" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface text-sm" required />
            <select value={form.category} onChange={e => setForm({...form, category: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface text-sm">
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Database">Database</option>
              <option value="DevOps">DevOps</option>
              <option value="Tools">Outils</option>
            </select>
            <div>
              <label className="block text-xs font-semibold mb-1">Niveau ({form.level}%)</label>
              <input type="range" min="0" max="100" value={form.level} onChange={e => setForm({...form, level: parseInt(e.target.value)})} className="w-full" />
            </div>
            <input type="text" placeholder="Icone (devicon class)" value={form.icon} onChange={e => setForm({...form, icon: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface text-sm" />
            <input type="number" placeholder="Ordre d'affichage" value={form.order} onChange={e => setForm({...form, order: parseInt(e.target.value)})} className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface text-sm" />
          </div>
          <button type="submit" className="px-5 py-2 bg-primary-container text-on-primary rounded-xl text-sm font-semibold hover:bg-primary">Sauvegarder</button>
        </form>
      )}

      {loading ? (
        <div className="text-center py-12 text-on-surface-variant">Chargement...</div>
      ) : (
        <div className="space-y-8">
          {Object.entries(skillsByCategory).map(([category, catSkills]) => (
            <div key={category}>
              <h3 className="font-bold text-on-surface mb-3 border-b border-outline-variant pb-2">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {catSkills.sort((a,b) => a.order - b.order).map(skill => (
                  <div key={skill.id} className="bg-surface-container-lowest rounded-xl p-3 shadow-sm border border-outline-variant/30 flex items-center justify-between group">
                    <div>
                      <p className="font-semibold text-sm text-on-surface">{skill.name}</p>
                      <p className="text-[10px] text-on-surface-variant">{skill.level}%</p>
                    </div>
                    <button onClick={() => handleDelete(skill.id)} className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-[16px]">delete</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SkillsTab;
