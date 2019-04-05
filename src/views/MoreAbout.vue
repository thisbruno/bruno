<template>
	<v-app>
		<v-container>
		<h3>More About</h3>
		<v-layout>
    
   <v-layout row wrap text-xs-center justify-space-around>
    <v-flex xs12>
     <v-card flat class="cyan lighten-5">
      <v-layout row wrap  justify-space-around>
         <v-flex xs11 sm7 md6 class="mb-2 pb2">
          <v-card flat>
            <v-flex xs12 class="cyan lighten-5" >             
        <v-flex xs12 class="subheading font-weight-bold py-3 cyan lighten-5" >
                Meet Up Project
            </v-flex>
          <img :src="require('../assets/mu1.png')" alt="Avatar" contain
					style="width:91% ; max-height: 270px" >	
           </v-flex>
         </v-card>
        </v-flex>
         <v-flex xs11 sm4 md4 class="mb-2 pb2 mt-5 ">
          <v-card flat>
            <v-flex xs12>
              <v-card-text>
                <p>
                  fgfggggLrrfforem ipsum dolor sit, amet consectetur adipisicing elit. Alias quidem earum autem. Assumenda dolore quis itaque odio a cum sit, dolorum iusto pariatur, corrupti amet nobis ullam et obcaecati blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quod consequatur placeat 
                </p>
              </v-card-text>
            </v-flex>
         </v-card  >
        </v-flex>
        <!-- end of card -->
      </v-layout>


			 <v-layout row wrap  justify-space-around class="mt-4" style="border-top: 2.7px grey solid">
         <v-flex xs11 sm5  class="mb-2 pb2">
          <v-card flat>
        <v-flex xs12 class="subheading font-weight-bold py-3 cyan lighten-5 " >
               PROJECT-2
          </v-flex>
            <v-flex xs12 class="cyan lighten-5" >             
          <img :src="require('../assets/mu1.png')" alt="Avatar" contain
					style="width:91% ; max-height: 270px" >	
           </v-flex>
         </v-card>
        </v-flex>

				<v-flex xs11 sm5  class="mb-2 pb2">
          <v-card flat>
        <v-flex xs12 class="subheading font-weight-bold py-3 cyan lighten-5" >
                PROJECT 3
          </v-flex>
            <v-flex xs12 class="cyan lighten-5" >             
          <img :src="require('../assets/mu1.png')" alt="Avatar" contain
					style="width:91% ; max-height: 270px" >	
           </v-flex>
         </v-card>
        </v-flex>
        <!-- end of card -->
      </v-layout>


        <v-layout class="pb-3 pt-2">
           <v-flex>
           <v-btn large to="/portfolio" class="primary black--text" >VIEW MORE PROJECTS</v-btn>
           </v-flex>
        </v-layout>
     </v-card>  
    </v-flex>
  </v-layout> 
		</v-layout>


				 <v-layout row wrap  justify-space-between class="mt-5" >
         <v-flex xs11 sm3  class="mb-2 pb2">
          <v-card flat height="590" >
        <v-flex xs12 class="subheading font-weight-bold py-3  text-xs-center" >
              .
          </v-flex>
          <v-flex xs12  >   
						<v-layout row wrap  justify-end class="mt-4 " >
						 	<v-flex xs4 sm6 class="mb-2 pb2">
								<v-card flat>
								<v-flex xs12   >  
									<!-- <v-icon left>person</v-icon>   -->
                   <Social class="mt-"></Social>
								</v-flex>
							</v-card>
							</v-flex>

							<v-flex xs4 sm4  class="mb-2 pb2">
								<v-card flat>
								<v-flex left xs12 class="cyan lighten-5" >             
				   			 
                 
								</v-flex>
							</v-card>
							</v-flex>
             </v-layout>       

           </v-flex>
         </v-card>
        </v-flex>

				<v-flex xs11 sm7  class="mb-2 pb2">
          <v-card flat>
        <v-flex xs12 class="subheading font-weight-bold py-3 cyan lighten-5" >
               Google Api
          </v-flex>
            <v-flex xs12 class="cyan lighten-5" >             
          <img :src="require('../assets/contact2.jpg')" alt="Avatar" contain
					style="width:100% ; height: 270px" >	
           </v-flex>
         </v-card>
        </v-flex>
          </v-layout>











					
		</v-container>
    <Footer></Footer>
	</v-app>
</template>

<script>
// import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import Social from '../components/Social.vue'

  export default {
    components: {
      Footer , Social,
    },
  }
</script>
