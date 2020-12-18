<template>
  <nav class="fixed inset-x-0 top-0 z-10 px-2 md:px-24 lg:px-48 flex justify-between items-center">
    <router-link to="/" class="block py-3 hover:border-0 w-24 lg:w-32">
      <img class="w-full h-full" src="../../assets/img/logo.svg" alt="Icon kildstress">
    </router-link>
    <ul class="flex items-center">
      <div class="hidden lg:block relative">
        <div class="dropdown relative z-10 py-4 mx-3">
          <button class="b-product text-xs font-semibold">
            <span class="font-oswald  tracking-widest mr-1">PRODUCTOS</span>
            <feather size="13" type="chevron-down" class=""></feather>
          </button>
          <div class="dropdown-menu fixed invisible left-0 pt-6 bg-bta-pink w-full h-48">
            <div class="flex md:px-24 lg:px-48">
              <label class="pl-12 font-oswald font-bold text-sm text-white tracking-bta transform rotate-180 writing-mode-vertical-lr">PRODUCTOS</label>
              <div class="flex">
                <div class="w-4/12 border-r border-pink-500">
                  <router-link to="/vulnerability" class="flex px-3 pt-4 pb-3 border-b border-pink-500 hover:no-underline">
                    <div class="overflow-auto w-1/6 h-10 mr-3">
                      <img
                        class="w-full h-full"
                        src="../../assets/img/icon/cve.svg"
                        alt="Icon cve"
                      />
                    </div>
                    <div class="w-5/6">
                      <h2 class="uppercase tracking-widest text-xs font-bold leading-3">Alerta de vulnerabilidades</h2>
                      <label class="uppercase text-xss text-white tracking-wider mb-0">cybops</label>
                    </div>
                  </router-link>
                  <router-link to="/deepweb" class="flex px-3 pt-4 pb-3 hover:no-underline">
                    <div class="overflow-auto w-1/6 h-8 mr-3">
                      <img
                        class="w-full h-full"
                        src="../../assets/img/icon/deep-search.svg"
                        alt="Icon deep-search"
                      />
                    </div>
                    <div class="w-5/6">
                      <h2 class="uppercase tracking-widest text-xs font-bold leading-3">Monitoreo depp web</h2>
                      <label class="uppercase text-xss text-white tracking-wider mb-0">deep search</label>
                    </div>
                  </router-link>
                </div>
                <div class="w-4/12 border-r border-pink-500">
                  <router-link to="/pentesting" class="flex px-3 pt-4 pb-3 border-b border-pink-500 hover:no-underline">
                    <div class="overflow-auto w-1/6 h-10 mr-3">
                      <img
                        class="w-full h-full"
                        src="../../assets/img/icon/ovisoc.svg"
                        alt="Icon ovisoc"
                      />
                    </div>
                    <div class="w-5/6">
                      <h2 class="uppercase tracking-widest text-xs font-bold leading-3">PRUEBAS de PENETRACIÓN</h2>
                      <label class="uppercase text-xss text-white tracking-wider mb-0">OVISOC</label>
                    </div>
                  </router-link>
                  <router-link to="/kildstress" class="flex px-3 pt-4 pb-3 hover:no-underline">
                    <div class="overflow-auto w-1/6 h-8 mr-3">
                      <img
                        class="w-full h-full"
                        src="../../assets/img/icon/kildstress.svg"
                        alt="Icon kildstress"
                      />
                    </div>
                    <div class="w-5/6">
                      <h2 class="uppercase tracking-widest text-xs font-bold leading-3">test de stress</h2>
                      <label class="uppercase text-xss text-white tracking-wider mb-0">kildstress</label>
                    </div>
                  </router-link>
                </div>
                <div class="w-4/12">
                  <router-link to="/phishing" class="flex px-3 pt-4 pb-3 border-b border-pink-500 hover:no-underline">
                    <div class="overflow-auto w-1/6 h-10 mr-3">
                      <img
                        class="w-full h-full"
                        src="../../assets/img/icon/blockphi.svg"
                        alt="Icon blockphi"
                      />
                    </div>
                    <div class="w-5/6">
                      <h2 class="uppercase tracking-widest text-xs font-bold leading-3">DETECCIÓN de phishing</h2>
                      <label class="uppercase text-xss text-white tracking-wider mb-0">BLOCKPHI</label>
                    </div>
                  </router-link>
                  <router-link to="/academy" class="flex px-3 pt-4 pb-3 hover:no-underline">
                    <div class="overflow-auto w-1/6 h-8 mr-3">
                      <img
                        class="w-full h-full"
                        src="../../assets/img/icon/academy.svg"
                        alt="Icon academy"
                      />
                    </div>
                    <div class="w-5/6">
                      <h2 class="uppercase tracking-widest text-xs font-bold leading-3">EDUCACIÓN continua</h2>
                      <label class="uppercase text-xss text-white tracking-wider mb-0">ACADEMY</label>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="scss" scoped>

button {
  padding: 1.5rem 0 !important; 
}

nav{
  background-color: rgba(7, 9, 22, 0.8);
}

.dropdown:hover {
  
  .dropdown-menu {
    @apply visible
  }

  .b-product{
    @apply text-bta-pink
  }

}

</style>
