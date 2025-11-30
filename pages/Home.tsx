import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import TwitterFeed from '../components/TwitterFeed';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-20 px-6 border-b border-primary/20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-tight">
            Niryx Studio
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold tracking-wide mb-8">
            {t('home.tagline')}
          </p>
          <p className="text-muted max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
            {t('home.description')}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/games" className="bg-primary hover:bg-red-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-1">
              {t('nav.games')}
            </Link>
            <Link to="/contact" className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-xl transition-all transform hover:-translate-y-1">
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Game Teaser */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">{t('home.featured')}</h2>
        
        <div className="bg-white/5 border border-primary/20 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-primary/40 transition-colors duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-64 md:h-auto bg-neutral-900 relative flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
               <img 
                 src="https://picsum.photos/800/600" 
                 alt="Nekonnect Banner" 
                 className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
               />
               <span className="absolute bottom-4 left-4 z-20 bg-primary text-white text-xs font-bold px-2 py-1 rounded">EN DESARROLLO</span>
            </div>
            
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-2">{t('nekonnect.title')}</h3>
              <p className="text-primary font-medium mb-6">{t('nekonnect.genre')}</p>
              
              <p className="text-muted leading-relaxed mb-8">
                {t('nekonnect.synopsis_text').substring(0, 150)}...
              </p>

              <div className="flex gap-4">
                 <Link to="/games/nekonnect-vol-1" className="inline-flex items-center gap-2 text-white font-semibold hover:text-primary transition-colors group">
                    {t('common.more_info')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social / Twitter Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t border-primary/10">
        <h2 className="text-2xl font-bold text-center mb-10 text-white flex items-center justify-center gap-2">
           {t('home.latest_news')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
           <div className="prose prose-invert">
              <h3 className="text-primary">Mantente conectado</h3>
              <p>
                Publicamos actualizaciones semanales sobre el desarrollo de nuestros juegos. Síguenos para ver:
              </p>
              <ul className="list-disc pl-5 text-muted space-y-2">
                <li>Arte conceptual inédito</li>
                <li>Clips de desarrollo (WIPs)</li>
                <li>Anuncios de casting de voz</li>
                <li>Sorteos y eventos de la comunidad</li>
              </ul>
              <br/>
              <a href="https://twitter.com/NiryxStudio" target="_blank" rel="noreferrer" className="text-primary hover:underline">Ir al perfil completo &rarr;</a>
           </div>
           
           <TwitterFeed />
        </div>
      </section>
    </div>
  );
};

export default Home;