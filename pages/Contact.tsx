import React from 'react';
import { Mail, MessageSquare, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Contacto</h1>
        <p className="text-primary font-medium text-xl">Nos gustaría saber de ti</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Ponte en contacto</h2>
            <p className="text-muted leading-relaxed">
              ¿Tienes preguntas sobre nuestros juegos? ¿Eres un publisher interesado en Niryx Studio? ¿O simplemente quieres saludar? Nos encantaría escucharte.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mt-1">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Email</h3>
                <a href="mailto:contact@niryx.studio" className="text-primary hover:underline">contact@niryx.studio</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mt-1">
                <MessageSquare size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Redes Sociales</h3>
                <p className="text-muted">Encuéntranos en Twitter, Discord e Instagram como @NiryxStudio</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mt-1">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Tiempo de Respuesta</h3>
                <p className="text-muted">Respondemos a todos los emails en un plazo de 1-2 días hábiles.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h2>
          <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-primary mb-2">Nombre *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-primary mb-2">Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-bold text-primary mb-2">Asunto *</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                required 
                className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="Motivo del contacto"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-primary mb-2">Mensaje *</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                required 
                className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"
            >
              Enviar Mensaje
            </button>
            <p className="text-xs text-muted text-center italic">
              Nota: Asegúrate de configurar tu Formspree ID en el código.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;