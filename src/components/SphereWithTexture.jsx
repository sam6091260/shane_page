import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import sss from "../assets/shane.png";
import React from "react";

const SphereWithTexture = () => {
  const texture = useLoader(THREE.TextureLoader, sss);
  const meshRef = React.useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 1;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0, Math.PI / -2, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={texture} roughness={0.5} metalness={0.1} />
    </mesh>
  );
};

export default function Sphere() {
  return (
    <div style={{ width: "500px", height: "500px" }}>
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <SphereWithTexture />
        <OrbitControls 
          target={[0, 0, 0]} 
          minDistance={2}
          maxDistance={5}
        />
      </Canvas>
    </div>
  );
}
