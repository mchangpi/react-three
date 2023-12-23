// import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

import Particles from "./Particles";

const Scene = () => {
  return (
    <>
      <axesHelper args={[2]} />
      <gridHelper args={[5, 20, "white"]} />
      <OrbitControls />

      <Particles />
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
