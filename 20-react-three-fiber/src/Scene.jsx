import { useFrame, extend, useThree } from "@react-three/fiber";
import { useRef } from "react";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

// import { OrbitControls } from "@react-three/drei";

const Scene = () => {
  const cubeRef = useRef();
  const planeRef = useRef();
  const { gl, camera } = useThree();
  // camera.position.x = 3; // 2nd way

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta / 10;
    planeRef.current.rotation.z += delta / 10;
    state.camera.position.x = Math.sin(state.clock.elapsedTime); // 3rd way
    // console.log(state.clock.elapsedTime);
  });

  console.log("cam pos:", camera.position);

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />

      {/* <OrbitControls /> */}
      <mesh ref={planeRef} position-x={-2}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial color="orange" />
      </mesh>
      <mesh ref={cubeRef} position-x={2}>
        <boxGeometry />
        <meshNormalMaterial color="#7a00ca" />
      </mesh>
    </>
  );
};

export default Scene;
