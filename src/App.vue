<template>
  <v-app>

<!-- <Nav style="position:sticky; top:0px"  class="thenavbar" id="thenavbar"></Nav -->
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
// import Nav from './components/ElasticNav.vue'

export default {
  name: 'App',
      components: {
      //  Nav
    },


  data () {
    return {
      //
    }
  }
}
</script>
