<template>
  <section
    v-if="loading"
    class="flex flex-col md:flex-row px-2 md:px-24 lg:px-48 my-32"
  >
    <div class="flex flex-col md:w-1/2 mr-5">
      <h3 class="font-roboto text-principal-purple text-3xl  pb-5">
        NO ESPERES A SER VÍCTIMA DE UN CIBERATAQUE
      </h3>
      <p class="font-ibm text-center md:text-justify text-xl text-white">
        Muchas gracias por confiar en nuestros servicios <br />
        ¡Nos encantara mostrarte lo que nuestra herramienta puede hacer por tu
        negocio!<br />
        Dentro de las próximas 24 horas, un ejecutivo tomará contacto con usted.
      </p>
    </div>
    <div class="box-plane">
      <Plane />
    </div>
  </section>
  <section v-else id="contact">
    <div
      class="flex flex-col md:flex-row bg-blue-light-dark items-center justify-center gap-10 lg:gap-5 px-6 sm:px-10 py-16 md:py-36"
    >
      <div class="flex flex-col gap-10 text-center sm:text-left max-w-lg">
        <p class="text-white text-3xl sm:text-4xl font-roboto">
          Solicite el <span class="text-blue-text">Free trial</span> &
          <br />Pruebe nuestra Plataforma
        </p>
        <p
          class="text-white text-lg sm:text-xl font-ibm font-light leading-8 sm:leading-8"
        >
          Código estandarizado y optimizado que se adapta a la arquitectura de
          tu empresa. Compatible con todas las tecnologías web.
        </p>
        <p
          class="text-white text-lg sm:text-xl font-ibm font-light leading-8 sm:leading-8"
        >
          Completa y envía este formulario y muy pronto un representante se
          pondrá en contacto con usted
        </p>
      </div>
      <div>
        <form action="" @submit.prevent="submit">
          <div>
            <label class="text-white font-ibm mb-1 " for="name"
              >Nombre Completo</label
            >
            <input
              class="h-10 mt-2 w-full bg-transparent border-blue-text border focus:outline-none rounded-full px-2 text-white"
              type="text"
              v-model="$v.name.$model"
            />
          </div>
          <span v-if="$v.name.$dirty">
            <span
              class="font-inconsalata text-white ml-4"
              v-if="!$v.name.required"
            >
              <feather size="13" type="alert-triangle"></feather>
              Nombre es requerido.
            </span>
          </span>
          <!-- <div class="flex flex-col flex-grow">
            <label class="text-white font-ibm mb-1 " for="surname">Apellido</label>
            <input
              class="h-10 w-full bg-transparent border-blue-text border focus:outline-none rounded-full px-2 text-white"
              type="text"

            />
          </div> -->
          <br />
          <div>
            <label class="text-white font-ibm mb-1 " for="company"
              >Empresa</label
            >
            <input
              class="h-10 mt-2 w-full bg-transparent border-blue-text border focus:outline-none rounded-full px-2 text-white"
              id="company"
              type="text"
              v-model="$v.bussines_name.$model"
            />
          </div>
          <span v-if="$v.bussines_name.$dirty">
            <span
              class="font-inconsalata text-white ml-4"
              v-if="!$v.bussines_name.required"
            >
              <feather size="13" type="alert-triangle"></feather>
              Nombre de la empresa es requerido.
            </span>
          </span>
          <br />
          <label class="text-white font-ibm mb-1 " for="company">Email</label>
          <input
            class="h-10 mt-2 w-full bg-transparent border-blue-text border focus:outline-none rounded-full px-2 text-white"
            type="email"
            id="email"
            name="email"
            v-model="$v.email.$model"
          />
          <br />

          <span v-if="$v.email.$dirty">
            <span
              class="font-inconsalata text-white ml-4"
              v-if="!$v.email.email"
            >
              <feather size="13" type="alert-triangle"></feather>
              Porfavor ingrese un email valido.
            </span>
            <span
              class="font-inconsalata text-white ml-4"
              v-if="!$v.email.required"
            >
              <feather size="13" type="alert-triangle"></feather>
              Email es requerido.
            </span>
          </span>
          <br />
          <div class="flex flex-col flex-grow">
            <label class="text-white font-ibm mb-2 " for="name"
              >Sitio Web
            </label>
            <input
              class="h-10 w-full bg-transparent border-blue-text border focus:outline-none rounded-full px-2 text-white"
              type="text"
              v-model="$v.target.$model"
            />
          </div>
          <span v-if="$v.target.$dirty">
            <span
              class="font-inconsalata text-white ml-4"
              v-if="!$v.target.required"
            >
              <feather size="13" type="alert-triangle"></feather>
              Sitio Web es requerido.
            </span>
          </span>
          <!-- <div>
          <label class="text-white font-ibm mb-1 " for="profession">Profesión</label>
          <input
            class="h-10 w-full bg-transparent border-blue-text border focus:outline-none rounded-full px-2 text-white"
            type="text"
            name="profession"
            id="profession"
          />
        </div> -->
          <br />
          <div>
            <label class="text-white font-ibm mb-1 " for="phone"
              >Número de Teléfono</label
            >
            <VuePhoneNumberInput
              class="mt-2"
              v-model="$v.phone.$model"
              type="integer"
              dark-color="#1F1E3C"
              size="2000"
              :translations="{
                countrySelectorLabel: 'Country code',
                phoneNumberLabel: 'Phone number',
                example: 'Ejemplo :',
              }"
              :border-radius="30"
              default-country-code="CL"
              dark
              valid-color= '#5652CC'
            />
          </div>
          <span v-if="$v.phone.$dirty">
            <span
              class="font-inconsalata text-white ml-4"
              v-if="!$v.phone.required"
            >
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
              class="ml-2 block font-ibm text-sm leading-5 font-inconsalata text-white cursor-pointer"
            >
              Acepto términos y condiciones para la realización de un escaneo
              básico.
            </label>
          </div>
          <br />
          <div class="text-center">
            <input
              class="px-8 py-3 rounded-full bg-principal-purple hover:bg-blue-text text-md text-white hover:text-white transition font-ibm font-light"
              type="submit"
              value="Solicita Demo"
              :disabled="submitStatus === 'PENDING'"
              :input="contact"
            />
          </div>
          <div class="flex justify-center">
            <!-- <button
            class="px-8 py-3 rounded-full bg-principal-purple hover:bg-blue-text text-md text-white hover:text-white transition font-ibm font-light"
            @click="submit()"
          >
            Solicitar demo
          </button> -->
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import Plane from "./plane";
export default {
  name: "ContactForm",
  data() {
    return {
      submitStatus: null,
      name: null,
      email: null,
      phone: null,
      bussines_name: null,
      target: null,
      industry: null,
      loading: false,
      btaCondition: false,
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
    bussines_name: {
      required,
    },
    target: {
      required,
    },
    phone: {
      required,
    },
    btaCondition: {
      required,
    },
  },
  methods: {
    contact() {},
    submit() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$swal.fire({
          title: "Error!",
          text: "Se ha olvidado se llenar algunos datos.",
          icon: "warning",
          confirmButtonText: "Ok",
        });
      } else {
        this.loading = true;
        this.axios
          .post("https://api.discover.ovisoc.com/api/v1/external_reports", {
            params: {
              name: this.name,
              email: this.email,
              target: this.target,
              bussines_name: this.bussines_name,
              policy_privacy: this.btaCondition,
              telephone: this.phone,
            },
          })
          .then((response) => {
            console.log(response);
            this.submitStatus = "PENDING";
            setTimeout(() => {
              this.submitStatus = "OK";
            }, 500);
          })
          .catch((e) => {
            console.log(e);
            this.loading = false;
            this.$swal.fire({
              title: "Error!",
              text: "Algo ha salido mal",
              icon: "error",
              confirmButtonText: "Ok",
            });
          });
      }
    },
  },
  components: {
    VuePhoneNumberInput,
    Plane,
  },
};
</script>
<style>
.vue-phone-number-input input.country-selector__input,
.vue-phone-number-input input.input-tel__input {
  border-color: #5652cc;
}
</style>
