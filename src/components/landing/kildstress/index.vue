<template>
  <h1>Hola {{ $route.name }}</h1>
</template>

<script>
export default {
  name: 'index',
  methods: {
    scrollTop: function() {
      window.scroll(0, 0)
    }
  },
  mounted() {
    this.scrollTop()
  }
}
</script>