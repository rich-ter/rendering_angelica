// import * as THREE from "./three.js-master/build/three.module.js"
// import {GLTFLoader} from "./three.js-master/examples/jsm/loaders/GLTFLoader.js"
// import {GLTFLoader} from './three.js-master/examples/js/loaders/GLTFLoader.js'
// import THREE from "../node_modules/three/build/three.module.js"

import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';

console.log(THREE)
const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()


const loader = new GLTFLoader()
// loader.load('assets/fem_head/scene.gltf', function(gltf){
loader.load('assets/wraith/gltf/wraith.gltf', function(gltf){
    console.log(gltf)
    const root = gltf.scene;
    root.scale.set(0.01,0.01,0.01)

    scene.add(root);
}, function(xhr){
    console.log((xhr.loaded/xhr.total*100) + "% loaded")
}, function(error){
    console.log(error)
})


const light = new THREE.DirectionalLight(0xffffff, 1.5)
light.position.set(1, 1, 5)
scene.add(light)


const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// here is how the camera points when the site is rendered
// const camera = new THREE.PerspectiveCamera(4, sizes.width/sizes.height, 0.5, 100)
// camera.position.set(0,0,20)

    const camera = new THREE.PerspectiveCamera(17, 
    window.innerWidth/window.innerHeight, 0.5, 1000 ); // Specify camera type like this
    camera.position.set(0,0,2); // Set position like this
    // camera.lookAt(new THREE.Vector3(2,2.5,500)); // Set look at coordinate like this
scene.add(camera)

const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})

const controls = new OrbitControls(camera, renderer.domElement)

// controls.target.set(4.5, 0, 4.5)

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.gammaOuput = true
renderer.render(scene, camera)

function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

animate()