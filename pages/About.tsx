import React from 'react';
import { Heart, Zap, Shield, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Sobre Niryx Studio</h1>
        <p className="text-primary font-medium text-xl">Creando conexiones emocionales</p>
      </div>

      <div className="space-y-12">
        {/* Mission */}
        <section className="bg-white/5 p-8 rounded-2xl border border-white/5">
          <h2 className="text-2xl font-bold text-white mb-4">¿Quiénes Somos?</h2>
          <p className="text-muted leading-relaxed text-lg">
            Niryx Studio es un equipo independiente de desarrollo enfocado en crear experiencias cálidas, narrativas profundas y mundos adorables que cautiven a los jugadores.
            <br/><br/>
            Creemos en el poder del <strong>storytelling inmersivo</strong> y el diseño emocional. Cada proyecto es una pasión: combinamos arte, narrativa e innovación tecnológica para llevar historias memorables a la vida.
          </p>
        </section>

        {/* Values Grid */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface border border-white/10 p-6 rounded-xl hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Creatividad</h3>
              <p className="text-muted">Exploramos nuevas formas de contar historias, alejándonos de los clichés para ofrecer algo fresco.</p>
            </div>

            <div className="bg-surface border border-white/10 p-6 rounded-xl hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Pasión</h3>
              <p className="text-muted">Hacemos esto porque amamos los videojuegos. Cada píxel y cada línea de diálogo tiene alma.</p>
            </div>

            <div className="bg-surface border border-white/10 p-6 rounded-xl hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Calidad</h3>
              <p className="text-muted">Nos comprometemos con la excelencia técnica y artística. No lanzamos hasta que está listo.</p>
            </div>

            <div className="bg-surface border border-white/10 p-6 rounded-xl hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Independencia</h3>
              <p className="text-muted">Mantenemos nuestra visión creativa pura, sin presiones externas que comprometan la historia.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;