<template>
  <footer class="flex flex-col md:flex-row justify-around md:mx-10 mt-12 lg:px-28">
    <div class="mx-4">
      <router-link to="/" class="block w-24 md:w-32 mb-8">
        <img class="w-full h-full" src="../../assets/img/logo.svg" alt="Icon kildstress">
      </router-link>
      <ul class="pb-8">
        <li>
          <router-link to="/" class="font-inconsalata border-b border-transparent hover:border-bta-blue hover:text-bta-blue">
            Blog
          </router-link>
        </li>
        <li>
          <a href="/#about-us" class="font-inconsalata border-b border-transparent hover:border-bta-blue hover:text-bta-blue">
            Sobre Nosotros
          </a>
        </li>
        <li>
          <a href="/#features" class="font-inconsalata border-b border-transparent hover:border-bta-blue hover:text-bta-blue">
            Características
          </a>
        </li>
        <li>
          <a href="/#contact" class="font-inconsalata border-b border-transparent hover:border-bta-blue hover:text-bta-blue">
            Solicitar una demo
          </a>
        </li>
      </ul>
    </div>
    <div class="mx-4">
      <h3 class="text-xl mb-4">Servicios</h3>
      <ul class="pb-8">
        <li>
          <router-link to="/pentesting" class="font-inconsalata border-b border-transparent hover:border-bta-blue hover:text-bta-blue">
            Pruebas de penetración
          </router-link>
        </li>
        <li>
          <router-link to="/vulnerability" class="font-inconsalata border-b border-transparent hover:border-bta-blue hover:text-bta-blue">
            Alerta de vulnerabilidades
          </router-link>
        </li>
        <li>
          <router-link to="/phishing" class="font-inconsalata border-b border-transparent hover:border-bta-blue hover:text-bta-blue">
            Detección de phishing
          </router-link>
        </li>
        <li>
          <router-link to="/deepweb" class="font-inconsalata border-b border-transparent hover:border-bta-blue hover:text-bta-blue">
            Monitoreo deep web
          </router-link>
        </li>
        <li>
          <router-link to="/kildstress" class="font-inconsalata border-b border-transparent hover:border-bta-blue hover:text-bta-blue">
            Test de stress
          </router-link>
        </li>
        <li>
          <router-link to="/academy" class="font-inconsalata border-b border-transparent hover:border-bta-blue hover:text-bta-blue">
            Educación continua
          </router-link>
        </li>
      </ul>
    </div>
    <div class="mx-4">
      <h3 class="text-xl mb-4">Industria</h3>
      <ul class="pb-8">
        <li>
          <router-link to="/financial" class="font-inconsalata border-b border-transparent hover:border-bta-blue hover:text-bta-blue">
            Financiero
          </router-link>
        </li>
        <li>
          <router-link to="/public-government" class="font-inconsalata border-b border-transparent hover:border-bta-blue hover:text-bta-blue">
            Público/Gobierno
          </router-link>
        </li>
        <li>
          <router-link to="/educational" class="font-inconsalata border-b border-transparent hover:border-bta-blue hover:text-bta-blue">
            Eduacional
          </router-link>
        </li>
        <li>
          <router-link to="/ti" class="font-inconsalata border-b border-transparent hover:border-bta-blue hover:text-bta-blue">
            Ciencia, Investigación y TI
          </router-link>
        </li>
        <li>
          <router-link to="/entertaiment" class="font-inconsalata border-b border-transparent hover:border-bta-blue hover:text-bta-blue">
            Cultura, Entretenimiento, Deporte
          </router-link>
        </li>
      </ul>
    </div>
    <div class="mx-4">
      <h3 class="text-xl mb-4">Contáctanos</h3>
      <label class="flex items-center text-white">
        <feather size="16" type="map-pin" class="pr-2"></feather>
        <span class="text-sm">Av. Lib. Bdo. O'Higgis #1302 70, Santiago Chile.</span>
      </label>
      <label class="flex items-center text-white">
        <feather size="16" type="smartphone" class="pr-2"></feather>
        <span class="text-sm">+56 9 4291 0770</span>
      </label>
      <label class="flex items-center text-white">
        <feather size="16" type="mail" class="pr-2 mr-1"></feather>
        <span class="text-sm">contacto@backtrackacademy.com</span>
      </label>
      <div class="flex justify-center md:justify-start py-4">
        <a href="https://www.facebook.com/groups/BackTrackAcademy" target="_blank" rel="noopener noreferrer" class="hover:text-bta-blue">
          <feather size="35" type="facebook" class="mr-4"></feather>
        </a>
        <a href="https://www.instagram.com/backtrackacademy" target="_blank" rel="noopener noreferrer" class="hover:text-bta-blue">
          <feather size="35" type="instagram" class="mr-4"></feather>
        </a>
        <a href="https://www.linkedin.com/company/backtrack-academy" target="_blank" rel="noopener noreferrer" class="hover:text-bta-blue">
          <feather size="35" type="linkedin" class="mr-4"></feather>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
}
</script>

<style>

</style>