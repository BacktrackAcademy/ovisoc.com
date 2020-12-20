<template>
  <!-- Sector Público/Gobierno -->
  <main class="px-2">
    <section class="px-2 lg:px-0 md:px-24 lg:pl-48 py-16 flex justify-between items-center">
      <div class="w-full lg:w-6/12">
        <h1 class="font-oswald font-bold">
          <span class="block text-6xl leading-none">Amenazas públicas en la<br> Industria Pública y Gobierno</span>
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
          src="../../../assets/img/gobierno.png"
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
          La lucha contra los ciberataques ha dado grandes pasos, con
          colaboraciones más amplias entre el sector público y privado, y el
          incremento de los recursos que las empresas han destinado a la
          ciberseguridad. Sin embargo, al profundizar en la investigación y
          protección contra las amenazas en la actualidad, es posible afirmar
          que cerca el 70% de las compañías no están preparadas aún para un
          ciberataque sofisticado. El sector público tiene una responsabilidad
          no tan solo respecto al funcionamiento de su gran maquinaria, sino
          también, como referencia de confianza para una sociedad tecnologizada,
          de los mercados e inversiones en la materia. El atacante vulnera no
          solo un sistema, vulnera la confianza y por tanto la democracia.
          ATTACK permite mantener niveles de seguridad continua, generar
          tecnologías, formación continua y entrenar a los equipos, todo bajo
          una misma meta: el desarrollo de un ciberespacio libre, seguro,
          abierto y resiliente.
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
            Reporte continuo basado en tecnologías, ataques y criticidad.
          </li>
          <li class="text-white text-2xl font-inconsalata list-disc">
            Integración de diversas metodologías para analizar, gestionar,
            anticipar vulnerabilidades
          </li>
          <li class="text-white text-2xl font-inconsalata list-disc">
            Reduce el rango de amenazas generadas por brechas del sistema
            expuesto.
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
            Obtención y análisis de la Información para toma de decisiones
            posteriores.
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
