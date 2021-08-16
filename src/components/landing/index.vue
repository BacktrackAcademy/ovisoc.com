<template>
  <main class="">
    <section class="lg:h-top-hero px-5 lg:px-0 md:px-24 py-16 flex justify-between items-center bg-img bg-cover">
      <div class="w-full lg:max-w-screen-xl text-center m-auto px-8">
        <h1 class="font-oswald ">
          <span class="block font-roboto text-4xl sm:text-6xl leading-none">Monitoreo continuo de ciberseguridad para empresas.</span>
        </h1>
        <p class="font-ibm font-light text-white py-10 text-lg sm:text-2xl w-5/6 m-auto">
          No esperes a ser víctima de un ciberataque, conoce nuestras soluciones que proveerán una barrera de seguridad para tu empresa.
        </p>
        <!-- <a href="/#contact" class="text-black font-oswald tracking-widest uppercase text-xl py-2 px-10 lg:px-8 bg-white" >
          Contáctanos »
        </a> -->
        <div class="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-5">
          <button
            class="w-full max-w-xs sm:w-64 py-3 text-xl rounded-full bg-white hover:bg-blue-text text-blue-text hover:text-white transition font-ibm"
          >
            Comencemos
          </button>
          <button
            class="w-full max-w-xs sm:w-64 py-3 text-xl rounded-full bg-principal-purple hover:bg-blue-text text-white hover:text-white transition font-ibm"
          >
            Quiero una demo
          </button>
        </div>
      </div>
    </section>

    <section class="bg-blue-light-dark py-28 lg:py-44">
      <div class="m-auto flex flex-col lg:flex-row lg:max-w-screen-lg xl:max-w-screen-2xl justify-center items-center gap-12 lg:gap-0">
        <div class="w-2/3 lg:w-1/2 lg:pl-24">
          <h2 class="uppercase font-bold font-roboto text-4xl sm:text-5xl leading-none mb-6">Monitorea el riesgo en todo su <span class="text-principal-purple">Ecosistema</span></h2>
          <p class="lg:w-9/12 text-white font-ibm text-xl leading-tight mb-8 lg:mb-4">Seguimiento continuo que te permite administrar y hacer visibles los cambios de infraestructura cuando ocurren en la infraestructura local y en la nube.</p>
          <div class="text-center lg:text-left text-principal-purple font-ibm text-xl font-bold">Visualize > Prioritize > Validate</div>
        </div>
        <div class="w-10/12 md:w-2/3 lg:w-1/2 flex-shrink-0">
          <ul class="m-auto lg:m-0 lg:pl-10 flex flex-col gap-20 w-min">
            <li class="flex items-end">
              <svg class="flex-shrink-0 w-14 sm:w-20" viewBox="0 0 124 96.903">
                <path id="Path_1571" data-name="Path 1571" d="M3,72.7A27.187,27.187,0,0,0,30.187,99.888h61.17a33.983,33.983,0,1,0-.68-67.962A33.994,33.994,0,1,0,24.2,46.175,27.193,27.193,0,0,0,3,72.7Z" transform="translate(-2 -3.984)" fill="none" stroke="#7773f4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </svg>
              <div class="flex items-center gap-3 mb-0 sm:mb-2 -ml-4 sm:-ml-6 w-full">
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-principal-purple rounded-full"></div>
                  <div class="border-b border-t border-principal-purple w-8 sm:w-40"></div>
                </div>
                <p class="text-white text-lg font-ibm w-max ml-auto">External assets</p>
              </div>
            </li>

            <li class="flex items-end">
              <svg class="flex-shrink-0 w-14 sm:w-20" viewBox="0 0 124 121.468">
                <path id="Path_1570" data-name="Path 1570" d="M111.444,122.468V16.274A13.417,13.417,0,0,0,97.889,3H30.111A13.417,13.417,0,0,0,16.556,16.274V122.468m94.889,0H125m-13.556,0H77.556m-61,0H3m13.556,0H50.444M43.667,29.548h6.778M43.667,56.1h6.778M77.556,29.548h6.778M77.556,56.1h6.778M50.444,122.468V89.282a6.709,6.709,0,0,1,6.778-6.637H70.778a6.709,6.709,0,0,1,6.778,6.637v33.185m-27.111,0H77.556" transform="translate(-2 -2)" fill="none" stroke="#7773f4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </svg>
              <div class="flex items-center gap-3 mb-0 sm:mb-2 -ml-4 sm:-ml-6 w-full">
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-principal-purple rounded-full"></div>
                  <div class="border-b border-t border-principal-purple w-8 sm:w-40"></div>
                </div>
                <p class="text-white text-lg font-ibm w-max ml-auto">Internal assets</p>
              </div>
            </li>

            <li class="flex items-end">
              <svg class="-mb-1 sm:-mb-4 flex-shrink-0 w-14 sm:w-20" viewBox="0 0 121.984 118.413">
                <path id="Path_1572" data-name="Path 1572" d="M40.864,69.818a18.9,18.9,0,0,0,0-17.34m0,17.34A20.2,20.2,0,0,1,18.395,80.011a19.253,19.253,0,0,1,0-37.724A20.2,20.2,0,0,1,40.864,52.479m0,17.34L85.049,91.241M40.864,52.479,85.049,31.056m0,0a20.285,20.285,0,0,0,26.819,8.667,19.113,19.113,0,0,0,8.938-26.006A20.285,20.285,0,0,0,93.987,5.05a19.113,19.113,0,0,0-8.938,26.006Zm0,60.184A19.116,19.116,0,0,0,93.99,117.25a20.288,20.288,0,0,0,26.823-8.67,19.116,19.116,0,0,0-8.941-26.009,20.288,20.288,0,0,0-26.823,8.67Z" transform="translate(123.985 120.356) rotate(180)" fill="none" stroke="#7773f4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </svg>
              <div class="flex items-center gap-3 mb-2 -ml-3 sm:-ml-4 w-full">
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-principal-purple rounded-full"></div>
                  <div class="border-b border-t border-principal-purple w-8 sm:w-40"></div>
                </div>
                <p class="text-white text-lg font-ibm ml-auto">Stakeholders</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="bg-total-back">
      <div class="flex flex-col md:flex-row justify-between m-auto max-w-screen-2xl pt-20 pb-10 overflow-hidden">
        <div class="p-5 sm:pl-24 flex flex-col justify-center text-center sm:text-left">
          <div class="font-roboto text-4xl uppercase m-auto sm:m-0 mb-6 sm:mb-6 max-w-sm leading-10">No esperes a ser víctima de un ciberataque</div>
          <ul class="text-principal-purple font-ibm flex flex-col items-center sm:items-baseline gap-2">
            <li class="flex flex-col items-center sm:items-start text-lg">
              <div @click="toggleTool('internal')" class="flex items-center gap-4 cursor-pointer">
                <svg class="w-6" width="41.831" height="41.118" viewBox="0 0 41.831 41.118">
                  <path id="Path_1550" data-name="Path 1550" d="M16.277,22.983,20.7,27.409l8.851-8.851M41.986,9.671a26.454,26.454,0,0,1-19.07-6.727A26.454,26.454,0,0,1,3.845,9.671a26.592,26.592,0,0,0,19.07,32.391A26.592,26.592,0,0,0,41.986,9.671Z" transform="translate(-2 -1.944)" fill="none" stroke="#5652cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
                Internal
              </div>
              <div
                :class="this.currentTool === 'internal' ? '' : 'opacity-0 h-0 pointer-events-none'"
                class="text-white"
              >
                OVISOC INTERNAL es una solución que evalúa de manera continua la red interna de la empresa permitiendo enfrentar amenazas.
              </div>
            </li>
            <li class="flex flex-col items-center sm:items-start text-lg">
              <div @click="toggleTool('discover')" class="flex items-center gap-4 cursor-pointer">
                <svg class="w-6" width="41.831" height="41.118" viewBox="0 0 41.831 41.118">
                  <path id="Path_1550" data-name="Path 1550" d="M16.277,22.983,20.7,27.409l8.851-8.851M41.986,9.671a26.454,26.454,0,0,1-19.07-6.727A26.454,26.454,0,0,1,3.845,9.671a26.592,26.592,0,0,0,19.07,32.391A26.592,26.592,0,0,0,41.986,9.671Z" transform="translate(-2 -1.944)" fill="none" stroke="#5652cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
                Discover
              </div>
              <div
                :class="this.currentTool === 'discover' ? '' : 'opacity-0 h-0 pointer-events-none'"
                class="text-white">OVISOC INTERNAL es una solución que evalúa de manera continua la red interna de la empresa permitiendo enfrentar amenazas.
              </div>
            </li>
            <li class="flex flex-col items-center sm:items-start text-lg">
              <div @click="toggleTool('monitoring')" class="flex items-center gap-4 cursor-pointer">
                <svg class="w-6" width="41.831" height="41.118" viewBox="0 0 41.831 41.118">
                  <path id="Path_1550" data-name="Path 1550" d="M16.277,22.983,20.7,27.409l8.851-8.851M41.986,9.671a26.454,26.454,0,0,1-19.07-6.727A26.454,26.454,0,0,1,3.845,9.671a26.592,26.592,0,0,0,19.07,32.391A26.592,26.592,0,0,0,41.986,9.671Z" transform="translate(-2 -1.944)" fill="none" stroke="#5652cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
                Monitoring
              </div>
              <div
                :class="this.currentTool === 'monitoring' ? '' : 'opacity-0 h-0 pointer-events-none'"
                class="text-white">OVISOC INTERNAL es una solución que evalúa de manera continua la red interna de la empresa permitiendo enfrentar amenazas.
              </div>
            </li>
            <li class="flex flex-col items-center sm:items-start text-lg">
              <div @click="toggleTool('research')" class="flex items-center gap-4 cursor-pointer">
                <svg class="w-6" width="41.831" height="41.118" viewBox="0 0 41.831 41.118">
                  <path id="Path_1550" data-name="Path 1550" d="M16.277,22.983,20.7,27.409l8.851-8.851M41.986,9.671a26.454,26.454,0,0,1-19.07-6.727A26.454,26.454,0,0,1,3.845,9.671a26.592,26.592,0,0,0,19.07,32.391A26.592,26.592,0,0,0,41.986,9.671Z" transform="translate(-2 -1.944)" fill="none" stroke="#5652cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
                Research
              </div>
              <div
                :class="this.currentTool === 'research' ? '' : 'opacity-0 h-0 pointer-events-none'"
                class="text-white"
              >OVISOC INTERNAL es una solución que evalúa de manera continua la red interna de la empresa permitiendo enfrentar amenazas.
              </div>
            </li>
          </ul>
        </div>
        <img class="w-full max-w-6xl h-full" src="../../assets/img/mockup-blockphi-hq.png" alt="">
      </div>
    </section>

    <section class="bg-blue-light-dark flex justify-center items-center pt-24 pb-28">
      <div>
        <div class="text-center font-roboto font-bold text-5xl mb-14">Obtén tu calificación</div>
        <div class="m-auto w-52 md:w-full md:max-w-screen-sm xl:max-w-screen-lg">
          <carousel
            :navigationEnabled = "true"
            :paginationEnabled = "true"
            :loop = "true"
            :perPage = "1"
            :perPageCustom="[[768, 3], [1280, 6]]"
          >
            <slide>
              <div class="rounded-full h-24 w-24 bg-black">
                <div class="rounded-full bg-bta bg-contain bg-no-repeat bg-center w-full h-full"></div>
              </div>
            </slide>
            <slide>
              <div class="rounded-full h-24 w-24 bg-black">
                <div class="rounded-full bg-bta bg-contain bg-no-repeat bg-center w-full h-full"></div>
              </div>
            </slide>
            <slide>
              <div class="rounded-full h-24 w-24 bg-black">
                <div class="rounded-full bg-bta bg-contain bg-no-repeat bg-center w-full h-full"></div>
              </div>
            </slide>
            <slide>
              <div class="rounded-full h-24 w-24 bg-black">
                <div class="rounded-full bg-bta bg-contain bg-no-repeat bg-center w-full h-full"></div>
              </div>
            </slide>
            <slide>
              <div class="rounded-full h-24 w-24 bg-black">
                <div class="rounded-full bg-bta bg-contain bg-no-repeat bg-center w-full h-full"></div>
              </div>
            </slide>
            <slide>
              <div class="rounded-full h-24 w-24 bg-black">
                <div class="rounded-full bg-bta bg-contain bg-no-repeat bg-center w-full h-full"></div>
              </div>
            </slide>
            <slide>
              <div class="rounded-full h-24 w-24 bg-black">
                <div class="rounded-full bg-bta bg-contain bg-no-repeat bg-center w-full h-full"></div>
              </div>
            </slide>
            <slide>
              <div class="rounded-full h-24 w-24 bg-black">
                <div class="rounded-full bg-bta bg-contain bg-no-repeat bg-center w-full h-full"></div>
              </div>
            </slide>
            <slide>
              <div class="rounded-full h-24 w-24 bg-black">
                <div class="rounded-full bg-bta bg-contain bg-no-repeat bg-center w-full h-full"></div>
              </div>
            </slide>
            <slide>
              <div class="rounded-full h-24 w-24 bg-black">
                <div class="rounded-full bg-bta bg-contain bg-no-repeat bg-center w-full h-full"></div>
              </div>
            </slide>
            <slide>
              <div class="rounded-full h-24 w-24 bg-black">
                <div class="rounded-full bg-bta bg-contain bg-no-repeat bg-center w-full h-full"></div>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </section>

    <section class="bg-total-back py-36">
      <div>
        <div class="flex flex-col items-center px-5 mobile:px-20 mb-10 md:mb-20">
          <span class="font-roboto text-white text-5xl font-bold text-center mobile:text-left">Nuestros Servicios</span>
          <p class="font-ibm text-white text-xl max-w-3xl text-center font-light">Y no esperes a ser víctima de un ciberataque, conoce nuestras soluciones de ciberseguridad</p>
        </div>
        <div class="flex flex-col md:flex-row justify-center items-center md:px-10">
          <div class="flex flex-col gap-20 font-light mb-10 md:mb-0">
            <a class="flex gap-8 flex-col mobile:flex-row items-center ml-1" href="#">
              <svg class="w-20" viewBox="0 0 51.717 38.473">
                <g id="Group_1725" data-name="Group 1725" transform="translate(-1.458 -4)">
                  <path id="Path_1557" data-name="Path 1557" d="M24.631,16.816A7.816,7.816,0,1,1,16.816,9a7.816,7.816,0,0,1,7.816,7.816Z" transform="translate(10.501 6.421)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  <path id="Path_1558" data-name="Path 1558" d="M2.458,23.236a26.061,26.061,0,0,1,49.717,0,26.061,26.061,0,0,1-49.717,0Z" transform="translate(0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </g>
              </svg>
              <div class="flex flex-col gap-3 text-center mobile:text-left">
                <h2 class="text-principal-purple text-xl font-ibm leading-7">OVI Discover</h2>
                <p class="text-white text-xl font-ibm w-60 leading-5">Descubre activos en tiempo real</p>
              </div>
            </a>
            <a class="flex gap-8 flex-col mobile:flex-row items-center ml-1" href="#">
              <svg class="w-16 px-2 box-content" viewBox="0 0 45.687 45.687">
                <path id="Path_1559" data-name="Path 1559" d="M25.843,9.461V4m0,5.461a5.461,5.461,0,0,0,0,10.922m0-10.922a5.461,5.461,0,1,1,0,10.922M9.461,42.226a5.461,5.461,0,1,0,0-10.922m0,10.922a5.461,5.461,0,1,1,0-10.922m0,10.922v5.461m0-16.382V4M25.843,20.382v27.3m16.382-5.461a5.461,5.461,0,1,0,0-10.922m0,10.922a5.461,5.461,0,0,1,0-10.922m0,10.922v5.461m0-16.382V4" transform="translate(-3 -3)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </svg>
              <div class="flex flex-col gap-3 text-center mobile:text-left">
                <h2 class="text-principal-purple text-xl font-ibm leading-7">OVI Assetment</h2>
                <p class="text-white text-xl font-ibm w-60 leading-5">Transforma datos en respuestas</p>
              </div>
            </a>
            <a class="flex gap-8 flex-col mobile:flex-row items-center ml-1" href="#">
              <svg class="w-16 px-2 box-content" viewBox="0 0 45.687 45.687">
                <path id="Path_1560" data-name="Path 1560" d="M3,5.427A2.427,2.427,0,0,1,5.427,3H44.259a2.427,2.427,0,0,1,2.427,2.427V11.7a2.427,2.427,0,0,1-.711,1.716L30.408,28.986A2.427,2.427,0,0,0,29.7,30.7v6.276l-9.708,9.708V30.7a2.427,2.427,0,0,0-.711-1.716L3.711,13.419A2.427,2.427,0,0,1,3,11.7Z" transform="translate(-2 -2)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </svg>
              <div class="flex flex-col gap-3 text-center mobile:text-left">
                <h2 class="text-principal-purple text-xl font-ibm leading-7">OVI Validate</h2>
                <p class="text-white text-xl font-ibm w-60 md:w-72 leading-5">El riesgo cuantitativo arroja escenarios de ataque reales</p>
              </div>
            </a>
          </div>
          <div class="relative max-w-7xl xl:max-w-screen-md w-full px-8 mobile:px-0">
            <img class="w-full" src="../../assets/img/hero-ovisoc.png" alt="mockup-ovisoc" />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-total-back py-20">
      <div class="flex flex-col items-center gap-14">
        <span class="text-principal-purple text-center text-xl font-ibm uppercase">Cumplimiento y certificación</span>
        <ul class="flex gap-x-44 gap-y-10 max-w-screen-xl w-full px-24 justify-center flex-wrap">
          <li class="flex flex-col items-center gap-3">
            <svg class="text-transparent fill-current hover:fill-shield transition-all" width="63.684" height="62.58" viewBox="0 0 63.684 62.58">
              <path id="Path_1578" data-name="Path 1578" d="M23.561,33.978l6.854,6.854L44.122,27.124M63.374,13.362A40.968,40.968,0,0,1,33.842,2.944,40.968,40.968,0,0,1,4.309,13.362,41.181,41.181,0,0,0,33.842,63.524,41.181,41.181,0,0,0,63.374,13.362Z" transform="translate(-2 -1.944)" stroke="#5652cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </svg>
            <span class="font-roboto font-bold text-2xl">SOC2</span>
          </li>
          <li class="flex flex-col items-center gap-3">
            <svg class="text-transparent fill-current hover:fill-shield transition-all" width="63.684" height="62.58" viewBox="0 0 63.684 62.58">
              <path id="Path_1578" data-name="Path 1578" d="M23.561,33.978l6.854,6.854L44.122,27.124M63.374,13.362A40.968,40.968,0,0,1,33.842,2.944,40.968,40.968,0,0,1,4.309,13.362,41.181,41.181,0,0,0,33.842,63.524,41.181,41.181,0,0,0,63.374,13.362Z" transform="translate(-2 -1.944)" stroke="#5652cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </svg>
            <span class="font-roboto font-bold text-2xl">ISO 27001</span>
          </li>
          <li class="flex flex-col items-center gap-3">
            <svg class="text-transparent fill-current hover:fill-shield transition-all" width="63.684" height="62.58" viewBox="0 0 63.684 62.58">
              <path id="Path_1578" data-name="Path 1578" d="M23.561,33.978l6.854,6.854L44.122,27.124M63.374,13.362A40.968,40.968,0,0,1,33.842,2.944,40.968,40.968,0,0,1,4.309,13.362,41.181,41.181,0,0,0,33.842,63.524,41.181,41.181,0,0,0,63.374,13.362Z" transform="translate(-2 -1.944)" stroke="#5652cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </svg>
            <span class="font-roboto font-bold text-2xl">PCI</span>
          </li>
          <li class="flex flex-col items-center gap-3">
            <svg class="text-transparent fill-current hover:fill-shield transition-all" width="63.684" height="62.58" viewBox="0 0 63.684 62.58">
              <path id="Path_1578" data-name="Path 1578" d="M23.561,33.978l6.854,6.854L44.122,27.124M63.374,13.362A40.968,40.968,0,0,1,33.842,2.944,40.968,40.968,0,0,1,4.309,13.362,41.181,41.181,0,0,0,33.842,63.524,41.181,41.181,0,0,0,63.374,13.362Z" transform="translate(-2 -1.944)" stroke="#5652cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </svg>
            <span class="font-roboto font-bold text-2xl">NIST</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="bg-total-back pt-20 pb-40">
      <div class="max-w-screen-lg flex flex-col items-center m-auto">
        <span class="inline-block px-10 max-w-3xl text-3xl md:text-5xl font-roboto font-bold uppercase text-center">Monitorea tu eco<span class="text-principal-purple">sistema</span> en tiempo real</span>
        <img class="w-full" src="../../assets/img/mockup-blockphi-hq.png" alt="mockup-ovisoc" />
        <div
            class="px-8 max-w-xs w-auto sm:w-64 py-1 sm:py-3 text-lg sm:text-xl rounded-full bg-principal-purple hover:bg-blue-text text-white hover:text-white transition font-ibm text-center mt-4"
          >
            Comencemos
        </div>
      </div>
    </section>

    <section class="bg-blue-light-dark py-20 flex justify-center" id="pricesGrid">
      <div class="flex flex-col gap-10 items-end">
        <div class="grid font-ibm font-light text-principal-purple prices mx-10">
          <div></div>
          <div class="flex flex-col items-center gap-4 text-white mobile:mb-10">
            <span class="text-2xl mobile:text-4xl">$99</span>
            <span class="text-md mobile:text-xl">Starter</span>
          </div>
          <div class="flex flex-col items-center gap-4 text-white mb-10">
            <span class="text-2xl mobile:text-4xl">$999</span>
            <span class="text-md mobile:text-xl">Professional</span>
          </div>
          <div class="flex flex-col items-center gap-4 text-white mb-10">
            <svg class="flex-shrink-0 w-14 " viewBox="0 0 124 121.468">
              <path id="Path_1570" data-name="Path 1570" d="M111.444,122.468V16.274A13.417,13.417,0,0,0,97.889,3H30.111A13.417,13.417,0,0,0,16.556,16.274V122.468m94.889,0H125m-13.556,0H77.556m-61,0H3m13.556,0H50.444M43.667,29.548h6.778M43.667,56.1h6.778M77.556,29.548h6.778M77.556,56.1h6.778M50.444,122.468V89.282a6.709,6.709,0,0,1,6.778-6.637H70.778a6.709,6.709,0,0,1,6.778,6.637v33.185m-27.111,0H77.556" transform="translate(-2 -2)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </svg>
            <span class="text-md mobile:text-xl">Enterprise</span>
          </div>

          <div class="grid-label">Activos</div>
          <div class="grid-value">1 IP</div>
          <div class="grid-value">10 IP</div>
          <div class="grid-value"> > 25 IP</div>

          <div class="grid-label">SLA Soporte</div>
          <div class="grid-value">8 Hours</div>
          <div class="grid-value">4 Hours</div>
          <div class="grid-value">1 Hour</div>

          <div class="grid-label">Número de auditorías</div>
          <div class="grid-value">5</div>
          <div class="grid-value">50</div>
          <div class="grid-value"> > 100 </div>

          <div class="grid-label">Evaluación de riesgos</div>
          <div class="grid-value"><div class="close icon"></div></div>
          <div class="grid-value"><div class="check icon"></div></div>
          <div class="grid-value"><div class="check icon"></div></div>

          <div class="grid-label">Reportes formato PDF</div>
          <div class="grid-value"><div class="close icon"></div></div>
          <div class="grid-value"><div class="check icon"></div></div>
          <div class="grid-value"><div class="check icon"></div></div>

          <div class="grid-label">Auditorías Internas</div>
          <div class="grid-value"><div class="check icon"></div></div>
          <div class="grid-value"><div class="check icon"></div></div>
          <div class="grid-value"><div class="check icon"></div></div>

          <div class="grid-label">Auditorías Externas</div>
          <div class="grid-value"><div class="check icon"></div></div>
          <div class="grid-value"><div class="check icon"></div></div>
          <div class="grid-value"><div class="check icon"></div></div>

          <div class="grid-label">Monitoreo continuo</div>
          <div class="grid-value"><div class="close icon"></div></div>
          <div class="grid-value"><div class="close icon"></div></div>
          <div class="grid-value"><div class="check icon"></div></div>

          <div class="grid-label">Integración CI/CD</div>
          <div class="grid-value"><div class="close icon"></div></div>
          <div class="grid-value"><div class="close icon"></div></div>
          <div class="grid-value"><div class="check icon"></div></div>

          <div class="grid-label">Antiphishing</div>
          <div class="grid-value"><div class="close icon"></div></div>
          <div class="grid-value"><div class="check icon"></div></div>
          <div class="grid-value"><div class="check icon"></div></div>

          <a
            class="button-purple md:hidden col-span-2"
            href="#contactForm"
          >
            Comencemos
          </a>
          <a
            class="button-purple col-start-2 hidden md:inline-block"
            href="#contactForm"
          >
            Comencemos
          </a>
          <a
            class="bg-transparent button-purple col-start-3"
            href="#contactForm"
          >
            Comencemos
          </a>
          <a
            class="bg-transparent button-purple col-start-4"
            href="#contactForm"
          >
            Comencemos
          </a>
        </div>

      </div>
    </section>
    <div id="contactForm">
      <ContactForm />
    </div>
  </main>
</template>

<script>
import ContactForm from "../shared/ContactForm";
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: "Main",
  components: {
    ContactForm,
    Carousel,
    Slide
  },
  data() {
    return {
      ovisoc: "https://ovisoc.backtrackacademy.com/",
      cves: [],
      cpes: [],
      vendors: [],
      data: [],
      currentTool: "",
    }
  },
  mounted() {
    this.loadInfo();
    this.scrollTop();
  },
  created() {
    this.$root.$refs.Main = this;
  },
  methods: {
    toggleTool: function (tool) {
      this.currentTool !== tool ? this.currentTool = tool: this.currentTool = '';
    },
    redirectionGrid: function () {
      window.location.href = "#pricesGrid"
    },
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

<style>
.VueCarousel-dot-container{
  display: none !important;
}
.VueCarousel-slide{
  @apply flex justify-center
}
.grid-label{
  @apply justify-self-end text-white py-4 mr-4 text-right
}
.grid-value{
  @apply w-full flex justify-center items-center border-l border-principal-purple border-opacity-50 text-center
}
.button-purple{
  @apply w-min px-8 py-2 m-auto mt-6 text-lg rounded-full bg-principal-purple hover:bg-blue-text text-white hover:text-white transition font-ibm text-center;
}
.bg-bta{
  background-image: url("../../assets/img/logo.svg");
}
html{
  scroll-behavior: smooth;
}
.check.icon {
  margin-left: 3px;
  margin-top: -6px;
  width: 25px;
  height: 12px;
  @apply text-principal-purple absolute border-b border-l border-principal-purple transform -rotate-45
}
.close.icon {
  width: 31px;
  height: 31px;
  @apply text-principal-purple absolute mt-0 ml-0
}
.close.icon:before {
  content: '';
  position: absolute;
  top: 15px;
  width: 31px;
  left: 0px;
  height: 1px;
  background-color: currentColor;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
}
.close.icon:after {
  content: '';
  position: absolute;
  top: 15px;
  left: 0px;
  width: 31px;
  height: 1px;
  background-color: currentColor;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}
.random{
  border-radius: 100%;
  width: 150px;
  height: 150px;
  margin-top: 10px;
  position:static;
  background-color: white;
  z-index: 2;
}
.box-text{
  z-index: 1;
  margin-top: -75px;
  border-radius: 15px;
}

/* PRICES GRID */
.prices{
  overflow: hidden;
  grid-template-columns: 1fr minmax(4rem, 1fr) 0 0
}
.prices>div:nth-child(4n-1),
.prices>div:nth-child(4n){
  visibility: hidden;
}
/* .prices>div:nth-child(3n){
  visibility: hidden;
} */

@media (min-width: 768px) {
  .prices{
    grid-template-columns: 1fr minmax(4rem, 1fr) minmax(4rem, 1fr) minmax(4rem, 1fr);
  }
  .prices>div:nth-child(4n),
  .prices>div:nth-child(4n-1){
    visibility: inherit;
  }
}

/* @media (min-width: 768px) {
  .prices{
    grid-template-columns: 1fr minmax(4rem, 1fr) minmax(4rem, 1fr) minmax(4rem, 1fr);
  }
  .prices>div:nth-child(4n){
    visibility: inherit;
  }
} */
</style>
