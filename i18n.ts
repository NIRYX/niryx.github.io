import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Definición de recursos de traducción
// En una app más grande, esto se separaría en archivos JSON
const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        games: "Games",
        about: "About",
        contact: "Contact"
      },
      home: {
        tagline: "Passion for adorable worlds",
        description: "We are an indie studio creating warm experiences and immersive visual novels. Where every story matters and every character has a soul.",
        featured: "Featured Project",
        latest_news: "Latest from X (Twitter)"
      },
      nekonnect: {
        title: "Nekonnect Vol.1",
        genre: "Visual Novel • Romance • Slice of Life",
        synopsis_title: "Synopsis",
        synopsis_text: "Arriving at Tashirojima, the 'Cat Island', looking for an escape from corporate burnout, you find more than just stray cats. You discover a hidden side of the world where local legends come to life.",
        features_title: "Key Features",
        features: {
          live2d: "Immersive Live2D Animation",
          ost: "Hand-crafted Original Soundtrack",
          location: "Based on Real Locations",
          choices: "Choices that Matter"
        },
        characters_title: "Meet the Cast",
        gallery_title: "Gallery"
      },
      common: {
        release_tba: "Release: TBA",
        more_info: "More Info",
        waitlist: "Join Waitlist",
        contact_pub: "Publisher Contact"
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        games: "Juegos",
        about: "Sobre Nosotros",
        contact: "Contacto"
      },
      home: {
        tagline: "Pasión por los mundos adorables",
        description: "Somos un estudio independiente creando experiencias cálidas y visual novels inmersivas. Donde cada historia importa y cada personaje tiene alma.",
        featured: "Proyecto Destacado",
        latest_news: "Últimas noticias en X"
      },
      nekonnect: {
        title: "Nekonnect Vol.1",
        genre: "Visual Novel • Romance • Slice of Life",
        synopsis_title: "Sinopsis",
        synopsis_text: "Al llegar a Tashirojima, la 'Isla de los Gatos', buscando escapar del agotamiento corporativo, encuentras más que simples gatos callejeros. Descubres un lado oculto del mundo donde las leyendas locales cobran vida.",
        features_title: "Características",
        features: {
          live2d: "Animación Live2D Inmersiva",
          ost: "Banda Sonora Original Artesanal",
          location: "Basado en Localizaciones Reales",
          choices: "Decisiones que Importan"
        },
        characters_title: "Personajes",
        gallery_title: "Galería"
      },
      common: {
        release_tba: "Lanzamiento: Por anunciar",
        more_info: "Más Información",
        waitlist: "Lista de Espera",
        contact_pub: "Contacto Publisher"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es', // Idioma por defecto si falla la detección
    interpolation: {
      escapeValue: false // React ya protege contra XSS
    }
  });

export default i18n;