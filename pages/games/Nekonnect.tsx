import React from 'react';
import { useTranslation } from 'react-i18next';
import { Music, MapPin, Heart, MessageCircle } from 'lucide-react';

const Nekonnect: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in">
      {/* Hero Banner Immersive */}
      <div className="relative w-full h-[80vh] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 to-transparent z-10"></div>
        <img 
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Nekonnect Environment" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute bottom-0 left-0 z-20 p-8 md:p-20 max-w-3xl">
          <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold tracking-wider rounded mb-4 uppercase">
            {t('common.release_tba')}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            {t('nekonnect.title')}
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium mb-8">
            {t('nekonnect.genre')}
          </p>
          <div className="flex gap-4">
             <a href="mailto:contact@niryx.studio" className="bg-white text-black hover:bg-gray-200 font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
               {t('common.waitlist')}
             </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Synopsis & Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <div className="md:col-span-2">
             <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-primary pl-4">
               {t('nekonnect.synopsis_title')}
             </h2>
             <p className="text-lg text-muted leading-relaxed whitespace-pre-line">
               {t('nekonnect.synopsis_text')}
             </p>
          </div>
          
          <div className="md:col-span-1 bg-white/5 p-6 rounded-2xl border border-white/10 h-fit">
            <h3 className="text-xl font-bold text-white mb-6 text-center">{t('nekonnect.features_title')}</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted">
                <Heart size={20} className="text-primary" /> 
                <span>{t('nekonnect.features.live2d')}</span>
              </li>
              <li className="flex items-center gap-3 text-muted">
                <Music size={20} className="text-primary" /> 
                <span>{t('nekonnect.features.ost')}</span>
              </li>
              <li className="flex items-center gap-3 text-muted">
                <MapPin size={20} className="text-primary" /> 
                <span>{t('nekonnect.features.location')}</span>
              </li>
              <li className="flex items-center gap-3 text-muted">
                <MessageCircle size={20} className="text-primary" /> 
                <span>{t('nekonnect.features.choices')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Characters (Placeholder) */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">{t('nekonnect.characters_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[1, 2, 3].map((i) => (
               <div key={i} className="group relative overflow-hidden rounded-xl aspect-[2/3] cursor-pointer">
                 <img 
                   src={`https://picsum.photos/400/600?random=${i}`} 
                   alt="Character" 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                 <div className="absolute bottom-4 left-4">
                   <h3 className="text-2xl font-bold text-white">Character {i}</h3>
                   <p className="text-primary text-sm">Role {i}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-10 text-center">{t('nekonnect.gallery_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="aspect-video rounded-xl overflow-hidden bg-white/5">
                <img src="https://picsum.photos/800/450?random=10" className="w-full h-full object-cover hover:opacity-80 transition-opacity" alt="Screenshot" />
             </div>
             <div className="aspect-video rounded-xl overflow-hidden bg-white/5">
                <img src="https://picsum.photos/800/450?random=11" className="w-full h-full object-cover hover:opacity-80 transition-opacity" alt="Screenshot" />
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Nekonnect;