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
    console.log(gltf)
    const root = gltf.scene;
    root.scale.set(0.02, 0.02, 0.02)

    scene.add(root);
}, function(xhr){
    console.log((xhr.loaded/xhr.total*100) + "% loaded")
}, function(error){
    console.log(error)
})


const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(1, 1, 5)
scene.add(light)

// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({
//     color: "red"
// })
// const boxMesh = new THREE.Mesh(geometry, material)
// scene.add(boxMesh)


const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(115, sizes.width/sizes.height, 0.1, 100)
camera.position.set(0,1,2)
scene.add(camera)

const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})

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