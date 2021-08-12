<template>
  <div class="flex flex-col md:flex-row bg-blue-light-dark items-center justify-center gap-10 lg:gap-5 px-6 sm:px-10 py-16 md:py-36">
    <div class="flex flex-col gap-10 text-center sm:text-left max-w-lg">
      <p class="text-white text-3xl sm:text-4xl font-roboto">
        Solicite el <span class="text-blue-text">Free trial</span> &
        <br />Pruebe nuestra Plataforma
      </p>
      <p class="text-white text-lg sm:text-xl font-ibm font-light leading-8 sm:leading-8">
        Código estandarizado y optimizado que se adapta a la
        arquitectura de tu empresa. Compatible con todas las
        tecnologías web.
      </p>
      <p class="text-white text-lg sm:text-xl font-ibm font-light leading-8 sm:leading-8">
        Completa y envía este formulario y muy pronto un
        representante se pondrá en contacto con usted
      </p>
    </div>
    <div>
      <form action="">
        <div class="flex flex-col sm:flex-row gap-4 sm:gap-0">
          <div class="flex flex-col flex-grow">
            <label class="text-white" for="name">Nombre</label>
            <input
              class="h-10 w-full sm:w-11/12 bg-transparent border-blue-text border focus:outline-none rounded-full px-2 text-white"
              type="text"
            />
          </div>
          <div class="flex flex-col flex-grow">
            <label class="text-white" for="surname">Apellido</label>
            <input
              class="h-10 w-full bg-transparent border-blue-text border focus:outline-none rounded-full px-2 text-white"
              type="text"
            />
          </div>
        </div>
        <br />
        <div>
          <label class="text-white" for="company">Nombre de la empresa</label>
          <input
            class="h-10 w-full bg-transparent border-blue-text border focus:outline-none rounded-full px-2 text-white"
            id="company"
            type="text"
          />
        </div>
        <br />
        <div>
          <label class="text-white" for="email"
            >Correo electrónico de la empresa</label
          >
          <input
            class="h-10 w-full bg-transparent border-blue-text border focus:outline-none rounded-full px-2 text-white"
            id="email"
            type="text"
          />
        </div>
        <br />
        <div>
          <label class="text-white" for="profession">Profesión</label>
          <input
            class="h-10 w-full bg-transparent border-blue-text border focus:outline-none rounded-full px-2 text-white"
            type="text"
            name="profession"
            id="profession"
          />
        </div>
        <br />
        <div>
          <label class="text-white" for="phone">Número de Teléfono</label>
          <VuePhoneNumberInput
          type="integer"
          dark-color="#1F1E3C"
          size="2000"
          :translations="{
            countrySelectorLabel: 'Country code',
            phoneNumberLabel: 'Phone number',
            example: 'Ejemplo :'
          }"
          :border-radius="30"
          default-country-code="CL"
          dark
        />
        </div>
        <br />
        <div class="mb-12">
          <label class="text-white" for="range"
            >Selecciona el Tamaño de su Equipo</label
          >

          <input
            class="h-10 w-full bg-transparent border-blue-text border focus:outline-none rounded-full px-2 text-white"
            type="text"
            name="range"
            id="range"
          />
        </div>
        <div class="flex justify-center">
          <button
            class="px-8 py-2 rounded-full bg-principal-purple hover:bg-blue-text text-md text-white hover:text-white transition font-ibm font-light"
          >
            Solicitar demo
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
// import Plane from "./Plane";
export default {
  name: "ContactForm",
  data() {
    return {
      submitStatus: null,
      name: null,
      email: null,
      phone: null,
      btaCondition: false,
      web: null,
      industry: null,
      loading: false,
      options: [
        "Financiero",
        "Público/Gobierno",
        "Educacional",
        "Ciencia/Investigación/TI",
        "Cultura/Entretenimiento/Deporte",
      ],
    };
  },
  validations: {
    name: {
      required,
    },
    email: {
      required,
      email,
    },
    web: {
      required,
    },
    btaCondition: {
      required
    },
    phone: {
      required,
    },
  },
  methods: {},
  components: {
    VuePhoneNumberInput,
    // Plane,
  },
};
</script>
<style>
.vue-phone-number-input input.country-selector__input,
.vue-phone-number-input input.input-tel__input{
  border-color: #5652CC;
}
</style>