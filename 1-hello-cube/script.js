import * as THREE from "threelocal";

// console.log(THREE);

const scene = new THREE.Scene();

//Group
const group = new THREE.Group();

//Mesh
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: "blue" });
const material = new THREE.MeshBasicMaterial({ color: "skyblue" });
const boxMesh = new THREE.Mesh(boxGeometry, material);

// boxMesh.position.z = 1;
// console.log("box pos:", boxMesh.position);

boxMesh.scale.x = 1.5;
// console.log("box scale:", boxMesh.scale);

boxMesh.rotation.x = Math.PI * 0.25;
boxMesh.rotation.y = Math.PI * 1.2;
console.log("box rotation:", boxMesh.rotation);

//adding the two meshes inside the Group Class
group.add(boxMesh);
group.position.x = 1;
console.log("group pos:", group.position);
scene.add(group);

//AxesHelper
const axesHelper = new THREE.AxesHelper(1);
scene.add(axesHelper);

//Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
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
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera);

//Renderer
//select the canvas element
const canvas = document.querySelector(".draw");
//add the WebGLRenderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);
//display what the camera in the scene captured
renderer.render(scene, camera);
