<template>
	<v-app>
    <v-container>
			<v-layout >
          <h1 class="mb-2 py-5" style="font-family:Quicksand ">Contact</h1>
				<v-flex class="text-xs-left socialbar mt-4 pt-5">
          <v-card class="red">
							<ul>
							<li>
								<a  href="#" id="emaill" class="email"><span>thisbruno7@gmail</span><v-icon right large class="primary--text"  >mail</v-icon></a>
							</li>
							<li>
								<a href="#" class="twitter"><span>@bruno</span><i class="entypo-twitter"></i></a>
							</li>
							<li>
								<a href="#" class="linkedin"><span>brunoki</span> <i class="entypo-linkedin-circled"></i></a>
							</li>
							<li>
								<a href="#" class="github"><span>@thisbruno</span><i class="entypo-github"></i></a>
							</li>
						</ul>
          </v-card>
				</v-flex>
			</v-layout>
      </v-container>
		

	</v-app>
</template>

<style scoped>
@import url(http://weloveiconfonts.com/api/?family=entypo);
@import url(http://weloveiconfonts.com/api/?family=brandico);
@import url("https://fonts.googleapis.com/css?family=Quicksand");

*,*:before,*:after {
  box-sizing: border-box;
}

html {
  font-size: 18px;
}

.socialbar {
  font-family: "Quicksand", sans-serif;
  font-size: 1.4em;
  line-height: 1.8;
}

ul {
  list-style: none;
  position: absolute;
  top: 50%;
  left: 0%;
  /* transform: translateY( 40px); */
   transform: translateX( -77px);
}
ul li a {
  display: block;
  margin-left: -17px;
  height: 57px;
  width: 70px;
  border-radius: 0 25px 25px 0;
  border: 2px solid #000;
  background: #FFF;
  margin-bottom: 1em;
  transition: all 0.4s ease-in-out ;
  color: #2980b9;
  text-decoration: none;
  line-height: 60px;
  position: relative;
}

ul li a:hover {
  cursor: pointer;
  width: 180px;
  color: #fff;
}
#emaill:hover {
  cursor: pointer;
  width: 247px;
  color: #fff;
}
ul li a:hover span {
  left: 0;
}
ul li a span {
  padding: 0 30px 0 15px;
  position: absolute;
  left: -120px;
  transition: left 0.45s ease;
}
ul li a i {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  font-size: 1.5em;
}
ul li .email {
  background: rgba(25, 201, 98, 0.1);
  border-color: red;
  color: red;
}





ul li .email span {
  border-color: #27ae60;
  color:rgba(0,0,0,0);
}

ul li .twitter span {
  border-color: #27ae60;
  color:rgba(0,0,0,0);
}
ul li .linkedin span {
  border-color: #27ae60;
  color:rgba(0,0,0,0);
}
ul li .github span {
  border-color: #27ae60;
  color:rgba(0,0,0,0);
}


ul li span:hover {
  color: white;
}


ul li .email:hover {
  background: #eb3d3d;
}
ul li .twitter {
  background: rgba(37, 32, 27, 0.1);
  border-color: #22A7F0;
  color: #22A7F0;
}
ul li .twitter:hover {
  background: #22A7F0;
}
ul li .linkedin {
  background: rgba(34, 167, 240, 0.1);
  border-color: #22A7F0;
  color: #22A7F0;
}
ul li .linkedin:hover {
  background: #22a7f0;
}
ul li .github {
  background: rgba(44, 38, 40, 0.1);
  border-color: rgb(48, 41, 43);
  color: rgb(43, 37, 39);
}
ul li .github:hover {
  background: #d2527f;
}

/* entypo */
[class*=entypo-]:before {
  font-family: "entypo", serif;
}

/* brandico */
[class*="brandico-"]:before {
  font-family: 'brandico', sans-serif;
}

div {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
}
div h1 {
  font-weight: 600;
  font-size: 2.4em;
  color: #303030;
  margin-bottom: 0.5em;
}
div p {
  color: #999;
  font-weight: 400;
  font-size: 1.2em;
}
div a {
  color: #4183D7;
  text-decoration: none;
  font-weight: 600;
  padding-bottom: 2px;
  border-bottom: 2px dotted #4183D7;
  transition: all 0.25s ease;
}
div a:hover {
  /* color: #D2527F; */
  border: rgb(20, 29, 29) 2px solid;
}

</style>

