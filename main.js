import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { schools, philosophers } from "./philosophers.js";
import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.13/+esm";

const schoolMap = Object.fromEntries(schools.map((p) => [p.id, p]));
const philosopherMap = Object.fromEntries(philosophers.map((p) => [p.id, p]));

const resetDuration = 0.5;

/*
|  SCENE SETUP
*/

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

let aspect = sizes.width / sizes.height;
const scene = new THREE.Scene();
const baseOrthoBoxHeight = 15;
const renderInfo = {
  orthoBoxHeight: baseOrthoBoxHeight,
};

const canvas = document.getElementById("experience-canvas");
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const camera = new THREE.OrthographicCamera(
  -aspect * renderInfo.orthoBoxHeight,
  aspect * renderInfo.orthoBoxHeight,
  renderInfo.orthoBoxHeight,
  -renderInfo.orthoBoxHeight,
  0.1,
  1000
);
function updateCamera() {
  camera.left = -aspect * renderInfo.orthoBoxHeight;
  camera.right = aspect * renderInfo.orthoBoxHeight;
  camera.top = renderInfo.orthoBoxHeight;
  camera.bottom = -renderInfo.orthoBoxHeight;
  camera.updateProjectionMatrix();
}
function modifyCamera(zPosition, orthoBoxHeight, tl, startTime, duration) {
  tl.to(
    camera.position,
    {
      duration: duration,
      z: zPosition,
    },
    startTime
  );
  tl.to(
    renderInfo,
    {
      duration: duration,
      orthoBoxHeight: orthoBoxHeight,
      onUpdate: updateCamera,
    },
    startTime
  );
}
camera.position.y = 20; // above
camera.position.z = 45; // to the left end of the guqin
camera.rotation.x = -Math.PI / 2; // looking down
camera.rotation.z = Math.PI / 2; // guqin oriented horizontally. On mobile should remain 0 (this would go in resizedisplay

function setHorizontal() {
camera.rotation.z = Math.PI / 2; // guqin oriented horizontally. On mobile should remain 0 (this would go in resizedisplay
orbPerspectiveAxis.rotation.z = Math.PI / 2;
}
function setVertical() {
camera.rotation.z = Math.PI; // guqin oriented horizontally. On mobile should remain 0 (this would go in resizedisplay
orbPerspectiveAxis.rotation.z = Math.PI;
}

/* const controls = new OrbitControls(camera, canvas);
controls.target.z = 60;
controls.update(); */

// Skybox
const envLoader = new THREE.TextureLoader();
const env = await envLoader.loadAsync("assets/images/footprint_court.jpg");
env.mapping = THREE.EquirectangularReflectionMapping;
scene.environment = env;
scene.environmentIntensity = 0.5;

// Default directional light
const directional = new THREE.DirectionalLight(0xffffff, 0.5);
directional.position.set(-8, 60, 50);
directional.target.position.set(8, 0, 16);
scene.add(directional);
scene.add(directional.target);

// Timeline lines
const lineMat = new THREE.LineBasicMaterial({
  transparent: true,
  opacity: 0,
  color: 0xff0000,
});
const staff_start_z = 62; // positive x is towards the narrow end
const staff_end_z = -56;
const staff_y = 10;
const width_start = 0.93;
const width_end = 2.9;
const staffPoints = [];
const staffLines = [];

for (let i = -3; i <= 3; i++) {
  staffPoints.push([
    new THREE.Vector3(i * width_start, staff_y, staff_start_z),
    new THREE.Vector3(i * width_end, staff_y, staff_end_z),
  ]);
}
for (let i = 0; i < staffPoints.length; i++) {
  const geometry = new THREE.BufferGeometry().setFromPoints(staffPoints[i]);
  staffLines[i] = new THREE.Line(geometry, lineMat);
  scene.add(staffLines[i]);
}

// Create philosopher orbs
const staff_start_time = 1000; // 1000 BC
const staff_end_time = 0; // 0 AD
const time_to_z_factor =
  (staff_end_z - staff_start_z) / (staff_end_time - staff_start_time);

function get_orb_position(timePosition, string) {
  const z =
    time_to_z_factor * (timePosition - staff_start_time) + staff_start_z;
  const rc = new THREE.Raycaster(
    new THREE.Vector3(10, staff_y, z),
    new THREE.Vector3(-1, 0, 0)
  );
  // string within the struct is numbered 1-7, so subtract 1
  const intersections = rc.intersectObject(staffLines[string - 1], false);
  console.assert(intersections[0]);
  return intersections[0].point; // there should be exactly one intersection
}

