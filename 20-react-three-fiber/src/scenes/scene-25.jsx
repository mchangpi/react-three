import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { button, useControls } from "leva";

const Scene = () => {
  const { position, color, isWireframe, scale } = useControls("cube", {
    position: {
      value: {
        x: 0,
        y: 0,
        z: 0,
      },
      min: -10,
      max: 10,
      step: 0.1,
    },
    color: "#777777",
    isWireframe: false,
    click: button(() => {
      console.log("clicked");
    }),
    scale: { options: [0.3, 0.6, 0.9] },
  });
  console.log(scale);

  const sphereTweak = useControls("sphere", {
    xRotation: 0,
  });

  return (
    <>
      <axesHelper args={[2]} />
      <gridHelper args={[5, 20, "white"]} />
      <OrbitControls />

      <ambientLight intensity={5} />
      <directionalLight position={[0, 3, 3]} />

      <mesh position={[position.x, position.y, position.z]} scale={scale}>
        <boxGeometry />
        <meshStandardMaterial color={color} wireframe={isWireframe} />
      </mesh>
    </>
  );
};
export default Scene;
