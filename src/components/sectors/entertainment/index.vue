<template>
  <!-- Sector Cultura, Entretenimiento, Deporte. -->
  <main class="px-2">
    <section class="px-2 lg:px-0 md:px-24 lg:pl-48 py-16 flex justify-between items-center">
      <div class="w-full lg:w-6/12">
        <h1 class="font-oswald font-bold">
          <span class="block text-6xl leading-none">Amenazas públicas en la<br> Industria de Cultura, Entretenimiento, Deporte</span>
        </h1>
        <p class="font-inconsalata text-white py-10 text-2xl">
          Descubre y previene amenazas visualizando el estado general de seguridad de tu empresa.
        </p>
        <a href="/#contact" class="font-oswald tracking-widest uppercase text-xl py-2 px-10 lg:px-8 bg-bta-pink" >
          Contáctanos »
        </a>
      </div>
      <div class="hidden lg:block w-5/12">
        <img
          class="w-full h-full"
          src="../../../assets/img/cultura.png"
          alt="Banner"
        />
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-2 md:px-32 flex flex-col text-left">
        <h2 class="font-oswald uppercase font-bold mb-8 text-4xl">
          Descripción
        </h2>
        <p class="mb-8 pl-5 text-white text-2xl font-inconsalata">
          El segmento cultural, deportivo y entretenimiento se ha visto
          igualmente afectado por diversos ataques, suplantaciones de identidad
          o estafas, ya que gran parte de sus acciones se han trasladado al
          espacio digital, en las que buscan crecer en fama, exposición de marca
          o difundir su quehacer a públicos de diferentes latitudes a través de
          diversas plataformas, sean propias o aplicaciones web. El uso de estas
          plataformas ha creado una superficie de ataque público masivo que pone
          en riesgo a directivos, animadores, agentes importantes, influencer,
          contenido patentado y, por cierto, a los diversos públicos que siguen
          a cada segmento.
        </p>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-2 md:px-32 flex flex-col text-left">
        <h2 class="font-oswald uppercase font-bold mb-8 text-4xl">
          Características:
        </h2>
        <ul class="mb-8 pl-5">
          <li class="text-white text-2xl font-inconsalata list-disc">
            Nuestro soporte está conformado por un equipo de hackers éticos
            profesionales.
          </li>
          <li class="text-white text-2xl font-inconsalata list-disc">
            Anticipación frente a amenazas de diversa índole como phishing, robo
            de credenciales, claves, suplantación de identidad.
          </li>
          <li class="text-white text-2xl font-inconsalata list-disc">
            Motor de búsqueda que rastrea información maliciosa y/o con fines
            delictuales.
          </li>
          <li class="text-white text-2xl font-inconsalata list-disc">
            Integración de diversas metodologías para analizar, gestionar,
            anticipar vulnerabilidades.
          </li>
        </ul>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-2 md:px-32 flex flex-col text-left">
        <h2 class="font-oswald uppercase font-bold mb-8 text-4xl">
          Beneficios
        </h2>
        <ul class="mb-8 pl-5">
          <li class="text-white text-2xl font-inconsalata list-disc">
            Haz tus publicaciones, comunicate con tu público y haz crecer tus
            seguidores de manera segura.
          </li>
          <li class="text-white text-2xl font-inconsalata list-disc">
            Anticipación frente ataques, permitiendo gestionar de formas
            eficiente y efectiva posibles escenarios críticos.
          </li>
        </ul>
      </div>
    </section>
    <ContactForm />
  </main>
</template>

<script>
import ContactForm from "../../shared/ContactForm";
export default {
  name: "index",
  components: {
    ContactForm,
  },
  methods: {
    scrollTop: function() {
      window.scroll(0, 0)
    }
  },
  mounted() {
    this.scrollTop();
  }
};
</script>
