<template>
  <!-- Sector Ciencia, Investigación y TI. -->
  <main class="px-2">
    <section class="px-2 lg:px-0 md:px-24 lg:pl-48 py-16 flex justify-between items-center">
      <div class="w-full lg:w-6/12">
        <h1 class="font-oswald font-bold">
          <span class="block text-6xl leading-none">Amenazas públicas en la<br> Industria de Ciencia, Investigación y TI</span>
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
          src="../../../assets/img/tecnologia.png"
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
          Las instituciones, organizaciones que se dedican a la ciencia y la
          investigación, junto a empresas dedicadas a la tecnología, que tienen
          o han comenzado a digitalizar sus negocios, se ven expuestas a una
          mayor superficie de ataque público. Algunos factores: su huella
          digital es más visible y carece de control, la mayoría de las defensas
          son manuales, no tienen equipos permanentes-especializados de
          respuesta de incidentes que trabajen de la mano con los
          desarrolladores generando importantes brechas que son aprovechadas por
          agentes maliciosos para capturar información relevante, credenciales
          de acceso, realizar phishing, entre otras técnicas con el fin de
          solicitar dinero, afectar la imagen o simplemente dañar a la
          organización como a sus usuarios/as. En consideración al escenario
          actual, donde gran parte de las actividades se realizan vía digital,
          es necesario proteger la inversión, el conocimiento y el desarrollo de
          cada área dentro del sector.
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
            Combina múltiples y potentes herramientas de detección.
          </li>
          <li class="text-white text-2xl font-inconsalata list-disc">
            Reporte continuo basado en tecnologías, ataques y criticidad.
          </li>
          <li class="text-white text-2xl font-inconsalata list-disc">
            Protección continua frente amenazas de amplio impacto.
          </li>
          <li class="text-white text-2xl font-inconsalata list-disc">
            Nuestro soporte está conformado por un equipo de hackers éticos
            profesionales.
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
            Anticipación frente ataques, permitiendo gestionar de formas
            eficiente y efectiva posibles escenarios críticos.
          </li>
          <li class="text-white text-2xl font-inconsalata list-disc">
            Trabaja e investiga de manera segura y con confianza en tus sistemas
            digitales.
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