// From Three.js canvas textures tutorial
	function makeLabelCanvas( size, name ) {

		const borderSize = 2;
		const ctx = document.createElement( 'canvas' ).getContext( '2d' );
		const font = `${size}px Noto Serif TC`;
		ctx.font = font;
		// measure how long the name will be
		const doubleBorderSize = borderSize * 2;
		const width = ctx.measureText( name ).width + doubleBorderSize;
		const height = size + doubleBorderSize;
		ctx.canvas.width = width;
		ctx.canvas.height = height;

		// need to set font again after resizing canvas
		ctx.font = font;
		ctx.textBaseline = 'top';

		/* ctx.fillStyle = 'blue';
		ctx.fillRect( 0, 0, width, height ); */
		ctx.fillStyle = 'white';
		ctx.fillText( name, borderSize, borderSize );

		return ctx.canvas;

	}

const sphereGeomMajor = new THREE.SphereGeometry(1, 32, 16);
const sphereGeomMinor = new THREE.SphereGeometry(0.85, 32, 16);
const orbs = [];
const orbMap = {};
for (const philosopher of philosophers) {
  const color = philosopher.color || schoolMap[philosopher.school].color;
  const timePosition = (philosopher.dates[0] + philosopher.dates[1]) / 2; // for now just take the average of the beginning and end

  const spheremat = new THREE.MeshBasicMaterial({ color: color });
  const orb = new THREE.Mesh(
    philosopher.major ? sphereGeomMajor : sphereGeomMinor,
    spheremat
  );
  orb.name = philosopher.id;
  orb.position.copy(get_orb_position(timePosition, philosopher.string));

  const canvas = makeLabelCanvas(40, philosopher.chineseName[0]) // default to first character
  const texture = new THREE.CanvasTexture(canvas);
  // because our canvas is likely not a power of 2
  // in both dimensions set the filtering appropriately. (from tutorial)
  texture.minFilter = THREE.LinearFilter;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  const labelMat = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false,
  });
  const label = new THREE.Sprite(labelMat);
  label.position.y = 0;
  orb.add(label);

  orbs.push(orb);
  orbMap[philosopher.id] = orb;
  scene.add(orb);
}
let focusedOrbs = orbs.slice(); // Needs to be a clone so it can be modified separately

const orbPerspectiveY = 15;
const orbPerspectiveAxis = new THREE.Object3D();
orbPerspectiveAxis.rotation.x = -Math.PI / 2;
orbPerspectiveAxis.rotation.z = Math.PI / 2;
scene.add(orbPerspectiveAxis);

// set focused orbs to all orbs relevant to (and including) philosopherId
function focusRelevantOrbs(philosopherId, views) {
  const mainOrb = orbMap[philosopherId];
  focusedOrbs = [mainOrb];
  for (const philosopherId in views) {
    focusedOrbs.push(orbMap[philosopherId]);
  }
  // position perspective axis based on current orb location
  orbPerspectiveAxis.position.z = mainOrb.position.z;
  orbPerspectiveAxis.position.y = orbPerspectiveY;
}

function repositionFocusedOrbs(
  selectedPhilId,
  displayPosition,
  views,
  tl,
  startTime,
  duration
) {
  for (let i = 0; i < focusedOrbs.length; i++) {
    const orb = focusedOrbs[i];
    const philosopherId = orb.name;
    let targetRelativePos = new THREE.Vector3().copy(
      philosopherId == selectedPhilId
        ? displayPosition
        : views[philosopherId].display.position
    );
    let targetWorldPos = orbPerspectiveAxis.localToWorld(targetRelativePos);
    tl.to(
      orb.position,
      {
        duration: duration,
        ease: "elastic.inout(1.75,1)",
        x: targetWorldPos.x,
        y: targetWorldPos.y, // not visually noticeable - remove?
        onComplete: () => {
          if (orb.parent == null) {
            orbPerspectiveAxis.attach(orb);
          }
        },
      },
      i == 0 ? startTime : "-=0.9" // should be 0.1 delay between orbs
    );
    tl.to(
      orb.position,
      {
        duration: duration,
        ease: "elastic.inout(1.75,1)",
        z: targetWorldPos.z,
        onComplete: () => {
          if (orb.parent == null) {
            orbPerspectiveAxis.attach(orb);
          }
        },
      },
      "-=1" // same time as x and y change
    );
  }
}

