<template>
  <div>
    <div class="frame">
      <div class="plane-container">
        <a href="http://customer.io/" target="_blank">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="1131.53px" height="379.304px" viewBox="0 0 1131.53 379.304" enable-background="new 0 0 1131.53 379.304"
          xml:space="preserve" class="plane">
          <polygon fill="#D8D8D8" points="72.008,0 274.113,140.173 274.113,301.804 390.796,221.102 601.682,367.302 1131.53,0.223  "/>
          <polygon fill="#C4C4C3" points="1131.53,0.223 274.113,140.173 274.113,301.804 390.796,221.102   "/>
        </svg></a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "plane",
  methods: {
  },
  components: {
  }
};
</script>

<style lang="scss" scoped>
.frame {
  width: 500px;
  height: auto;
  position: absolute;
}

svg {
  max-width: 100%;
  height: auto;
  display: block;
}

/**
* Paper Plane
*/
/*Paper Plane: Container*/
.plane-container {
  width: 200px;
  margin: 0px auto;
  z-index: 3;
}
/*Paper Plane: Image*/
.plane {
  width: 100%;
  height: 60px;
}

/*Paper Plane: Animation*/
.plane-container {
  -webkit-animation: paper-plane-scoping 2s alternate infinite;
  -moz-animation: paper-plane-scoping 2s alternate infinite;
  animation: paper-plane-scoping 2s alternate infinite;

  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  animation-timing-function: linear;
}

@-webkit-keyframes paper-plane-scoping {
  0% {
    -webkit-transform: translateY(0px);
    -moz-transform: translateY(0px);
    transform: translateY(0px);
  }
  100% {
    -webkit-transform: translateY(100px);
    -moz-transform: translateY(100px);
    transform: translateY(100px);
  }
}
.plane {
  -webkit-animation-timing-function: ease-in-out;
  -moz-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;

  -webkit-animation: paper-plane-soaring 4s forwards infinite;
  -moz-animation: paper-plane-soaring 4s forwards infinite;
  animation: paper-plane-soaring 4s forwards infinite;
}
@-webkit-keyframes paper-plane-soaring {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  40% {
    -webkit-transform: rotate(15deg);
    -moz-transform: rotate(15deg);
    transform: rotate(15deg);
  }
  50% {
    -webkit-transform: rotate(15deg);
    -moz-transform: rotate(15deg);
    transform: rotate(15deg);
  }
  60% {
    -webkit-transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  70% {
    -webkit-transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  100% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
</style>
