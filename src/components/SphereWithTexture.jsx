/**
 * @file SphereWithTexture.jsx
 * @description 使用 React Three Fiber 建立的 3D 球體組件。
 *   球體表面貦上自訂圖片紋理，自動繞轉並支持使用者透過 OrbitControls 操作。
 *   封裝為模組導出：內部的 SphereWithTexture 負責 3D 幾何與動畫，
 *   外部的 Sphere 則負責 Canvas 容器與打光設定。
 */
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import sss from "../assets/shane.png";
import React from "react";

/**
 * SphereWithTexture — 負責 3D 幾何與動畫（內部組件，僅在 Canvas 內使用）
 *
 * 每幀透過 useFrame 將 meshRef.current.rotation.y += delta * 1 達成繞轉效果。
 */
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

/**
 * Sphere — 3D 球體的 Canvas 容器（對外展示）
 *
 * 設定打光、沒入 SphereWithTexture，並限定 OrbitControls 的縮放範圍。
 */
export default function Sphere() {
  return (
    <div className="sphere">
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
