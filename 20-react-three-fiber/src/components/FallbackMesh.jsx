const FallbackMesh = () => {
  return (
    <mesh scale-y={2}>
      <boxGeometry />
      <meshBasicMaterial wireframe={true} />
    </mesh>
  );
};

export default FallbackMesh;
