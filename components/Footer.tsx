import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Disc, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-black/90 border-t border-primary/20 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Niryx Studio</h4>
          <p className="text-muted text-sm leading-relaxed">
            Creando experiencias cálidas y memorables en mundos adorables. Pasión por el detalle y la narrativa.
          </p>
        </div>

        {/* Navigation */}
        <div className="col-span-1">
          <h4 className="text-primary font-bold mb-4 uppercase tracking-wider text-sm">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-muted hover:text-primary transition-colors hover:pl-1">Inicio</Link></li>
            <li><Link to="/games" className="text-muted hover:text-primary transition-colors hover:pl-1">Juegos</Link></li>
            <li><Link to="/about" className="text-muted hover:text-primary transition-colors hover:pl-1">Sobre Nosotros</Link></li>
            <li><Link to="/contact" className="text-muted hover:text-primary transition-colors hover:pl-1">Contacto</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="col-span-1">
          <h4 className="text-primary font-bold mb-4 uppercase tracking-wider text-sm">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="text-muted hover:text-primary transition-colors hover:pl-1">Política de Privacidad</Link></li>
            <li><Link to="/terms" className="text-muted hover:text-primary transition-colors hover:pl-1">Términos de Servicio</Link></li>
            <li><Link to="/legal" className="text-muted hover:text-primary transition-colors hover:pl-1">Aviso Legal</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div className="col-span-1">
          <h4 className="text-primary font-bold mb-4 uppercase tracking-wider text-sm">Síguenos</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
              <Disc size={18} /> {/* Discord Icon approximation if generic disc is used, Lucide has specific icons usually but Disc fits generic */}
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 text-center">
        <p className="text-muted text-xs">
          &copy; {currentYear} Niryx Studio. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;