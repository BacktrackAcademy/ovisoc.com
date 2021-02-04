<template>
  <div class="bt" >
    <Navbar />
    <!-- body views - START -->
      <router-view class="pt-24"></router-view>
    <!-- body views - END -->
    <Footer />
  </div>
</template>

<script>
import Navbar from '../../components/shared/navbar'
import Footer from '../../components/shared/footer'

export default {
  name: 'Public',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scope>
.bt {
  background-color: #070916;
  color: white;
  margin: 0;
  padding: 0;
}
</style>