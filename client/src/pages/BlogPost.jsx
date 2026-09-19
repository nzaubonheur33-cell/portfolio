import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import api from '../services/api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await api.get(`/articles/${slug}`);
        if (response.data.success) {
          setArticle(response.data.data);
          document.title = `${response.data.data.title} | Bonheur Nzau`;
        }
      } catch (err) {
        setError('Article introuvable.');
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </>
    );
  }

  if (error || !article) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6">
          <h1 className="text-display-md text-error font-bold mb-4">404</h1>
          <p className="text-body-lg text-on-surface-variant mb-8">{error}</p>
          <button onClick={() => navigate('/blog')} className="px-6 py-3 bg-primary text-on-primary rounded-full font-bold hover:opacity-90">
            Retour au Blog
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="w-full pt-24 pb-16 bg-background min-h-screen">
        <article className="max-w-[800px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12">
            <button onClick={() => navigate('/blog')} className="flex items-center gap-2 text-primary hover:text-primary-container font-medium mb-8 transition-colors">
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
              Retour au blog
            </button>
            <div className="flex items-center gap-4 text-sm font-label-code text-on-surface-variant mb-6">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                {new Date(article.publishedAt).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">timer</span>
                {article.readTime} min de lecture
              </span>
            </div>
            <h1 className="font-display-sm md:text-display-md font-bold text-on-surface mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags && JSON.parse(article.tags).map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-surface-container text-on-surface-variant rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
            {article.coverImage && (
              <div className="w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden mb-12 shadow-sm">
                <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover" />
              </div>
            )}
          </header>

          {/* Content (Markdown) */}
          <div className="prose prose-lg dark:prose-invert prose-orange max-w-none prose-headings:font-headline-sm prose-p:text-on-surface-variant prose-a:text-primary hover:prose-a:text-primary-container">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {article.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default BlogPost;
