import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8 text-white">Política de Privacidad</h1>
      <div className="prose prose-invert prose-p:text-muted prose-headings:text-primary max-w-none">
        <p className="text-sm text-muted mb-8">Última actualización: 19 de noviembre de 2025</p>

        <h3>1. Introducción</h3>
        <p>En Niryx Studio, respetamos tu privacidad y nos comprometemos a ser transparentes sobre cómo recopilamos y utilizamos datos.</p>

        <h3>2. Información que Recopilamos</h3>
        
        <h4>2.1 Cookies Funcionales</h4>
        <p>Utilizamos cookies funcionales exclusivamente para mejorar el rendimiento de nuestro sitio web. Estas NO contienen datos personales sensibles.</p>

        <h4>2.2 Datos de Contacto</h4>
        <p>Cuando usas nuestro formulario de contacto, recopilamos Nombre, email y mensaje. Estos datos se usan exclusivamente para responderte.</p>

        <h4>2.3 Datos en Nuestros Juegos</h4>
        <p>Nuestros juegos pueden opcionalmente leer datos públicos de plataformas (Steam/Epic) para mostrar el nombre de usuario o sincronizar logros.</p>

        <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg my-6">
            <h4 className="text-primary font-bold mt-0">2.4 Datos Locales Sensibles</h4>
            <p>Algunos juegos pueden recopilar datos como nombres de usuario del PC para inmersión (ej: juegos de terror). <strong>Estos datos JAMÁS se envían a Niryx Studio ni a terceros. Permanecen EXCLUSIVAMENTE en tu dispositivo local.</strong></p>
        </div>

        <h3>3. Compartición de Datos</h3>
        <p>No compartimos tus datos personales con terceros. Los datos locales sensibles nunca abandonan tu dispositivo.</p>

        <h3>4. Contacto</h3>
        <p>Para preguntas sobre privacidad: <a href="mailto:contact@niryx.studio" className="text-primary">contact@niryx.studio</a></p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;