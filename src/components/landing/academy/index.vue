<template>
  <main class="px-2">

    <section class="px-2 lg:px-0 md:px-24 lg:pl-48 py-16 flex justify-between items-center">
      <div class="w-full lg:w-6/12">
        <h1 class="font-oswald font-bold">
          <span class="block text-6xl leading-none">Educación<br> Continua</span>
        </h1>
        <p class="font-inconsalata text-white py-10 text-2xl">
           Plataforma E-learning de hacking ético preparamos a las nuevas generaciones de profesionales para el mundo laboral.
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
        <h2 class="font-oswald uppercase font-bold mb-8 text-4xl">Características:</h2>
        <ul class="mb-8 pl-5">
          <li class="text-white text-2xl font-inconsalata list-disc">Programa de Aprendizaje Personalizado.</li>
          <li class="text-white text-2xl font-inconsalata list-disc">Acceso restringido y único para tu empresa.</li>
          <li class="text-white text-2xl font-inconsalata list-disc">Estudia cuando quieras y obtén tu reconocimiento.</li>
        </ul>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-2 md:px-32 flex flex-col text-left">
        <h2 class="font-oswald uppercase font-bold mb-8 text-4xl">Beneficios</h2>
        <ul class="mb-8 pl-5">
          <li class="text-white text-2xl font-inconsalata list-disc">Medición continua de trabajadores.</li>
          <li class="text-white text-2xl font-inconsalata list-disc">
            Reportes personalizados con categorización y ranking de
            estudiantes.
          </li>
          <li class="text-white text-2xl font-inconsalata list-disc">
            Acceso a nuestra base de datos de profesionales.
          </li>
        </ul>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-2 md:px-32 flex flex-col text-left">
        <h2 class="font-oswald uppercase font-bold mb-8 text-4xl">¿Cómo funciona?</h2>
        <ul class="mb-8 pl-5">
          <li class="text-white text-2xl font-inconsalata list-disc">Ingresamos tu correo electrónico.</li>
          <li class="text-white text-2xl font-inconsalata list-disc">Puedes seleccionar un curso o especialidad por categorías.</li>
          <li class="text-white text-2xl font-inconsalata list-disc">
            Se registrará el tiempo de estudio hasta completar el curso y poder
            rendir tu examen.
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