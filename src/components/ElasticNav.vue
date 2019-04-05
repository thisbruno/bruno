<template>
  <div>
    <div class="wrapper">
   <nav class="tabs">
    <div class="selector"></div>
    <a href="#" class="active"> portfolio</a>
    <a href="#">services</a>
    <a href="#">Skills</a>
      <a href="#">about me</a>
    <a href="#">Contact</a>
    </nav>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
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

  }

}
</script>

<style scoped>

body{
 font-family: "Quicksand", sans-serif;
 position: sticky;
}

.wrapper{
  text-align:right;  
   font-family: "Quicksand", sans-serif;
   position: sticky;
   top: 0px;
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
