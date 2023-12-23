import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import FallbackMesh from "../components/FallbackMesh";
import Dog from "../components/Model";
import Bike from "../components/Bike";

const isTestFallback = false;
const isLoadDog = true;

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight intensity={5} position={(0, 0, 1)} />
      <OrbitControls />

      {isTestFallback ? (
        <FallbackMesh />
      ) : (
        <Suspense fallback={<FallbackMesh />}>
          {isLoadDog ? <Dog /> : <Bike position={[-0.5, 1, 0]} />}
        </Suspense>
      )}
    </>
  );
};

export default Scene;
