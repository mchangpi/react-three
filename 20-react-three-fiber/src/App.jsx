import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

function App() {
  return (
    <div className="container">
      <Canvas
        camera={{
          fov: 75,
          near: 0.01,
          far: 100,
          // position: [0, 0, 7], // 1st way
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;

/*
//Group
const group = new THREE.Group()

//Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const mesh = new THREE.Mesh(geometry, material);


const geometry2= new THREE.BoxGeometry(1, 1, 1);
const material2 = new THREE.MeshBasicMaterial({ color: "purple" });
const mesh2 = new THREE.Mesh(geometry2, material2);

group.add(mesh,mesh2)
scene.add(group)
group.position.x = 1
*/
