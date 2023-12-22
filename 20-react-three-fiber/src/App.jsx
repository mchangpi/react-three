import { Canvas } from "@react-three/fiber";
// import Scene from "./Scene-20";
import Scene from "./Scene-21";

const handleCreated = (state) => {
  // console.log("gl(WebGLRenderer):", state.gl);

  state.gl.setClearColor("cyan", 0.1);
};

function App() {
  /* Check https://docs.pmnd.rs/react-three-fiber/api/canvas */
  return (
    <div className="container">
      <Canvas
        gl={{ antialias: false, alpha: true }}
        orthographic={false}
        camera={{
          fov: 75,
          near: 0.01,
          far: 100,
          // zoom: 80,
          position: [0, 3, 3], // 1st way
        }}
        onCreated={handleCreated}
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
