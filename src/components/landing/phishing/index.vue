<template>
  <main class="px-2">
    <section class="px-2 lg:px-0 md:px-24 lg:pl-48 py-16 flex justify-between items-center">
      <div class="w-full lg:w-6/12">
        <h1 class="font-oswald font-bold">
          <span class="block text-6xl leading-none">Monitoreo y Detección<br> de Phishing</span>
        </h1>
        <p class="font-inconsalata text-white py-10 text-2xl">
          BLOCKPHI gestiona bots y scraping, optimizando los tiempos de detección,
          recolección de la data vinculada a scraping y desarrollo de respuesta
          frente a este tipo de ataques.
        </p>
        <a href="/#contact" class="font-oswald tracking-widest uppercase text-xl py-2 px-10 lg:px-8 bg-bta-pink" >
          Contáctanos »
        </a>
      </div>
      <div class="hidden lg:block w-5/12">
        <img
          class="w-full h-full"
          src="../../../assets/img/phishing.png"
          alt="Banner"
        />
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-2 md:px-32 flex flex-col text-left">
        <h2 class="font-oswald uppercase font-bold mb-8 text-4xl">Características</h2>
        <ul class="mb-8 pl-5">
          <li class="text-white text-2xl font-inconsalata list-disc">
            Se monta en corto tiempo en cualquier tipo de aplicación web
            mediante la tecnología web.
          </li>
          <li class="text-white text-2xl font-inconsalata list-disc">
            Búsqueda continua de amenazas a través de virustotal, asegurando la
            continuidad de negocio, permitiendo detectar y analizar amenazas
            anticipadamente.
          </li>
          <li class="text-white text-2xl font-inconsalata list-disc">
            Gran velocidad y aseguramiento de precisión en la detección
            phishing, usuarios malintencionados a partir de patrones,
            auditorías de seguridad, ip con mala reputación, entre otras.
          </li>
        </ul>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-2 md:px-32 flex flex-col text-left">
        <h2 class="font-oswald uppercase font-bold mb-8 text-4xl">Beneficios</h2>
        <ul class="mb-8 pl-5">
          <li class="text-white text-2xl font-inconsalata list-disc">
            Detección rápida, que permite generar respuestas con eficacia y
            eficiencia.
          </li>
          <li class="text-white text-2xl font-inconsalata list-disc">
            Protege la información del uso malicioso o con fines delictuales
            que pueden afectar tu organización.
          </li>
        </ul>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-2 md:px-32 flex flex-col text-left">
        <h2 class="font-oswald uppercase font-bold mb-8 text-4xl">¿Cómo funciona?</h2>
        <p class="text-white text-2xl font-inconsalata mb-8">
          Código estandarizado y optimizado que se adapta a la arquitectura de tu
          empresa. Es compatible con todas las principales tecnologías web,
          incluidas las configuraciones de múltiples nubes y CDN.
        </p>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-2 md:px-32 flex flex-col text-left">
        <h2 class="font-oswald uppercase font-bold mb-8 text-4xl">¿A quién va dirigido?</h2>
        <p class="text-white text-2xl font-inconsalata mb-8">
          Empresas que cuenten con infraestructura expuesta o que tengan procesos
          digitalizados con información sensible.
        </p>
      </div>
    </section>
    <ContactForm />
  </main>
</template>

<script>
import ContactForm from "../../shared/ContactForm";
export default {
  name: 'index',
  components: {
    ContactForm,
  },
  methods: {
    scrollTop: function() {
      window.scroll(0, 0)
    }
  },
  mounted() {
    this.scrollTop()
  }
}
</script>