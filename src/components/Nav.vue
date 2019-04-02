  <template>
		  <v-toolbar >
      <v-toolbar-title class="headline text-uppercase">
        <router-link>
				<v-img src="require('../assets/logo.svg')" class="my-3" contain height="60" ></v-img>
				</router-link>
        <span>BRUNO</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn flat router:to="/contact" >
        <span class="mr-2">Contact</span>
        <v-icon>mdi-cellphone-iphone</v-icon>
      </v-btn>
    </v-toolbar>
	</template>


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
	