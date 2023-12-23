import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

const modelPath = "./model/dog.glb";

const Model = () => {
  const model = useGLTF(modelPath);
  const animations = useAnimations(model.animations, model.scene);
  const randIdx = Math.floor(Math.random() * model.animations.length);

  // console.log(animations.actions);

  const action = Object.values(animations.actions).at(randIdx);
  console.log(action.getClip().name);

  useEffect(() => {
    action.play();
  }, [action]);

  return <primitive position-y={-0.4} object={model.scene} />;
};

useGLTF.preload("./model/dog.glb");

export default Model;
