import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls ,useGLTF } from '@react-three/drei';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import '../App.css';

function Model({ url }) {
    const gltf = useGLTF(url, true);
    return <primitive object={gltf.scene} dispose={null} />;
  }


export default function ThreeStars() {
  return (
    <>
      <div className="bg-stars" />
      <Canvas shadowMap camera={{ position: [0, 1, 0] }}>
        <ambientLight intensity={0.3} />
        <pointLight intensity={1} position={[10, -25, -10]} />
        <spotLight
          castShadow
          intensity={1}
          position={[1000, 0, 0]}
        />
        <Suspense fallback={null}>
          <Model url="/stars.gltf" />
        </Suspense>
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          enableDamping
          dampingFactor={0.07}
          rotateSpeed={0.04}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
      {/* <div className="layer" /> */}
    </>
  )
}
