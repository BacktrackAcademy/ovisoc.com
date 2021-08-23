<template>
  <footer class="flex justify-center items-center bg-total-back px-10 py-24">
    <div
      class="flex flex-row justify-evenly w-full flex-wrap gap-10 sm:gap-4 max-w-screen-2xl"
    >
      <div class="flex flex-col gap-2 lg:gap-0 text-center sm:text-left">
        <p
          class="text-white text-2xl lg:text-5xl font-bold mb-4 lg:mb-8 font-roboto"
        >
          Nosotros
        </p>
        <div class="flex flex-col gap-2 font-ibm">
          <a class="text-white" href="#">Blog</a>
          <a class="text-white" href="#">Sobre Nosotros</a>
          <a class="text-white" href="#">Caracteristicas</a>
          <a class="text-white" href="#">Solicitar demo</a>
        </div>
      </div>
      <div class="flex flex-col gap-2 lg:gap-0 text-center sm:text-left">
        <p
          class="text-white text-2xl lg:text-5xl font-bold mb-4 lg:mb-8 font-roboto"
        >
          Industria
        </p>
        <div class="flex flex-col gap-2 font-ibm">
          <a class="text-white" href="#">Financiero</a>
          <a class="text-white" href="#">Público/Gobierno</a>
          <a class="text-white" href="#">Educacional</a>
          <a class="text-white" href="#">Investigacion</a>
          <a class="text-white" href="#">Cultura</a>
          <a class="text-white" href="#">TI</a>
        </div>
      </div>
      <div
        class="flex flex-col gap-2 text-center sm:text-left max-w-xs font-ibm"
      >
        <p
          class="text-white text-2xl lg:text-5xl font-bold mb-4 lg:mb-8 font-roboto"
        >
          Contactos
        </p>
        <p class="text-white flex gap-2">
          <feather class="mt-1" stroke="white" size="18" type="map-pin" />
          Av.Lib.O'Higgins #1302 70, Santiago <br />Chile.
        </p>
        <p class="text-white flex gap-2">
          <feather class="mt-1" stroke="white" size="18" type="smartphone" />
          +56 9 4291 0770
        </p>
        <p class="text-white flex gap-2">
          <feather class="mt-1" stroke="white" size="18" type="mail" />
          contacto@backtrackacademy.com
        </p>
        <br />
        <div class="flex gap-4 justify-center sm:justify-start">
          <a href="https://www.facebook.com/Ovisoc-104010905288730">
            <feather stroke="white" size="48" type="facebook" />
          </a>
          <a href="https://www.instagram.com/ovisoc/">
            <feather stroke="white" size="48" type="instagram" />
          </a>
          <a href="https://www.linkedin.com/company/ovisoc/">
            <feather stroke="white" size="48" type="linkedin" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
