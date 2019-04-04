<template>
<v-app>
 <!-- LANDING PAGE -->
 <v-container fluid fill-height class="hero-image" style="max-height: 100vh;  overflow-y: hidden;">
   <v-layout  align-center column class="mt-5 pt-5" >
     <div class="display-4 text-xs-center mt-3 pt-1 primary--text welcome">Welcome <span class="white--text">,</span> </div>
     <div class="display-2 white--text text-xs-center  py-4">I'm <span class='primary--text' >BRUNO </span> 
     </div>          
      <div>                
     <v-card    class="headline font-weight-thin text-xs-center cyan lighten-3 mb-3 px-5 py-2  mt-1" >
    	  <vue-typer   class="font-weight-bold  headline "   :text='["The Full-Stack Developer","The Front-End Developer"," The Back-End Engineer ","The  UI/UX Designer "," The ML Enthusiast ", " The Analytical Chemist ", " The Python Developer "  ]'
       :repeat='127'  :shuffle='false'  initial-action='typing'
       :pre-type-delay='73'  :type-delay='93' :pre-erase-delay='1270'
        :erase-delay='37'  erase-style='backspace'  :erase-on-complete='false'
                  caret-animation='smooth' > </vue-typer>     
       </v-card>
             </div>    
          <v-flex  id="nav" text-xs-center class="mt-2">
            <v-btn fab to='/'  class="cyan  lighten-1 primary--text "> <v-icon size="57px" >arrow_drop_down</v-icon></v-btn>
          </v-flex>
        </v-layout>
    </v-container>
				<!-- END OF LANDNG PAGE -->



			<!-- NAVBAR -->
	<!-- <Nav floating style="position:sticky; top:10px" > -->

	 <v-toolbar fixed style="position:sticky; top:10px">
    <a @click="goToXXX" class="d-flex ml-2">
     <img src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-300.png" height="65px" width="65px">
      </a>
    <v-toolbar-title>Bruno</v-toolbar-title>
     <v-spacer></v-spacer>
      <!-- <v-toolbar-items class="primary" > -->
        <v-btn flat router to="/skills" class="primary">SKILLs</v-btn>  
      <!-- </v-toolbar-items> -->
    </v-toolbar>











    <!-- ABOUT ME FIRST -->

  <h2>About the first</h2> </Nav>

	   <!-- SERVICES PREVIEW -->
  <v-container>
  <v-layout row wrap text-xs-center justify-space-around >
    <v-flex xs11 sm10>
      <p class="headline font-weight-regular">
        Freelance Web Designer & Developer based in Nairobi, Kenya. <br>
        Experienced in designing & developing using  JavaScript and Wordpress 
      </p>
    </v-flex>
  </v-layout>

   <v-layout row wrap text-xs-center justify-space-around >
    <v-flex xs10 sm7>
    <p class="title">
        I'm a Full-Stack Developer with more than two years of experience in WEB technologies. I have doing a different kind of projects using <strong> JavaScript / HTML5 / CSS3  and Node.JS </strong>
    </p>
    </v-flex>
  </v-layout>

  <v-layout row justify-space-around class="mt-4 pt-3 pb-1 text-xs-center cyan lighten-5" >
      <v-flex xs11 sm10 md8>
       <v-card flat class="cyan lighten-5 py-3">
       <v-card-text>
         My <router-link to= '/services' class="font-weight-bold"  style="cursor: pointer;text-decoration: none"> <strong>Skills</strong> </router-link> are broad ranging from <strong>User Experience (UX) to Design, Front-End to Back-End development</strong> . <br>
         I'm <router-link to = '/contact' style="cursor: pointer; text-decoration: none" ><span class="font-weight-bold" > available</span></router-link>  for remote work If you would like to build something together,
        </v-card-text>

        </v-card>
      </v-flex>
     </v-layout>
    
   <v-layout row wrap text-xs-center justify-space-around >
    <v-flex xs12>
     <v-card flat class="cyan lighten-5">
      <v-layout row wrap  justify-space-around>
        <v-flex xs11 sm5 md3 class="mb-2 pb2">
          <v-card flat>
            <v-flex xs12 class="py-4 subheading font-weight-bold" >
                Web Design
            </v-flex>
            <v-flex xs12>
              <v-avatar size="173" color="red">
                <img :src="require('../assets/design.png')" alt="Avatar" >
              </v-avatar>     
            </v-flex>
            <v-flex>
              <v-card-text>
                <p>
                   My approach to website design is to create a website that strengthens your  brand while ensuring ease of use and simplicity for your audience.
                </p>
              </v-card-text>
            </v-flex>
         </v-card>
        </v-flex> 
        <!-- end of card -->
         <v-flex xs11 sm5 md3 class="mb-2 pb2">
          <v-card flat>
            <v-flex xs12 class="py-4 subheading font-weight-bold" >
                Front-End Development
            </v-flex>
            <v-flex xs12>
              <v-avatar size="173" color="red">
                <img :src="require('../assets/design.png')" alt="Avatar" >
              </v-avatar>     
            </v-flex>
            <v-flex>
              <v-card-text>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quidem earum autem. Assumenda dolore quis itaque odio a cum sit, dolorum iusto pariatur, corrupti amet nobis ullam et obcaecati blanditiis. Lorem ipsum dolor, sit amet consectetur adip
                </p>
              </v-card-text>
            </v-flex>
         </v-card>
        </v-flex>
        <!-- end of card -->

         <v-flex xs11 sm5 md3 class="mb-2 pb2">
          <v-card flat>
            <v-flex xs12 class="py-4 subheading font-weight-bold" >
                Back-End Development
            </v-flex>
            <v-flex xs12>
              <v-avatar size="173" color="red">
                <img :src="require('../assets/design.png')" alt="Avatar" >
              </v-avatar>     
            </v-flex>
            <v-flex>
              <v-card-text>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quidem earum autem. Assumenda dolore quis itaque odio a cum sit, dolorum iusto pariatur, corrupti amet nobis ullam et obcaecati blanditiis.
                </p>
              </v-card-text>
            </v-flex>
         </v-card  >
        </v-flex>
        <!-- end of card -->
      </v-layout>
        <v-layout class="pb-3 pt-2">
           <v-flex>
           <v-btn large to="/services" class="primary black--text" >VIEW MORE SERVICES</v-btn>
           </v-flex>
          </v-layout>
     </v-card>  
    </v-flex>
  </v-layout> 
     <!-- services end -->





    <!-- SKILLS -->

    <v-layout justify-center class=" mt-3 cyan lighten-5 ">
      <v-flex xs10 text-xs-center  class=" pt-5">
        <p>
          Check out some of my skills. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusantium repellat, ducimus suscipit molestias sunt a quas maxime sapiente enim quos facilis veritatis laudantium, porro debitis aliquam. Quisquam, modi atque.
        </p>
      </v-flex>
    </v-layout>
  <!-- skills cards with languages -->
    <v-layout row wrap text-xs-center justify-space-around  class="mt-0">
      
      <v-flex xs12>
       <v-card flat class="cyan lighten-5 py-1 pb-5">
      <v-layout row wrap  justify-center >

        <v-flex xs5 sm3 md2  offset-md0  class="mb-2 pb2 ">
          <v-card flat class="cyan lighten-5">

            <v-flex xs12  hidden-md-and-up >
              <v-card flat  class="mt-1 cyan lighten-5 pb-1 mx-2">
            <i style="font-size: 77px ;color:red " class="mdi mdi-language-html5"></i>  
            <div class="font-weight-bold">HTML-5</div>
              </v-card>     
            </v-flex>

            <v-flex xs12  hidden-md-and-up class="mb-4" >
              <v-card flat  class="mt-1 cyan lighten-5 pb-1 mx-2">
            <i style="font-size: 77px ;color:red " class="mdi mdi-language-html5"></i>  
            <div class="font-weight-bold">CSS-3</div>
              </v-card>     
            </v-flex>

            <v-flex xs12>
              <v-card flat  class="mt-1 cyan lighten-5 pb-1 mx-3">
            <i style="font-size: 57px ;color:red " class="mdi mdi-language-html5"></i>  
            <div class="font-weight-bold">WordPress</div>
              </v-card>
            </v-flex>
            <v-flex xs12>
              <v-card flat  class="mt-2 cyan lighten-5 pb-1 mx-3">
            <i style="font-size: 57px ;color:red " class="mdi mdi-language-html5"></i>  
            <div class="font-weight-bold">Mongo DB</div>
              </v-card>
            </v-flex>
            <v-flex xs12 hidden-sm-and-down>
              <v-card flat  class="mt-2 cyan lighten-5 pb-1 mx-3">
            <i style="font-size: 57px ;color:red " class="mdi mdi-language-html5"></i>  
            <div class="font-weight-bold">JQuerry</div>
              </v-card>     
            </v-flex>
            <v-flex xs12 hidden-sm-and-down> 
              <v-card flat  class="mt-2 cyan lighten-5 pb-1 mx-3">
            <i style="font-size: 57px ;color:red " class="mdi mdi-language-html5"></i>  
            <div class="font-weight-bold">FireBase</div>
              </v-card>
            </v-flex>
         </v-card>
        </v-flex> 
  
        <v-flex xs5 sm5 md3  offset-md0 hidden-sm-and-down class="mb-2 pb2">
          <v-card flat class="cyan lighten-5">
            <v-flex xs12>
              <v-card flat  class="mt-2 cyan lighten-5 pb-3 mx-2 mt-5">
            <i style="font-size: 83px ;color:red " class="mdi mdi-language-html5"></i>  
            <div class="font-weight-bold">Html-5</div>
              </v-card>
            </v-flex>
            <v-flex xs12>
              <v-card flat  class="mt-2 cyan lighten-5 pb-3 mx-2">
            <i style="font-size: 83px ;color:red " class="mdi mdi-language-html5"></i>  
            <div class="font-weight-bold">CSS-3</div>
              </v-card>
            </v-flex>
         </v-card>
        </v-flex>

        <v-flex xs5 sm5 md3  offset-md0  hidden-sm-and-down class="mb-2 pb2">
          <v-card flat class="cyan lighten-5" >

            <v-flex xs12>
              <v-card flat  class="mt-2 cyan lighten-5 pb-3 mt-5">
            <i style="font-size: 83px ;color:red " class="mdi mdi-language-html5"></i>  
            <div class="font-weight-bold">JavaScript</div>
              </v-card>
            </v-flex>
            <v-flex xs12>
              <v-card flat  class="mt-2 cyan lighten-5 pb-3">
            <i style="font-size: 83px ;color:red" class="mdi mdi-language-html5"></i>  
            <div class="font-weight-bold ">Node.Js</div>
              </v-card>
            </v-flex>
           </v-card>
          </v-flex> 

        <v-flex xs5 sm3 md2 class="mb-2 pb2">
          <v-card flat class="cyan lighten-5">

            <v-flex xs12  hidden-md-and-up >
              <v-card flat class="mt-1 cyan lighten-5 pb-1 mx-2">
            <i style="font-size: 77px ;color:red " class="mdi mdi-language-html5"></i>  
            <div class="font-weight-bold">JavaScript</div>
              </v-card>     
            </v-flex>

            <v-flex xs12  hidden-md-and-up class="mb-4" >
              <v-card flat class="mt-1 cyan lighten-5 pb-1 mx-2">
            <i style="font-size: 77px ;color:red " class="mdi mdi-language-html5"></i>  
            <div class="font-weight-bold">Node.Js</div>
              </v-card>     
            </v-flex>

            <v-flex xs12 >
              <v-card flat hidden-sm-and-down class="mt-1 cyan lighten-5 pb-1 mx-3">
            <i style="font-size: 57px ;color:red " class="mdi mdi-language-html5"></i>  
            <div class="font-weight-bold">Vue.JS</div>
              </v-card>     
            </v-flex>
            <v-flex xs12>
              <v-card flat  class="mt-2 cyan lighten-5 pb-1 mx-3">
            <i style="font-size: 57px ;color:red " class="mdi mdi-language-html5"></i>  
            <div class="font-weight-bold">React.Js</div>
              </v-card>
            </v-flex>
            <v-flex xs12 hidden-sm-and-down>
              <v-card flat  class="mt-2 cyan lighten-5 pb-1 mx-3">
            <i style="font-size: 57px ;color:red " class="mdi mdi-language-html5"></i>  
            <div class="font-weight-bold">Python</div>
              </v-card>
            <v-card  flat class="mt-2 cyan lighten-5 pb-1 mx-3">
            <i style="font-size: 57px ;color:red " class="mdi mdi-language-html5"></i>  
            <div class="font-weight-bold">Illustrator</div>
              </v-card>
            </v-flex>
         </v-card>
        </v-flex>  

        <v-flex xs12 class="mt-3">
         <v-btn large to="/skills" class="primary black--text" >VIEW MORE SKILLS</v-btn>       
        </v-flex>

        </v-layout>
        </v-card>  
        </v-flex>
      </v-layout> 
	</v-container>		

    <!-- END OF SKILLS -->


		<MoreAbout></MoreAbout>








</v-app>
</template>


<script>
import Nav from '../components/Nav.vue'
import MoreAbout from '../views/MoreAbout.vue'

export default {
	    components: {
      Nav, MoreAbout, 
    },
}
</script>



<style scoped>


/* LANDING PAGE */
.hero-image {
    background: url("../assets/theback.jpg") no-repeat center;
    background-size: cover;
    width: 100%; height: 100vh;
    position: relative
}
 #nav .btn2 {
  position: relative;
}
.v-icon {
  display: inline-flex;}
  
@keyframes rocking {
  0%,100% {transform: rotateZ(-10deg);}
  50%     {transform: rotateZ(10deg);}
}

 vue-typer {
  /* font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; */
  font-family: 'Yatra One';
  background-color: rgb(255, 255, 255);
  } 








</style>


