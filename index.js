import * as THREE from './three.js-master/build/three.module.js'
import {GLTFLoader} from './three.js-master/examples/js/loaders/GLTFLoader.js'

console.log(THREE)

// const canvas = document.querySelector('.webgl')
// const scene = THREE.Scene()

// const loader = new GLTFLoader()
// loader.load('./assets/scene.gltf', function(gltf){
//     console.log(gltf)
// }, function(xhr){
//     console.log((xhr.loaded/xhr.total*100) + "% loaded")
// }, function(error){
//     console.log("An error has occured")
// })

// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100)
// camera.position.set(0,1,2)
// scene.add(camera)

// const renderer = new THREE.WebGL1Renderer({
//     canvas: canvas
// })

// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// renderer.shadowMap.enabled = true
// renderer.gammaOutput = true
