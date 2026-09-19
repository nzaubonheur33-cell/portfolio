import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/motion/AnimatedSection';
import api from '../services/api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Blog() {
  const { t } = useTranslation();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await api.get('/articles');
        if (response.data.success) {
          setArticles(response.data.data);
        }
      } catch (err) {
        console.error(err);
        setError('Impossible de charger les articles.');
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  return (
    <>
      <Navbar />
      <main className="w-full pt-24 pb-16 bg-background min-h-screen">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h1 className="font-display-hero text-display-md font-bold text-on-surface">
                Blog <span className="text-primary-container">Technique</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Partage de connaissances, tutoriels et retours d'expérience sur le développement web.
              </p>
            </div>

            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : error ? (
              <div className="text-center text-error p-8 bg-error-container rounded-3xl">
                {error}
              </div>
            ) : articles.length === 0 ? (
              <div className="text-center text-on-surface-variant py-12 bg-surface-container-lowest rounded-3xl border border-outline-variant/30">
                Aucun article publié pour le moment. Revenez bientôt !
              </div>
            ) : (
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <StaggerItem key={article.id}>
                    <a
                      data-cursor="project"
                      data-cursor-label="Lire"
                      href={`/blog/${article.slug}`}
                      className="group flex-col h-full bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-outline-variant/20 hover:border-primary/30 flex"
                    >
                      <div className="h-48 overflow-hidden bg-surface-container">
                        {article.coverImage ? (
                          <img
                            src={article.coverImage}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-primary-container/10">
                            <span className="material-symbols-outlined text-[48px] text-primary/50">article</span>
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 text-xs font-label-code text-on-surface-variant mb-4">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                            {new Date(article.publishedAt).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">timer</span>
                            {article.readTime} min
                          </span>
                        </div>
                        <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
                          {article.title}
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-6 flex-1">
                          {article.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {article.tags && JSON.parse(article.tags).map((tag, idx) => (
                            <span key={idx} className="px-2 py-1 bg-surface-container text-on-surface-variant rounded-md text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </a>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            )}
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Blog;
