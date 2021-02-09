// import React, { Component } from "react";
// import * as THREE from "three";

// var earthMesh;

// class MessageSurprise extends Component {
//   componentDidMount() {
//     // const width = this.mount.clientWidth;
//     // const height = this.mount.clientHeight;
//     //ADD SCENE
//     this.scene = new THREE.Scene();
//     this.scene.fog = new THREE.FogExp2(0x000000, 0.00025)
//     //ADD CAMERA
//     this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
//     this.camera.position.z = 10;
//     //ADD RENDERER
//     this.renderer = new THREE.WebGLRenderer({ antialias: true });
//     this.renderer.setClearColor(0x000000, 1);
//     this.renderer.setSize(window.innerWidth, window.innerHeight);
//     this.mount.appendChild(this.renderer.domElement);

//     // add some lighting
//     const ambientLight = new THREE.AmbientLight(0x555555)
//     this.scene.add(ambientLight)

//     // add a spotlight
//     const pointLight = new THREE.PointLight(0xffffff, 1, 0)
//     pointLight.position.set(100, 200, 100)
//     this.scene.add(pointLight)

//     //ADD CUBE
//     // const geometry = new THREE.BoxGeometry(5, 5, 5);
//     // const material = new THREE.MeshBasicMaterial({
//     //   color: "#0F0",
//     //   wireframe: true
//     // });
//     // this.cube = new THREE.Mesh(geometry, material);
//     // this.scene.add(this.cube);

    
//     //Add SPHERE
//     //LOAD TEXTURE and on completion apply it on box
//     var loader = new THREE.TextureLoader();
//     loader.load(
//       "marble.jpg",
//       this.onLoad,
//       this.onProgress,
//       this.onError
//     );

//   }

//   componentWillUnmount() {
//     this.stop();
//     this.mount.removeChild(this.renderer.domElement);
//   }
//   start = () => {
//     if (!this.frameId) {
//       this.frameId = requestAnimationFrame(this.animate);
//     }
//   };
//   stop = () => {
//     cancelAnimationFrame(this.frameId);
//   };
//   animate = () => {
//     this.earthMesh.rotation.x += 0.01;
//     // this.cube.rotation.y += 0.01;
//     this.renderScene();
//     this.frameId = window.requestAnimationFrame(this.animate);
//   };
//   renderScene = () => {
//     this.renderer.render(this.scene, this.camera);
//   };

//   onLoad = texture => {
//     var objGeometry = new THREE.SphereGeometry(3, 128, 128);
//     var objMaterial = new THREE.MeshLambertMaterial({
//       map: texture,
//     });

//     this.earthMesh = new THREE.Mesh(objGeometry, objMaterial);
//     this.scene.add(this.earthMesh);
//     this.renderScene();
//     //start animation
//     this.start();
//   };

//   onProgress = xhr => {
//     console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
//   };

//   // Function called when download errors
//   onError = error => {
//     console.log("An error happened" + error);
//   };

//   render() {
//     return (
//       <div
//         style={{ width: "400px", height: "400px" }}
//         ref={mount => {
//           this.mount = mount;
//         }}
//       />
//     );
//   }
// }
// export default MessageSurprise;

import React, {Component} from "react";
import * as THREE from "three";
import ReactDOM from "react-dom";
import MessageText from "../components/messageText";


export default class MessageSurprise extends Component {
    componentDidMount() {
        let scene = new THREE.Scene()
        // scene.fog = new THREE.FogExp2(0x000000, 0.00025)
        let camera = new THREE.PerspectiveCamera(
            50, 
            window.innerWidth / window.innerHeight, 
            0.1, 
            10000
            );
            camera.position.z = -3000
        
        let renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setClearColor(0x000000, 1)
        
        // //   MOUNT INSIDE A REACT
        this.mount.appendChild(renderer.domElement)
        
        // add some lighting
        const ambientLight = new THREE.AmbientLight(0x777777)
        scene.add(ambientLight)
        
        // add a spotlight
        const pointLight = new THREE.PointLight(0xffffff, 1, 0)
        pointLight.position.set(500, 500, -2000)
        scene.add(pointLight)
        
        // make a THREE.js loader
        const loader = new THREE.TextureLoader()
        loader.load(
            "marble.jpg",
            this.onLoad,
            this.onProgress,
            this.onError
        );

        // make planet wilson
        const makePlanet = function () {
        const texture = loader.load("marble.jpg")
        const geometry = new THREE.SphereGeometry(800, 128, 128)
        const material = new THREE.MeshLambertMaterial({
        //     color: 0x2727e6,
            map: texture
        })
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)
        return mesh
        }
        
        const makeStars = function (url, maxNum) {
        const texture = loader.load(url)
        const geometry = new THREE.Geometry()
        
        for (let i = 0; i < maxNum; i = i + 1) {
            const point = new THREE.Vector3()
            const sphericalPoint = new THREE.Spherical(
                900 + Math.random() * 900,
            2 * Math.PI * Math.random(),
            Math.PI * Math.random()
            )
            
            point.setFromSpherical(sphericalPoint)
            
            geometry.vertices.push(point)
        }
        
        const material = new THREE.PointsMaterial({
            size: 50,
            map: texture,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthTest: true,
            depthWrite: false
        })
        
        const points = new THREE.Points(geometry, material)
        
        scene.add(points)
        
        return points
        }
        
        const earth = makePlanet()
        const stars2 = makeStars("particle.png", 1000)
        
 
        // hold the camera positions
        let currentX = 0
        let currentY = 0
        let aimX = 0
        let aimY = 0

        
          // animate the scene
        const animate = function () {
            const diffX = aimX - currentX
            const diffY = aimY - currentY
            
            currentX = currentX + diffX * 0.01
            currentY = currentY + diffY * 0.01
            
            const sphere = new THREE.Spherical(
                3000,
              (currentY * 0.001) - Math.PI / 2,
              (currentX * 0.001)
            )
            
            camera.position.setFromSpherical(sphere)
            
            // camera.position.x = currentX
            // camera.position.y = currentY  
            
            camera.lookAt(scene.position)
            
            earth.rotateY(0.01)
            //   line.rotateY(0.01)
            
            // stars2.geometry.rotateX(0.004)

            renderer.render(scene, camera)
            
            requestAnimationFrame(animate)
        }
        animate();
        
        window.addEventListener("resize", function () {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.render( scene, camera );
        })
        
        let isMouseDown = false
        let startX = 0
        let startY = 0
        
        document.addEventListener("mousedown", function (event) {
        isMouseDown = true
        startX = event.pageX
        startY = event.pageY
        })
        
        document.addEventListener("mouseup", function () {
        isMouseDown = false
        })
        
        document.addEventListener("mousemove", function (event) {
        if (isMouseDown) {
            // aimX = ((window.innerWidth / 2) - event.pageX) * 4
            // aimY = ((window.innerHeight / 2) - event.pageY) * 4
            aimX = aimX + ((event.pageX - startX) * 8)
            aimY = aimY + ((event.pageY - startY) * 8)
            startX = event.pageX
            startY = event.pageY
        }
        })
        
        document.addEventListener("touchmove", function (event) {
        aimX = ((window.innerWidth / 2) - event.pageX) * 4
        aimY = ((window.innerHeight / 2) - event.pageY) * 4
        });
}
    
    render() {
        return (
            <div ref ={ref => (this.mount = ref)}>;
            <MessageText />
            </div>
            
        );
    };
}

const rootElement = document.getElementById("root")
ReactDOM.render(<MessageSurprise />, rootElement);