// reparents focused orbs to scene with original positions and refocuses all orbs
function resetFocusedOrbs(tl, startTime, duration) {
  for (let i = 0; i < focusedOrbs.length; i++) {
    const orb = focusedOrbs[i];
    const philosopher = philosopherMap[orb.name];
    const timePosition = (philosopher.dates[0] + philosopher.dates[1]) / 2;
    const targetWorldPos = get_orb_position(timePosition, philosopher.string);

    scene.attach(orb);
    tl.to(
      orb.position,
      {
        duration: duration,
        ease: "back.inOut",
        x: targetWorldPos.x,
        y: targetWorldPos.y, // not visually noticeable - remove?
      },
      startTime + i * 0.1
    );
    tl.to(
      orb.position,
      {
        duration: duration,
        ease: "power3.inout",
        z: targetWorldPos.z,
      },
      startTime + i * 0.1
    );
  }
  // reset focus to all orbs
  focusedOrbs = orbs.slice();
}

// Guqin model
const loader = new GLTFLoader();
const guqin = await loader.loadAsync("assets/chinese_zither/scene.gltf");
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

// Blur plane
const blurDuration = 1;
const planeGeom = new THREE.PlaneGeometry(200, 200, 1, 1);
const planeMat = new THREE.MeshPhysicalMaterial({
  transmission: 1,
  roughness: 0.4,
  transparent: true,
  opacity: 0,
});
const blurPlane = new THREE.Mesh(planeGeom, planeMat);
blurPlane.position.y = 12.5;
blurPlane.rotation.x = -Math.PI / 2;
scene.add(blurPlane);

function unblurBackground(tl, startTime, duration) {
  tl.to(
    blurPlane.material,
    { duration: blurDuration, opacity: 0 },
    startTime
  );
  tl.to(directional, { duration: duration, intensity: 0.5 }, startTime);
}

function blurBackground(tl, startTime, duration) {
  tl.to(
    blurPlane.material,
    { duration: blurDuration, opacity: 0.8 },
    startTime
  );
  tl.to(directional, { duration: duration, intensity: 0 }, startTime);
}

// Perspective mode prop management
function addProps(props, axis, timeline, startTime) {
  for (let i = 0; i < props.length; i++) {
    const prop = props[i];
    const properties = prop.properties;
    if (prop.type == "arrow") {
      const arrow = new THREE.ArrowHelper(
        properties.dir,
        properties.origin || { x: 0, y: 0, z: 0 },
        0,
        properties.color,
        properties.headLength,
        properties.headWidth
      );
      axis.add(arrow);
      // it's ok if the user goes back during this animation, the arrow will get cleared
      // (unless GSAP has a memory leak?)
      const arrowState = { length: 0 };
      arrow.visible = false;
      timeline.to(
        arrowState,
        {
          duration: 0.25,
          length: properties.length,
          onStart: () => {
            arrow.visible = true;
          },
          onUpdate: () => {
            arrow.setLength(arrowState.length);
          },
        },
        startTime + i * 0.25
      );
    }
  }
}

function clearProps(axis) {
  axis.clear(); // dispose?
}

// UI panes
const backButton = document.getElementById("back-button");
const infoPanels = document.getElementById("info-panels");
const leftPanel = document.getElementById("left-panel");
const rightPanel = document.getElementById("right-panel");
const bottomPanel = document.getElementById("bottom-panel");
function fillPanes(selectedPhil) {
  // fill panes with information
  const heading = document.querySelector("#right-panel > div:first-of-type");
  const subheading = document.querySelector("#right-panel > h4:first-of-type");
  const headCN = heading.querySelector(".cn");
  const headEN = heading.querySelector(".en");
  if (selectedPhil.description) {
  for (const paragraphText of selectedPhil.description) {
    const paragraph = document.createElement("p");
    paragraph.textContent = paragraphText;
    rightPanel.appendChild(paragraph);
  }
}
  headCN.textContent = selectedPhil.chineseName;
  headEN.textContent = selectedPhil.name;
  subheading.textContent = schoolMap[selectedPhil.school].name;
  //description.textContent = selectedPhil.description || "Description pending";

  bottomPanel.replaceChildren();
  //const subpanels = [];
  for (const term of selectedPhil.keyTerms) {
    const subpanel = document.createElement("div");
    const termHead = document.createElement("h1");
    const cn = document.createElement("span");
    const en = document.createElement("span");
    const termDesc = document.createElement("p");
    cn.className = "cn";
    en.className = "en";
    subpanel.className = "card glass-panel p-2 mb-2 w-25"
    cn.textContent = term.term;
    en.textContent = " (" + term.pinyin + ")";
    termDesc.textContent = term.description;
    termHead.appendChild(cn);
    termHead.appendChild(en);
    subpanel.appendChild(termHead);
    subpanel.appendChild(termDesc);
    bottomPanel.appendChild(subpanel);
    //subpanels.push(subpanel);
  }
  //bottomPanel.appendChild(subpanels);

  // show panes on right side and bottom
  // tween pane opacity
  leftPanel.style.opacity = 0;
}

