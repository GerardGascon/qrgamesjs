<template>
  <qrcodescanner/>
</template>

<script>
import Qrcodescanner from './components/Qrcodescanner.vue'

export default {
  name: 'App',
  components: {
    qrcodescanner:Qrcodescanner
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
