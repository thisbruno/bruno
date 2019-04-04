<template>
<v-app>
  <Landing/> 


  <v-toolbar fixed  class="cyan lighten-3" style="position:sticky; top:3px ">
  <!-- <a @click="goToXXX" class="d-flex ml-2"> -->
  <img src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-300.png" height="100%" width="65px">
   <!-- </a> -->
   <v-toolbar-title>Bruno</v-toolbar-title>
  <v-spacer></v-spacer>
  <!-- <v-toolbar-items class="primary" > -->
   <v-btn flat router to="/skills" class="primary">SKILLs</v-btn>  
      <!-- </v-toolbar-items> -->
    </v-toolbar>


  <About />
  <MoreAbout />
</v-app>
</template>

<script>
import Landing from '../views/Landing.vue'
import About from '../views/About.vue'
import MoreAbout from '../views/MoreAbout.vue'
import Nav from '../components/Nav.vue'



  export default {
    components: {
      // HelloWorld
      Landing , About , MoreAbout, Nav
    }
  }
</script>
