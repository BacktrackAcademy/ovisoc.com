import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMapbox from "vue-mapbox";
import Mapbox from "mapbox-gl";
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faToggleOn, faToggleOff, faEdit, faUser, faUserSecret, faWhale, faFish, faCrow, faBiohazard, faUnlockAlt, faHockeyMask, faFire, faVirus, faAngleUp, faAngleDown } from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import JwPagination from 'jw-vue-pagination'
import vSelect from 'vue-select'
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import infiniteScroll from 'vue-infinite-scroll';
import VueFeather from 'vue-feather';
import VueApexCharts from "vue-apexcharts";
import Vuelidate from "vuelidate";
import VueSweetalert2 from "vue-sweetalert2";
// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(VueSweetalert2);

import './assets/stylesheets/index.css';
import 'vue-select/dist/vue-select.css';
import 'vue-search-select/dist/VueSearchSelect.css'
import '@/assets/stylesheets/application.scss';
var VueCookie = require("vue-cookie");
Vue.component("v-select", vSelect);
Vue.component("moon-loader", PulseLoader);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("apexchart", VueApexCharts);
Vue.component("jw-pagination", JwPagination);
Vue.component("v-select", vSelect);
library.add(
  faUser,
  faUserSecret,
  faWhale,
  faFish,
  faCrow,
  faBiohazard,
  faUnlockAlt,
  faHockeyMask,
  faFire,
  faVirus,
  faEdit,
  faToggleOn,
  faToggleOff,
  faAngleUp,
  faAngleDown
);

Vue.config.productionTip = false;
const instance = axios.create({
  baseURL: "https://ovisoc.backtrackacademy.com/api/v1/",
  params: {} // do not remove this, its added to add params later in the config
});
Vue.use(VueAxios, instance);

Vue.router = router;
App.router = Vue.router;

Vue.use(VueCookie);
Vue.use(VueAxios, axios);
Vue.use(Vuelidate);
Vue.use(VueFeather);
Vue.use(VueMapbox, { mapboxgl: Mapbox });
// infinite Scroll
Vue.use(infiniteScroll)


new Vue({
  components: {
    PulseLoader,
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
