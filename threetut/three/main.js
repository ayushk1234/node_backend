import './style.css'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import gsap from 'gsap';

// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

import *  as THREE from 'three';

const scene = new THREE.Scene()

const geometry =  new THREE.SphereGeometry(3,64,64)

const material = new THREE.MeshStandardMaterial({
  color:"#00ff83",
  roughness:0.4
})

const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)

const sizes= {
  width:window.innerWidth,
  height : window.innerHeight
}

const light = new THREE.PointLight(0xffffff,10,100)
light.position.set(0,10,10)
light.intensity=10
scene.add(light)

const camera= new THREE.PerspectiveCamera(45,sizes.width/sizes.height,.1,100)
camera.position.z=20
scene.add(camera)




const canvas = document.querySelector(".webgl")
const renderer= new THREE.WebGLRenderer({canvas})

renderer.setSize(sizes.width,sizes.height)
renderer.setPixelRatio(2)
renderer.render(scene,camera)

const controls= new OrbitControls(camera,canvas)
controls.enableDamping=true
controls.enablePan=false
controls.enableZoom=false
controls.autoRotate=true
controls.autoRotateSpeed=5



window.addEventListener('resize',()=>{

  console.log(window.innerWidth,window.innerHeight)
  sizes.width=window.innerWidth;
  sizes.height=window.innerHeight

  camera.aspect=sizes.width/sizes.height
  camera.updateProjectionMatrix()
  renderer.setSize(sizes.width,sizes.height)

})

const loop = ()=>{

  // mesh.rotation.x+=0.2
  controls.update()

  renderer.render(scene,camera)
  window.requestAnimationFrame(loop)
}
loop()

const t1= gsap.timeline({defaults:{duration:1}})
t1.fromTo(mesh.scale,{z:0,x:0,y:0},{z:1,x:1,y:1})
t1.fromTo("nav",{y:"-100%"},{y:"0%"})
t1.fromTo(".title",{opacity:0},{opacity:1})


let mouseDown =false
window.addEventListener("mousedown",()=>(mouseDown=true))
window.addEventListener("mouseup",()=>{mouseDown=false})

window.addEventListener('mousemove',(e)=>{
  if(mouseDown){
    let rgb=[
      Math.round((e.pageX/sizes.width)*255),
      Math.round((e.pageY/sizes.height)*255),
      150,
    ]
    // console.log(rgb)
    let newColor= new THREE.Color(`rgb(${rgb.join(",")})`)
    gsap.to(mesh.material.color,{r: newColor.r,g:newColor.g,b:newColor.b})
  }
})
