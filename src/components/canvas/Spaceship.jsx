import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
const Spaceship = ({ isMobile }) => {
  const spaceship = useGLTF("./spaceship/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-60, 60, 0]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={spaceship.scene}
        scale={isMobile ? 0.9 : 1.2}
        position={[2, -5, 0]}
        rotation={[-0, -0.4, -0.2]}
      />
    </mesh>
  );
};
const SpaceshipCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const screenWidth = window.innerWidth;
    setIsMobile(screenWidth < 700);
  }, []);
  return (
    <div className="h-[40vh]">
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [50, 5, 20], fov: 30 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Spaceship isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};
export default SpaceshipCanvas;
