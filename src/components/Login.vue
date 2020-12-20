<template>
  <div class="flex flex-col md:flex-row h-screen justify-center items-center px-3">
    <div class="w-full md:w-4/12">
      <h1>Bienvenido</h1>
      <p>Construyendo la infraestructura de la próxima generación</p>
    </div>
    <div class="w-full md:w-4/12">
      <form>
        <label class="text-white flex flex-col m-2" for="email">
          <span class="mb-2">Email</span>
          <input
            id="email"
            v-model="email"
            class="bg-transparent border rounded px-4 py-3"
            placeholder="Email" />
        </label>

        <label class="text-white flex flex-col m-2" for="password">
          <span class="mb-2">Password</span>
          <div class="flex">
            <input
              class="w-9/12 md:w-10/12 bg-transparent border rounded px-4 py-3"
              id="password"
              v-model="password"
              autocomplete="off"
              placeholder="Username"
              :type="passwordFieldType" />

            <button @click.prevent="switchVisibility" clear item-right class="w-3/12 md:w-2/12 border-2 rounded border-critical focus:outline-none">
              <b color="primary" v-if="passwordFieldType == 'password'">Mostrar</b>
              <b color="primary" v-else>Ocultar</b>
            </button>
          </div>
        </label>

        <div class="text-right py-5">
          <button variant="primary" class="btn-scan p-8 focus:outline-none" type="submit" @click.prevent="login">Iniciar sesión</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      passwordFieldType: "password",
    };
  },
  mounted() {},
  methods: {
    login() {
      let app = this;
      this.error = "";
      this.$auth.login({
        params: { email: app.email, password: app.password, error: null },
        success: function (msg) {
          this.error = "";
          // From some method in one of your Vue components
          this.$cookie.set('blockphi_url', msg.data.data.blockphi_url, 1)
          this.$cookie.set('access-token', msg.headers['access-token'], 1);
          // auth user
          app.$auth.user(msg.data.user);
        },
        error: function () {
          this.error = "Usuario y/o Contraseña inválidos";
          document.getElementById("email").value = "";
          document.getElementById("password").value = ""
            .then((a) => a.present());
        },
        rememberMe: true,
        redirect: "/map",
        fetchUser: true,
      });
    },
    goTo(link, data = null) {
      this.$router.push({ name: link, params: data });
    },
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    },
  },
};
</script>