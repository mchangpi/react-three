import { useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const verticesAmount = 100;

/*
  const positionArray = new Float32Array(verticesAmount * 3);
  for (let i = 0; i < verticesAmount * 3; i++) {
    positionArray[i] = (Math.random() - 0.5) * 5.0;
  }
*/

const posArr = Float32Array.from(
  new Array(verticesAmount * 3),
  (el, idx) => 3.0 * (Math.random() - 0.5)
);

const Particles = () => {
  const particles = useRef();
  const texture = useLoader(THREE.TextureLoader, "./img/snow.jpg");

  useFrame((state, delta) => {
    const rand = 0.01 * delta * (Math.random() - 0.5);
    particles.current.rotation.y += rand;
    particles.current.rotation.x += rand;
  });

  return (
    <points ref={particles}>
      {/* <sphereGeometry /> */}

      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={posArr.length}
          itemSize={3}
          array={posArr}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        alphaMap={texture}
        transparent
        depthTest={false}
      />
    </points>
  );
};

export default Particles;
