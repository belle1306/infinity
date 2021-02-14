import React, {Component} from "react";
import * as THREE from "three";
// import ReactDOM from "react-dom";
import MessageText from "../components/messageText";

export default class MessageQuotes extends Component {
    componentDidMount() {
        let scene = new THREE.Scene()
        // scene.fog = new THREE.FogExp2(0x000000, 0.00025)
        let camera = new THREE.PerspectiveCamera(
            35, 
            window.innerWidth / window.innerHeight, 
            0.1, 
            4000
            );
            camera.position.z = -1000
        
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
            "i.png",
            this.onLoad,
            this.onProgress,
            this.onError
        );

        // make planet 
        const makePlanet = function () {
        const texture = loader.load("i.png")
        const geometry = new THREE.SphereGeometry(600, 128, 128)
        const material = new THREE.MeshLambertMaterial({
        //     color: 0x2727e6,
            map: texture
        })
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)
        return mesh
        }

        // make stars
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
        // eslint-disable-next-line
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
            <div>
                <h3 className="title">The purpose of this website is to inspire others to reach beyond their imagination. To know that the sky is not your limit. Be brave, be curious, fly high to infinity and beyond!</h3>
                <h5>Click the button below to get inspired ✨ 🚀</h5>
                <div ref ={ref => (this.mount = ref)}></div>
                <div>
                    <MessageText />
                </div>
            </div>
            
        );
    };
}

// const rootElement = document.getElementById("root")
// ReactDOM.render(<MessageQuotes />, rootElement);
