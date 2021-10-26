<template>
  <nav>
    <div
      :class="{ '-translate-y-full': scrolled }"
      class="flex fixed inset-x-0 top-0 z-50 px-2 md:px-24 lg:px-48 justify-between items-center h-16 lg:h-24 bt transform transition-transform bg-blue-light-dark"
      :v-on="handleScroll"
    >
      <router-link to="/" class="block py-3 hover:border-0 w-24 lg:w-32">
        <div class="eye">
          <div class="ball">
            <div ref="stem" class="stem">
              <div ref="pupil" class="pupil"></div>
            </div>
          </div>
        </div>
      </router-link>
      <ul class="flex items-center">
        <div class="hidden lg:flex relative lg:h-24">
          <div
            @mouseover="dbMenuHover"
            @mouseleave="dbMenuHide"
            class="dropdown relative py-4 mx-3 flex"
          >
            <button class="font-ibm">
              <span class="text-white mr-1">Open data</span>
              <feather
                fill="#fff"
                size="13"
                type="chevron-down"
                class=""
              ></feather>
            </button>
          </div>
          <div
            @mouseover="productsHover"
            @mouseleave="productsHide"
            class="dropdown relative py-4 mx-3 flex"
          >
            <button class="font-ibm">
              <span class="text-white mr-1">Products</span>
              <feather
                fill="#fff"
                size="13"
                type="chevron-down"
                class=""
              ></feather>
            </button>
          </div>
          <div class="dropdown relative py-4 mx-3 flex">
            <button class="font-ibm" @click="redirection">
              <div
                class="text-white mr-1 bg-principal-purple hover:bg-blue-text transition px-6 py-1 rounded-full cursor-pointer"
              >
                Demo
              </div>
            </button>
          </div>
          <div class="dropdown relative py-4 mx-3 flex items-center">
            <a href="https://discover.ovisoc.com/login">
              <button class="font-ibm">
                <span class="text-white mr-1">Login</span>
              </button>
            </a>
          </div>
        </div>
      </ul>
      <!-- MOBILE NAVBAR -->
      <div
        :class="
          navbarMobileOpened ? 'translate-y-0' : '-translate-y-over-screen'
        "
        class="block lg:hidden absolute top-0 min-h-screen w-screen left-0 bg-blue-light-dark transform transition-all"
      >
        <div
          class="flex flex-col h-screen justify-center items-center text-white uppercase text-2xl"
        >
          <div
            :class="this.submenu === 'openData' ?
              'text-principal-purple mt-36' :
                this.submenu === '' ?
                'text-white' :
                'opacity-0'"
            class="transition-all duration-300 mb-5"
            @click="openSubmenuMobile('openData')"
          >
            Open data
          </div>
          <div
            :class="this.submenu === 'openData' ?
              'opacity-1 max-h-96 mb-5 pointer-events-auto' :
              'opacity-0 max-h-0 mb-0 pointer-events-none'"
            class="flex flex-col text-center transform transition-all duration-300 gap-2"
            ref="openData"
          >
            <a href="https://internal.ovisoc.com">Internal</a>
            <a href="https://discover.ovisoc.com">Discover</a>
            <a href="https://monitoring.ovisoc.com">Monitoring</a>
          </div>
          <div
            :class="this.submenu === 'testRef' ?
              'text-principal-purple mt-10' :
                this.submenu === '' ?
                'text-white' :
                'opacity-0'"
            class="transition-all duration-300 mb-5"
            @click="openSubmenuMobile('testRef')"
          >
            Products
          </div>
          <div
            :class="this.submenu === 'testRef' ?
              'opacity-1 max-h-96 mb-5 pointer-events-auto' :
              'opacity-0 max-h-0 mb-0 pointer-events-none'"
            class="flex flex-col text-center transform transition-all duration-300 gap-2"
            ref="testRef"
          >
            <a href="https://internal.ovisoc.com">Internal</a>
            <a href="https://discover.ovisoc.com">Discover</a>
            <a href="https://monitoring.ovisoc.com">Monitoring</a>
          </div>
          <div
            :class="this.submenu === '' ? 'opacity-1' : 'opacity-0'"
            class="transition-opacity duration-300 flex flex-col items-center"
          >
            <div class="text-principal-purple mb-5" @click="redirection">Demo</div>
            <a href="https://discover.ovisoc.com/login" class="font-roboto">Login</a>
          </div>
        </div>
      </div>
      <div
        v-on:click="handleMobileNavbar"
        class="inline lg:hidden fixed right-6 top-1 cursor-pointer"
      >
        <div
          class="w-12 h-14 relative flex flex-col justify-center items-center gap-2 transition-all"
        >
          <div
            :class="
              navbarMobileOpened
                ? 'rotate-45 translate-x-0 -translate-y-1'
                : 'rotate-0 translate-x-0 -translate-y-3'
            "
            class="w-11/12 h-1 bg-white rounded-full absolute transform transition-all"
          ></div>
          <div
            :class="
              navbarMobileOpened
                ? 'translate-x-24 opacity-0'
                : 'translate-x-0 opacity-100'
            "
            class="w-11/12 h-1 bg-white rounded-full transform transition-all"
          ></div>
          <div
            :class="
              navbarMobileOpened
                ? '-rotate-45 translate-x-0 -translate-y-1'
                : 'rotate-0 translate-x-0 translate-y-3'
            "
            class="w-11/12 h-1 bg-white rounded-full absolute transform transition-all"
          ></div>
        </div>
      </div>
    </div>
    <!-- OPEN DATA -->
    <div
      :class="
        dbMenuShowed
          ? 'opacity-50 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      "
      class="hidden lg:block fixed top-0 left-0 w-screen h-screen bg-black transform transition-opacity z-20"
    ></div>
    <div
      @mouseover="dbMenuHover"
      @mouseleave="dbMenuHide"
      :class="dbMenuShowed ? 'translate-y-0' : '-translate-y-over-screen'"
      class="dropdown-menu hidden lg:block fixed right-0 mt-16 mr-80 lg:mt-24 bg-total-back transform transition-transform font-ibm z-30"
    >
      <div class="flex flex-col px-12 bg-blue-light-dark">
        <label class="text-base pt-5 pb-3 text-white transform uppercase"
          >Database</label
        >
        <div class="line-separator mb-4"></div>
        <div class="flex gap-7 mb-10">
          <div class="grid grid-cols-2 font-light">
            <a class="submenu-product-item" href="#">
              <svg
                class="w-10"
                width="43.068"
                height="48.202"
                viewBox="0 0 43.068 48.202"
              >
                <path
                  id="Path_1573"
                  data-name="Path 1573"
                  d="M4,13.267V38.935C4,44.607,13.194,49.2,24.534,49.2s20.534-4.595,20.534-10.267V13.267M4,13.267c0,5.673,9.194,10.267,20.534,10.267S45.068,18.94,45.068,13.267M4,13.267C4,7.595,13.194,3,24.534,3S45.068,7.595,45.068,13.267m0,12.834c0,5.673-9.194,10.267-20.534,10.267S4,31.774,4,26.1"
                  transform="translate(-3 -2)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
              <div class="flex flex-col gap-1">
                <h2 class="text-principal-purple text-base font-ibm leading-7">
                  Database Malicious IP
                </h2>
                <p class="text-white font-ibm text-sm w-52 leading-4">
                  Descubre activos en tiempo real
                </p>
              </div>
            </a>
            <a class="submenu-product-item" href="#">
              <svg
                class="w-10"
                width="43.068"
                height="48.202"
                viewBox="0 0 43.068 48.202"
              >
                <path
                  id="Path_1573"
                  data-name="Path 1573"
                  d="M4,13.267V38.935C4,44.607,13.194,49.2,24.534,49.2s20.534-4.595,20.534-10.267V13.267M4,13.267c0,5.673,9.194,10.267,20.534,10.267S45.068,18.94,45.068,13.267M4,13.267C4,7.595,13.194,3,24.534,3S45.068,7.595,45.068,13.267m0,12.834c0,5.673-9.194,10.267-20.534,10.267S4,31.774,4,26.1"
                  transform="translate(-3 -2)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
              <div class="flex flex-col gap-1">
                <h2 class="text-principal-purple text-base font-ibm leading-7">
                  Database Malicious IP
                </h2>
                <p class="text-white font-ibm text-sm w-52 leading-4">
                  Descubre activos en tiempo real
                </p>
              </div>
            </a>
            <a class="submenu-product-item" href="#">
              <svg
                class="w-10"
                width="43.068"
                height="48.202"
                viewBox="0 0 43.068 48.202"
              >
                <path
                  id="Path_1573"
                  data-name="Path 1573"
                  d="M4,13.267V38.935C4,44.607,13.194,49.2,24.534,49.2s20.534-4.595,20.534-10.267V13.267M4,13.267c0,5.673,9.194,10.267,20.534,10.267S45.068,18.94,45.068,13.267M4,13.267C4,7.595,13.194,3,24.534,3S45.068,7.595,45.068,13.267m0,12.834c0,5.673-9.194,10.267-20.534,10.267S4,31.774,4,26.1"
                  transform="translate(-3 -2)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
              <div class="flex flex-col gap-1">
                <h2 class="text-principal-purple text-base font-ibm leading-7">
                  Database Company Rating
                </h2>
                <p class="text-white font-ibm text-sm w-52 leading-4">
                  Transforma datos en respuestas
                </p>
              </div>
            </a>
            <a class="submenu-product-item" href="#">
              <svg
                class="w-10"
                width="43.068"
                height="48.202"
                viewBox="0 0 43.068 48.202"
              >
                <path
                  id="Path_1573"
                  data-name="Path 1573"
                  d="M4,13.267V38.935C4,44.607,13.194,49.2,24.534,49.2s20.534-4.595,20.534-10.267V13.267M4,13.267c0,5.673,9.194,10.267,20.534,10.267S45.068,18.94,45.068,13.267M4,13.267C4,7.595,13.194,3,24.534,3S45.068,7.595,45.068,13.267m0,12.834c0,5.673-9.194,10.267-20.534,10.267S4,31.774,4,26.1"
                  transform="translate(-3 -2)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
              <div class="flex flex-col gap-1">
                <h2 class="text-principal-purple text-base font-ibm leading-7">
                  Database Global Security
                </h2>
                <p class="text-white font-ibm text-sm w-52 leading-4">
                  Descubre activos en tiempo real
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div
        class="block bg-principal-purple hover:bg-opacity-80 transition-all py-4 text-xl text-white text-center rounded-b-lg font-light"
        v-on:click="redirection"
      >
        Quiero iniciar
      </div>
    </div>
    <!-- PRODUCTS SUBMENU -->
    <div
      :class="
        productsMenuShowed
          ? 'opacity-50 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      "
      class="hidden lg:block fixed top-0 left-0 w-screen h-screen bg-black transform transition-opacity z-20"
    ></div>
    <div
      @mouseover="productsHover"
      @mouseleave="productsHide"
      :class="productsMenuShowed ? 'translate-y-0' : '-translate-y-over-screen'"
      class="dropdown-menu hidden lg:block fixed right-0 mt-16 mr-80 lg:mt-24 bg-total-back transform transition-transform font-ibm z-30"
    >
      <div class="flex flex-col px-12 bg-blue-light-dark">
        <label class="text-base pt-5 pb-3 text-white transform uppercase"
          >Products</label
        >
        <div class="line-separator mb-4"></div>
        <div class="flex gap-8 mb-5">
          <div class="flex flex-col font-light">
            <a class="submenu-product-item" href="https://internal.ovisoc.com/">
              <svg
                class="w-10"
                width="47.128"
                height="52.342"
                viewBox="0 0 47.128 52.342"
              >
                <path
                  id="Path_1563"
                  data-name="Path 1563"
                  d="M48.444,14.111,26.222,3,4,14.111m44.444,0L26.222,25.222M48.444,14.111V41.889L26.222,53m0-27.778L4,14.111M26.222,25.222V53M4,14.111V41.889L26.222,53"
                  transform="translate(-2.658 -2)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
              <div class="flex flex-col">
                <h2 class="text-principal-purple text-base font-ibm leading-7">
                  OVI Internal
                </h2>
                <p class="text-white text-sm font-ibm w-52 leading-4">
                  Evalúa de manera continua la red interna
                </p>
              </div>
            </a>
            <a class="submenu-product-item" href="https://discover.ovisoc.com/">
              <svg
                class="w-10"
                width="51.717"
                height="38.473"
                viewBox="0 0 51.717 38.473"
              >
                <g
                  id="Group_1725"
                  data-name="Group 1725"
                  transform="translate(-1.458 -4)"
                >
                  <path
                    id="Path_1557"
                    data-name="Path 1557"
                    d="M24.631,16.816A7.816,7.816,0,1,1,16.816,9a7.816,7.816,0,0,1,7.816,7.816Z"
                    transform="translate(10.501 6.421)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <path
                    id="Path_1558"
                    data-name="Path 1558"
                    d="M2.458,23.236a26.061,26.061,0,0,1,49.717,0,26.061,26.061,0,0,1-49.717,0Z"
                    transform="translate(0)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </g>
              </svg>
              <div class="flex flex-col">
                <h2 class="text-principal-purple text-base font-ibm leading-7">
                  OVI Discover
                </h2>
                <p class="text-white text-sm font-ibm w-52 leading-4">
                  Descubre activos en tiempo real
                </p>
              </div>
            </a>
            <a
              class="submenu-product-item"
              href="https://monitoring.ovisoc.com"
            >
              <svg class="w-10" width="52" height="52" viewBox="0 0 52 52">
                <path
                  id="Path_1711"
                  data-name="Path 1711"
                  d="M3.153,25.222h5.4a5.556,5.556,0,0,1,5.556,5.556v2.778a5.556,5.556,0,0,0,5.556,5.556,5.556,5.556,0,0,1,5.556,5.556v8.181M16.889,5.6V9.944a6.944,6.944,0,0,0,6.944,6.944h1.389a5.556,5.556,0,0,1,5.556,5.556,5.556,5.556,0,0,0,11.111,0,5.556,5.556,0,0,1,5.556-5.556H50.4M36.333,51.578V44.667a5.556,5.556,0,0,1,5.556-5.556H50.4M53,28A25,25,0,1,1,28,3,25,25,0,0,1,53,28Z"
                  transform="translate(-2 -2)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
              <div class="flex flex-col">
                <h2 class="text-principal-purple text-base font-ibm leading-7">
                  OVI Monitoring
                </h2>
                <p class="text-white text-sm font-ibm w-52 leading-4">
                  Búsqueda de amenazas vinculada a tu organización
                </p>
              </div>
            </a>
          </div>
          <a
            class="group flex flex-col items-center justify-center mt-2 mb-1 transition-all hover:bg-total-back"
            v-on:click="redirection"
          >
            <img
              class="w-80 transform group-hover:animate-test"
              src="../../assets/img/mockup-blockphi.png"
              alt="app-mockup"
            />
            <p
              class="text-center text-sm text-principal-purple w-56 tracking-tight leading-4"
            >
              Reduzca el riesgo de impacto de la TI en la sombra
            </p>
          </a>
        </div>
      </div>
      <a
        class="block bg-principal-purple hover:bg-opacity-80 transition-all py-4 text-xl text-white text-center rounded-b-lg font-light cursor-pointer"
        v-on:click="redirection"
        >Quiero iniciar</a
      >
    </div>
  </nav>
