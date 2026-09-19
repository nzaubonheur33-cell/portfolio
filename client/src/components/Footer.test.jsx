import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Footer from './Footer';

// Mock react-i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({ 
    t: (key) => key === 'footer.rights' ? '© 2026 Bonheur Nzau' : key,
    i18n: { language: 'fr', changeLanguage: vi.fn() }
  }),
}));

describe('Footer Component', () => {
  it('renders the copyright text', () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(year.toString()))).toBeInTheDocument();
  });
});
