import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8 text-white">Términos de Servicio</h1>
      <div className="prose prose-invert prose-p:text-muted prose-headings:text-primary max-w-none">
        <p className="text-sm text-muted mb-8">Última actualización: 19 de noviembre de 2025</p>

        <h3>1. Aceptación de Términos</h3>
        <p>Al acceder y usar nuestros juegos y servicios, aceptas estos Términos de Servicio. Si no aceptas, no uses nuestros productos.</p>

        <h3>2. Licencia de Uso</h3>
        <p>Te otorgamos una licencia personal, no transferible, revocable para usar nuestros juegos únicamente para uso personal no comercial.</p>

        <h3>3. Derechos del Usuario — Lo Que Puedes Hacer</h3>
        <p><strong>Tienes derecho irrevocable a:</strong></p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Acceso Perpetuo:</strong> Una vez adquirido, el juego es tuyo. Ni Niryx Studio ni plataformas de terceros pueden revocarte el acceso (a menos que violes estos términos de forma grave).</li>
          <li><strong>Descompilación y Análisis Técnico:</strong> Puedes descompilar, inspeccionar assets y código con fines educativos y de seguridad.</li>
          <li><strong>Contenido Público (YouTube, Twitch, etc.):</strong> Puedes crear videos, streamings y contenido público del juego sin restricción (monetizado o no).</li>
          <li><strong>Uso Personal Total:</strong> El juego es tuyo; úsalo como quieras en tu dispositivo.</li>
        </ul>

        <h3>4. Restricciones Estrictas — Lo Que NO Puedes Hacer</h3>
        
        <div className="bg-red-900/20 border border-red-500/30 p-4 rounded-lg my-6">
            <h4 className="text-red-400 font-bold mt-0">4.1 Prohibición Total de Sexualización</h4>
            <p className="text-red-100"><strong>Está COMPLETAMENTE PROHIBIDO:</strong></p>
            <ul className="list-disc pl-5 text-red-100/80">
            <li>Crear, distribuir o compartir contenido sexualizado de nuestros personajes en ningún contexto.</li>
            <li>Modificar assets para sexualizarlos.</li>
            <li>Compartir o promocionar contenido sexualizado en redes sociales, foros, Discord, etc.</li>
            <li>Cualquier forma de sexualización, fetichismo o contenido adulto que involucre nuestros personajes.</li>
            </ul>
            <p className="text-red-400 font-bold text-sm mt-4">Consecuencia: Enviaremos DMCA a plataformas (YouTube, Twitter, Patreon, etc.) y solicitudes de ban permanente de tu cuenta.</p>
        </div>

        <h4>4.2 Prohibición de Apropiación</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>No puedes reclamar que los personajes o assets son exclusivamente tuyos.</li>
          <li>No puedes comercializar assets de Niryx Studio (vender arte, merchandising no autorizado, etc.).</li>
          <li>No puedes usar nuestros personajes en trabajos comerciales sin permiso explícito.</li>
        </ul>

        <h4>4.3 Prohibición de Redistribución</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>No puedes redistribuir el juego de forma gratuita.</li>
          <li>No puedes vender el juego ni ofrecer acceso por dinero.</li>
          <li>No puedes alojar el juego en servidores de descarga no autorizados.</li>
        </ul>

        <h3>5. Cumplimiento y Enforcement</h3>
        <p>Monitorearemos activamente violaciones de estos términos, especialmente sexualización (DMCAs automáticos) y redistribución.</p>

        <h3>6. Limitación de Responsabilidad</h3>
        <p>El juego se proporciona "tal cual". No somos responsables por daños, pérdida de progreso (salvo fallo nuestro documentado), o mal funcionamiento técnico de terceros.</p>
      </div>
    </div>
  );
};

export default TermsOfService;