<template>
  <main class="px-2">
    <section class="px-2 lg:px-0 md:px-24 lg:pl-48 py-16 flex justify-between items-center">
      <div class="w-full lg:w-6/12">
        <h1 class="font-oswald font-bold">
          <span class="block text-6xl leading-none">Monitoreo y Detección<br> en la Deep Web</span>
        </h1>
        <p class="font-inconsalata text-white py-10 text-2xl">
           Motor de búsqueda real de Dark Web, actualmente contamos con 3 millones
           de sitios web indexados exitosamente, que permiten a las empresas
           investigar y acceder directamente a sitios onion, para proteger sus
           activos.
        </p>
        <a href="/#contact" class="font-oswald tracking-widest uppercase text-xl py-2 px-10 lg:px-8 bg-bta-pink" >
          Contáctanos »
        </a>
      </div>
      <div class="hidden lg:block w-5/12">
        <img
          class="w-full h-full"
          src="../../../assets/img/deep-web.png"
          alt="Banner"
        />
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-2 md:px-32 flex flex-col text-left">
        <h2 class="font-oswald uppercase font-bold mb-8 text-4xl">Características:</h2>
        <ul class="mb-8 pl-5">
          <li class="text-white text-2xl font-inconsalata list-disc">
            Los rastreadores navegan por Deep Web 24/7 indexando sitios web con
            extensión onion.
          </li>
          <li class="text-white text-2xl font-inconsalata list-disc">
            Motor de búsqueda que rastrea información maliciosa y/o con fines
            delictuales.
          </li>
          <li class="text-white text-2xl font-inconsalata list-disc">Acceso directo y controlado por el usuario.</li>
        </ul>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-2 md:px-32 flex flex-col text-left">
        <h2 class="font-oswald uppercase font-bold mb-8 text-4xl">Beneficios</h2>
        <ul class="mb-8 pl-5">
          <li class="text-white text-2xl font-inconsalata list-disc">Recopilación eficiente de volumen de información en corto tiempo.</li>
          <li class="text-white text-2xl font-inconsalata list-disc">
            Recolector de información de la deep web que permite desarrollar
            investigación.
          </li>
          <li class="text-white text-2xl font-inconsalata list-disc">
            Acceso a los resultados directamente, sin la necesidad de instalar
            Tor.
          </li>
        </ul>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-2 md:px-32 flex flex-col text-left">
        <h2 class="font-oswald uppercase font-bold mb-8 text-4xl">¿Cómo funciona?</h2>
        <ul class="mb-8 pl-5">
          <li class="text-white text-2xl font-inconsalata list-disc">Registro en plataforma con correo electrónico.</li>
          <li class="text-white text-2xl font-inconsalata list-disc">Puedes realizar búsquedas para la investigación.</li>
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