<template>
    
  <div class="eyes">
    <button class="buttonClass" @click="go">喜欢我你就点我</button>
<div class="box">
<div class="div1"><img src="../assets/1.jpg" width="100%" height="100%"></div>
<div class="div2"><img src="../assets/2.jpg" width="100%" height="100%"></div>
<div class="div3"><img src="../assets/3.jpg" width="100%" height="100%"></div>
<div class="div4"><img src="../assets/4.jpg" width="100%" height="100%"></div>
<div class="div5"><img src="../assets/5.jpg" width="100%" height="100%" ></div>
<div class="div6"><img src="../assets/6.jpg" width="100%" height="100%" ></div>
</div>
</div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    go (){
      window.location.href = 'https://kontli.github.io/myBlog/dist/love/love.html';
    }
  }
}
</script>

<style>
.eyes{
perspective: 1000px;
}
.box{
/*设置3D效果*/
transform-style: preserve-3d;
/*盒子的大小*/
width: 200px;
height: 200px;
background: #fff;
background:url(../assets/4.jpg);width: 200px; background-repeat:no-repeat;
/*设置盒子的位置，便于观察*/
margin: 400px auto;
/*复合方式设置动画 三者分别为：动画名 执行一次时间 执行方式*/
animation: zhuan 3s ease;
/*令动画无限执行下去*/
animation-iteration-count: infinite;
animation-timing-function: linear;
}
.box div{
width: 200px;
height: 200px;
opacity: 1;
/*设置过渡*/
transition: all 1s ease 0s;
position: absolute;
}
/*调整位置，制作成一个六边形*/
.box .div1{
background: #bec7ea;
transform: translateZ(100px);
}
.box .div2{
background: #bec7ea;
transform: translateZ(-100px);
}
.box .div3{
background: #bec7ea;
transform: rotateX(90deg) translateZ(100px);
}
.box .div4{
background: #bec7ea;
transform: rotateX(270deg) translateZ(100px);
}
.box .div5{
background: #bec7ea;
transform: rotateY(-90deg) translateZ(100px);
}
.box .div6{
background: #bec7ea;
transform: rotateY(90deg) translateZ(100px);
}
/*添加3D旋转效果 让其绕X、Y轴同时旋转90度*/
@keyframes zhuan{
from{
transform: rotateX(0deg) rotateZ(0deg) rotateY(0deg);
}
to{
transform: rotateX(360deg) rotateZ(360deg) rotateY(360deg);
}
}
/*给正方体添加一个hover效果*/
.box:hover .div1{
transform: translateZ(200px);
}
.box:hover .div2{
transform: translateZ(-200px);
}
.box:hover .div3{
transform: rotateX(90deg) translateZ(200px);
}
.box:hover .div4{
transform: rotateX(270deg) translateZ(200px);
}
.box:hover .div5{
transform: rotateY(-90deg) translateZ(200px);
}
.box:hover .div6{
transform: rotateY(90deg) translateZ(200px)
}
.buttonClass{
    color: #fff;
    line-height: 30px;
    border-radius: 5px;
    background-color: #5727cc;
    float: right;
}
</style>

