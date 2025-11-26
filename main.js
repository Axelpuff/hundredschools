import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const orthoBoxHeight = 15

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
const aspect = sizes.width / sizes.height;

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(
    -aspect * orthoBoxHeight,
    aspect * orthoBoxHeight,
    orthoBoxHeight,
    -orthoBoxHeight,
    0.1,
    1000
);

const canvas = document.getElementById("experience-canvas");
const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

camera.position.y = 20; // above
camera.position.z = -50; // to the left end of the guqin
camera.rotation.x = - Math.PI / 2; // looking down
camera.rotation.z = Math.PI / 2; // guqin oriented horizontally. On mobile should remain 0 (this would go in resizedisplay


/* const controls = new OrbitControls(camera, canvas);
controls.target.z = 60;
controls.update(); */

const envLoader = new THREE.TextureLoader();
const env = await envLoader.loadAsync('assets/images/footprint_court.jpg');
env.mapping = THREE.EquirectangularReflectionMapping;
scene.environment = env;
scene.environmentIntensity = 0.5;

const directional = new THREE.DirectionalLight(0xffffff, 0.5);
directional.position.set(-8, 60, 50);
directional.target.position.set(8, 0, 16);
scene.add(directional);
scene.add(directional.target);
/* const lightHelper = new THREE.DirectionalLightHelper(directional, 5);
scene.add(lightHelper); */

// timeline lines
const linemat = new THREE.LineBasicMaterial( { color: 0xff0000 } );
// could be refactored, there are only 4-5 numbers that are important in here
const points = [
        [new THREE.Vector3( 0, 10, -56 ), new THREE.Vector3( 0, 10, 62 )],
        [new THREE.Vector3( 2.9, 10, -56 ), new THREE.Vector3( 0.93, 10, 62 )],
        [new THREE.Vector3( 5.8, 10, -56 ), new THREE.Vector3( 1.86, 10, 62 )],
        [new THREE.Vector3( 8.7, 10, -56 ), new THREE.Vector3( 2.8, 10, 62 )],
        [new THREE.Vector3( -2.9, 10, -56 ), new THREE.Vector3( -0.93, 10, 62 )],
        [new THREE.Vector3( -5.8, 10, -56 ), new THREE.Vector3( -1.86, 10, 62 )],
        [new THREE.Vector3( -8.7, 10, -56 ), new THREE.Vector3( -2.8, 10, 62 )],
];
const lines = [];
for (let i = 0; i < points.length; i++) {
    const geometry = new THREE.BufferGeometry().setFromPoints( points[i] );
    lines[i] = new THREE.Line( geometry, linemat);
    scene.add(lines[i]);
}

// orb test
const spheregeom = new THREE.SphereGeometry( 15, 32, 16 );
const spheremat = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const sphere = new THREE.Mesh( spheregeom, spheremat );
scene.add( sphere );
sphere.position = new THREE.Vector3(0, 10, -40)

const loader = new GLTFLoader();
const guqin = await loader.loadAsync('assets/chinese_zither/scene.gltf');

guqin.scene.traverse((obj) => {
    if (obj.name == "Collada_visual_scene_group") {
        obj.position.x = 2.1; // for some reason required to center the guqin
    }
    if (!obj.isMesh) return;
    const mat = obj.material;
    if (!mat || !mat.isMeshStandardMaterial) return;

    // Make sure base color isn’t killing the texture
    // mat.color.set(0xffffff);
    mat.vertexColors = false;

    // Make it less mirror-like
    // mat.metalness = 0.1;   // or something small like 0.1
    // mat.roughness = 1;   // higher = more diffuse, texture more obvious

    mat.needsUpdate = true;
});

scene.add(guqin.scene);

function handleResize() {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    const aspect = sizes.width / sizes.height;
    //duplicated
    camera.left = -aspect * orthoBoxHeight;
    camera.right = aspect * orthoBoxHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

window.addEventListener("resize", handleResize);

function animate() {
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
