import { OrbitControls } from "@react-three/drei";
import { useState } from "react";

// onClick={(e) => console.log('click')}
// onContextMenu={(e) => console.log('Right Click')}
// onDoubleClick={(e) => console.log('double click')}
// onWheel={(e) => console.log('wheel spins')}
// onPointerUp={(e) => console.log('up')}
// onPointerDown={(e) => console.log('down')}
// onPointerOver={(e) => console.log('over')}
// onPointerOut={(e) => console.log('out')}
// onPointerMove={(e) => console.log('move')}
// onPointerMissed={() => console.log('missed')}
// onUpdate={(self) => console.log('props have been updated')}

const Scene = () => {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    setActive(!active);
    // console.log(active);
  };

  return (
    <>
      <OrbitControls />

      <mesh
        onClick={(e) => {
          e.stopPropagation(); /* stop the casting ray from passing through */
        }}
        onPointerOver={() => console.log("mouse over")}
        position-x={-1}
      >
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>

      <mesh onClick={clickHandler} position-x={1} scale={[0.7, 0.7, 0.7]}>
        <sphereGeometry />
        <meshBasicMaterial color={active ? "cyan" : "orange"} />
      </mesh>
    </>
  );
};

export default Scene;
