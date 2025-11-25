import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height,
    0.1, 1000
);
const canvas = document.getElementById("experience-canvas");
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const controls = new OrbitControls(camera, canvas);
controls.update();

const envLoader = new THREE.TextureLoader();
const texture = await envLoader.loadAsync('assets/images/footprint_court.jpg');
texture.mapping = THREE.EquirectangularReflectionMapping;
scene.environment = texture;

// const ambient = new THREE.AmbientLight(0x404040);
// scene.add(ambient);
const directional = new THREE.DirectionalLight(0xFFFFFF, 0.5);
directional.position.set(0, 20, 0);
directional.target.position.set(-5, 0, 0);
scene.add(directional);
scene.add(directional.target);

const loader = new GLTFLoader();
const guqin = await loader.loadAsync('assets/chinese_zither/scene.gltf');
scene.add(guqin.scene);

/* const geometry = new THREE.BoxGeometry(4,1,1);
const material = new THREE.MeshBasicMaterial({color: 0x0000ff});
const cube = new THREE.Mesh(geometry, material);

scene.add(cube); */

camera.position.y = 60;
//camera.rotation.x = 0;

function handleResize() {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

window.addEventListener("resize", handleResize);

function animate() {
    renderer.render(scene, camera);
    /* cube.rotation.x += 0.01;
    cube.rotation.y += 0.01; */
}

renderer.setAnimationLoop(animate);