<template>
  <nav>
    <div
      :class="{'-translate-y-full': scrolled}"
      class="flex fixed inset-x-0 top-0 z-50 px-2 md:px-24 lg:px-48 justify-between items-center h-16 lg:h-24 bt transform transition-transform bg-blue-light-dark"
      :v-on="handleScroll"
    >
      <router-link to="/" class="block py-3 hover:border-0 w-24 lg:w-32">
        <!-- <img class="w-full h-full hidden" src="../../assets/img/logo.svg" alt="Icon kildstress"> -->
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
              <feather fill="#fff" size="13" type="chevron-down" class=""></feather>
            </button>
          </div>
          <div
            @mouseover="productsHover"
            @mouseleave="productsHide"
            class="dropdown relative py-4 mx-3 flex"
          >
            <button class="font-ibm">
              <span class="text-white mr-1">Products</span>
              <feather fill="#fff" size="13" type="chevron-down" class=""></feather>
            </button>

          </div>
          <div
            class="dropdown relative py-4 mx-3 flex"
          >
            <button class="font-ibm">
              <span class="text-white mr-1 bg-principal-purple hover:bg-blue-text transition px-6 py-1 rounded-full">Demo</span>
            </button>
          </div>
          <div
            class="dropdown relative py-4 mx-3 flex items-center"
          >
            <router-link to="/login">
              <button class="font-ibm">
                <span class="text-white mr-1">Login</span>
              </button>
            </router-link>
          </div>
        </div>
      </ul>
      <!-- MOBILE NAVBAR -->
      <div
        :class="navbarMobileOpened ? 'translate-y-0': '-translate-y-over-screen'"
        class="block lg:hidden absolute top-0 min-h-screen w-screen left-0 bg-blue-light-dark transform transition-all"
      >
        <ul class="flex flex-col h-screen justify-center items-center text-white uppercase text-2xl gap-5">
          <li>Open data</li>
          <li>Products</li>
          <li class="text-principal-purple">Demo</li>
          <li>Login</li>
        </ul>
      </div>
      <div
        v-on:click="handleMobileNavbar"
        class="inline lg:hidden fixed right-6 top-1 cursor-pointer"
      >
        <div class="w-12 h-14 relative flex flex-col justify-center items-center gap-2 transition-all">
          <div
            :class="navbarMobileOpened ? 'rotate-45 translate-x-0 -translate-y-1' : 'rotate-0 translate-x-0 -translate-y-3'"
            class="w-11/12 h-1 bg-white rounded-full absolute transform transition-all"
          ></div>
          <div
            :class="navbarMobileOpened ? 'translate-x-24 opacity-0' : 'translate-x-0 opacity-100'"
            class="w-11/12 h-1 bg-white rounded-full transform transition-all"
          ></div>
          <div
            :class="navbarMobileOpened ? '-rotate-45 translate-x-0 -translate-y-1' : 'rotate-0 translate-x-0 translate-y-3'"
            class="w-11/12 h-1 bg-white rounded-full absolute transform transition-all"
          ></div>
        </div>
      </div>
    </div>
    <!-- OPEN DATA -->
    <div
      :class="dbMenuShowed ? 'opacity-50 pointer-events-auto': 'opacity-0 pointer-events-none'"
      class="hidden lg:block fixed top-0 left-0 w-screen h-screen bg-black transform transition-opacity z-20"
    ></div>
    <div
      @mouseover="dbMenuHover"
      @mouseleave="dbMenuHide"
      :class="dbMenuShowed ? 'translate-y-0': '-translate-y-over-screen'"
      class="dropdown-menu hidden lg:block fixed right-0 mt-16 mr-80 lg:mt-24 bg-total-back transform transition-transform font-ibm z-30">
      <div class="flex flex-col px-12 bg-blue-light-dark">
        <label class="text-base pt-5 pb-3 text-white transform uppercase">Database</label>
        <div class="line-separator mb-4"></div>
        <div class="flex gap-7 mb-10">
          <div class="grid grid-cols-2 gap-y-10 gap-x-4 font-light">
            <a class="flex gap-6 items-center ml-1" href="#">
              <svg class="w-10" width="43.068" height="48.202" viewBox="0 0 43.068 48.202">
                <path id="Path_1573" data-name="Path 1573" d="M4,13.267V38.935C4,44.607,13.194,49.2,24.534,49.2s20.534-4.595,20.534-10.267V13.267M4,13.267c0,5.673,9.194,10.267,20.534,10.267S45.068,18.94,45.068,13.267M4,13.267C4,7.595,13.194,3,24.534,3S45.068,7.595,45.068,13.267m0,12.834c0,5.673-9.194,10.267-20.534,10.267S4,31.774,4,26.1" transform="translate(-3 -2)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </svg>
              <div class="flex flex-col gap-1">
                <h2 class="text-principal-purple text-base font-ibm leading-7">Database Malicious IP</h2>
                <p class="text-white font-ibm text-sm w-52 leading-4">Unmask assets in real time</p>
              </div>
            </a>
            <a class="flex gap-6 items-center ml-1" href="#">
              <svg class="w-10" width="43.068" height="48.202" viewBox="0 0 43.068 48.202">
                <path id="Path_1573" data-name="Path 1573" d="M4,13.267V38.935C4,44.607,13.194,49.2,24.534,49.2s20.534-4.595,20.534-10.267V13.267M4,13.267c0,5.673,9.194,10.267,20.534,10.267S45.068,18.94,45.068,13.267M4,13.267C4,7.595,13.194,3,24.534,3S45.068,7.595,45.068,13.267m0,12.834c0,5.673-9.194,10.267-20.534,10.267S4,31.774,4,26.1" transform="translate(-3 -2)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </svg>
              <div class="flex flex-col gap-1">
                <h2 class="text-principal-purple text-base font-ibm leading-7">Database Malicious IP</h2>
                <p class="text-white font-ibm text-sm w-52 leading-4">Unmask assets in real time</p>
              </div>
            </a>
            <a class="flex gap-6 items-center ml-1" href="#">
              <svg class="w-10" width="43.068" height="48.202" viewBox="0 0 43.068 48.202">
                <path id="Path_1573" data-name="Path 1573" d="M4,13.267V38.935C4,44.607,13.194,49.2,24.534,49.2s20.534-4.595,20.534-10.267V13.267M4,13.267c0,5.673,9.194,10.267,20.534,10.267S45.068,18.94,45.068,13.267M4,13.267C4,7.595,13.194,3,24.534,3S45.068,7.595,45.068,13.267m0,12.834c0,5.673-9.194,10.267-20.534,10.267S4,31.774,4,26.1" transform="translate(-3 -2)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </svg>
              <div class="flex flex-col gap-1">
                <h2 class="text-principal-purple text-base font-ibm leading-7">Database Company Rating</h2>
                <p class="text-white font-ibm text-sm w-52 leading-4">Transform data into answer</p>
              </div>
            </a>
            <a class="flex gap-6 items-center ml-1" href="#">
              <svg class="w-10" width="43.068" height="48.202" viewBox="0 0 43.068 48.202">
                <path id="Path_1573" data-name="Path 1573" d="M4,13.267V38.935C4,44.607,13.194,49.2,24.534,49.2s20.534-4.595,20.534-10.267V13.267M4,13.267c0,5.673,9.194,10.267,20.534,10.267S45.068,18.94,45.068,13.267M4,13.267C4,7.595,13.194,3,24.534,3S45.068,7.595,45.068,13.267m0,12.834c0,5.673-9.194,10.267-20.534,10.267S4,31.774,4,26.1" transform="translate(-3 -2)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </svg>
              <div class="flex flex-col gap-1">
                <h2 class="text-principal-purple text-base font-ibm leading-7">Database Global Security</h2>
                <p class="text-white font-ibm text-sm w-52 leading-4">Unmask assets in real time</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="block bg-principal-purple hover:bg-opacity-80 transition-all py-4 text-xl text-white text-center rounded-b-lg font-light">Get started</div>
    </div>
    <!-- PRODUCTS SUBMENU -->
    <div
      :class="productsMenuShowed ? 'opacity-50 pointer-events-auto': 'opacity-0 pointer-events-none'"
      class="hidden lg:block fixed top-0 left-0 w-screen h-screen bg-black transform transition-opacity z-20"
    ></div>
    <div
      @mouseover="productsHover"
      @mouseleave="productsHide"
      :class="productsMenuShowed ? 'translate-y-0': '-translate-y-over-screen'"
      class="dropdown-menu hidden lg:block fixed right-0 mt-16 mr-80 lg:mt-24 bg-total-back transform transition-transform font-ibm z-30">
      <div class="flex flex-col px-12 bg-blue-light-dark">
        <label class="text-base pt-5 pb-3 text-white transform uppercase">Products</label>
        <div class="line-separator mb-4"></div>
        <div class="flex gap-8 mb-5">
          <div class="flex flex-col gap-5 font-light">
            <a class="flex gap-6 items-center ml-1" href="https://discover.ovisoc.com/">
              <svg class="w-10" width="51.717" height="38.473" viewBox="0 0 51.717 38.473">
                <g id="Group_1725" data-name="Group 1725" transform="translate(-1.458 -4)">
                  <path id="Path_1557" data-name="Path 1557" d="M24.631,16.816A7.816,7.816,0,1,1,16.816,9a7.816,7.816,0,0,1,7.816,7.816Z" transform="translate(10.501 6.421)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  <path id="Path_1558" data-name="Path 1558" d="M2.458,23.236a26.061,26.061,0,0,1,49.717,0,26.061,26.061,0,0,1-49.717,0Z" transform="translate(0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </g>
              </svg>
              <div class="flex flex-col">
                <h2 class="text-principal-purple text-base font-ibm leading-7">OVI Discover</h2>
                <p class="text-white text-sm font-ibm w-52 leading-4">Unmask assets in real time</p>
              </div>
            </a>
            <a class="flex gap-6 items-center ml-1" href="https://monitoring.ovisoc.com/">
              <svg class="w-10" width="45.687" height="45.687" viewBox="0 0 45.687 45.687">
                <path id="Path_1559" data-name="Path 1559" d="M25.843,9.461V4m0,5.461a5.461,5.461,0,0,0,0,10.922m0-10.922a5.461,5.461,0,1,1,0,10.922M9.461,42.226a5.461,5.461,0,1,0,0-10.922m0,10.922a5.461,5.461,0,1,1,0-10.922m0,10.922v5.461m0-16.382V4M25.843,20.382v27.3m16.382-5.461a5.461,5.461,0,1,0,0-10.922m0,10.922a5.461,5.461,0,0,1,0-10.922m0,10.922v5.461m0-16.382V4" transform="translate(-3 -3)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </svg>
              <div class="flex flex-col">
                <h2 class="text-principal-purple text-base font-ibm leading-7">OVI Monitoring</h2>
                <p class="text-white text-sm font-ibm w-52 leading-4">Utility for discovery and auditing.</p>
              </div>
            </a>
            <a class="flex gap-6 items-center ml-1" href="https://internal.ovisoc.com">
              <svg class="w-10" width="45.687" height="45.687" viewBox="0 0 45.687 45.687">
                <path id="Path_1560" data-name="Path 1560" d="M3,5.427A2.427,2.427,0,0,1,5.427,3H44.259a2.427,2.427,0,0,1,2.427,2.427V11.7a2.427,2.427,0,0,1-.711,1.716L30.408,28.986A2.427,2.427,0,0,0,29.7,30.7v6.276l-9.708,9.708V30.7a2.427,2.427,0,0,0-.711-1.716L3.711,13.419A2.427,2.427,0,0,1,3,11.7Z" transform="translate(-2 -2)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </svg>
              <div class="flex flex-col">
                <h2 class="text-principal-purple text-base font-ibm leading-7">OVI Validate</h2>
                <p class="text-white text-sm font-ibm w-52 leading-4">Quantitative risk throw real attack scenarios</p>
              </div>
            </a>
          </div>
          <a class="flex flex-col items-center justify-center mt-2 mb-1" href="#">
            <img class="w-80" src="../../assets/img/mockup-blockphi.png" alt="app-mockup">
            <p class="text-center text-sm text-principal-purple w-56 tracking-tight leading-4">Reduce the risk of Shadow IT impact.</p>
          </a>
        </div>
      </div>
      <a class="block bg-principal-purple hover:bg-opacity-80 transition-all py-4 text-xl text-white text-center rounded-b-lg font-light" v-on:click="redirection">Get started</a>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      navbarMobileOpened: false,
      productsMenuShowed: false,
      dbMenuShowed: false,
      limitPosition: 500,
      scrolled: false,
      lastPosition: 0
    };
  },
  methods: {
    redirection: function () {
      this.$root.$refs.Main.redirectionGrid();
    },
    productsHover: function () {
      this.productsMenuShowed = true;
    },
    productsHide: function () {
      this.productsMenuShowed = false;
    },
    dbMenuHover: function () {
      this.dbMenuShowed = true;
    },
    dbMenuHide: function () {
      this.dbMenuShowed = false;
    },
    handleScroll() {
      if (!this.navbarMobileOpened) {
        if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
          this.productsMenuShowed = false
          this.dbMenuShowed = false
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
    handleMobileNavbar: function () {
      this.navbarMobileOpened = !this.navbarMobileOpened
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll)
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll)
  }
};
</script>
<style scoped>
html{
  scroll-behavior: smooth;
}
.line-separator{
  height: 2px;
  background-color: white;
  opacity: .4;
}
</style>