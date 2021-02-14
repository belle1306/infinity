import * as THREE from 'three';
import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import { useTransition, a } from 'react-spring';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls ,useGLTF } from '@react-three/drei';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import '../App.css';

function Model({ url }) {
    const gltf = useGLTF(url, true);
    return <primitive object={gltf.scene} dispose={null} />;
  }

function Loading() {
  const [finished, set] = useState(false)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    THREE.DefaultLoadingManager.onLoad = () => set(true)
    THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) =>
      setWidth((itemsLoaded / itemsTotal) * 200)
  }, [])

  const props = useTransition(finished, null, {
    from: { opacity: 1, width: 0 },
    leave: { opacity: 0 },
    update: { width },
  })

  return props.map(
    ({ item: finished, key, props: { opacity, width } }) =>
      !finished && (
        <a.div className="loading" key={key} style={{ opacity }}>
          <div className="loading-bar-container">
            <a.div className="loading-bar" style={{ width }} />
          </div>
        </a.div>
      ),
  )
}

export default function ThreeHome() {
  return (
    <>
      <div className="bg" />
      <h1>
        INFINITY
      </h1>
      <Canvas shadowMap camera={{ position: [0, 0, 15] }}>
        <ambientLight intensity={0.75} />
        <pointLight intensity={1} position={[-10, -25, -10]} />
        <spotLight
          castShadow
          intensity={2.25}
          angle={0.2}
          penumbra={1}
          position={[50, 25, 25]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />
        <fog attach="fog" args={['#cc7b32', 16, 20]} />
        <Suspense fallback={null}>
          <Model url="/scene.gltf" />
        </Suspense>
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          enableDamping
          dampingFactor={0.5}
          rotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
      {/* <div className="layer" /> */}
      <Loading />
      <header>
      <a href="/solarscope" className="top-left" children="Explore Solar System" />
      <a href='/Quiz' className="top-right" children="Astronomical Quiz" />
      <a href="/message" className="bottom-right" children="Message Aliens" />
      <a href="/apod" className="bottom-left" children="Astronomical Birthday" />
      </header>
      <div>
      </div>
    </>
  )
}
