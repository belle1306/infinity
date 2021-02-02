// import React, { useRef, useEffect, useState, Suspense } from "react";
// import "../App.css";
// //Components
// import Header from "../components/header";
// import { Section } from "../components/section";

// // Page State
// import state from "../components/state";

// // Infini3
// // npm install three react-three-fiber
// //npm install @react-three/drei
// import { Canvas, useFrame } from "react-three-fiber";
// import { Html, useProgress, useGLTF } from '@react-three/drei';

// // React Spring
// import { a, useTransition } from "@react-spring/web";
// //Intersection Observer
// import { useInView } from "react-intersection-observer";

// // React-router
// // import Routes from "./routes";
// // import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// // import messageForm from "./components/messageForm.js";

// function Model({ url }) {
//   const gltf = useGLTF(url, true);
//   return <primitive object={gltf.scene} dispose={null} />;
// }

// const Lights = () => {
//   return (
//     <>
//       {/* Ambient Light illuminates lights for all objects */}
//       <ambientLight intensity={0.3} />
//       {/* Direction light */}
//       <directionalLight position={[10, 10, 5]} intensity={1} />
//       <directionalLight
//         castShadow
//         position={[0, 10, 0]}
//         intensity={1.5}
//         shadow-mapSize-width={1024}
//         shadow-mapSize-height={1024}
//         shadow-camera-far={50}
//         shadow-camera-left={-10}
//         shadow-camera-right={10}
//         shadow-camera-top={10}
//         shadow-camera-bottom={-10}
//       />
//       {/* Spotlight Large overhead light */}
//       <spotLight intensity={1} position={[1000, 0, 0]} castShadow />
//     </>
//   );
// };

// const HTMLContent = ({
//   domContent,
//   children,
//   bgColor,
//   modelPath,
//   position,
// }) => {
//   const ref = useRef();
//   useFrame(() => (ref.current.rotation.y += 0.01));
//   const [refItem, inView] = useInView({
//     threshold: 0,
//   });
//   useEffect(() => {
//     inView && (document.body.style.background = bgColor);
//   }, [inView]);
//   return (
//     <Section factor={1.5} offset={1}>
//       <group position={[0, position, 0]}>
//         <mesh ref={ref} position={[0, -35, 0]}>
//           <Model url={modelPath} />
//         </mesh>
//         <Html fullscreen portal={domContent}>
//           <div ref={refItem} className='container'>
//             <h1 className='title'>{children}</h1>
//           </div>
//         </Html>
//       </group>
//     </Section>
//   );
// };

// function Loader() {
//   const { active, progress } = useProgress();
//   const transition = useTransition(active, {
//     from: { opacity: 1, progress: 0 },
//     leave: { opacity: 0 },
//     update: { progress },
//   });
//   return transition(
//     ({ progress, opacity }, active) =>
//       active && (
//         <a.div className='loading' style={{ opacity }}>
//           <div className='loading-bar-container'>
//             <a.div className='loading-bar' style={{ width: progress }}></a.div>
//           </div>
//         </a.div>
//       )
//   );
// }

// // const route = [
// //   { path: "/message", name: "Message", Component: messageForm }
// // ];

// const Home = () => {
//   const [events, setEvents] = useState();
//   const domContent = useRef();
//   const scrollArea = useRef();
//   const onScroll = (e) => (state.top.current = e.target.scrollTop);
//   useEffect(() => void onScroll({ target: scrollArea.current }), []);

//   return (
//     <>
//       <Header />
//       {/* <div className="page">
//       <Route path="/message">
//         <messageForm/>
//       </Route>
//       </div> */}
//       {/* <div>
//         <Routes />
//       </div> */}
//       {/* Infinity Canvas */}
//       <Canvas
//         concurrent
//         colorManagement
//         camera={{ position: [0, 0, 120], fov: 70 }}>
//         {/* Lights Component */}
//         <Lights />
//         <Suspense fallback={null}>
//           <HTMLContent
//             domContent={domContent}
//             bgColor='#f15946'
//             modelPath='/scene.gltf'
//             position={250}>
//             <span>Explore</span>
//             <span>the </span>
//             <span>unknown</span>
//           </HTMLContent>
//           <HTMLContent
//             domContent={domContent}
//             bgColor='#23232a'
//             modelPath='/scene.gltf'
//             position={0}>
//             <span>Taking you to a journey</span>
//             <span>into infinity and beyond</span>
//           </HTMLContent>
//         </Suspense>
//       </Canvas>
//       <Loader />
//       <div
//         className='scrollArea'
//         ref={scrollArea}
//         onScroll={onScroll}
//         {...events}>
//         <div style={{ position: "sticky", top: 0 }} ref={domContent} />
//         <div style={{ height: `${state.pages * 100}vh` }} />
//       </div>
//     </>
//   );
// }

// export default Home;