<template>
 <v-app>
    <!-- BTN -->
  <div class="wrap">
  <a href="#" class="btn">Cool Button</a>
   <a href="#" class="btn5">Cool Button5</a>
</div>


<!-- highlighter underline -->
<div class="wrapper">
  <div class="text-container">
<a class="text">nihil sub sole novum</a>
  </div>
</div>








    
</v-app>  
</template>

<style scoped>
/* BTN */
/* Buttons at the center */
.wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -259px;
  margin-left: -89px;
  text-align: center;
}

/* General styling for the links */
a {
  padding: 15px 30px;
  text-decoration: none;
  font-size: 18px;
  display: block;
  margin: 20px auto;
}

/* BUTTON 1 */
.btn, .btn:link, .btn:visited {
  color: #2c3e50;
  line-height: 1em;
  color: inherit;
  text-decoration: none;
  display: inline-block;
  border-radius: 4px;
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0);
  box-shadow: 0 0 0 0 #2c3e50 inset, 0.3em 0.2em 0 0 #bbb;
  border: 0.2em solid #2c3e50;
  padding: 0.8em;
  text-align: center;
  transition: 0.25s box-shadow, 0.25s -webkit-transform;
  transition: 0.25s box-shadow, 0.25s transform;
  transition: 0.25s box-shadow, 0.25s transform, 0.25s -webkit-transform;
}
.btn:hover, .btn:link:hover, .btn:visited:hover {
  box-shadow: 0 4em 0 0 #2c3e50 inset, 0em 0em 0 0 #bbb;
  -webkit-transform: translate(0.3em, 0.2em);
          transform: translate(0.3em, 0.2em);
  color: #fff;
}

/* BUTTON 5 */
.btn5, .btn5:link, .btn5:visited {
  border: none;
  outline: none;
  color: #fefefe;
  background-color: #9b59b6;
  border-radius: 3px;
}
.btn5:hover, .btn5:focus, .btn5:link:hover, .btn5:link:focus, .btn5:visited:hover, .btn5:visited:focus {
  transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
  -webkit-animation: gelatine 0.5s 1;
          animation: gelatine 0.5s 1;
}
@-webkit-keyframes gelatine {
  from,to {
    -webkit-transform: scale(1, 1);
  }
  25% {
    -webkit-transform: scale(0.9, 1.1);
  }
  50% {
    -webkit-transform: scale(1.1, 0.9);
  }
  75% {
    -webkit-transform: scale(0.95, 1.05);
  }
  from,to {
    -webkit-transform: scale(1, 1);
  }
  25% {
    -webkit-transform: scale(0.9, 1.1);
  }
  50% {
    -webkit-transform: scale(1.1, 0.9);
  }
  75% {
    -webkit-transform: scale(0.95, 1.05);
  }
}
/* END OF BTN STYLING */


.text {
  transition: background-size 0.4s ease;
  background: linear-gradient(to bottom, transparent 62%, #fff87e 0) center center/0% 75% no-repeat;
  font-family: Quicksand;
  font-size: 3rem;
  padding: 0 6px 2px 6px;
  cursor: pointer;
  color: rgba(80, 89, 113, 0.7);
  letter-spacing: 0.08rem;
}
.text:hover {
  background-size: 100% 100%;
}
.text:active {
  background-size: 80% 100%;
}
.text-container {
  z-index: 1;
  position: relative;
  background-color: #fff;
  padding: 60px;
  box-shadow: 0 0 90px 10px rgba(95, 124, 179, 0.15);
}

.wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
}
.wrapper:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  background-color: rgba(78, 171, 239, 0.13);
  z-index: 0;
}



</style>

