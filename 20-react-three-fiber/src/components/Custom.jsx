import * as THREE from "three";

const Custom = ({ args }) => {
  const triangleVertexArr = new Float32Array([0, 0, 0, 0, 1, 0, 1, 0, 0]);

  console.log("args array", args);

  return (
    <mesh position={args}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={3}
          itemSize={3}
          array={triangleVertexArr}
        />
      </bufferGeometry>
      <meshBasicMaterial color="green" side={THREE.DoubleSide} />
    </mesh>
  );
};

export default Custom;
