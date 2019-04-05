<template>
	<!-- @NOTE: the onclicks are used for touch devices since I'm lazy and didnt use <a> tags -->
<div class="Menu cyan lighten-3">
  <ul class="Menu-list" data-offset="10">
    <li class="Menu-list-item" data-offset="20" onclick>
      Home
      <span class="Mask"><span>Home</span></span>
      <span class="Mask"><span>Home</span></span>
    </li>
    <li class="Menu-list-item" data-offset="16" onclick>
      About
      <span class="Mask"><span>About</span></span>
      <span class="Mask"><span>About</span></span>
    </li>
    <li class="Menu-list-item" data-offset="12" onclick>
      Work
      <span class="Mask"><span>Work</span></span>
      <span class="Mask"><span>Work</span></span>
    </li>
    <li class="Menu-list-item" data-offset="8" onclick>
      Contact
      <span class="Mask"><span>Contact</span></span>
      <span class="Mask"><span>Contact</span></span>
    </li>
  </ul>
</div>
</template>






<style scoped>
body {
  font-family:' yatra one';
  /* font-style: normal; */
  font-weight: 15px;
  -webkit-font-smoothing: antialiased;
  -webkit-font-kerning: normal;
  -webkit-text-size-adjust: 100%;
}

html,
body {
  width: 100vw;
  height: 100vh;
}

body {
  background: linear-gradient(45deg, #02001F, #1F1B4E);
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-transform: perspective(60rem);
          transform: perspective(60rem);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Menu-list {
  font-size: 2.25rem;
  line-height: 1.7;
  text-transform: uppercase;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-transform: rotateX(-10deg) rotateY(20deg);
          transform: rotateX(-10deg) rotateY(20deg);
}

.Menu-list-item {
  position: relative;
  color: transparent;
  cursor: pointer;
}
.Menu-list-item::before {
  content: '';
  display: block;
  position: absolute;
  top: 49%;
  left: -10%;
  right: -10%;
  height: 4px;
  border-radius: 4px;
  margin-top: -2px;
  background: #FF2C75;
  -webkit-transform: scale(0);
          transform: scale(0);
  transition: -webkit-transform 0.8s cubic-bezier(0.16, 1.08, 0.38, 0.98);
  transition: transform 0.8s cubic-bezier(0.16, 1.08, 0.38, 0.98);
  transition: transform 0.8s cubic-bezier(0.16, 1.08, 0.38, 0.98), -webkit-transform 0.8s cubic-bezier(0.16, 1.08, 0.38, 0.98);
  z-index: 1;
}

.Mask {
  display: block;
  position: absolute;
  overflow: hidden;
  color: #FF2C75;
  top: 0;
  height: 49%;
  transition: all 0.8s cubic-bezier(0.16, 1.08, 0.38, 0.98);
}
.Mask span {
  display: block;
}

.Mask + .Mask {
  top: 48.9%;
  height: 51.1%;
}
.Mask + .Mask span {
  -webkit-transform: translateY(-49%);
          transform: translateY(-49%);
}

.Menu-list-item:hover .Mask,
.Menu-list-item:active .Mask {
  color: rgb(255, 255, 255);
  -webkit-transform: skewX(12deg) translateX(5px);
          transform: skewX(12deg) translateX(5px);
}
.Menu-list-item:hover .Mask + .Mask,
.Menu-list-item:active .Mask + .Mask {
  -webkit-transform: skewX(12deg) translateX(-5px);
          transform: skewX(12deg) translateX(-5px);
}
.Menu-list-item:hover::before,
.Menu-list-item:active::before {
  -webkit-transform: scale(1);
          transform: scale(1);
}

</style>

