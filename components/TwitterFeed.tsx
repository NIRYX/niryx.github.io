import React, { useEffect } from 'react';

const TwitterFeed: React.FC = () => {
  useEffect(() => {
    const scriptId = "twitter-wjs";
    
    // Función para recargar widgets si el script ya existe (Navegación SPA)
    const loadWidgets = () => {
      // @ts-ignore
      if (window.twttr && window.twttr.widgets) {
        // @ts-ignore
        window.twttr.widgets.load();
      }
    };

    // Verificar si el script ya está en el documento
    if (document.getElementById(scriptId)) {
      loadWidgets();
      return;
    }

    // Si no está, lo inyectamos
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    
    // Cuando termine de cargar, aseguramos que escanee el DOM
    script.onload = () => {
      loadWidgets();
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full h-[500px] overflow-hidden rounded-xl border border-white/10 bg-surface custom-twitter-scroll relative group">
      {/* 
         El contenido dentro de este <a> es lo que se ve si:
         1. El script está cargando.
         2. El usuario tiene AdBlock bloqueando Twitter.
      */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-0">
        <p className="text-muted mb-4">¿No carga el feed?</p>
        <a 
          href="https://twitter.com/NiryxStudio" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white/10 hover:bg-primary hover:text-white text-primary border border-primary/50 px-4 py-2 rounded-lg transition-colors font-medium"
        >
          Ver Tweets en X.com
        </a>
      </div>

      <a 
        className="twitter-timeline relative z-10" 
        data-lang="es" 
        data-theme="dark" 
        data-height="500"
        data-dnt="true"
        data-chrome="transparent noheader nofooter" 
        href="https://twitter.com/NiryxStudio?ref_src=twsrc%5Etfw"
      >
      </a>
    </div>
  );
};

export default TwitterFeed;