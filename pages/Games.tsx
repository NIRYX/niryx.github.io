import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Games: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t('nav.games')}</h1>
        <p className="text-primary font-medium text-xl">Historias que permanecen</p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {/* Game Card 1 */}
        <article className="bg-white/5 border border-primary/20 rounded-2xl p-6 md:p-8 hover:border-primary/40 hover:shadow-[0_12px_40px_rgba(230,57,70,0.1)] transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Poster / Visual - Clickable */}
            <Link to="/games/nekonnect-vol-1" className="md:col-span-1 aspect-[3/4] rounded-lg overflow-hidden relative group cursor-pointer">
              <img 
                src="https://picsum.photos/600/800" 
                alt="Nekonnect Cover" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </Link>

            {/* Content */}
            <div className="md:col-span-2 flex flex-col">
              <div className="mb-6">
                <Link to="/games/nekonnect-vol-1" className="hover:text-primary transition-colors">
                    <h2 className="text-3xl font-bold text-white mb-2">{t('nekonnect.title')}</h2>
                </Link>
                <div className="flex items-center gap-3 text-sm">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold">{t('common.release_tba')}</span>
                  <span className="text-muted">Visual Novel</span>
                </div>
              </div>

              <div className="space-y-6 flex-grow">
                <div>
                  <h3 className="text-primary text-sm font-bold uppercase tracking-wider mb-2">{t('nekonnect.synopsis_title')}</h3>
                  <p className="text-muted leading-relaxed line-clamp-3">
                    {t('nekonnect.synopsis_text')}
                  </p>
                </div>

                <div>
                  <h3 className="text-primary text-sm font-bold uppercase tracking-wider mb-2">{t('nekonnect.features_title')}</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted">
                    <li className="flex items-center gap-2"><span className="text-primary">✓</span> {t('nekonnect.features.live2d')}</li>
                    <li className="flex items-center gap-2"><span className="text-primary">✓</span> {t('nekonnect.features.location')}</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link 
                  to="/games/nekonnect-vol-1"
                  className="bg-primary hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
                >
                  <ArrowRight size={18} />
                  {t('common.more_info')}
                </Link>
                <Link 
                  to="/contact"
                  className="bg-transparent border border-primary/50 text-primary hover:bg-primary hover:text-white font-bold py-2 px-6 rounded-lg transition-all"
                >
                  {t('common.contact_pub')}
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Games;