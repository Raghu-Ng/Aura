import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

const CameraScene = () => {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(0, 0, 5);
  }, [camera]);
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={1} 
        color="#FFCC00" 
      />
      <directionalLight 
        position={[-5, -5, -5]} 
        intensity={0.5} 
        color="#000000" 
      />
      <Float 
        speed={2} // Animation speed
        rotationIntensity={0.5} // Rotation intensity
        floatIntensity={0.5} // Float intensity
      >
        <Model />
      </Float>
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
      <Environment preset="city" />
    </>
  );
};

// Fallback Model for when the GLTF model is loading or fails
const FallbackModel = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });
  
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#000000" metalness={0.8} roughness={0.2} />
    </mesh>
  );
};

// Camera Model
const Model = () => {
  const meshRef = useRef<THREE.Group>(null);
  
  // Use a simple camera model since we can't load external models
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });
  
  return (
    <group ref={meshRef} scale={1.5}>
      {/* Camera Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 1, 0.8]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.2} />
      </mesh>
      
      {/* Camera Lens */}
      <mesh position={[0, 0, 0.6]}>
        <cylinderGeometry args={[0.4, 0.5, 0.7, 32]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.1} />
      </mesh>
      
      {/* Lens Front Glass */}
      <mesh position={[0, 0, 0.95]}>
        <cylinderGeometry args={[0.35, 0.35, 0.1, 32]} />
        <meshStandardMaterial color="#111111" metalness={1} roughness={0} />
      </mesh>
      
      {/* Camera Top */}
      <mesh position={[0, 0.6, 0]}>
        <boxGeometry args={[1, 0.2, 0.6]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.2} />
      </mesh>
      
      {/* Camera Grip */}
      <mesh position={[0.8, -0.2, 0]}>
        <boxGeometry args={[0.3, 0.6, 0.6]} />
        <meshStandardMaterial color="#222222" metalness={0.5} roughness={0.5} />
      </mesh>
    </group>
  );
};

const CameraModel: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas>
        <CameraScene />
      </Canvas>
    </div>
  );
};

export default CameraModel;