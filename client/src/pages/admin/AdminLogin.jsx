import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../../services/auth.service';

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const data = await loginAdmin(email, password);
      localStorage.setItem('admin_token', data.data.token);
      navigate('/admin');
    } catch (err) {
      setError(err.response?.data?.message || 'Identifiants incorrects');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-container mb-4">
            <span className="material-symbols-outlined text-on-primary text-3xl">admin_panel_settings</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface font-extrabold">
            Espace Admin
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            Bonheur Nzau — Portfolio Manager
          </p>
        </div>

        {/* Card */}
        <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm">
          {error && (
            <div className="mb-4 flex items-center gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
              <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-[18px]">error</span>
              <p className="text-red-700 dark:text-red-400 text-sm font-semibold">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-label-badge text-label-badge text-on-surface font-semibold mb-1.5" htmlFor="admin-email">
                Email
              </label>
              <input
                id="admin-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-surface-container text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm placeholder:text-on-surface-variant/50"
                placeholder="admin@portfolio.com"
              />
            </div>

            <div>
              <label className="block font-label-badge text-label-badge text-on-surface font-semibold mb-1.5" htmlFor="admin-password">
                Mot de passe
              </label>
              <input
                id="admin-password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-surface-container text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm placeholder:text-on-surface-variant/50"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-6 rounded-xl bg-primary-container text-on-primary font-semibold hover:bg-primary transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                  <span>Connexion...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">login</span>
                  <span>Se connecter</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-5 text-center">
            <a href="/" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
              ← Retour au portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
