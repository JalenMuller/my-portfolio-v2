import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const StormtrooperHelmet = () => {
  const stormtrooper = useGLTF("./stormtrooper_helmet/scene.gltf");
  const [rotation, setRotation] = useState(5.6);
  useEffect(() => {
    setTimeout(() => {
      if (rotation > Math.PI * 2) {
        setRotation(0);
        return;
      }
      setRotation(rotation + 0.01);
    }, 10);
  });
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={stormtrooper.scene}
        scale={0.7}
        position={[8, -6, -11]}
        rotation={[0, rotation, 0]}
        autoRotate={true}
      />
    </mesh>
  );
};
const StormtrooperHelmetCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* <OrbitControls
          autoRotate={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        /> */}
        <StormtrooperHelmet />
      </Suspense>
    </Canvas>
  );
};
export default StormtrooperHelmetCanvas;
