<template>
<v-app>
  <Landing/> 
  <About />
  <MoreAbout />
</v-app>
</template>

<script>
import Landing from '../views/Landing.vue'
import About from '../views/About.vue'
import MoreAbout from '../views/MoreAbout.vue'


  export default {
    components: {
      // HelloWorld
      Landing , About , MoreAbout
    }
  }
</script>
