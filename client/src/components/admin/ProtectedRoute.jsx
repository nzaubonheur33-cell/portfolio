import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getMe } from '../../services/auth.service';

function ProtectedRoute({ children }) {
  const [status, setStatus] = useState('loading'); // 'loading' | 'auth' | 'unauth'

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      setStatus('unauth');
      return;
    }
    getMe()
      .then(() => setStatus('auth'))
      .catch(() => {
        localStorage.removeItem('admin_token');
        setStatus('unauth');
      });
  }, []);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="flex flex-col items-center gap-3">
          <span className="material-symbols-outlined text-primary text-5xl animate-spin">progress_activity</span>
          <p className="text-on-surface-variant font-body-md">Vérification...</p>
        </div>
      </div>
    );
  }

  if (status === 'unauth') {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
