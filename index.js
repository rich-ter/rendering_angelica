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
loader.load('assets/fem_head/scene.gltf', function(gltf){
// loader.load('assets/wraith/gltf/wraith.gltf', function(gltf){
    console.log(gltf)
    const root = gltf.scene;
    root.scale.set(0.001,0.001,0.001)

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


// Setting up camera
const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWidth = 8;
const cameraHeight = cameraWidth / aspectRatio;

const camera = new THREE.OrthographicCamera(
  cameraWidth / -1.25, // left
  cameraWidth / 1.25, // right
  cameraHeight / 1, // top
  cameraHeight / -2, // bottom
  0, // near plane
  1000 // far plane
);
camera.position.set(0, 0, 20);
camera.lookAt(0, 0, 0);


    // const camera = new THREE.PerspectiveCamera(10, 
    // window.innerWidth/window.innerHeight, 0.5, 1000 ); // Specify camera type like this
    // camera.position.set(0,0,20); // Set position like this
    // // camera.lookAt(new THREE.Vector3(2,2.5,500)); // Set look at coordinate like this
// scene.add(camera)

var axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})

// //This will make the animation to be able to be controlled.
const controls = new OrbitControls(camera, renderer.domElement)


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