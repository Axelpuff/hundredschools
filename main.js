import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { schools, philosophers } from './philosophers.js';

const schoolMap = Object.fromEntries(
    schools.map(p => [p.id, p])
);
const philosopherMap = Object.fromEntries(
    philosophers.map(p => [p.id, p])
);

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


const controls = new OrbitControls(camera, canvas);
controls.target.z = 60;
controls.update();

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
const linemat = new THREE.LineBasicMaterial( { transparent: true, opacity: 0, color: 0xff0000 } );
const staff_start_z = 62; // positive x is towards the narrow end
const staff_end_z = -56;
const staff_y = 10;
const width_start = 0.93;
const width_end = 2.9;
const points = [];
const lines = [];

for (let i = -3; i <= 3; i++) {
    points.push([new THREE.Vector3(i * width_start, staff_y, staff_start_z), new THREE.Vector3(i * width_end, staff_y, staff_end_z)]);
}
for (let i = 0; i < points.length; i++) {
    const geometry = new THREE.BufferGeometry().setFromPoints( points[i] );
    lines[i] = new THREE.Line( geometry, linemat);
    scene.add(lines[i]);
}

// orb proper implementation
const staff_start_time = 1000; // 1000 BC
const staff_end_time = 0; // 0 AD
const time_to_z_factor = (staff_end_z - staff_start_z) / (staff_end_time - staff_start_time);

function get_orb_position(timePosition, string) {
    const z = time_to_z_factor * (timePosition - staff_start_time) + staff_start_z;
    const rc = new THREE.Raycaster(new THREE.Vector3(10, 10, z), new THREE.Vector3(-1, 0, 0));
    const intersections = rc.intersectObject(lines[string], false);
    return intersections[0]; // these are both lines so there should only be one intersection
}

// create philosopher orbs
const spheregeom = new THREE.SphereGeometry( 1, 32, 16 );
const orbs = [];
for (const philosopher of philosophers) {
    const color = schoolMap[philosopher.school].color;
    const spheremat = new THREE.MeshBasicMaterial( { color: color } );

    const sphere = new THREE.Mesh( spheregeom, spheremat );
    sphere.name = philosopher.id;
    console.log(get_orb_position(philosopher.timePosition, philosopher.string));
    sphere.position.copy(get_orb_position(philosopher.timePosition, philosopher.string).point);
    scene.add( sphere );
    orbs.push( sphere );
}

// guqin model
const loader = new GLTFLoader();
const guqin = await loader.loadAsync('assets/chinese_zither/scene.gltf');

guqin.scene.traverse((obj) => {
    if (obj.name == "Collada_visual_scene_group") {
        obj.position.x = 2.1; // for some reason required to center the guqin
    }
    if (!obj.isMesh) return;
    const mat = obj.material;
    if (!mat || !mat.isMeshStandardMaterial) return;

    // fix guqin appearing as shiny black with no wood texture visible
    mat.vertexColors = false;
    mat.needsUpdate = true;
});

scene.add(guqin.scene);

// philosopher picking
// full philosopher picking flow (from neutral):
// no hover: philosopher icons are visible on each orb
// hover:
//  romanized name appears in white text under orb
//  if user hasn't clicked any orb yet, show text on bottom of screen: "click a philosopher to change to their view"
// click:
//  zither blurs and darkens into background, non-important orbs disappear
//  important orbs rearrange into shape on left half of screen
//  term-specific info appears on bottom third of screen
//  main description appears on right half of screen
//      exit button/back arrow is on this pane. Revert to neutral when clicked
//
// philosopher picking flow (from specific view of X):
// no hover: only icons
// hover:
//  orb glows
//  romanized name hover text
//  if user hasn't clicked any orb yet from specific view, show text on bottom of screen: "click a philosopher to learn about X's view of them"
// click:
//  orb stays lit, others darken
//  right pane now shows information about X's view on Y
//      exit button/back arrow is on this pane. Revert to previous right pane when clicked
// click (on philosopher X): either revert to default specific view, or do nothing if already in specific view

const hoverText = document.getElementById("overlay");
let pickedPhil = null;
const pickRayCaster = new THREE.Raycaster();
const pickPosition = new THREE.Vector2(0, 0);

// these three functions copied from Three.js picking manual
function getCanvasRelativePosition(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: (event.clientX - rect.left) * canvas.width  / rect.width,
    y: (event.clientY - rect.top ) * canvas.height / rect.height,
  };
}

function setPickPosition(event) {
  const pos = getCanvasRelativePosition(event);
  pickPosition.x = (pos.x / canvas.width ) *  2 - 1;
  pickPosition.y = (pos.y / canvas.height) * -2 + 1;  // note we flip Y
}

function clearPickPosition() {
  // unlike the mouse which always has a position
  // if the user stops touching the screen we want
  // to stop picking. For now we just pick a value
  // unlikely to pick something
  pickPosition.x = -100000;
  pickPosition.y = -100000;
}

function renderPickedPhil() {
    // reset philosopher from last frame
    if (pickedPhil) {
        // eventually the hover texts will fade in and out so we have to assume
        // there might be multiple at once
        const lastPhilHovers = hoverText.getElementsByClassName(pickedPhil.id);
        // for now just remove all of them (no transition)
        for (const lastPhilHover of lastPhilHovers) {
            console.log(lastPhilHover);
            hoverText.removeChild(lastPhilHover);
        }
        pickedPhil = null;
    }
    // I guess the ideal would be to tween the existing hover if you come back to the same orb before
    // the text fades. Maybe that's indistinguishable from just creating a new one though
    pickRayCaster.setFromCamera(pickPosition, camera)
    const intersections = pickRayCaster.intersectObjects(orbs, false);
    if (intersections.length) {
        const orb = intersections[0].object;
        if (pickedPhil && orb.name == pickedPhil.id) {return;}

        pickedPhil = philosopherMap[orb.name];
        
        const label = document.createElement("div");
        label.textContent = pickedPhil.name;
        label.classList.add(pickedPhil.id);
        hoverText.appendChild(label);
        // get the orb position
        const tempPos = new THREE.Vector3();
        orb.updateWorldMatrix(true, false); // necessary?
        orb.getWorldPosition(tempPos);
        //const tempPos = orb.position.project(camera);
        tempPos.project(camera);
        // convert to CSS coords
        const x = (tempPos.x * .5 + .5) * canvas.clientWidth;
        const y = (tempPos.y * -.5 + .5) * canvas.clientHeight;
        // I don't understand this at all
        label.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`;
    }
}

window.addEventListener('mousemove', setPickPosition);
window.addEventListener('mouseout', clearPickPosition);
window.addEventListener('mouseleave', clearPickPosition);

// mobile support
window.addEventListener('touchstart', (event) => {
    // prevent the window from scrolling
    event.preventDefault();
    setPickPosition(event.touches[0]);
}, {passive: false});
    
window.addEventListener('touchmove', (event) => {
    setPickPosition(event.touches[0]);
});
    
window.addEventListener('touchend', clearPickPosition);

// window resize handling

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

// rendering

function animate() {
    renderPickedPhil();
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
