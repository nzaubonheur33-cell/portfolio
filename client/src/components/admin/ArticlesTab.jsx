import React, { useState, useEffect, useCallback } from 'react';
import { getArticles, createArticle, updateArticle, deleteArticle } from '../../services/articles.service';

function ArticlesTab() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: '', slug: '', excerpt: '', content: '', coverImage: '', tags: '', published: false });

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getArticles();
      setArticles(res.data.data || []);
    } catch {
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const tagsArray = form.tags.split(',').map(t => t.trim()).filter(Boolean);
      await createArticle({
        ...form,
        tags: JSON.stringify(tagsArray),
      });
      setShowForm(false);
      setForm({ title: '', slug: '', excerpt: '', content: '', coverImage: '', tags: '', published: false });
      fetchArticles();
    } catch (err) {
      alert("Erreur lors de la création de l'article");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Supprimer cet article ?')) return;
    try {
      await deleteArticle(id);
      fetchArticles();
    } catch {}
  };

  const handleTogglePublish = async (article) => {
    try {
      await updateArticle(article.id, { published: !article.published });
      fetchArticles();
    } catch {}
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Gestion du Blog</h2>
        <button onClick={() => setShowForm(!showForm)} className="px-4 py-2 bg-primary-container text-on-primary rounded-xl text-sm font-semibold hover:bg-primary transition-all">
          Nouvel Article
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Titre" value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface text-sm" required />
            <input type="text" placeholder="Slug (ex: mon-article)" value={form.slug} onChange={e => setForm({...form, slug: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface text-sm" required />
            <input type="text" placeholder="URL Image couverture" value={form.coverImage} onChange={e => setForm({...form, coverImage: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface text-sm" />
            <input type="text" placeholder="Tags (séparés par virgule)" value={form.tags} onChange={e => setForm({...form, tags: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface text-sm" />
          </div>
          <textarea placeholder="Extrait court" value={form.excerpt} onChange={e => setForm({...form, excerpt: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface text-sm" rows={2} required />
          <textarea placeholder="Contenu (Markdown supporté)" value={form.content} onChange={e => setForm({...form, content: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface text-sm font-mono" rows={10} required />
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={form.published} onChange={e => setForm({...form, published: e.target.checked})} className="w-4 h-4 accent-primary" />
            <label className="text-sm font-semibold text-on-surface">Publier immédiatement</label>
          </div>
          <button type="submit" className="px-5 py-2 bg-primary-container text-on-primary rounded-xl text-sm font-semibold hover:bg-primary">Sauvegarder</button>
        </form>
      )}

      {loading ? (
        <div className="text-center py-12 text-on-surface-variant">Chargement...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map(article => (
            <div key={article.id} className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm space-y-3 flex flex-col">
              {article.coverImage && <img src={article.coverImage} alt="" className="w-full h-32 object-cover rounded-xl" />}
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-semibold text-on-surface text-sm line-clamp-2">{article.title}</h3>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${article.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                  {article.published ? 'Publié' : 'Brouillon'}
                </span>
              </div>
              <p className="text-xs text-on-surface-variant line-clamp-2 flex-1">{article.excerpt}</p>
              <div className="flex justify-between items-center mt-2 border-t pt-2 border-outline-variant/30">
                <button onClick={() => handleTogglePublish(article)} className="text-xs text-primary font-medium hover:underline">
                  {article.published ? 'Retirer' : 'Publier'}
                </button>
                <button onClick={() => handleDelete(article.id)} className="text-xs text-red-500 hover:text-red-700"><span className="material-symbols-outlined text-[16px]">delete</span></button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ArticlesTab;
