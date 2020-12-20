<template>
  <!-- Sector Financiero -->
  <main class="px-2">
    <section class="px-2 lg:px-0 md:px-24 lg:pl-48 py-16 flex justify-between items-center">
      <div class="w-full lg:w-6/12">
        <h1 class="font-oswald font-bold">
          <span class="block text-6xl leading-none">Amenazas públicas en la<br> Industria Financiera</span>
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
          src="../../../assets/img/financiera.png"
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
          Desde el 2017 la lucha contra los ciberataques ha dado grandes pasos,
          con una colaboración más amplia entre el sector público y privado, y
          el incremento de los recursos que las empresas han destinado a la
          ciberseguridad. Sin embargo, ante la mayor investigación y protección
          contra las amenazas, el 70% de las compañías no están preparadas aún
          para un ciberataque sofisticado, los ciberatacantes continuaron
          cambiando su modo de actuar y ampliando sus objetivos, en numerosas
          ocasiones con unos presupuestos más elevados que los encargados de
          defender. Día a día ocurren más de 5000 ataques diarios tipo
          ransomware. El avance de las tecnologías también permite que los
          atacantes se van sofisticando y cada vez más buscan objetivos precisos
          que ofrezcan una recompensa económica elevada, en lugar de ataques a
          gran escala.
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
            Detección completa y precisa de vulnerabilidades.
          </li>
          <li class="text-white text-2xl font-inconsalata list-disc">
            Alerta y análisis continuo de vulnerabilidades.
          </li>
          <li class="text-white text-2xl font-inconsalata list-disc">
            Nuestro soporte está conformado por un equipo de hackers éticos profesionales.
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
            Anticipación frente ataques, permitiendo gestionar de formas eficiente y efectiva posibles escenarios críticos.
          </li>
          <li class="text-white text-2xl font-inconsalata list-disc">
            Reportes personalizados con categorización y ranking de vulnerabilidades recientes detectadas.
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
