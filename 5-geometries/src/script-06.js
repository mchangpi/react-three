import "./style.css";
import * as THREE from "three";
import {
  //   MapControls,
  OrbitControls,
} from "three/examples/jsm/controls/OrbitControls";

//------------------------------------------Scene------------------------------------------
const scene = new THREE.Scene();

//------------------------------------------Lights-----------------------------------------
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
const pointLight = new THREE.PointLight(0xffffff, 5);
pointLight.position.set(2, 2, 2);
scene.add(ambientLight, pointLight);

//----------------------------------------TextureLoader-------------------------------------
const manager = new THREE.LoadingManager();
manager.onProgress = (url, itemsLoaded, itemsTotal) => {
  console.log(
    `Loading file:  ${url}  \n Loaded ${itemsLoaded}  of ${itemsTotal} files.`
  );
};
manager.onLoad = () => {
  console.log("Loading complete!");
};
manager.onError = (url) => {
  console.log("There was an error loading " + url);
};

/* put texture/ into public/ folder ! */
const textureLoader = new THREE.TextureLoader(manager);
const colorTexture = textureLoader.load("/texture/color.jpg");
const matcapTexture = textureLoader.load("/texture/mat2.png");

const threeTone = textureLoader.load("/texture/threeTone.jpg");

const bumpTexture = textureLoader.load("/texture/bump.jpg");
const displacementTexture = textureLoader.load("/texture/displacementMap.jpg");

//---------------------------------------CubeTextureLoader-----------------------------------
const cubeTextureLoader = new THREE.CubeTextureLoader();
const envTexture = cubeTextureLoader.load([
  "/texture/env/px.png",
  "/texture/env/nx.png",
  "/texture/env/py.png",
  "/texture/env/ny.png",
  "/texture/env/pz.png",
  "/texture/env/nz.png",
]);
// scene.background = envTexture;

//------------------------------------------Resizing------------------------------------------
window.addEventListener("resize", () => {
  //Update Size
  aspect.width = window.innerWidth;
  aspect.height = window.innerHeight;

  //New Aspect Ratio
  camera.aspect = aspect.width / aspect.height;
  camera.updateProjectionMatrix();

  //New RendererSize
  renderer.setSize(aspect.width, aspect.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

let isRender = false;
let geometry = null;
let material = null;
//-------------------------------------MeshBasicMaterial---------------------------------
if (isRender) {
  geometry = new THREE.PlaneGeometry(1.3, 1.3, 32, 32);
  // material = new THREE.MeshBasicMaterial({ map: colorTexture });
  material = new THREE.MeshBasicMaterial();
  material.map = colorTexture;
  // material.wireframe = true;
  // material.color = new THREE.Color("rgb(255,0,0)");
  // material.color = new THREE.Color("skyblue");
  material.transparent = true;
  material.opacity = 0.7;
  // material.side = THREE.BackSide;
  material.side = THREE.DoubleSide;
  // material.visible = false;
}
//-------------------------------------MeshDepthMaterial---------------------------------
if (isRender) {
  geometry = new THREE.TorusGeometry(0.3, 0.2, 32, 32);
  material = new THREE.MeshDepthMaterial();
}
//-------------------------------------MeshNormalMaterial---------------------------------
if (isRender) {
  geometry = new THREE.TorusGeometry(0.3, 0.2, 32, 32);
  material = new THREE.MeshNormalMaterial();
  console.log("normal", geometry.attributes.normal);
}
//-------------------------------------MeshMatcapMaterial---------------------------------
if (isRender) {
  geometry = new THREE.TorusGeometry(0.3, 0.2, 32, 32);
  material = new THREE.MeshMatcapMaterial();
  material.matcap = matcapTexture;
}
//-------------------------------------MeshLambertMaterial---------------------------------
if (isRender) {
  geometry = new THREE.TorusGeometry(0.3, 0.2, 32, 32);
  material = new THREE.MeshLambertMaterial();
}
//-------------------------------------MeshPhongMaterial-----------------------------------
if (isRender) {
  geometry = new THREE.TorusGeometry(0.3, 0.2, 32, 32);
  material = new THREE.MeshPhongMaterial();
  material.shininess = 700;
  material.specular = new THREE.Color("blue");
}
//-------------------------------------MeshToonMaterial-----------------------------------
if (isRender) {
  geometry = new THREE.TorusGeometry(0.3, 0.2, 32, 32);
  material = new THREE.MeshToonMaterial();
  material.color = new THREE.Color("white");
  threeTone.minFilter = THREE.NearestFilter;
  threeTone.magFilter = THREE.NearestFilter;
  material.gradientMap = threeTone;
}
//-------------------------------------MeshStandardMaterial--------------------------------
if (isRender) {
  geometry = new THREE.TorusGeometry(0.3, 0.2, 32, 32);
  material = new THREE.MeshStandardMaterial();

  /* Non-metallic materials such as wood or stone use 0.0, 
     metallic use 1.0 */
  material.metalness = 0.1;
  /* 0.0 means a smooth mirror reflection, 
     1.0 means fully diffuse. */
  material.roughness = 0.9;
}
//-----------------------------------------BumpTexture-------------------------------------
if (isRender) {
  geometry = new THREE.PlaneGeometry(2, 1.5);
  material = new THREE.MeshStandardMaterial();
  material.map = colorTexture;
  material.bumpMap = bumpTexture;
}
//-----------------------------------------DisplacementTexture-----------------------------
if (isRender) {
  geometry = new THREE.PlaneGeometry(0.7, 0.7, 64, 64);
  material = new THREE.MeshStandardMaterial();
  material.map = colorTexture;
  material.displacementMap = displacementTexture;
}
//-----------------------------------------CubeTexture Sphere------------------------------

if (isRender || true) {
  geometry = new THREE.SphereGeometry(0.25, 8, 8);
  material = new THREE.MeshStandardMaterial();
  material.metalness = 0.95;
  material.roughness = 0.05;
  material.envMap = envTexture;
  scene.background = envTexture;
}
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//------------------------------------------Camera------------------------------------------
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 1;
scene.add(camera);

//------------------------------------------Renderer------------------------------------------
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);

//----------------------------------------OrbitControls----------------------------------------
const orbitControls = new OrbitControls(camera, canvas);
orbitControls.enableDamping = true;

//-----------------------------------------Clock Class-----------------------------------------
const clock = new THREE.Clock();

//-------------------------------------------Animate-------------------------------------------
const animate = () => {
  //--------------------------------------GetElapsedTime---------------------------------------
  const elapsedTime = clock.getElapsedTime();

  //--------------------------------------Update Controls--------------------------------------
  orbitControls.update();

  //------------------------------------------Renderer-----------------------------------------
  renderer.render(scene, camera);

  //-----------------------------------RequestAnimationFrame-----------------------------------
  window.requestAnimationFrame(animate);
};
animate();
