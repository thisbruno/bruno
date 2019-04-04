<template>
  <div id="wholeNav">
<div class="head">
   <div class="title hero-image" style="height:100vh"></div>

   < class="nav" id="nav">
      <ul>
         <li>Home</li>
         <li>Blog</li>
         <li>Video</li>
         <li>Contact</li>
         <li>About</li>
      </ul>
   </div>


<div class="box">
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
   consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
   cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
   proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

   <br><br>
</div>
  </div>
  </div>
</template>


<style scoped>
 #wholeNav{
      padding: 0px;
      margin: 0px;
   }

.hero-image {
    background: url("../assets/theback.jpg") no-repeat center;
    background-size: cover;
    width: 100%; height: 100vh;
    position: relative
}

   body{
      background: #ccc;
   }

   .head{
      width: 100%;
     
   }
   .head h1{
       padding: 0px 40px;
      line-height: 100px;
      font-size: 50px;
      color:orange;
      background: white;
      font-family: sans-serif;
         }

   .head .nav{
      background: purple;
      padding: 10px 0px;
      text-align: center;
      position: absolute;
      width: 100%;

   }
   .nav li{
          list-style-type: none;
          display: inline-block;
          padding: 10px 40px;
          text-align: center;
          border-left: 1px solid white;
          color: white;
          font-size: 18px;
   }

   .box{
      width: 60%;
      margin: 150px auto;
      background: white;
      padding: 20px;
      font-size: 25px;
   }


</style>