/*
| Pointer state
*/

const pointerRayCaster = new THREE.Raycaster();
const pointerPosition = new THREE.Vector2(0, 0);

// these three functions copied from Three.js picking manual
function getCanvasRelativePosition(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: ((event.clientX - rect.left) * canvas.width) / rect.width,
    y: ((event.clientY - rect.top) * canvas.height) / rect.height,
  };
}

function setPointerPosition(event) {
  const pos = getCanvasRelativePosition(event);
  pointerPosition.x = (pos.x / canvas.width) * 2 - 1;
  pointerPosition.y = (pos.y / canvas.height) * -2 + 1; // note we flip Y
}

function clearPointerPosition() {
  // unlike the mouse which always has a position
  // if the user stops touching the screen we want
  // to stop picking. For now we just pick a value
  // unlikely to pick something
  pointerPosition.x = -100000;
  pointerPosition.y = -100000;
}

function getPointedOrb() {
  pointerRayCaster.setFromCamera(pointerPosition, camera);
  const intersections = pointerRayCaster.intersectObjects(focusedOrbs, false);
  if (!intersections.length) {
    return null;
  }
  const orb = intersections[0].object;
  return orb;
}

function getPointedPhilId() {
  const orb = getPointedOrb();
  if (!orb) return null;
  return orb.name;
}

// Scroll handling
let scrollable = true; // false when intro implemented
const scrollArea = document.getElementById("scroll-area");
const scroll_start_z = 50; // positive z is towards the narrow end
const scroll_end_z = -50;
function handleScroll(event) {
  if (!scrollable) return; // try to save computation

  const maxScroll = scrollArea.clientHeight - window.innerHeight;
  const scrollPercent = window.scrollY / maxScroll;

  camera.position.z =
    scrollPercent * (scroll_end_z - scroll_start_z) + scroll_start_z;
}

let neutralPosZ = scroll_start_z; // saved state for returning to neutral
let neutralScroll = 0; // saved state for neutral
function restoreScroll() {
  scrollArea.style.overflow = "auto";
  scrollArea.style.height = "500vh"; // magic number

  camera.position.z = neutralPosZ;
  window.scrollTo({ top: neutralScroll, behavior: "instant" });
  scrollable = true;
}
function saveScroll() {
  scrollable = false;
  neutralPosZ = camera.position.z;
  neutralScroll = window.scrollY;
}
window.addEventListener("scroll", handleScroll);

// Application state (updated on events)
let currentState = "neutral"; // should be "intro" (implemented later), "neutral", or "perspective"
let transitioning = false;
let selectedPhilId = null;
let secondaryPhilId = null; // selected philosopher when in perspective already, null if not in perspective

// this will get called outside the animate thread and so can wait and do other stuff
function changeState(destState, destPhilId) {
  console.log(transitioning);
  if (transitioning) return; // should the caller be responsible for this?
  transitioning = true;
  let tl = gsap.timeline({
    onComplete: () => {
      if (destState == "neutral") {
        restoreScroll();
      }
      transitioning = false;
      currentState = destState;
    },
  });

  let startTime = 0;
  if (currentState == "neutral") {
    saveScroll();
  } else if (currentState == "perspective") {
    selectedPhilId = null;
    secondaryPhilId = null;
    resetFocusedOrbs(tl, startTime, resetDuration);
    startTime += resetDuration * 2;
    clearProps(orbPerspectiveAxis);
  }

  if (destState == "neutral") {
    console.assert(currentState != "neutral");
    // tween camera to neutralPosZ
    modifyCamera(neutralPosZ, baseOrthoBoxHeight, tl, startTime, resetDuration);
    unblurBackground(tl, startTime, resetDuration);
    // tween panes to transparency separately
    infoPanels.style.display = "none";
  } else if (destState == "perspective") {
    console.assert(currentState != "intro");
    console.assert(destPhilId);
    //console.assert(!secondaryPhilId);

    selectedPhilId = destPhilId;
    const selectedPhil = philosopherMap[destPhilId];
    focusRelevantOrbs(selectedPhilId, selectedPhil.views);
    repositionFocusedOrbs(
      selectedPhilId,
      selectedPhil.displayPosition,
      selectedPhil.views,
      tl,
      startTime,
      blurDuration,
    );
    // make these orbs glow more
    modifyCamera(orbPerspectiveAxis.position.z, 25, tl, startTime, blurDuration);
    blurBackground(tl, startTime, blurDuration);
    if (selectedPhil.displayProps) {
      addProps(selectedPhil.displayProps, orbPerspectiveAxis, tl, 1);
    }
    fillPanes(selectedPhil);
    infoPanels.style.display = "block";
  } else if (destState == "intro") {
    console.assert(currentState == "neutral");
  } else {
    throw "Error: invalid destination state " + destState;
  }
}

