import * as THREE from "threelocal";

// console.log(THREE);

const scene = new THREE.Scene();

//Mesh
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: "blue" });
const material = new THREE.MeshBasicMaterial({ color: "skyblue" });
const boxMesh = new THREE.Mesh(boxGeometry, material);
console.log("box pos:", boxMesh.position);

boxMesh.position.z = 1;
scene.add(boxMesh);

//Camera
const aspect = {
  // width: window.innerWidth,
  // height: window.innerHeight,
  width: 300,
  height: 400,
};
console.log("aspect", aspect);

/** -----------------------------------------------------------------
 * Create a perspective projection matrix using a field-of-view and an aspect ratio.
 * @param fovy   Number The angle between the upper and lower sides of the viewing frustum.
 * @param aspect Number The aspect ratio of the viewing window. (width/height).
 * @param near   Number Distance to the near clipping plane along the -Z axis.
 * @param far    Number Distance to the far clipping plane along the -Z axis.
 * @return Float32Array The perspective transformation matrix.
 */
const camera = new THREE.PerspectiveCamera(
  75 /* in degree */,
  aspect.width / aspect.height,
  1,
  10
);
camera.position.z = 5;
camera.position.x = 0.8;
camera.position.y = 0.8;
scene.add(camera);

//Renderer
//select the canvas element
const canvas = document.querySelector(".draw");
//add the WebGLRenderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);
//display what the camera in the scene captured
renderer.render(scene, camera);
