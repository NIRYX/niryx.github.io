import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('es') ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium text-muted hover:text-white transition-colors"
      aria-label="Change Language"
    >
      <Globe size={14} />
      <span>{i18n.language.startsWith('es') ? 'ES' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitcher;