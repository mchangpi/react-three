import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const Scene = () => {
  const planeRef = useRef();
  const texture = useLoader(THREE.TextureLoader, "./img/1.png");

  useFrame((state, delta) => {
    planeRef.current.rotation.z += delta / 20;
  });

  console.log("useLoader to load", texture);

  return (
    <>
      <axesHelper args={[2]} />
      <gridHelper args={[5, 20, "white"]} />
      <OrbitControls />

      <mesh ref={planeRef} position-x={0} position-z={-0.5}>
        <boxGeometry />
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial map={texture} />
      </mesh>
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
