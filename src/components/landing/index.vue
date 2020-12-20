<template>
  <main class="">
    <section class="px-2 lg:px-0 md:px-24 lg:pl-48 py-16 flex justify-between items-center">
      <div class="w-full lg:w-5/12">
        <h1 class="font-oswald font-bold">
          <span class="block text-6xl leading-none">Enfrenta las <br>amenazas públicas</span>
        </h1>
        <p class="font-inconsalata text-white py-10 text-2xl">
          Descubre y previene amenazas visualizando el estado general de seguridad de tu empresa.
        </p>
        <a href="/#contact" class="font-oswald tracking-widest uppercase text-xl py-2 px-10 lg:px-8 bg-bta-pink" >
          Contáctanos »
        </a>
      </div>
      <div class="hidden lg:block w-6/12">
        <img
          class="w-full h-full"
          src="../../assets/img/bt2.png"
          alt="Banner"
        />
      </div>
    </section>

    <section id="about-us" class="flex flex-col container mx-auto px-2 md:px-32 py-40 text-center">
      <h2 class="font-oswald uppercase font-bold mb-3 text-4xl">NO ESPERES A SER VÍCTIMA DE UN CIBERATAQUE</h2>
      <p class="text-white text-2xl font-inconsalata mb-8">
        76.1% de las compañías esperan que en 2021 aumenten los ciberataques a infraestructuras y el 75% espera un aumento de los ataques en busca de dinero o datos.
      </p>
    </section>

    <section id="features" class="py-40 px-2 lg:px-0 md:px-24 lg:pl-48 flex flex-col md:flex-row">
      <div class="w-full lg:w-4/6 lg:pr-40">
        <h2 class="font-oswald uppercase text-center md:text-justify font-medium mb-3 text-4xl leading-10">Protegemos tus activos <span class="md:block">de posibles ataques</span></h2>
        <p class="text-white text-center md:text-justify text-2xl font-inconsalata mb-8">
          Nos situamos desde un sistema recíproco de seguridad preventiva, gestionando las amenazas de manera continua y propiciando un entorno más confiable que asegura la operatividad de tu negocio.
        </p>
        <ul class="pt-4">
          <li class="font-inconsalata text-white text-xl mb-4 md:text-2xl">
            <div class="relative">
              <span class="absolute bg-bta-gray circle-effect h-8 w-8 rounded-full"></span>
              <span class="absolute bg-bta-gray left-2 mt-2 h-4 w-4 rounded-full"></span>
            </div>
            <span class="ml-10">
              Monitoreo y análisis continuo.
            </span>
          </li>
          <li class="font-inconsalata text-white text-xl mb-4 md:text-2xl">
            <div class="relative">
              <span class="absolute bg-bta-gray circle-effect h-8 w-8 rounded-full"></span>
              <span class="absolute bg-bta-gray left-2 mt-2 h-4 w-4 rounded-full"></span>
            </div>
            <span class="ml-10">
              Detección de intrusos.
            </span>
          </li>
          <li class="font-inconsalata text-white text-xl mb-4 md:text-2xl">
            <div class="relative">
              <span class="absolute bg-bta-gray circle-effect h-8 w-8 rounded-full"></span>
              <span class="absolute bg-bta-gray left-2 mt-2 h-4 w-4 rounded-full"></span>
            </div>
            <span class="ml-10">
              Proceso automatizado 24/7.
            </span>
          </li>
          <li class="font-inconsalata text-white text-xl mb-4 md:text-2xl">
            <div class="relative">
              <span class="absolute bg-bta-gray circle-effect h-8 w-8 rounded-full"></span>
              <span class="absolute bg-bta-gray left-2 mt-2 h-4 w-4 rounded-full"></span>
            </div>
            <span class="ml-10">
              Combina múltiples técnicas y potentes herramientas.
            </span>
          </li>
          <li class="font-inconsalata text-white text-xl mb-4 md:text-2xl">
            <div class="relative">
              <span class="absolute bg-bta-gray circle-effect h-8 w-8 rounded-full"></span>
              <span class="absolute bg-bta-gray left-2 mt-2 h-4 w-4 rounded-full"></span>
            </div>
            <span class="ml-10">
              Motores de búsqueda que rastrea información maliciosa.
            </span>
          </li>
          <li class="font-inconsalata text-white text-xl mb-4 md:text-2xl">
            <div class="relative">
              <span class="absolute bg-bta-gray circle-effect h-8 w-8 rounded-full"></span>
              <span class="absolute bg-bta-gray left-2 mt-2 h-4 w-4 rounded-full"></span>
            </div>
            <span class="ml-10">
              Análisis de tráfico malicioso.
            </span>
          </li>
        </ul>
      </div>
      <br class="md:hidden" /> 
      <div class="hidden relative w-full lg:w-2/6 lg:flex justify-center items-center">
        <!-- <img
          class="w-full h-full"
          src="../../assets/img/laptop.png"
          alt="Banner7"
        /> -->
        <img
          class="absolute bottom-3.5 left-0 w-3/5"
          src="../../assets/img/celular.png"
          alt="Banner7"
        />
      </div>
    </section>

    <section id="alerts" class="py-40">
      <h2 class="font-oswald uppercase text-center md:text-justify font-medium mb-3 text-4xl leading-10 px-2 md:px-24 lg:px-48">Monitoreamos la actividad maliciosa <span class="md:block">que pueda afectar tu empresa</span></h2>
      <br>
      <div class="flex flex-col md:flex-row justify-around px-16">
        <div>
          <div class="m-2 flex items-center py-4">
            <img class="w-16 mr-5"
              src="../../assets/img/iconos svg/User-console.svg"
            />
            <h4 class="text-1xl">
              Intentos <br />
              de fraude
            </h4>
          </div>
          <div class="m-2 flex items-center py-4">
            <img class="w-16 mr-5"
            src="../../assets/img/iconos svg/Fuga-de-informacion.svg"
            />
            <h4 class="text-1xl">
              Fuga de <br />
              información
            </h4>
          </div>
        </div>
        <div>
          <div class="m-2 flex items-center py-4">
            <img class="w-16 mr-5"
              src="../../assets/img/iconos svg/Suplantacion-de-Identidad.svg"
            />
            <h4 class="text-1xl">
              Suplantación <br />
              de identidad
            </h4>
          </div>
          <div class="m-2 flex items-center py-4">
            <img class="w-16 mr-5"
              src="../../assets/img/iconos svg/exploits.svg"
            />
            <h4 class="text-1xl">
              Exploits <br />
              Disponibles
            </h4>
          </div>
        </div>
        <div>
          <div class="m-2 flex items-center py-4">
            <img class="w-16 mr-5"
              src="../../assets/img/iconos svg/Ataquesmaliciosos.svg"
            />
            <h4 class="text-1xl">
              Ataques <br />
              Maliciosos
            </h4>
          </div>
          <div class="m-2 flex items-center py-4">
            <img class="w-16 mr-5"
              src="../../assets/img/iconos svg/CVE.svg"
            />
            <h4 class="text-1xl">
              Vulnerabilidades <br />
              Expuestas
            </h4>
          </div>
        </div>
      </div>
    </section>
    <!-- <section id="services" class="container mx-auto my-20">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/3 md:mx-1 lg:mx-2 py-6 px-4 my-3 bg-dark bg-opacity-25">
          <div class="flex mb-3">
            <div class="overflow-auto w-3/6 md:w-2/6 mr-2">
              <img
                class="w-full h-full"
                src="../../assets/img/icon-color/cve.svg"
                alt="Icon cve"
              />
            </div>
            <div class="w-3/6 md:w-4/6">
              <label class="block font-inconsalata tracking-widest font-semibold leading-3">CYBOPS</label>
              <h2 class="font-oswald text-xl md:text-2xl lg:text-3xl font-semibold mb-2">ALERTA DE VULNERABILIDADES</h2>
            </div>
          </div>
          <p class="font-inconsalata tracking-wide text-white h-56">
            Es un sistema alerta temprana de vulnerabilidades basados en
            estándares representados mediante el Protocolo de automatización
            de contenido de seguridad (SCAP).
          </p>
          <div class="text-right mt-2">
            <router-link to="/vulnerability" class="uppercase font-bold font-inconsalata tracking-wider border-2 border-bta-pink hover:text-bta-pink px-3 py-2">
              más información
            </router-link>
          </div>
        </div>

        <div class="w-full md:w-1/3 md:mx-1 lg:mx-2 py-6 px-4 my-3 bg-dark bg-opacity-25">
          <div class="flex mb-3">
            <div class="overflow-auto h-24 w-3/6 md:w-2/6 mr-2">
              <img
                class="w-full h-full"
                src="../../assets/img/icon-color/ovisoc.svg"
                alt="Icon ovisoc"
              />
            </div>
            <div class="w-3/6 md:w-4/6">
              <label class="block font-inconsalata tracking-widest font-semibold leading-3">
                OVISOC
              </label>
              <h2 class="font-oswald text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                <span class="block">PRUEBAS</span>
                <span>DE PENETRACIÓN</span>
              </h2>
            </div>
          </div>
          <p class="font-inconsalata tracking-wide text-white h-56">
            Solución que evalúa aplicaciones web, servidores y dominios de una
            empresa funcionando continuamente y diagnosticando el estado de
            seguridad general de la empresa.
          </p>
          <div class="text-right mt-2">
            <router-link to="/pentesting" class="uppercase font-bold font-inconsalata tracking-wider border-2 border-bta-pink hover:text-bta-pink px-3 py-2">
              más información
            </router-link>
          </div>
        </div>

        <div class="w-full md:w-1/3 md:mx-1 lg:mx-2 py-6 px-4 my-3 bg-dark bg-opacity-25">
          <div class="flex mb-3">
            <div class="overflow-auto h-24 w-3/6 md:w-2/6 mr-2">
              <img
                class="w-full h-full"
                src="../../assets/img/icon-color/blockphi.svg"
                alt="Icon blockphi"
              />
            </div>
            <div class="w-3/6 md:w-4/6">
              <label class="block font-inconsalata tracking-widest font-semibold leading-3">
                BLOCKPHI
              </label>
              <h2 class="font-oswald text-xl lg:text-3xl font-semibold mb-2">
                <span class="block">DETECCIÓN</span>
                <span>DE PHISHING</span>
              </h2>
            </div>
          </div>
          <p class="font-inconsalata tracking-wide text-white h-56">
            Sistema de alerta en tiempo real, sobre análisis de tráfico
            malintencionado y detección de phishing, implementación en corto
            tiempo en cualquier tipo de infraestructura web.
          </p>
          <div class="text-right mt-2">
            <router-link to="/phishing" class="uppercase font-bold font-inconsalata tracking-wider border-2 border-bta-pink hover:text-bta-pink px-3 py-2">
              más información
            </router-link>
          </div>
        </div>

      </div>
      <div class="flex flex-col lg:flex-row">

        <div class="w-full md:w-1/3 md:mx-1 lg:mx-2 py-6 px-4 my-3 bg-dark bg-opacity-25">
          <div class="flex mb-3">
            <div class="overflow-auto h-24 w-3/6 md:w-2/6 mr-2">
              <img
                class="w-full h-full"
                src="../../assets/img/icon-color/deep-search.svg"
                alt="Icon deep-search"
              />
            </div>
            <div class="w-3/6 md:w-4/6">
              <label class="block font-inconsalata tracking-widest font-semibold leading-3">DEEP SEARCH</label>
              <h2 class="font-oswald text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                <span class="block">MONITOREO</span> 
                <span>DEEP WEB</span>
              </h2>
            </div>
          </div>
          <p class="font-inconsalata tracking-wide text-white h-56">
            Motor de búsqueda real de Dark Web, actualmente contamos con 3
            millones de sitios web indexados exitosamente, que permiten a las
            empresas investigar y acceder directamente a sitios onion, para
            proteger sus activos.
          </p>
          <div class="text-right mt-2">
            <router-link to="/deepweb" class="uppercase font-bold font-inconsalata tracking-wider border-2 border-bta-pink hover:text-bta-pink px-3 py-2">
              más información
            </router-link>
          </div>
        </div>

        <div class="w-full md:w-1/3 md:mx-1 lg:mx-2 py-6 px-4 my-3 bg-dark bg-opacity-25">
          <div class="flex mb-3">
            <div class="overflow-auto h-24 w-3/6 md:w-2/6 mr-2">
              <img
                class="w-full h-full"
                src="../../assets/img/icon-color/kildstress.svg"
                alt="Icon kildstress"
              />
            </div>
            <div class="w-3/6 md:w-4/6">
              <label class="block font-inconsalata tracking-widest font-semibold leading-3">
                KILDSTRESS
              </label>
              <h2 class="font-oswald text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                <span class="block">TEST</span>
                <span>DE STRESS</span>
              </h2>
            </div>
          </div>
          <p class="font-inconsalata tracking-wide text-white h-56">
            Solución que evalúa los sitios web, servidores y dominios de una
            empresa funcionando continuamente y diagnosticando el estado de
            seguridad general de la empresa desde la perspectiva de un
            atacante que esté dentro o fuera de su red en cuestión de minutos.
          </p>
          <div class="text-right mt-2">
            <router-link to="/kildstress" class="uppercase font-bold font-inconsalata tracking-wider border-2 border-bta-pink hover:text-bta-pink px-3 py-2">
              más información
            </router-link>
          </div>
        </div>

        <div class="w-full md:w-1/3 md:mx-1 lg:mx-2 py-6 px-4 my-3 bg-dark bg-opacity-25">
          <div class="flex mb-3">
            <div class="overflow-auto h-24 w-3/6 md:w-2/6 mr-2">
              <img
                class="w-full h-full"
                src="../../assets/img/icon-color/academy.svg"
                alt="Icon academy"
              />
            </div>
            <div class="w-3/6 md:w-4/6">
              <label class="block font-inconsalata tracking-widest font-semibold leading-3">
                ACADEMY
              </label>
              <h2 class="font-oswald text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                <span class="block">EDUCACIÓN</span>
                <span>CONTINUA</span>
              </h2>
            </div>
          </div>
          <p class="font-inconsalata tracking-wide text-white h-56">
            Plataforma E-learning de ciberseguridad preparamos a las nuevas
            generaciones de profesionales para el mundo laboral.
          </p>
          <div class="text-right mt-2">
            <router-link to="/academy" class="uppercase font-bold font-inconsalata tracking-wider border-2 border-bta-pink hover:text-bta-pink px-3 py-2">
              más información
            </router-link>
          </div>
        </div>

      </div>
    </section>

    <section id="threats" class="container mx-auto my-20 flex flex-col lg:flex-row justify-center">
      <div class="w-full md:w-4/12 lg:w-3/12 my-2 py-6 px-4 bg-dark bg-opacity-25">
        <h3 class="uppercase font-oswald font-bold text-2xl mb-5">Últimas amenazas</h3>
        <div v-for="(cve, index) of cves" :key="index">
          <div class="flex justify-between items-baseline">
            <div>
              <label class="block font-oswald font-semibold text-2xl text-white leading-5">{{cve.title}}</label>
              <span class="font-oswald capitalize">{{formatDate(cve.published_date)}}</span>
            </div>
            <div class="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
              <span class="font-oswald font-bold">{{cve.cvss}}</span>
            </div>
          </div>
          <p class="font-inconsalata text-white pt-2 pb-3 leading-4">{{cve.summary.substring(0, 50)}}...</p>
          <hr class="border-white mb-3"/>
        </div>
      </div>

      <div class="w-full md:w-4/12 lg:w-3/12 my-2 lg:mx-4 py-6 px-4 bg-dark bg-opacity-25">
        <h3 class="uppercase font-oswald font-bold text-2xl mb-5">top 5 cpe</h3>
        <div v-for="(cpe, index) of cpes" :key="index">
          <div class="flex justify-between items-baseline">
            <div>
              <label class="block font-oswald font-semibold text-2xl text-white leading-5 capitalize">{{cpe.product_name.replace('_', ' ')}}</label>
              <span class="font-oswald capitalize">{{formatDate(cpe.updated_at)}}</span>
            </div>
            <div class="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
              <span class="font-oswald font-bold">{{numberWithCommas(cpe.count_cve)}}</span>
            </div>
          </div>
          <p class="font-inconsalata text-white pt-2 pb-3 leading-4">{{cpe.name}} {{cpe.vendor_name}} {{cpe.product_name}}</p>
          <hr class="border-white mb-3"/>
        </div>
      </div>

      <div class="w-full md:w-4/12 lg:w-3/12 my-2 py-6 px-4 bg-dark bg-opacity-25">
        <h3 class="uppercase font-oswald font-bold text-2xl mb-5">top 5 vendor</h3>
        <div v-for="(vendor, index) of vendors" :key="index">
          <div class="flex justify-between items-baseline">
            <div>
              <label class="block font-oswald font-semibold text-2xl text-white leading-5 capitalize">{{vendor.name}}</label>
              <span class="font-oswald capitalize">{{formatDate(vendor.updated_at)}}</span>
            </div>
            <div class="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
              <span class="font-oswald font-bold">{{numberWithCommas(vendor.count_cve)}}</span>
            </div>
          </div>
          <p class="font-inconsalata text-white pt-2 pb-3 leading-4">Product {{vendor.count_product}} {{vendor.count_cve}}</p>
          <hr class="border-white mb-3"/>
        </div>
      </div>

    </section> -->

    <ContactForm />
  </main>
</template>

<script>
import ContactForm from "../shared/ContactForm";

export default {
  name: "Main",
  components: {
    ContactForm,
  },
  data() {
    return {
      ovisoc: "https://ovisoc.backtrackacademy.com/",
      cves: [],
      cpes: [],
      vendors: [],
      data: []
    }
  },
  mounted() {
    this.loadInfo();
    this.scrollTop();
  },
  methods: {
    scrollTop: function() {
      window.scroll(0, 0)
    },
    numberWithCommas(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    loadInfo() {
      const cur = this;
      this.axios
      .get(cur.ovisoc + "stats")
      .then((result) => {
        if (typeof result.data.length != undefined) {
          cur.cves = result.data.cves;
          cur.cpes = result.data.cpes;
          cur.vendors = result.data.vendor;
        }
      })
      .catch((error) => {
        console.log(error);
      });
    },
    formatDate(date) {
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return new Date(date).toLocaleString("es", options);
    }
  }
};
</script>

<style></style>
