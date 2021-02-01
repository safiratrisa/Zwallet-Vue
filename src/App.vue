<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions(['interceptorRequest', 'interceptorResponse'])
  },
  created () {
    this.interceptorRequest()
    this.interceptorResponse()
  }
}
</script>

<style lang="scss">
body, html {
  padding: 0;
  margin: 0;
}
@font-face {
    font-family: "NunitoSans";
    src: url('../src/assets/NunitoSans.ttf') format("truetype");
}
#app {
  font-family: NunitoSans;
}
</style>
