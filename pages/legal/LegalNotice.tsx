import React from 'react';

const LegalNotice: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8 text-white">Aviso Legal</h1>
      <div className="prose prose-invert prose-p:text-muted prose-headings:text-primary max-w-none">
        <p className="text-sm text-muted mb-8">Última actualización: 19 de noviembre de 2025</p>

        <h3>1. Información General</h3>
        <p>Niryx Studio es un estudio independiente de desarrollo de videojuegos. Este sitio web es propiedad y está operado por Niryx Studio.</p>

        <h3>2. Identificación del Propietario</h3>
        <p><strong>Nombre:</strong> Niryx Studio<br/>
        <strong>Email:</strong> <a href="mailto:contact@niryx.studio" className="text-primary">contact@niryx.studio</a></p>

        <h3>3. Derechos de Autor</h3>
        <p>Todos los contenidos de este sitio web, incluyendo textos, imágenes, gráficos, logos y software, están protegidos por derechos de autor y son propiedad de Niryx Studio o sus proveedores de contenido.</p>

        <h3>4. Uso del Contenido</h3>
        <p>Se te permite usar el contenido de este sitio únicamente para fines personales no comerciales. La reproducción, distribución o transmisión del contenido sin permiso está prohibida.</p>

        <h3>5. Exención de Responsabilidad</h3>
        <p>Este sitio se proporciona "tal cual". Niryx Studio no garantiza la exactitud completa de todo el contenido y no es responsable por daños resultantes del uso del sitio.</p>
      </div>
    </div>
  );
};

export default LegalNotice;