</template>
<script>
import "../../assets/stylesheets/eye.scss"
export default {
  name: "Navbar",
  data() {
    return {
      navbarMobileOpened: false,
      productsMenuShowed: false,
      dbMenuShowed: false,
      limitPosition: 500,
      scrolled: false,
      lastPosition: 0,
      submenu: ""
    };
  },
  methods: {
    eyeMove: function (e) {
      let x = e.clientX - 50;
      let y = e.clientY - 50;
      let a = Math.PI - Math.atan2(x,y);
      let p = Math.sqrt(x*x + y*y)
      let m = Math.sqrt((window.innerWidth - 50) * (window.innerWidth - 50) + ((window.innerHeight - 50) * (window.innerHeight - 50)));
      this.$refs.stem.style.transform = `translate(-50%,-50%) rotate(${a}rad)`;
      this.$refs.stem.style.height = `${(p*35)/m}px`;
      this.$refs.pupil.style.height = `${12.5-(p*3)/m}px`;
      this.$refs.pupil.style.width = `${12.5-(p*3)/m}px`;
    },
    eyeLeave: function () {
      this.$refs.stem.style.height = '0px';
      this.$refs.pupil.style.height = '12.5px';
      this.$refs.pupil.style.width = '12.5px';
    },
    redirection: function() {
      this.$root.$refs.Main.redirectionForm();
      this.navbarMobileOpened = false;
    },
    productsHover: function() {
      this.productsMenuShowed = true;
    },
    productsHide: function() {
      this.productsMenuShowed = false;
    },
    dbMenuHover: function() {
      this.dbMenuShowed = true;
    },
    dbMenuHide: function() {
      this.dbMenuShowed = false;
    },
    handleScroll() {
      if (!this.navbarMobileOpened) {
        if (
          this.lastPosition < window.scrollY &&
          this.limitPosition < window.scrollY
        ) {
          this.productsMenuShowed = false;
          this.dbMenuShowed = false;
          this.scrolled = true;
          // move up!
        }

        if (this.lastPosition > window.scrollY) {
          this.scrolled = false;
          // move down
        }

        this.lastPosition = window.scrollY;
        // this.scrolled = window.scrollY > 250;
      }
    },
    handleMobileNavbar: function() {
      this.navbarMobileOpened = !this.navbarMobileOpened;
    },
    openSubmenuMobile(submenu) {
      this.submenu !== submenu ? this.submenu = submenu : this.submenu = ""
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener("mousemove", this.eyeMove);
    document.addEventListener("mouseleave", this.eyeLeave);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style scoped>
.submenu-product-item {
  @apply flex p-4 gap-6 items-center ml-1 rounded-sm hover:bg-total-back transition-all;
}
html {
  scroll-behavior: smooth;
}
.line-separator {
  height: 2px;
  background-color: white;
  opacity: 0.4;
}
</style>
