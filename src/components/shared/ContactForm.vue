<template>
  <section v-if="loading" class="flex flex-col md:flex-row px-2 md:px-24 lg:px-48 my-32">
    <div class="flex flex-col md:w-1/2 mr-5">
      <h3 class="font-oswald text-center md:text-justify text-4xl leading-10 pb-5">NO ESPERES A SER VÍCTIMA DE <span class="lg:block">UN CIBERATAQUE </span></h3>
      <p class="font-inconsalata text-center md:text-justify text-xl text-white">
        Muchas gracias por confiar en nuestros servicios <br />
        ¡Nos encantara mostrarte lo que nuestra herramienta puede hacer por tu
        negocio!<br/>
        Dentro de las próximas 24 horas, un ejecutivo tomará contacto con usted.
      </p>
    </div>
    <div class="box-plane">
      <Plane/>
    </div>
  </section>
  <section  v-else id="contact" class="flex flex-col md:flex-row px-2 md:px-24 lg:px-48 my-32">
    <div class="flex flex-col md:w-1/2 mr-5">
      <h3 class="font-oswald text-center md:text-justify text-4xl leading-10 pb-5">NO ESPERES A SER VÍCTIMA DE <span class="lg:block">UN CIBERATAQUE </span></h3>
      <p class="font-inconsalata text-center md:text-justify text-xl text-white">
        ¿Te gustaría saber más sobre nuestros servicios? <br />
        ¡Nos encantaría mostrarte lo que nuestra herramienta puede hacer por tu
        negocio!<br/>
        Completa el formulario y nos comunicaremos dentro de los próximos 24
        horas, donde enviaremos la demostración y podremos aclarar tus dudas.
      </p>
    </div>
    <br class="md:hidden"/>
    <form
      action=""
      @submit.prevent="submit"
      class="w-full md:w-1/2 mt-2 px-2"
    >
      <div class="flex items-center w-full border-2 border-white">
        <feather size="18" type="user" class="mx-3"></feather>
        <input
          class="h-10 w-11/12 bg-transparent placeholder-white font-inconsalata focus:outline-none rounded-r-full"
          v-model="$v.name.$model"
          type="text"
          id="name"
          placeholder="Nombre"
        />
      </div>
      <span v-if="$v.name.$dirty">
        <span class="font-inconsalata text-white ml-4" v-if="!$v.name.required">
          <feather size="13" type="alert-triangle"></feather>
          Nombre es requerido.
        </span>
      </span>
      <br />
      <div class="flex items-center w-full border-2 border-white">
        <feather size="18" type="mail" class="mx-3"></feather>
        <input
          class="h-10 w-11/12 bg-transparent placeholder-white font-inconsalata focus:outline-none rounded-r-full"
          type="email"
          id="email"
          name="email"
          placeholder="Correo electrónico"
          v-model="$v.email.$model"
        />
      </div>
      <span v-if="$v.email.$dirty">
        <span class="font-inconsalata text-white ml-4" v-if="!$v.email.email">
          <feather size="13" type="alert-triangle"></feather>
          Porfavor ingrese un email valido. 
        </span>
        <span class="font-inconsalata text-white ml-4" v-if="!$v.email.required">
          <feather size="13" type="alert-triangle"></feather>
          Email es requerido.
        </span>
      </span>
      <br />
      <div class="flex items-center w-full border-2 border-white">
        <feather size="18" type="link" class="mx-3"></feather>
        <input
          class="h-10 w-11/12 bg-transparent placeholder-white font-inconsalata focus:outline-none rounded-r-full"
          type="web"
          id="web"
          name="web"
          placeholder="Sitio web"
          v-model="$v.web.$model"
        />
      </div>
      <span v-if="$v.email.$dirty">
        <span class="font-inconsalata text-white ml-4" v-if="!$v.email.email">
          <feather size="13" type="alert-triangle"></feather>
          Porfavor ingrese un sitio web valido. 
        </span>
        <span class="font-inconsalata text-white ml-4" v-if="!$v.email.required">
          <feather size="13" type="alert-triangle"></feather>
          El sitio web es requerido. 
        </span>
      </span>
      <br />
      <div class="flex items-center border-2 border-white">
        <feather size="18" type="link" class="ml-3"></feather>
        <select id="industry" name="industry" class="bg-transparent px-2 py-3 text-white w-11/12 font-inconsalata focus:outline-none">
          <option class="bg-bta-gray" selected disabled>Tipo de industria:</option>
          <option class="bg-bta-gray" v-for="(option, i) in options" :key="i" :value="option">{{option}}</option>
        </select>
      </div>
      <br />
      <div class="w-full ">
        <VuePhoneNumberInput
          v-model="$v.phone.$model"
          color="pink"
          type="integer"
          dark-color="#a91870"
          size="2000"
          :translations="{
            countrySelectorLabel: 'Codigo del pais',
            phoneNumberLabel: 'Número de telefono',
            example: 'Ejemplo :'
          }"
          default-country-code="CL"
          dark
        />
      </div>
      <span v-if="$v.phone.$dirty">
        <span class="font-inconsalata text-white ml-4" v-if="!$v.phone.required">
          <feather size="13" type="alert-triangle"></feather>
          El número de telefono es requerido.
        </span>
      </span>
      <br />
      <div class="flex items-center">
        <input
          id="remember_me"
          class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer"
          v-model="$v.btaCondition.$model"
          type="checkbox"
        />
        <label
          for="remember_me"
          class="ml-2 block text-sm leading-5 font-inconsalata text-white cursor-pointer"
        >
          Acepto términos y condiciones para la realización de un escaneo
          básico.
        </label>
      </div>

      <br />
      <br />

      <div class="text-center">
        <input
          class="px-16 py-2 font-bold font-inconsalata tracking-widest bg-bta-pink border-2 border-white"
          type="submit"
          value="Solicita Demo"
          :disabled="submitStatus === 'PENDING'"
          :input="contact"
        />
      </div>
    </form>
  </section>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import Plane from "../landing/plane.vue";
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
      ]
    };
  },
  validations: {
    name: {
      required
    },
    email: {
      required,
      email
    },
    web: {
      required
    },
    // industry: {
    //   required
    // },
    btaCondition: {
      required
    },
    phone: {
      required
    },
  },
  methods: {
    contact() {},
    showFlashMessage(element) {
      var event = new CustomEvent("showFlashMessage");
      element.dispatchEvent(event);
    },
    submit() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$swal.fire({
          title: "Error!",
          text: "Se ha olvidado se llenar algunos datos.",
          icon: "warning",
          confirmButtonText: "Ok"
        });
      } else {
        this.loading = true;
        this.axios
          .post("https://ovisoc.backtrackacademy.com/api/v1/external_reports", {
            params: {
              name: this.name,
              email: this.email,
              target: this.web,
              policy_privacy: this.btaCondition,
              telephone: this.phone
            }
          })
          .then(response => {
            console.log(response);
            this.$swal.fire({
              title: "Gracias!",
              text:
                "Dentro de las próximas 24 horas, un ejecutivo tomará contacto con usted.",
              icon: "success",
              confirmButtonText: "Ok"
            });
            this.submitStatus = "PENDING";
            setTimeout(() => {
              this.submitStatus = "OK";
            }, 500);
          })
          .catch(e => {
            console.log(e);
            this.loading = false;
            this.$swal.fire({
              title: "Error!",
              text: "Algo ha salido mal",
              icon: "error",
              confirmButtonText: "Ok"
            });
          });
      }
    }
  },
  components: {
    VuePhoneNumberInput,
    Plane
  }
};
</script>

<style lang="scss" scoped>
#MazPhoneNumberInput {
  @apply border-2;
  @apply border-white;
  @apply mb-3;
}
input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, textarea:-webkit-autofill, textarea:-webkit-autofill:hover, textarea:-webkit-autofill:focus, select:-webkit-autofill, select:-webkit-autofill:hover, select:-webkit-autofill:focus{
  border: none;
}
.box-plane{
  position: relative;
}
</style>
