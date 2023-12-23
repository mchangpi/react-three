import { useFrame, extend, useThree } from "@react-three/fiber";
import { useRef } from "react";

import { OrbitControls } from "@react-three/drei";

import Custom from "./Custom";

const Scene = () => {
  const cube1Ref = useRef();
  const cube2Ref = useRef();
  // const { camera } = useThree();
  // camera.position.x = 3; // 2nd way

  useFrame((state, delta) => {
    cube1Ref.current.rotation.z += delta / 10;
    // cube2Ref.current.rotation.x += delta / 2;
    // state.camera.position.x = Math.sin(state.clock.elapsedTime); // 3rd way
    // console.log(state.clock.elapsedTime);
  });

  // console.log("cam pos:", camera.position);

  return (
    <>
      <axesHelper args={[2]} />
      <gridHelper args={[5, 20, "white"]} />
      <Custom args={[0, 0, 0.5]} />

      <OrbitControls />
      <mesh ref={cube1Ref} position-x={0} position-z={-0.5}>
        <boxGeometry />
        <meshBasicMaterial color="pink" />
      </mesh>

      {/* <mesh ref={cube2Ref} position-x={2}>
        <boxGeometry />
        <meshNormalMaterial color="orange" />
      </mesh> */}
    </>
  );
};

export default Scene;

/*
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });
const { gl, camera } = useThree();
const Scene = () => {
  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
    </>
  );
};
*/
