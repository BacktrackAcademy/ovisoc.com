<template>
  <!-- Sector Eduacional -->
  <main class="">
    <section class="px-2 lg:px-0 md:px-24 lg:pl-48 py-16 flex justify-between items-center">
      <div class="w-full lg:w-6/12">
        <h1 class="font-oswald font-bold">
          <span class="block text-6xl leading-none">Amenazas públicas en la<br> Industria Educacional</span>
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
          src="../../../assets/img/educacion.png"
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
          La información es el activo más visible y valioso que las
          instituciones de educación tienen, ya sea por sus investigaciones,
          nóminas de docentes, administrativos y estudiantes, así como datos
          sensibles de tipo bancarios, por lo que son foco de ciberdelincuentes.
          Hoy este tipo de ataques se ha masificado, ya que este tipo de
          organización ha sido foco de delito por investigaciones relacionadas
          al covid-19, en el que se realizan ataques, capturan información
          relevante y luego solicitan dinero en forma extorsiva para restituir
          los activos. La importancia de anticipar identificando las brechas y
          de analizar las vulnerabilidades proyectando su impacto permite
          generar una mejor defensa frente ataques. El servicio de ATTACK ofrece
          protección continua, estudio de vulnerabilidades y sus impactos,
          acompañamiento y concientización a este sector que cada vez comienza
          su transición a modalidades online.
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
            Protección frente el ataque de malwares de amplio espectro.
          </li>
          <li class="text-white text-2xl font-inconsalata list-disc">
            Integración de diversas metodologías para analizar, gestionar,
            anticipar vulnerabilidades
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
