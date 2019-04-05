<template>
<v-app>
  <Landing/> 

  <v-toolbar fixed height="73" id="thenabar" class="cyan lighten-3 thenavbar" >
  <img src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-300.png" height="100%" width="65px">
   <v-toolbar-title>Brunow</v-toolbar-title>
  <v-spacer></v-spacer>
  
   <v-btn flat router to="/skills" class="primary">SKILLs</v-btn>  

    </v-toolbar>

	  <div class="wrapper thenavbar" id="thenavbar">
   <nav class="tabs">
    <div class="selector"></div>
    <a href="#" class="active"> portfolio</a>
    <a href="#">services</a>
    <a href="#">Skills</a>
      <a href="#">about me</a>
    <a href="#">Contact</a>
    </nav>
    </div>


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
       Landing , About , MoreAbout, Nav
    },
    mounted() {
      this.$nextTick(() => {
          $('.thenavbar').hide()
          // $('.thenavbar').fadeIn('slow')

      }),
      $(function(){
        $(window).scroll(function(){
          if($(window).scrollTop() >= 173){
          $('.thenavbar').slideDown(670)
          }
          else{
           $('.thenavbar').slideUp(670)
          }
        })
      }),

      $(function(){
         var prevScrollpos = window.pageYOffset;
        $(window).scroll(function(){
           var currentScrollPos = window.pageYOffset;
       if ( prevScrollpos > currentScrollPos) {
          $('.thenavbar').attr('top','0')
           $('.thenavbar').removeClass('hideNav'); 
         
          }
          else{
            //  $('.thenavbar').removeAttr('top')
          // $('.thenavbar').attr('top','-3409px')
          // console.log("going down");
              $('.thenavbar').addClass('hideNav');                 
          }
           prevScrollpos = currentScrollPos;
        })
			}),

			 $(function(){

								var tabs = $('.tabs');
				var selector = $('.tabs').find('a').length;
				//var selector = $(".tabs").find(".selector");
				var activeItem = tabs.find('.active');
				var activeWidth = activeItem.innerWidth();
				$(".selector").css({
					"left": activeItem.position.left + "px", 
					"width": activeWidth + "px"
				});

				$(".tabs").on("click","a",function(e){
					e.preventDefault();
					$('.tabs a').removeClass("active");
					$(this).addClass('active');
					var activeWidth = $(this).innerWidth();
					var itemPos = $(this).position();
					$(".selector").css({
						"left":itemPos.left + "px", 
						"width": activeWidth + "px"
					});
       });
			 })
			



		}      		// end of mounted 


	}    	// end of script
	
</script>

<style scoped>
.thenavbar{
position: sticky;
 top:0px; 
width: 100%;
 transition: top ease-in-out 0.03s;
}

.hideNav{
position:sticky; 
top:-20000px; 
width: 100%;
 transition: top ease-in-out 0.03s;  
}




/* sleek navbar */


body{
 font-family: "Quicksand", sans-serif;
 position: sticky;
}

.wrapper{
  text-align:right;  
   font-family: "Quicksand", sans-serif;
   position: sticky;
   top: 0px;;
	  z-index: 2;
}

.tabs{
  margin:18px 17px 0 0;
  font-size:17px;
  padding: 0px;
  list-style:none;
  background: cyan;
  box-shadow:0px 5px 20px rgba(0,0,0,0.1);
  display:inline-block;
  border-radius:44px;
  position:relative;
}

.tabs a{
  text-decoration:none;
  color: black;
  text-transform: capitalize;
  padding:9px 20px;
  display:inline-block;
  position:relative;
  z-index:1;
  transition-duration:1.27s;
  font-weight: bolder;
}

.tabs a.active{
  color:#fff;
  /* background-color: black; */
    text-transform:uppercase;

}

.tabs a {
  margin-right:57px;
}

.tabs .selector{
  height:99%;
  display:inline-block;
  position:absolute;
  left:0px;
  top:0px;
  z-index:1;
  border-radius: 27px;
  transition-duration:0.57s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);  
  background: #05abe0;
  background: -moz-linear-gradient(45deg, #05abe0 0%, #8200f4 100%);
  background: -webkit-linear-gradient(45deg, #05abe0 0%,#8200f4 100%);
  background: linear-gradient(45deg, #05abe0 0%,#8200f4 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#05abe0', endColorstr='#8200f4',GradientType=1 );
}





</style>
