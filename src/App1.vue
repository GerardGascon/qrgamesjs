<template>
  <qrcodeuploader/>
</template>

<script>
import Qrcodeuploader from './components/Qrcodeuploader.vue'

export default {
  name: 'App',
  components: {
    qrcodeuploader:Qrcodeuploader
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
