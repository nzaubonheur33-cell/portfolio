import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Skills() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const skills = [
    { name: 'HTML5', category: 'frontend', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
    { name: 'CSS3', category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'JavaScript', category: 'frontend', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'TypeScript', category: 'frontend', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
    { name: 'React', category: 'frontend', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Tailwind CSS', category: 'frontend', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'Node.js', category: 'backend', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Express.js', category: 'backend', icon: 'https://cdn.simpleicons.org/express/000000', customStyle: { filter: 'var(--express-filter, none)' } },
    { name: 'Python', category: 'backend', icon: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'Django', category: 'backend', icon: 'https://cdn.simpleicons.org/django/092E20' },
    { name: 'FastAPI', category: 'backend', icon: 'https://cdn.simpleicons.org/fastapi/009688' },
    { name: 'MySQL', category: 'database', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
    { name: 'PostgreSQL', category: 'database', icon: 'https://cdn.simpleicons.org/postgresql/336791' },
    { name: 'Linux', category: 'systems', icon: 'https://cdn.simpleicons.org/linux/FCC624' },
    { name: 'Docker', category: 'systems', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'Git', category: 'systems', icon: 'https://cdn.simpleicons.org/git/F05032' },
    { name: 'GitHub', category: 'systems', icon: 'https://cdn.simpleicons.org/github/181717', customStyle: { filter: 'var(--github-filter, none)' } },
    { name: 'Flutter', category: 'frontend', icon: 'https://cdn.simpleicons.org/flutter/02569B' },
    { name: 'Figma', category: 'ai_tools', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
    { name: 'Illustrator', category: 'ai_tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg' },
    { name: 'VS Code', category: 'ai_tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
    { name: 'Postman', category: 'ai_tools', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
    { name: 'Vercel', category: 'systems', icon: 'https://cdn.simpleicons.org/vercel/000000', customStyle: { filter: 'var(--vercel-filter, none)' } },
    { name: 'Render', category: 'systems', icon: 'https://cdn.simpleicons.org/render/46E3B7' },
  ];

  return (
    <section className="py-16" id="skills">
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="font-label-code text-label-code text-primary uppercase tracking-wider">
            {t('skills.label')}
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
            {t('skills.title')}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {t('skills.subtitle')}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {['all', 'frontend', 'backend', 'database', 'systems', 'ai_tools'].map((cat) => (
            <button
              key={cat}
              className={`px-4 py-1.5 rounded-full font-label-badge text-label-badge transition-all ${
                activeCategory === cat
                  ? 'bg-primary-container text-on-primary shadow-sm'
                  : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container'
              }`}
              onClick={() => setActiveCategory(cat)}
              type="button"
            >
              {t(`skills.filter.${cat}`)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 pt-4">
          {skills
            .filter((skill) => activeCategory === 'all' || skill.category === activeCategory)
            .map((skill) => (
              <div
                key={skill.name}
                className="skill-card bg-surface-container-lowest p-4 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" style={skill.customStyle} />
                </div>
                <span className="font-headline-sm text-[12px] font-semibold text-on-surface">
                  {skill.name}
                </span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
