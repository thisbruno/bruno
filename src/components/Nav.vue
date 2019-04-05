  <template>
  <div>
 <div id="app" toolbar--fixed toolbar style="background: #c9c9c9;">
   		  <v-toolbar fixed style="position:sticky; top:10px">
      <a @click="goToXXX" class="d-flex ml-2">
        <img src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-300.png" height="65px" width="65px">
      </a>
      <v-toolbar-title>Brunor</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-toolbar-items class="primary" > -->
        <v-btn flat router to="/skills" class="primary">SKILLs</v-btn>  
      <!-- </v-toolbar-items> -->
    </v-toolbar>
   
 </div>


</div>
	</template>

<script>
export default {
   data () {
    return {
      // page: 1
    }
  },
  methods: {
    // scrollToTop () {
    //   let container = document.getElementById('scrolling-techniques')
    //   container.scrollTop = 0 // not working
      
      // Below is working
 //     let event = new CustomEvent('scroll', {})
 //     container.pageYOffset = 0
 //     setTimeout(() => {
//        container.scrollTop = 0
 //     })
//      container.dispatchEvent(event)
  //   },
  //   changePage (page) {
  //     this.page = page
  //     let container = document.getElementById('scrolling-techniques')
  //     let event = new CustomEvent('scroll', {})
  //     container.pageYOffset = 0
  //     setTimeout(() => {
  //      container.scrollTop = 0
  //     }, 200)
  //     container.dispatchEvent(event)
  //   }
  // }

}
</script>



  <style>
  body, html{
  /* overflow:hidden; */
  background:#f9f9f9;
}

.main-container {
  max-height: calc(100vh - 64px);
  height:auto;
  overflow-y: auto;
  overflow-x: hidden;
}

.content {
  min-height:2280px; 
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:32px;
}
.content.short{
  min-height:0;
}
  </style>
  




	<script>  
export default { 
  data() {
    return{
    menuItems :[
       {  icon:'person', title : "Home", route:"/" },
      {  icon:'supervisor_account', title : "About", route:"/about" },
      {  icon:'person', title : "Portfolio", route:"/portfolio" },
      // {  icon:'person', title : "services", route:"/services" },
      {  icon:'person', title : "Services", route:"/services" },
      {  icon:'person', title : "Contact", route:"/contact" },
        ]   
    }},}
</script>

<style scoped>
rourter
.toolbar-link{
  font-size: 12px;
}
#nav .btn2 {
  position: relative;
}
#nav .btn2:after {
  position: absolute; bottom: 0; left: 0; right: 0; margin: auto;
  width: 0%; content: '.';  color: transparent;  background: rgb(223, 56, 112);
  height: 1px;
}
#nav .btn2 {
  transition: all .037s;
}
#nav .btn2:after {
  text-align: left; content: '.';  margin: 0;  opacity: 0;
}
#nav .btn2:hover {
  color: cyan;  z-index: 1;
}
#nav .btn2:hover:after {
  z-index: -10; animation: fill .37s forwards; -webkit-animation: fill .37s forwards;
  -moz-animation: fill .37s forwards;  opacity: 1;
}
@keyframes fill {
  0% {  width: 0%; height: 1px;  }
  50% { width: 100%;  height: 1px; }
  100% {  width: 100%; height: 100%;  background: #E31B6D; }
}
</style>
	