function showSecondary(destPhilId) {
  if (transitioning) return; // should the caller be responsible for this?
  if (destPhilId == selectedPhilId) destPhilId = null;
  secondaryPhilId = destPhilId;
  if (!destPhilId) {
    leftPanel.style.opacity = 0;
    return;
  }
  const heading = document.querySelector("#left-panel > div:first-of-type");
  const subheading = document.querySelector("#left-panel > h4:first-of-type");
  const headCN = heading.querySelector(".cn");
  const headEN = heading.querySelector(".en");

  const description = document.querySelector("#left-panel > p:first-of-type");

  const view = philosopherMap[selectedPhilId].views[destPhilId];
  const secondaryPhil = philosopherMap[destPhilId];

  headCN.textContent = secondaryPhil.chineseName;
  headEN.textContent = secondaryPhil.name;
  subheading.textContent = view.quote;
  description.textContent = view.explanation || "Description pending";
  leftPanel.style.opacity = 1;
  console.log("hey");
}

function onPointerDown(event) {
  const pointedPhilId = getPointedPhilId();
  if (!pointedPhilId) return;
  if (currentState == "neutral") {
    changeState("perspective", pointedPhilId);
  } else if (currentState == "perspective") {
    if (pointedPhilId == secondaryPhilId) {
      changeState("perspective", pointedPhilId);
    } else {
      showSecondary(pointedPhilId);
    }
  }
}

function onBackButtonPress(event) {
  if (currentState == "neutral") {
    // go back to intro
  } else if (currentState == "perspective") {
    // go back to neutral
    selectedPhilId = null;
    changeState("neutral");
  }
}
window.addEventListener("pointerdown", onPointerDown);
backButton.addEventListener("click", onBackButtonPress);

// Hover handling
const hoverTextDiv = document.getElementById("overlay");
let hoveredPhil = null;

function renderHoveredPhil() {
  // handle leftover philosopher text from last frame
  // right now this creates and destroys the label every frame
  if (hoveredPhil) {
    // eventually the hover texts will fade in and out so we have to assume
    // there might be multiple at once
    const lastPhilHovers = hoverTextDiv.getElementsByClassName(hoveredPhil.id);
    // for now just remove all of them (no transition)
    for (const lastPhilHover of lastPhilHovers) {
      hoverTextDiv.removeChild(lastPhilHover);
    }
    hoveredPhil = null;
  }
  // I guess the ideal would be to tween the existing hover if you come back to the same orb before
  // the text fades. Maybe that's indistinguishable from just creating a new one though
  const orb = getPointedOrb();
  if (orb == null) {
    hoveredPhil = null;
    return;
  }

  hoveredPhil = philosopherMap[orb.name];

  const label = document.createElement("div");
  label.textContent = hoveredPhil.name;
  label.classList.add(hoveredPhil.id);
  hoverTextDiv.appendChild(label);
  // get the orb position
  const tempPos = new THREE.Vector3();
  orb.updateWorldMatrix(true, false); // necessary?
  orb.getWorldPosition(tempPos);
  //const tempPos = orb.position.project(camera);
  tempPos.project(camera);
  // convert to CSS coords
  const x = (tempPos.x * 0.5 + 0.5) * canvas.clientWidth;
  const y = (tempPos.y * -0.5 + 0.5) * canvas.clientHeight;
  // I don't understand this at all
  label.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`;
}

window.addEventListener("mousemove", setPointerPosition);
window.addEventListener("mouseout", clearPointerPosition);
window.addEventListener("mouseleave", clearPointerPosition);

// mobile support
window.addEventListener(
  "touchstart",
  (event) => {
    // prevent the window from scrolling
    event.preventDefault();
    setPointerPosition(event.touches[0]);
  },
  { passive: false }
);

window.addEventListener("touchmove", (event) => {
  setPointerPosition(event.touches[0]);
});

window.addEventListener("touchend", clearPointerPosition);

// window resize handling

function handleResize() {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  aspect = sizes.width / sizes.height;
  if (aspect < 1) {
    setVertical();
  } else {
    setHorizontal();
  }
  updateCamera();

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

window.addEventListener("resize", handleResize);

// rendering

function animate() {
  renderHoveredPhil();
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
