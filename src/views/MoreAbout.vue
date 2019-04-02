<template>
	<v-app>
		<v-container>
		<h3>More About</h3>
		<v-layout>
			<!-- <v-flex xs12 sm7>
      <img :src="require('../assets/mu1.png')" alt="Avatar" cover >			
			</v-flex>
			<v-flex xs10 sm4>
				<v-flex xs12>
           <p>
						 Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perferendis optio cum. Incidunt odit nam voluptates tempore ex possimus aspernatur molestias asperiores nemo ea neque illo tempora dolorem, animi ab!
					 </p>
				</v-flex>
				<v-flex xs12>
				<i style="font-size: 27px ;color:red " class="mdi mdi-language-html5"></i>  
        <i style="font-size: 27px ;color:red " class="mdi mdi-language-html5"></i>  
				</v-flex>
			</v-flex> -->
     
   <v-layout row wrap text-xs-center justify-space-around>
    <v-flex xs12>
     <v-card flat class="cyan lighten-5">
      <v-layout row wrap  justify-space-around>
         <v-flex xs11 sm7 md6 class="mb-2 pb2">
          <v-card flat>
            <v-flex xs12 class="cyan lighten-5" >             
        <v-flex xs12 class="subheading font-weight-bold py-3 cyan lighten-5" >
                Front-End Development
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
                  Lrrfforem ipsum dolor sit, amet consectetur adipisicing elit. Alias quidem earum autem. Assumenda dolore quis itaque odio a cum sit, dolorum iusto pariatur, corrupti amet nobis ullam et obcaecati blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quod consequatur placeat cumque magnam voluptatibus obcaecati excepturi impedit, ab optio odio praesentium voluptatem odit eligendi fugiat commodi itaque molestias error. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia fugiat, inventore possimus corrupti voluptas vero dicta laboriosam adipisci in fugit quo, nam officiis repudiandae placeat soluta. Excepturi tempora inventore quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia quam facere. Officiis ad enim voluptas nobis doloremque hic, maiores provident, deserunt assumenda doloribus magnam dolores, corrupti vero quisquam expedita?
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


				 <v-layout row wrap  justify-space-around class="mt-5" >
         <v-flex xs11 sm5  class="mb-2 pb2">
          <v-card class="cyan lighten-5">
        <v-flex xs12 class="subheading font-weight-bold py-3 cyan lighten-5 text-xs-center" >
              contact
          </v-flex>
          <v-flex xs12 class="cyan lighten-5" >   
						<v-layout row wrap  justify-space-around class="mt-4 yellow lighten-4" >
						 	<v-flex xs2 sm1  class="mb-2 pb2">
								<v-card flat>
								<v-flex xs12  class="cyan lighten-5" >  
									<v-icon left>person</v-icon>  						        
								</v-flex>
							</v-card>
							</v-flex>
							<v-flex xs3 sm5  class="mb-2 pb2">
								<v-card flat>
								<v-flex xs12  class="cyan lighten-5" >  
								 Name         
								</v-flex>
							</v-card>
							</v-flex>
							<v-flex xs6 sm6  class="mb-2 pb2">
								<v-card flat>
								<v-flex left xs12 class="cyan lighten-5" >             
				   			 Bruno	
								</v-flex>
							</v-card>
							</v-flex>
             </v-layout>

						        
									



           </v-flex>
         </v-card>
        </v-flex>

				<v-flex xs11 sm5  class="mb-2 pb2">
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
	</v-app>
</template>
