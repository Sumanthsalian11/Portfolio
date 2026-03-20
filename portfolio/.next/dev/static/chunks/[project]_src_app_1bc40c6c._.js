(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/Navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Navbar({ onHomeClick }) {
    _s();
    const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "education",
        "contact"
    ];
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const [hoveredSection, setHoveredSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Update activeSection based on scroll
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    const scrollY = window.scrollY;
                    const offsets = sections.map({
                        "Navbar.useEffect.handleScroll.offsets": (sec)=>{
                            const el = document.getElementById(sec);
                            return el ? el.offsetTop : 0;
                        }
                    }["Navbar.useEffect.handleScroll.offsets"]);
                    for(let i = offsets.length - 1; i >= 0; i--){
                        if (scrollY + 100 >= offsets[i]) {
                            setActiveSection(sections[i]);
                            break;
                        }
                    }
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    // Handle click
    const handleClick = (sec)=>{
        if (sec === "home" && onHomeClick) {
            onHomeClick(); // trigger Hero animation
        }
        // Smooth scroll
        const el = document.getElementById(sec);
        if (el) {
            window.scrollTo({
                top: el.offsetTop,
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed-top",
        style: {
            display: "flex",
            justifyContent: "center",
            padding: "12px 30px",
            background: "rgba(30, 30, 30, 0.85)",
            borderRadius: "25px",
            boxShadow: "0 8px 15px rgba(255, 245, 245, 0.44), inset 0 -2px 6px rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            zIndex: 1000,
            width: "800px",
            margin: "10px auto",
            border: "1px solid #12d2d29c"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex gap-4 justify-content-center w-100 position-relative",
            children: sections.map((sec)=>{
                const isActive = sec === activeSection;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "relative",
                        cursor: "pointer"
                    },
                    onMouseEnter: ()=>setHoveredSection(sec),
                    onMouseLeave: ()=>setHoveredSection(null),
                    onClick: ()=>handleClick(sec),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.a, {
                            className: "text-white text-decoration-none fw-bold",
                            style: {
                                padding: "8px 15px",
                                borderRadius: "15px",
                                position: "relative",
                                zIndex: 1,
                                transition: "all 0.3s ease",
                                color: isActive ? "#00ffff" : "white",
                                textShadow: isActive ? "0 0 5px #00ffff, 0 0 10px #00cfff, 0 0 20px #00ffff88" : "none"
                            },
                            animate: isActive ? {
                                textShadow: [
                                    "0 0 5px #00ffff, 0 0 10px #00cfff, 0 0 20px #00ffff88",
                                    "0 0 10px #00ffff, 0 0 20px #00cfff, 0 0 30px #00ffffaa",
                                    "0 0 5px #00ffff, 0 0 10px #00cfff, 0 0 20px #00ffff88"
                                ]
                            } : {},
                            transition: {
                                repeat: isActive ? Infinity : 0,
                                duration: 1.2,
                                ease: "easeInOut"
                            },
                            children: sec.toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Navbar.js",
                            lineNumber: 75,
                            columnNumber: 15
                        }, this),
                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                            layout: true,
                            initial: {
                                scaleX: 0
                            },
                            animate: {
                                scaleX: 1
                            },
                            transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 20
                            },
                            style: {
                                position: "absolute",
                                bottom: "-5px",
                                left: "0",
                                width: "100%",
                                height: "3px",
                                borderRadius: "2px",
                                background: "linear-gradient(90deg, #00ffff, #00cfff)",
                                boxShadow: "0 0 8px #00ffff, 0 0 15px #00cfff"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Navbar.js",
                            lineNumber: 106,
                            columnNumber: 17
                        }, this),
                        hoveredSection === sec && !isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                            initial: {
                                scaleX: 0
                            },
                            animate: {
                                scaleX: 1
                            },
                            exit: {
                                scaleX: 0
                            },
                            transition: {
                                duration: 0.3,
                                ease: "easeInOut"
                            },
                            style: {
                                position: "absolute",
                                bottom: "-5px",
                                left: "0",
                                width: "100%",
                                height: "3px",
                                borderRadius: "2px",
                                background: "linear-gradient(90deg, #dc9bd9, #ec4646)",
                                boxShadow: "0 0 6px #ff00ff, 0 0 12px #ff69b4"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Navbar.js",
                            lineNumber: 126,
                            columnNumber: 17
                        }, this)
                    ]
                }, sec, true, {
                    fileName: "[project]/src/app/components/Navbar.js",
                    lineNumber: 67,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/app/components/Navbar.js",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Navbar.js",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(Navbar, "3x56gcQMypaF41ImKPJYcewk5S8=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Hero.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'three'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'gsap'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Hero = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s((props, ref)=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const titles = [
        "Full Stack Developer",
        "React Developer",
        "MERN Stack Learner"
    ];
    // Particle & scene refs
    const fireGeometryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fireVelocitiesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const smokeGeometryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const smokeVelocitiesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const sparkGeometryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sparkVelocitiesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const shockWaveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cameraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "Hero.useImperativeHandle": ()=>({
                replayAnimation: ({
                    "Hero.useImperativeHandle": ()=>{
                        playGSAP();
                        resetParticles();
                    }
                })["Hero.useImperativeHandle"]
            })
    }["Hero.useImperativeHandle"]);
    const playGSAP = ()=>{
        if (!nameRef.current) return;
        // Reset state
        gsap.set(nameRef.current, {
            opacity: 0,
            rotationY: 0,
            rotationX: -90,
            scale: 1
        });
        titleRefs.current.forEach((el)=>gsap.set(el, {
                y: -20,
                opacity: 0
            }));
        // Flip-in animation for name
        gsap.to(nameRef.current, {
            rotationX: 0,
            rotationY: 360,
            opacity: 1,
            duration: 1.2,
            scale: 1.2,
            ease: "back.out(1.7)",
            onComplete: ()=>{
                // Slight bounce after flip
                gsap.to(nameRef.current, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
                // Animate titles sequentially
                titles.forEach((title, i)=>{
                    const el = titleRefs.current[i];
                    gsap.fromTo(el, {
                        y: -20,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        delay: i * 0.5,
                        ease: "power2.out"
                    });
                });
            }
        });
        // Reset shockwave
        if (shockWaveRef.current) {
            shockWaveRef.current.scale.set(1, 1, 1);
            shockWaveRef.current.material.opacity = 0.7;
        }
    };
    const resetParticles = ()=>{
        [
            fireGeometryRef,
            smokeGeometryRef,
            sparkGeometryRef
        ].forEach((geoRef, idx)=>{
            const velRef = [
                fireVelocitiesRef,
                smokeVelocitiesRef,
                sparkVelocitiesRef
            ][idx];
            if (geoRef.current && velRef.current.length) {
                const arr = geoRef.current.attributes.position.array;
                for(let i = 0; i < arr.length; i += 3)arr[i] = arr[i + 1] = arr[i + 2] = 0;
                geoRef.current.attributes.position.needsUpdate = true;
            }
        });
    };
    // ===== THREE.JS SCENE SETUP =====
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const scene = new THREE.Scene();
            scene.fog = new THREE.FogExp2(0x000000, 0.05);
            sceneRef.current = scene;
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 5;
            cameraRef.current = camera;
            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
                canvas: canvasRef.current
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0x000000, 1);
            rendererRef.current = renderer;
            // Lights
            const pointLight = new THREE.PointLight(0xffaa00, 2, 15);
            pointLight.position.set(0, 0, 5);
            scene.add(pointLight);
            const ambient = new THREE.AmbientLight(0xff6600, 0.3);
            scene.add(ambient);
            // ===== FIRE PARTICLES =====
            const fireCount = 800;
            const fireGeometry = new THREE.BufferGeometry();
            const firePositions = [];
            const fireVelocities = [];
            for(let i = 0; i < fireCount; i++){
                firePositions.push(0, 0, 0);
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 2 + 1;
                fireVelocities.push(Math.cos(angle) * speed, Math.random() * 2, Math.sin(angle) * speed);
            }
            fireGeometry.setAttribute("position", new THREE.Float32BufferAttribute(firePositions, 3));
            fireGeometryRef.current = fireGeometry;
            fireVelocitiesRef.current = fireVelocities;
            const fireMaterial = new THREE.PointsMaterial({
                color: 0xff4500,
                size: 0.05,
                transparent: true,
                opacity: 0.9,
                blending: THREE.AdditiveBlending
            });
            const fireParticles = new THREE.Points(fireGeometry, fireMaterial);
            scene.add(fireParticles);
            // ===== SMOKE PARTICLES =====
            const smokeCount = 200;
            const smokeGeometry = new THREE.BufferGeometry();
            const smokePositions = [];
            const smokeVelocities = [];
            for(let i = 0; i < smokeCount; i++){
                smokePositions.push(0, 0, 0);
                smokeVelocities.push((Math.random() - 0.5) * 0.5, Math.random() * 1, (Math.random() - 0.5) * 0.5);
            }
            smokeGeometry.setAttribute("position", new THREE.Float32BufferAttribute(smokePositions, 3));
            smokeGeometryRef.current = smokeGeometry;
            smokeVelocitiesRef.current = smokeVelocities;
            const smokeMaterial = new THREE.PointsMaterial({
                color: 0x222222,
                size: 0.1,
                transparent: true,
                opacity: 0.5
            });
            const smokeParticles = new THREE.Points(smokeGeometry, smokeMaterial);
            scene.add(smokeParticles);
            // ===== SPARK PARTICLES =====
            const sparkCount = 300;
            const sparkGeometry = new THREE.BufferGeometry();
            const sparkPositions = [];
            const sparkVelocities = [];
            for(let i = 0; i < sparkCount; i++){
                sparkPositions.push(0, 0, 0);
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 4 + 2;
                sparkVelocities.push(Math.cos(angle) * speed, Math.random() * 2, Math.sin(angle) * speed);
            }
            sparkGeometry.setAttribute("position", new THREE.Float32BufferAttribute(sparkPositions, 3));
            sparkGeometryRef.current = sparkGeometry;
            sparkVelocitiesRef.current = sparkVelocities;
            const sparkMaterial = new THREE.PointsMaterial({
                color: 0xffff00,
                size: 0.03,
                transparent: true,
                opacity: 0.9,
                blending: THREE.AdditiveBlending
            });
            const sparkParticles = new THREE.Points(sparkGeometry, sparkMaterial);
            scene.add(sparkParticles);
            // ===== SHOCKWAVE =====
            const shockGeo = new THREE.RingGeometry(0.1, 0.15, 64);
            const shockMat = new THREE.MeshBasicMaterial({
                color: 0xffcc00,
                transparent: true,
                opacity: 0.7,
                side: THREE.DoubleSide
            });
            const shockWave = new THREE.Mesh(shockGeo, shockMat);
            shockWave.rotation.x = Math.PI / 2;
            scene.add(shockWave);
            shockWaveRef.current = shockWave;
            // ===== ANIMATE =====
            const animate = {
                "Hero.useEffect.animate": ()=>{
                    requestAnimationFrame(animate);
                    // Fire
                    const firePos = fireGeometry.attributes.position.array;
                    for(let i = 0; i < firePos.length; i += 3){
                        firePos[i] += fireVelocities[i] * 0.05;
                        firePos[i + 1] += fireVelocities[i + 1] * 0.05;
                        firePos[i + 2] += fireVelocities[i + 2] * 0.05;
                        if (firePos[i + 1] > 4) firePos[i + 1] = 4;
                    }
                    fireGeometry.attributes.position.needsUpdate = true;
                    // Smoke
                    const smokePos = smokeGeometry.attributes.position.array;
                    for(let i = 0; i < smokePos.length; i += 3){
                        smokePos[i] += smokeVelocities[i] * 0.02;
                        smokePos[i + 1] += smokeVelocities[i + 1] * 0.02;
                        smokePos[i + 2] += smokeVelocities[i + 2] * 0.02;
                        if (smokePos[i + 1] > 6) smokePos[i + 1] = 6;
                    }
                    smokeGeometry.attributes.position.needsUpdate = true;
                    // Sparks
                    const sparkPos = sparkGeometry.attributes.position.array;
                    for(let i = 0; i < sparkPos.length; i += 3){
                        sparkPos[i] += sparkVelocities[i] * 0.07;
                        sparkPos[i + 1] += sparkVelocities[i + 1] * 0.07;
                        sparkPos[i + 2] += sparkVelocities[i + 2] * 0.07;
                        if (sparkPos[i + 1] > 5) sparkPos[i + 1] = 5;
                    }
                    sparkGeometry.attributes.position.needsUpdate = true;
                    // Shockwave
                    shockWave.scale.x += 0.05;
                    shockWave.scale.y += 0.05;
                    shockWave.material.opacity -= 0.015;
                    if (shockWave.material.opacity <= 0) shockWave.material.opacity = 0;
                    renderer.render(scene, camera);
                }
            }["Hero.useEffect.animate"];
            animate();
            // Play initial GSAP
            playGSAP();
            // Resize
            const handleResize = {
                "Hero.useEffect.handleResize": ()=>{
                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(window.innerWidth, window.innerHeight);
                }
            }["Hero.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            return ({
                "Hero.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        style: {
            height: "100vh",
            width: "100vw",
            position: "relative",
            overflow: "hidden",
            background: "radial-gradient(circle at center, #000000, #110000)",
            perspective: "1000px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0
                }
            }, void 0, false, {
                fileName: "[project]/src/app/components/Hero.js",
                lineNumber: 267,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: nameRef,
                style: {
                    position: "absolute",
                    top: "45%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "#ffcc00",
                    fontSize: "4rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    textShadow: "0 0 20px #ff4500, 0 0 40px #ff8c00, 0 0 60px #ffcc00",
                    transformStyle: "preserve-3d"
                },
                children: [
                    "Hi, I am Sumanth",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "1rem",
                            fontSize: "1.5rem",
                            fontWeight: "500"
                        },
                        children: titles.map((title, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (el)=>titleRefs.current[i] = el,
                                children: title
                            }, i, false, {
                                fileName: "[project]/src/app/components/Hero.js",
                                lineNumber: 287,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Hero.js",
                        lineNumber: 285,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Hero.js",
                lineNumber: 269,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Hero.js",
        lineNumber: 256,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "702s4eDbOLJXZamK3DJndHx5lm4=")), "702s4eDbOLJXZamK3DJndHx5lm4=");
_c1 = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c, _c1;
__turbopack_context__.k.register(_c, "Hero$forwardRef");
__turbopack_context__.k.register(_c1, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/About.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function About() {
    _s();
    // Profile images + labels + gradient color
    const profiles = [
        {
            src: "/profile1.jpeg",
            label: "Me",
            gradient: "linear-gradient(135deg, #3b8bbc, #00ffff)"
        },
        {
            src: "/profile2.jpeg",
            label: "Coding",
            gradient: "linear-gradient(135deg,  #3b8bbc, #00ffff)"
        },
        {
            src: "/profile3.jpeg",
            label: "Playing",
            gradient: "linear-gradient(135deg, #c2dc8a, #87cbe9)"
        },
        {
            src: "/profile4.jpeg",
            label: "Gym",
            gradient: "linear-gradient(135deg, #3b8bbc, #00ffff)"
        }
    ];
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Auto-cycle every 2 seconds, pause on hover
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "About.useEffect": ()=>{
            if (!isHovering) {
                intervalRef.current = setInterval({
                    "About.useEffect": ()=>{
                        setActiveIndex({
                            "About.useEffect": (prev)=>(prev + 1) % profiles.length
                        }["About.useEffect"]);
                    }
                }["About.useEffect"], 2000);
            }
            return ({
                "About.useEffect": ()=>clearInterval(intervalRef.current)
            })["About.useEffect"];
        }
    }["About.useEffect"], [
        activeIndex,
        isHovering
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.section, {
        id: "about",
        className: "d-flex flex-column flex-md-row align-items-center justify-content-center py-5 position-relative",
        style: {
            background: "#0a0a0a",
            color: "#fff",
            minHeight: "90vh",
            overflow: "hidden"
        },
        initial: {
            opacity: 0,
            y: 60
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.8
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    zIndex: 1
                },
                className: "jsx-d732791046adfab6" + " " + "col-md-6 d-flex flex-column justify-content-center px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.h1, {
                        className: "fw-bold",
                        style: {
                            fontSize: "4rem",
                            background: "linear-gradient(90deg, #ff00ff, #00ffff)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            marginBottom: "0.5rem"
                        },
                        children: "SUMANTH"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/About.js",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.h1, {
                        className: "fw-bold",
                        style: {
                            fontSize: "4rem",
                            background: "linear-gradient(90deg, #00ffff, #ffdd00)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            marginBottom: "1rem"
                        },
                        children: "SALIAN"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/About.js",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#888",
                            fontSize: "1.1rem",
                            marginBottom: "1rem"
                        },
                        className: "jsx-d732791046adfab6",
                        children: '"Builder. Explorer. Always becoming."'
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/About.js",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-d732791046adfab6" + " " + "d-flex flex-wrap gap-2 mb-3",
                        children: [
                            "BUILDER",
                            "MSC - 2026",
                            "OPEN TO WORK",
                            "AI EXPLORER"
                        ].map((tag, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    padding: "6px 14px",
                                    borderRadius: "20px",
                                    background: "rgba(0,255,255,0.1)",
                                    border: "1px solid #00ffff",
                                    color: "#00ffff",
                                    fontWeight: 600,
                                    fontSize: "0.85rem",
                                    textShadow: "0 0 4px #00ffff"
                                },
                                className: "jsx-d732791046adfab6",
                                children: tag
                            }, i, false, {
                                fileName: "[project]/src/app/components/About.js",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/About.js",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#aaa",
                            lineHeight: "1.6rem"
                        },
                        className: "jsx-d732791046adfab6",
                        children: "I'm a full-stack developer with a deep love for building things that feel alive — interfaces that breathe, APIs that sing, and systems that scale. Currently pursuing my Msc Computer Science at Mahatma Gandhi Memorial College Udupi. I work with React, PostmanAPI, MongoDB, and dive into AI pipelines whenever I get the chance. I enjoy turning complex problems into simple, intuitive solutions, focusing on performance, scalability, and seamless user experience. Beyond coding, I constantly explore new technologies, experiment with creative ideas, and push myself to build products that are both meaningful and impactful. I believe in learning by building — every project I create is a step toward mastering my craft and delivering real-world value."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/About.js",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        style: {
                            color: "#aaa",
                            lineHeight: "1.6rem",
                            paddingLeft: "1.2rem"
                        },
                        className: "jsx-d732791046adfab6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "jsx-d732791046adfab6",
                                children: "Build modern UIs using React and Next.js"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/About.js",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "jsx-d732791046adfab6",
                                children: "Develop backend APIs with Node.js and Express"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/About.js",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "jsx-d732791046adfab6",
                                children: "Work on real-time systems"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/About.js",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "jsx-d732791046adfab6",
                                children: "Implement AI/ML models"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/About.js",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/About.js",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/About.js",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    zIndex: 1
                },
                onMouseEnter: ()=>setIsHovering(true),
                onMouseLeave: ()=>setIsHovering(false),
                className: "jsx-d732791046adfab6" + " " + "col-md-6 d-flex flex-column justify-content-center align-items-center mt-4 mt-md-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            width: "320px",
                            height: "320px",
                            borderRadius: "25px",
                            overflow: "hidden",
                            border: "2px solid #00ffff",
                            boxShadow: "0 0 20px #00ffff, 0 0 60px #00ffff55",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        className: "jsx-d732791046adfab6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 0.6
                                },
                                exit: {
                                    opacity: 0
                                },
                                transition: {
                                    duration: 0.5
                                },
                                style: {
                                    position: "absolute",
                                    top: "-20%",
                                    left: "-20%",
                                    width: "140%",
                                    height: "140%",
                                    background: profiles[activeIndex].gradient,
                                    filter: "blur(40px)",
                                    animation: "spin 15s linear infinite",
                                    zIndex: 0,
                                    borderRadius: "25px"
                                }
                            }, activeIndex, false, {
                                fileName: "[project]/src/app/components/About.js",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatePresence, {
                                mode: "wait",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.img, {
                                    src: profiles[activeIndex].src,
                                    initial: {
                                        opacity: 0,
                                        scale: 0.9
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    exit: {
                                        opacity: 0,
                                        scale: 0.9
                                    },
                                    transition: {
                                        duration: 0.5
                                    },
                                    style: {
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        position: "relative",
                                        zIndex: 1,
                                        borderRadius: "20px"
                                    }
                                }, activeIndex, false, {
                                    fileName: "[project]/src/app/components/About.js",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/About.js",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/About.js",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatePresence, {
                        mode: "wait",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -10
                            },
                            transition: {
                                duration: 0.5
                            },
                            style: {
                                marginTop: "10px",
                                color: "#00ffff",
                                fontWeight: 600,
                                textShadow: "0 0 5px #00ffff",
                                fontSize: "1.1rem"
                            },
                            children: profiles[activeIndex].label
                        }, activeIndex, false, {
                            fileName: "[project]/src/app/components/About.js",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/About.js",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-d732791046adfab6" + " " + "d-flex justify-content-center gap-3 mt-3",
                        children: profiles.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: p.src,
                                onClick: ()=>setActiveIndex(i),
                                style: {
                                    width: "35px",
                                    height: "35px",
                                    borderRadius: "10px",
                                    cursor: "pointer",
                                    border: activeIndex === i ? "2px solid #00ffff" : "1px solid #333"
                                },
                                className: "jsx-d732791046adfab6"
                            }, i, false, {
                                fileName: "[project]/src/app/components/About.js",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/About.js",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/About.js",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "d732791046adfab6",
                children: "@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/About.js",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(About, "JYmgSj0tAlybUk78D8AEyWBQeu0=");
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Skills.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Skills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/fa'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/si'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Skills() {
    _s();
    const skills = [
        {
            name: "React",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaReact, {}, void 0, false, {
                fileName: "[project]/src/app/components/Skills.js",
                lineNumber: 12,
                columnNumber: 28
            }, this)
        },
        {
            name: "Node.js",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaNodeJs, {}, void 0, false, {
                fileName: "[project]/src/app/components/Skills.js",
                lineNumber: 13,
                columnNumber: 30
            }, this)
        },
        {
            name: "MongoDB",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SiMongodb, {}, void 0, false, {
                fileName: "[project]/src/app/components/Skills.js",
                lineNumber: 14,
                columnNumber: 30
            }, this)
        },
        {
            name: "Bootstrap",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaBootstrap, {}, void 0, false, {
                fileName: "[project]/src/app/components/Skills.js",
                lineNumber: 15,
                columnNumber: 32
            }, this)
        },
        {
            name: "HTML",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaHtml5, {}, void 0, false, {
                fileName: "[project]/src/app/components/Skills.js",
                lineNumber: 16,
                columnNumber: 27
            }, this)
        },
        {
            name: "CSS",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaCss3Alt, {}, void 0, false, {
                fileName: "[project]/src/app/components/Skills.js",
                lineNumber: 17,
                columnNumber: 26
            }, this)
        },
        {
            name: "Tailwind",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SiTailwindcss, {}, void 0, false, {
                fileName: "[project]/src/app/components/Skills.js",
                lineNumber: 18,
                columnNumber: 31
            }, this)
        },
        {
            name: "Next.js",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SiNextdotjs, {}, void 0, false, {
                fileName: "[project]/src/app/components/Skills.js",
                lineNumber: 19,
                columnNumber: 30
            }, this)
        },
        {
            name: "JavaScript",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaJsSquare, {}, void 0, false, {
                fileName: "[project]/src/app/components/Skills.js",
                lineNumber: 20,
                columnNumber: 33
            }, this)
        },
        {
            name: "Express.js",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SiExpress, {}, void 0, false, {
                fileName: "[project]/src/app/components/Skills.js",
                lineNumber: 21,
                columnNumber: 33
            }, this)
        },
        {
            name: "MySql",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SiMysql, {}, void 0, false, {
                fileName: "[project]/src/app/components/Skills.js",
                lineNumber: 22,
                columnNumber: 28
            }, this)
        },
        {
            name: "Postman",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SiPostman, {}, void 0, false, {
                fileName: "[project]/src/app/components/Skills.js",
                lineNumber: 23,
                columnNumber: 30
            }, this)
        },
        {
            name: "Github",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaGithub, {}, void 0, false, {
                fileName: "[project]/src/app/components/Skills.js",
                lineNumber: 24,
                columnNumber: 29
            }, this)
        }
    ];
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Skills.useEffect": ()=>{
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            let width = canvas.width = canvas.offsetWidth;
            let height = canvas.height = canvas.offsetHeight;
            const stars = Array.from({
                length: 150
            }).map({
                "Skills.useEffect.stars": ()=>({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        r: Math.random() * 1.5,
                        opacity: Math.random(),
                        delta: Math.random() * 0.02 + 0.01
                    })
            }["Skills.useEffect.stars"]);
            const animate = {
                "Skills.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, width, height);
                    stars.forEach({
                        "Skills.useEffect.animate": (star)=>{
                            star.opacity += star.delta;
                            if (star.opacity > 1 || star.opacity < 0) star.delta *= -1;
                            ctx.beginPath();
                            ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                            ctx.fill();
                        }
                    }["Skills.useEffect.animate"]);
                    requestAnimationFrame(animate);
                }
            }["Skills.useEffect.animate"];
            animate();
            const handleResize = {
                "Skills.useEffect.handleResize": ()=>{
                    width = canvas.width = canvas.offsetWidth;
                    height = canvas.height = canvas.offsetHeight;
                }
            }["Skills.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            return ({
                "Skills.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["Skills.useEffect"];
        }
    }["Skills.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.section, {
        id: "skills",
        className: "d-flex flex-column flex-md-row align-items-center py-5 position-relative overflow-hidden",
        style: {
            background: "#000",
            color: "#fff",
            minHeight: "80vh"
        },
        initial: {
            opacity: 0,
            y: 80
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.8
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0
                }
            }, void 0, false, {
                fileName: "[project]/src/app/components/Skills.js",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                className: "d-flex justify-content-center align-items-center",
                style: {
                    flex: "1",
                    fontSize: "8rem",
                    fontWeight: "bold",
                    color: "#34d399",
                    textShadow: "0 0 20px #34d399, 0 0 50px #10b981",
                    textAlign: "center",
                    height: "100%",
                    zIndex: 1
                },
                initial: {
                    opacity: 0,
                    x: -150
                },
                whileInView: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    duration: 1
                },
                children: "Skills"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Skills.js",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex flex-wrap justify-content-center gap-4 flex-1",
                style: {
                    paddingLeft: "2rem",
                    zIndex: 1
                },
                children: skills.map((skill, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        whileHover: {
                            scale: 1.15,
                            boxShadow: "0 0 15px #34d399, 0 0 40px #10b981",
                            color: "#000",
                            background: "#34d399"
                        },
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "15px 25px",
                            borderRadius: "25px",
                            border: "2px solid #34d399",
                            color: "#34d399",
                            fontWeight: 700,
                            fontSize: "1.3rem",
                            minWidth: "150px",
                            textAlign: "center",
                            cursor: "default",
                            transition: "0.3s ease",
                            boxShadow: "0 0 10px rgba(52,211,153,0.3)",
                            background: "rgba(15,15,15,0.7)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "2rem"
                                },
                                children: skill.icon
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Skills.js",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: skill.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Skills.js",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/app/components/Skills.js",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Skills.js",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Skills.js",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(Skills, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = Skills;
var _c;
__turbopack_context__.k.register(_c, "Skills");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Projects.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Projects() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleMove = (e, card)=>{
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = -(y - rect.height / 2) / 12;
        const rotateY = (x - rect.width / 2) / 12;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    };
    const resetTilt = (card)=>{
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Projects.useEffect": ()=>{
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            let width = canvas.width = canvas.offsetWidth;
            let height = canvas.height = canvas.offsetHeight;
            // Create stars
            const stars = Array.from({
                length: 250
            }).map({
                "Projects.useEffect.stars": ()=>({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        r: Math.random() * 1.5 + 0.5,
                        opacity: Math.random(),
                        delta: Math.random() * 0.02 + 0.01,
                        pulse: Math.random() * 0.05 + 0.01
                    })
            }["Projects.useEffect.stars"]);
            const animate = {
                "Projects.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, width, height);
                    stars.forEach({
                        "Projects.useEffect.animate": (star)=>{
                            star.opacity += star.delta;
                            if (star.opacity > 1 || star.opacity < 0) star.delta *= -1;
                            star.r += star.pulse;
                            if (star.r > 2 || star.r < 0.5) star.pulse *= -1;
                            ctx.beginPath();
                            ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
                            ctx.fill();
                        }
                    }["Projects.useEffect.animate"]);
                    requestAnimationFrame(animate);
                }
            }["Projects.useEffect.animate"];
            animate();
            const handleResize = {
                "Projects.useEffect.handleResize": ()=>{
                    width = canvas.width = canvas.offsetWidth;
                    height = canvas.height = canvas.offsetHeight;
                }
            }["Projects.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            return ({
                "Projects.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["Projects.useEffect"];
        }
    }["Projects.useEffect"], []);
    const projects = [
        {
            title: "Plant Disease Detection",
            img: "/plant.jpeg",
            text: "AI-Based Plant Disease Detection System using image processing and AI. I designed and implemented a machine learning system to detect plant diseases from leaf images using deep learning techniques, specifically Convolutional Neural Networks (CNNs). I developed and compared architectures such as MobileNet and EfficientNet, leveraging the PlantVillage dataset from Kaggle for training and validation. The workflow included comprehensive image preprocessing—resizing, normalization, data augmentation, and noise removal—along with transfer learning and fine-tuning to enhance model accuracy and reduce overfitting. I optimized performance by tuning hyperparameters like learning rate, batch size, and epochs, and evaluated models across training, validation, and testing datasets. Additionally, I addressed real-world challenges such as lighting variations and background noise, demonstrating how automated disease detection can enable early diagnosis and improve crop productivity.",
            github: "https://github.com/Sumanthsalian11/Plant-disease-detection",
            tech: [
                "Python",
                "TensorFlow",
                "Flask"
            ]
        },
        {
            title: "College-Portal",
            img: "/college.jpeg",
            text: "MERN Stack system with admin login for managing faculty and departments.I designed and developed a responsive college website using React.js for the frontend and Node.js for the backend, implementing a component-based UI architecture to enhance reusability and maintainability. I built backend services in Node.js to manage server-side logic and data requests, integrating the frontend and backend through RESTful APIs. Key features included college information pages, department details, notices, and contact forms, with React hooks and state management used to handle dynamic content and user interactions. The website was fully responsive for both desktop and mobile devices, following best practices for routing, error handling, and code structure, while delivering a clean UI and smooth navigation to enhance the overall user experience.",
            github: "https://github.com/Sumanthsalian11/College-website",
            tech: [
                "React",
                "Node.js",
                "MongoDB",
                "CSS",
                "Tailwind"
            ]
        },
        {
            title: "Work-Order Management System",
            img: "/production.jpeg",
            text: "Dashboard for tracking production, dispatch, and analytics in real-time. I designed and developed a Work Order Management System to streamline operations across planning, production, dispatch, and reporting. The system automates previously manual processes, allowing work orders to be efficiently tracked from creation to completion. It features modules for production planning, dispatch scheduling, and generating various reports via an interactive dashboard, providing managers with real-time insights. The system also includes functionality to export reports in PDF and Excel formats, enabling easy sharing and record-keeping. By automating workflows, reducing manual errors, and centralizing data, the system significantly improves operational efficiency and decision-making.",
            github: "https://github.com/Sumanthsalian11/Production-System",
            tech: [
                "React",
                "Express",
                "MongoDB",
                "CSS",
                "Bootstrap",
                "Node"
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.section, {
        id: "projects",
        className: "position-relative py-5",
        style: {
            color: "white",
            overflow: "hidden",
            background: "#000"
        },
        initial: {
            opacity: 0,
            y: 80
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.8
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0
                },
                className: "jsx-790a0e4e6c55d737"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Projects.js",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    zIndex: 1,
                    background: "transparent"
                },
                className: "jsx-790a0e4e6c55d737" + " " + "container position-relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.h2, {
                        className: "mb-5 text-center",
                        style: {
                            color: "#f9a8d4",
                            fontSize: "3rem",
                            fontWeight: "bold",
                            textShadow: "0 0 10px #f9a8d4, 0 0 20px #ec92c0"
                        },
                        initial: {
                            opacity: 0,
                            x: 150
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 1
                        },
                        children: "Projects"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Projects.js",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-790a0e4e6c55d737" + " " + "row",
                        children: projects.map((item, i)=>{
                            const isEven = i % 2 === 0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-790a0e4e6c55d737" + " " + "col-12 mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: cardStyle,
                                    onMouseMove: (e)=>handleMove(e, e.currentTarget),
                                    onMouseLeave: (e)=>resetTilt(e.currentTarget),
                                    className: "jsx-790a0e4e6c55d737",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: scanLine,
                                            className: "jsx-790a0e4e6c55d737"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Projects.js",
                                            lineNumber: 140,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: shine,
                                            className: "jsx-790a0e4e6c55d737"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Projects.js",
                                            lineNumber: 142,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: isEven ? "row" : "row-reverse",
                                                alignItems: "center",
                                                gap: "25px",
                                                padding: "25px"
                                            },
                                            className: "jsx-790a0e4e6c55d737",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: "relative"
                                                    },
                                                    className: "jsx-790a0e4e6c55d737",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: item.img,
                                                            style: imageStyle,
                                                            className: "jsx-790a0e4e6c55d737"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Projects.js",
                                                            lineNumber: 155,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-790a0e4e6c55d737" + " " + "overlay",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: item.github,
                                                                target: "_blank",
                                                                style: buttonStyle,
                                                                className: "jsx-790a0e4e6c55d737",
                                                                children: "View Code"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/Projects.js",
                                                                lineNumber: 157,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Projects.js",
                                                            lineNumber: 156,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Projects.js",
                                                    lineNumber: 154,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                    initial: {
                                                        opacity: 0,
                                                        x: isEven ? 60 : -60
                                                    },
                                                    whileInView: {
                                                        opacity: 1,
                                                        x: 0
                                                    },
                                                    transition: {
                                                        duration: 0.7
                                                    },
                                                    style: {
                                                        flex: 1,
                                                        textAlign: "left"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            style: titleStyle,
                                                            className: "jsx-790a0e4e6c55d737",
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Projects.js",
                                                            lineNumber: 170,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                color: "#fbcfe8"
                                                            },
                                                            className: "jsx-790a0e4e6c55d737",
                                                            children: item.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Projects.js",
                                                            lineNumber: 171,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-790a0e4e6c55d737" + " " + "d-flex flex-wrap gap-2 mt-3",
                                                            children: item.tech.map((tech, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.span, {
                                                                    whileHover: {
                                                                        scale: 1.2,
                                                                        backgroundColor: "#f9a8d4",
                                                                        color: "#000"
                                                                    },
                                                                    style: badgeStyle,
                                                                    children: tech
                                                                }, index, false, {
                                                                    fileName: "[project]/src/app/components/Projects.js",
                                                                    lineNumber: 174,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Projects.js",
                                                            lineNumber: 172,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Projects.js",
                                                    lineNumber: 164,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Projects.js",
                                            lineNumber: 144,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Projects.js",
                                    lineNumber: 134,
                                    columnNumber: 17
                                }, this)
                            }, i, false, {
                                fileName: "[project]/src/app/components/Projects.js",
                                lineNumber: 133,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Projects.js",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Projects.js",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "790a0e4e6c55d737",
                children: ".overlay.jsx-790a0e4e6c55d737{opacity:0;background:#000c;border-radius:12px;justify-content:center;align-items:center;width:100%;height:100%;transition:all .3s;display:flex;position:absolute;top:0;left:0}div.jsx-790a0e4e6c55d737:hover>.overlay.jsx-790a0e4e6c55d737{opacity:1}@keyframes scan{0%{top:-100%}to{top:100%}}@keyframes shineMove{0%{left:-100%}to{left:100%}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Projects.js",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(Projects, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = Projects;
/* 🔥 STYLES */ const cardStyle = {
    background: "#0a0a0a",
    border: "1px solid #fff",
    boxShadow: "0 0 20px #ec92c0",
    borderRadius: "15px",
    transition: "0.2s",
    position: "relative",
    overflow: "hidden",
    transformStyle: "preserve-3d",
    maxWidth: "1050px",
    margin: "0 auto"
};
const imageStyle = {
    width: "280px",
    height: "190px",
    objectFit: "cover",
    borderRadius: "12px",
    border: "2px solid #f9a8d4",
    boxShadow: "0 0 15px #dc97badd"
};
const titleStyle = {
    color: "#f9a8d4",
    textShadow: "0 0 10px #e9bcd3",
    fontWeight: "bold"
};
const badgeStyle = {
    padding: "6px 14px",
    fontSize: "12px",
    borderRadius: "20px",
    background: "#020617",
    color: "#f9a8d4",
    border: "1px solid #f9a8d4"
};
const buttonStyle = {
    padding: "10px 22px",
    background: "#f9a8d4",
    color: "#000",
    borderRadius: "20px",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 0 10px #cfa4bacd"
};
const scanLine = {
    position: "absolute",
    width: "100%",
    height: "2px",
    background: "rgba(249,168,212,0.5)",
    animation: "scan 3s linear infinite"
};
const shine = {
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "50%",
    height: "100%",
    background: "linear-gradient(120deg, transparent, rgba(249,168,212,0.3), transparent)",
    animation: "shineMove 3s infinite"
};
var _c;
__turbopack_context__.k.register(_c, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Education.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Education
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Education() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleMove = (e, card)=>{
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = -(y - rect.height / 2) / 10;
        const rotateY = (x - rect.width / 2) / 10;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    };
    const resetTilt = (card)=>{
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Education.useEffect": ()=>{
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            let width = canvas.width = canvas.offsetWidth;
            let height = canvas.height = canvas.offsetHeight;
            const stars = Array.from({
                length: 200
            }).map({
                "Education.useEffect.stars": ()=>({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        r: Math.random() * 1.5 + 0.5,
                        opacity: Math.random(),
                        delta: Math.random() * 0.02 + 0.01,
                        pulse: Math.random() * 0.05 + 0.01
                    })
            }["Education.useEffect.stars"]);
            const animate = {
                "Education.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, width, height);
                    stars.forEach({
                        "Education.useEffect.animate": (star)=>{
                            star.opacity += star.delta;
                            if (star.opacity > 1 || star.opacity < 0) star.delta *= -1;
                            star.r += star.pulse;
                            if (star.r > 2 || star.r < 0.5) star.pulse *= -1;
                            ctx.beginPath();
                            ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
                            ctx.fill();
                        }
                    }["Education.useEffect.animate"]);
                    requestAnimationFrame(animate);
                }
            }["Education.useEffect.animate"];
            animate();
            const handleResize = {
                "Education.useEffect.handleResize": ()=>{
                    width = canvas.width = canvas.offsetWidth;
                    height = canvas.height = canvas.offsetHeight;
                }
            }["Education.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            return ({
                "Education.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["Education.useEffect"];
        }
    }["Education.useEffect"], []);
    const educationData = [
        {
            title: "PU College",
            percent: 100,
            text: "Amratha Bharathi, Hebri",
            duration: "2019 - 2021",
            score: "87%",
            highlights: [
                "PCMCs"
            ],
            link: "https://amrathabharathitrust.com/pu-college/"
        },
        {
            title: "Bachelor Computer Application",
            percent: 100,
            text: "MGM College, Udupi",
            duration: "2021 - 2024",
            score: "CGPA: 9",
            highlights: [
                "Web Dev",
                "DBMS",
                "Mini Projects"
            ],
            link: "https://www.mgmudupi.ac.in/"
        },
        {
            title: "MSc Computer Science",
            percent: 80,
            text: "MGM College, Udupi",
            duration: "2024 - 2026",
            score: "Pursuing",
            highlights: [
                "AI",
                "Full Stack",
                "Research"
            ],
            link: "https://www.mgmudupi.ac.in/"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.section, {
        id: "education",
        className: "py-5 text-center position-relative",
        style: {
            color: "white",
            overflow: "hidden",
            minHeight: "90vh",
            background: "#000"
        },
        initial: {
            opacity: 0,
            y: 80
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0
                },
                className: "jsx-9d0563c4cc65c3ef"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Education.js",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    zIndex: 1
                },
                className: "jsx-9d0563c4cc65c3ef" + " " + "container position-relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.h2, {
                        className: "mb-4",
                        style: {
                            color: "#00ffff",
                            fontSize: "3rem",
                            fontWeight: "bold",
                            textShadow: "0 0 10px #00ffff, 0 0 20px #00cfff"
                        },
                        initial: {
                            opacity: 0,
                            x: -150
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 1
                        },
                        children: "Education"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Education.js",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-9d0563c4cc65c3ef" + " " + "row",
                        children: educationData.map((item, i)=>{
                            const radius = 35;
                            const circumference = 2 * Math.PI * radius;
                            const offset = circumference - item.percent / 100 * circumference;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-9d0563c4cc65c3ef" + " " + "col-md-4 mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.link,
                                    target: "_blank",
                                    className: "jsx-9d0563c4cc65c3ef",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: cardStyle,
                                        onMouseMove: (e)=>handleMove(e, e.currentTarget),
                                        onMouseLeave: (e)=>resetTilt(e.currentTarget),
                                        className: "jsx-9d0563c4cc65c3ef" + " " + "card p-3 text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                style: {
                                                    color: "#ff00ff",
                                                    fontWeight: "bold",
                                                    marginBottom: "5px"
                                                },
                                                className: "jsx-9d0563c4cc65c3ef",
                                                children: item.degree
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Education.js",
                                                lineNumber: 154,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: scanLine,
                                                className: "jsx-9d0563c4cc65c3ef"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Education.js",
                                                lineNumber: 159,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: shine,
                                                className: "jsx-9d0563c4cc65c3ef"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Education.js",
                                                lineNumber: 160,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: "relative",
                                                    margin: "auto"
                                                },
                                                className: "jsx-9d0563c4cc65c3ef",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "100",
                                                        height: "100",
                                                        className: "jsx-9d0563c4cc65c3ef",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "50",
                                                                cy: "50",
                                                                r: radius,
                                                                stroke: "#222",
                                                                strokeWidth: "6",
                                                                fill: "transparent",
                                                                className: "jsx-9d0563c4cc65c3ef"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/Education.js",
                                                                lineNumber: 165,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.circle, {
                                                                cx: "50",
                                                                cy: "50",
                                                                r: radius,
                                                                stroke: "#00ffff",
                                                                strokeWidth: "6",
                                                                fill: "transparent",
                                                                strokeDasharray: circumference,
                                                                strokeDashoffset: circumference,
                                                                animate: {
                                                                    strokeDashoffset: offset
                                                                },
                                                                transition: {
                                                                    duration: 1.5
                                                                },
                                                                style: {
                                                                    filter: "drop-shadow(0 0 10px #00ffff)"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/Education.js",
                                                                lineNumber: 173,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/Education.js",
                                                        lineNumber: 164,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: circleText,
                                                        className: "jsx-9d0563c4cc65c3ef",
                                                        children: [
                                                            item.percent,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/Education.js",
                                                        lineNumber: 187,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Education.js",
                                                lineNumber: 163,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                style: titleStyle,
                                                className: "jsx-9d0563c4cc65c3ef",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Education.js",
                                                lineNumber: 191,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: subText,
                                                className: "jsx-9d0563c4cc65c3ef",
                                                children: item.text
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Education.js",
                                                lineNumber: 192,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: subText,
                                                className: "jsx-9d0563c4cc65c3ef",
                                                children: [
                                                    "📅 ",
                                                    item.duration
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Education.js",
                                                lineNumber: 193,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: subText,
                                                className: "jsx-9d0563c4cc65c3ef",
                                                children: [
                                                    "🎯 ",
                                                    item.score
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Education.js",
                                                lineNumber: 194,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginTop: "5px"
                                                },
                                                className: "jsx-9d0563c4cc65c3ef",
                                                children: item.highlights.map((h, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: tagStyle,
                                                        className: "jsx-9d0563c4cc65c3ef",
                                                        children: h
                                                    }, idx, false, {
                                                        fileName: "[project]/src/app/components/Education.js",
                                                        lineNumber: 198,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Education.js",
                                                lineNumber: 196,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: progressContainer,
                                                className: "jsx-9d0563c4cc65c3ef",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                    style: progressBar,
                                                    initial: {
                                                        width: 0
                                                    },
                                                    whileInView: {
                                                        width: `${item.percent}%`
                                                    },
                                                    transition: {
                                                        duration: 1.5
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Education.js",
                                                    lineNumber: 204,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Education.js",
                                                lineNumber: 203,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: progressText,
                                                className: "jsx-9d0563c4cc65c3ef",
                                                children: [
                                                    item.percent,
                                                    "% Completed"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Education.js",
                                                lineNumber: 211,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Education.js",
                                        lineNumber: 147,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Education.js",
                                    lineNumber: 146,
                                    columnNumber: 17
                                }, this)
                            }, i, false, {
                                fileName: "[project]/src/app/components/Education.js",
                                lineNumber: 145,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Education.js",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Education.js",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "9d0563c4cc65c3ef",
                children: "@keyframes scan{0%{top:-100%}to{top:100%}}@keyframes shineMove{0%{left:-100%}to{left:100%}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Education.js",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_s(Education, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = Education;
/* 🔥 STYLES */ const cardStyle = {
    background: "#0a0a0a",
    border: "1px solid #00ffff",
    boxShadow: "0 0 15px #00f4f4",
    transition: "0.2s",
    position: "relative",
    overflow: "hidden",
    transformStyle: "preserve-3d"
};
const titleStyle = {
    color: "#00ffff",
    textShadow: "0 0 10px #00ffff",
    fontWeight: "bold",
    marginTop: "10px"
};
const subText = {
    fontSize: "13px",
    color: "#00ffff",
    textShadow: "0 0 5px #00ffff",
    margin: "2px 0"
};
const tagStyle = {
    display: "inline-block",
    padding: "3px 8px",
    margin: "3px",
    fontSize: "10px",
    border: "1px solid #00ffff",
    borderRadius: "10px",
    color: "#00ffff",
    boxShadow: "0 0 5px #00ffff55"
};
const progressContainer = {
    width: "100%",
    height: "8px",
    background: "#111",
    borderRadius: "10px",
    marginTop: "10px"
};
const progressBar = {
    height: "100%",
    background: "linear-gradient(90deg, #00ffff, #00ffcc)",
    boxShadow: "0 0 10px #00ffff"
};
const progressText = {
    fontSize: "12px",
    color: "#00ffff"
};
const circleText = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#00ffff",
    fontWeight: "bold"
};
const scanLine = {
    position: "absolute",
    width: "100%",
    height: "2px",
    background: "rgba(0,255,255,0.5)",
    animation: "scan 3s linear infinite"
};
const shine = {
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "50%",
    height: "100%",
    background: "linear-gradient(120deg, transparent, rgba(0,255,255,0.3), transparent)",
    animation: "shineMove 3s infinite"
};
var _c;
__turbopack_context__.k.register(_c, "Education");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Contact.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@emailjs/browser'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Contact() {
    _s();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        remarks: ""
    });
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // New state for "Share Your Opinion" small form
    const [opinionData, setOpinionData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        remarks: ""
    });
    const [opinionSubmitted, setOpinionSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const socialLinks = [
        {
            name: "Facebook",
            icon: "/facebook.png",
            link: "https://www.facebook.com/sumanth.salian.1232",
            profilePic: "/facebook_profile.jpeg"
        },
        {
            name: "Instagram",
            icon: "/instagram.png",
            link: "https://www.instagram.com/sumxnth_salian",
            profilePic: "/instagram_profile.jpeg"
        },
        {
            name: "WhatsApp",
            icon: "/whatsapp.png",
            link: "https://wa.me/919380437570",
            profilePic: "/whatsapp_profile.jpeg"
        }
    ];
    // ⭐ Star background effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Contact.useEffect": ()=>{
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            let width = canvas.width = canvas.offsetWidth;
            let height = canvas.height = canvas.offsetHeight;
            const stars = Array.from({
                length: 200
            }).map({
                "Contact.useEffect.stars": ()=>({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        r: Math.random() * 1.5 + 0.5,
                        opacity: Math.random(),
                        delta: Math.random() * 0.02 + 0.01,
                        pulse: Math.random() * 0.05 + 0.01,
                        color: Math.random() > 0.5 ? "#FFD700" : "#FFFFFF"
                    })
            }["Contact.useEffect.stars"]);
            const animate = {
                "Contact.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, width, height);
                    stars.forEach({
                        "Contact.useEffect.animate": (star)=>{
                            star.opacity += star.delta;
                            if (star.opacity > 1 || star.opacity < 0) star.delta *= -1;
                            star.r += star.pulse;
                            if (star.r > 2 || star.r < 0.5) star.pulse *= -1;
                            ctx.beginPath();
                            ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(${parseInt(star.color.slice(1, 3), 16)},${parseInt(star.color.slice(3, 5), 16)},${parseInt(star.color.slice(5, 7), 16)},${star.opacity})`;
                            ctx.fill();
                        }
                    }["Contact.useEffect.animate"]);
                    requestAnimationFrame(animate);
                }
            }["Contact.useEffect.animate"];
            animate();
            const handleResize = {
                "Contact.useEffect.handleResize": ()=>{
                    width = canvas.width = canvas.offsetWidth;
                    height = canvas.height = canvas.offsetHeight;
                }
            }["Contact.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            return ({
                "Contact.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["Contact.useEffect"];
        }
    }["Contact.useEffect"], []);
    // Original contact form handlers (if you plan to use it separately)
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.remarks
        };
        emailjs.send("service_hrpluvh", "template_em7dqhj", templateParams, "IhNzmuJddVPQFZCKU").then(()=>{
            setSubmitted(true);
            setFormData({
                name: "",
                email: "",
                remarks: ""
            });
            setTimeout(()=>setSubmitted(false), 3000);
        }).catch(()=>{
            alert("Oops! Something went wrong. Please try again.");
        });
    };
    // Small "Share Your Opinion" form handlers
    const handleOpinionChange = (e)=>{
        setOpinionData({
            ...opinionData,
            [e.target.name]: e.target.value
        });
    };
    const handleOpinionSubmit = (e)=>{
        e.preventDefault();
        const templateParams = {
            from_name: opinionData.name,
            from_email: opinionData.email,
            message: opinionData.remarks
        };
        emailjs.send(("TURBOPACK compile-time value", "service_hrpluvh"), ("TURBOPACK compile-time value", "template_em7dqhj"), templateParams, ("TURBOPACK compile-time value", "IhNzmuJddVPQFZCKU")).then(()=>{
            setOpinionSubmitted(true);
            setOpinionData({
                name: "",
                email: "",
                remarks: ""
            });
            setTimeout(()=>setOpinionSubmitted(false), 3000);
        }).catch(()=>{
            alert("Oops! Something went wrong. Please try again.");
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.section, {
        id: "contact",
        className: "py-5 text-center position-relative",
        style: {
            color: "white",
            overflow: "hidden",
            minHeight: "90vh",
            background: "#000"
        },
        initial: {
            opacity: 0,
            y: 80
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.8
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0
                }
            }, void 0, false, {
                fileName: "[project]/src/app/components/Contact.js",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container position-relative",
                style: {
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.h2, {
                        className: "mb-4",
                        style: {
                            color: "#dbc653",
                            fontSize: "3rem",
                            fontWeight: "bold",
                            textShadow: "0 0 10px #FFD700, 0 0 20px #FFC700"
                        },
                        initial: {
                            opacity: 0,
                            x: -150
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 1
                        },
                        children: "Contact Me"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Contact.js",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "1.2rem",
                            marginBottom: "30px",
                            textShadow: "0 0 5px #ffdb0c, 0 0 15px #FFC70055"
                        },
                        children: [
                            "Email:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:Sumanthsalian11@gmail.com",
                                style: {
                                    WebkitTextStroke: "1px #FFC70055",
                                    color: "#ffd900",
                                    textDecoration: "none",
                                    transition: "0.3s"
                                },
                                children: "Sumanthsalian11@gmail.com"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Contact.js",
                                lineNumber: 177,
                                columnNumber: 3
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Contact.js",
                        lineNumber: 169,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "1.2rem",
                            marginBottom: "30px",
                            textShadow: "0 0 5px #ffdb0c, 0 0 15px #FFC70055"
                        },
                        children: [
                            "Location:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    WebkitTextStroke: "1px #FFC70055",
                                    color: "#ffd900",
                                    transition: "0.3s"
                                },
                                children: "Karnataka, India📍"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Contact.js",
                                lineNumber: 198,
                                columnNumber: 3
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Contact.js",
                        lineNumber: 190,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex justify-content-center gap-5 mt-3 position-relative mb-5",
                        children: socialLinks.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "position-relative text-center",
                                style: {
                                    cursor: "pointer",
                                    transition: "0.3s"
                                },
                                onMouseEnter: ()=>setHovered(index),
                                onMouseLeave: ()=>setHovered(null),
                                onClick: ()=>window.open(item.link, "_blank"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.img, {
                                        src: item.icon,
                                        alt: item.name,
                                        style: {
                                            width: "50px",
                                            height: "50px",
                                            borderRadius: "12px",
                                            boxShadow: "0 0 8px #FFD70033"
                                        },
                                        whileHover: {
                                            scale: 1.3,
                                            boxShadow: "0 0 20px #f3cf00, 0 0 40px #FFC70077"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Contact.js",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this),
                                    hovered === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                        initial: {
                                            y: -20,
                                            opacity: 0
                                        },
                                        animate: {
                                            y: -40,
                                            opacity: 1
                                        },
                                        exit: {
                                            y: -20,
                                            opacity: 0
                                        },
                                        style: {
                                            position: "absolute",
                                            top: "-100px",
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            width: "80px",
                                            height: "80px",
                                            borderRadius: "50%",
                                            overflow: "hidden",
                                            border: "2px solid #e4d479",
                                            zIndex: 10,
                                            background: "#000",
                                            boxShadow: "0 0 15px #ffd901b4"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: item.profilePic,
                                            alt: `${item.name} profile`,
                                            style: {
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Contact.js",
                                            lineNumber: 246,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Contact.js",
                                        lineNumber: 227,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/app/components/Contact.js",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Contact.js",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        className: "mt-5",
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.h3, {
                                style: {
                                    color: "#00ffff",
                                    textShadow: "0 0 10px #00ffff, 0 0 20px #00cfff",
                                    marginBottom: "20px"
                                },
                                children: "Share Your Opinion"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Contact.js",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.form, {
                                onSubmit: handleOpinionSubmit,
                                className: "d-flex flex-column align-items-center gap-3",
                                style: {
                                    maxWidth: "400px",
                                    margin: "0 auto",
                                    padding: "20px",
                                    borderRadius: "15px",
                                    background: "#111",
                                    boxShadow: "0 0 15px #00ffff55, 0 0 30px #00cfff33"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "name",
                                        placeholder: "Name",
                                        value: opinionData.name,
                                        onChange: handleOpinionChange,
                                        required: true,
                                        style: inputStyle
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Contact.js",
                                        lineNumber: 282,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        name: "email",
                                        placeholder: "Email",
                                        value: opinionData.email,
                                        onChange: handleOpinionChange,
                                        required: true,
                                        style: inputStyle
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Contact.js",
                                        lineNumber: 291,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        name: "remarks",
                                        placeholder: "Remarks",
                                        value: opinionData.remarks,
                                        onChange: handleOpinionChange,
                                        required: true,
                                        rows: 3,
                                        style: {
                                            ...inputStyle,
                                            resize: "none"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Contact.js",
                                        lineNumber: 300,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.button, {
                                        type: "submit",
                                        style: buttonStyle,
                                        whileHover: {
                                            scale: 1.05,
                                            boxShadow: "0 0 20px #00ffffaa"
                                        },
                                        children: "Submit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Contact.js",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, this),
                                    opinionSubmitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        style: {
                                            color: "#00ffff",
                                            marginTop: "10px",
                                            fontWeight: "bold"
                                        },
                                        children: "Thank you! Your opinion has been submitted."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Contact.js",
                                        lineNumber: 318,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Contact.js",
                                lineNumber: 270,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Contact.js",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Contact.js",
                lineNumber: 153,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Contact.js",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
_s(Contact, "ubHblXuhp1tmhEzOtRrVggpx6uw=");
_c = Contact;
/* 🔥 STYLES */ const inputStyle = {
    width: "100%",
    padding: "10px 15px",
    borderRadius: "10px",
    border: "1px solid #ffc700",
    background: "#111",
    color: "white",
    boxShadow: "0 0 10px #FFD70033"
};
const buttonStyle = {
    padding: "10px 25px",
    borderRadius: "10px",
    border: "none",
    background: "#dbc653",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 0 10px #FFD70077",
    transition: "0.3s"
};
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/CursorGlow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CursorGlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CursorGlow() {
    _s();
    const glowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CursorGlow.useEffect": ()=>{
            setMounted(true);
            const move = {
                "CursorGlow.useEffect.move": (e)=>{
                    if (glowRef.current) {
                        glowRef.current.style.left = e.clientX + "px";
                        glowRef.current.style.top = e.clientY + "px";
                    }
                }
            }["CursorGlow.useEffect.move"];
            document.addEventListener("mousemove", move);
            return ({
                "CursorGlow.useEffect": ()=>{
                    document.removeEventListener("mousemove", move);
                }
            })["CursorGlow.useEffect"];
        }
    }["CursorGlow.useEffect"], []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: glowRef,
        style: {
            position: "fixed",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgb(4, 36, 36), transparent)",
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%",
            zIndex: 999
        }
    }, void 0, false, {
        fileName: "[project]/src/app/components/CursorGlow.js",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(CursorGlow, "+r9197dEKpL327p6KNE4cdLt9Wo=");
_c = CursorGlow;
var _c;
__turbopack_context__.k.register(_c, "CursorGlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Logo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
function Logo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
        style: {
            position: "fixed",
            top: "20px",
            left: "20px",
            width: "60px",
            height: "60px",
            zIndex: 1001
        },
        animate: {
            rotate: 360
        },
        transition: {
            repeat: Infinity,
            duration: 10,
            ease: "linear"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/logo.png",
            alt: "Logo",
            style: {
                width: "100%",
                height: "100%",
                objectFit: "contain"
            }
        }, void 0, false, {
            fileName: "[project]/src/app/components/Logo.js",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Logo.js",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'bootstrap/dist/css/bootstrap.min.css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'three'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
// Components
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Navbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Hero$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Hero.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$About$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/About.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Skills$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Skills.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Projects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Projects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Education$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Education.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Contact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Contact.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$CursorGlow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/CursorGlow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Logo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Logo.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const vantaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // Ref to Hero
    // 🌟 VANTA Background
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            let effect;
            const loadVanta = {
                "Home.useEffect.loadVanta": async ()=>{
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    const VANTA = await (()=>{
                        const e = new Error("Cannot find module 'vanta/dist/vanta.net.min'");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    })();
                    effect = VANTA.default({
                        el: vantaRef.current,
                        THREE: THREE,
                        mouseControls: true,
                        touchControls: true,
                        minHeight: 600.0,
                        minWidth: 800.0,
                        scale: 1.0,
                        scaleMobile: 1.0,
                        backgroundColor: 0x000000,
                        color: 0xffffff,
                        points: 4,
                        maxDistance: 25,
                        spacing: 20,
                        showLines: false,
                        speed: 0.5
                    });
                }
            }["Home.useEffect.loadVanta"];
            loadVanta();
            return ({
                "Home.useEffect": ()=>{
                    if (effect) effect.destroy();
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    // Function to handle Home click
    const handleHomeClick = ()=>{
        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        // Trigger Hero animation
        if (heroRef.current?.replayAnimation) {
            heroRef.current.replayAnimation();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            color: "white",
            backgroundSize: "400% 400%",
            animation: "gradientShift 4s ease infinite"
        },
        className: "jsx-b986a92cf6cceaba",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onHomeClick: handleHomeClick
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: vantaRef,
                className: "jsx-b986a92cf6cceaba",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Hero$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    ref: heroRef
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$About$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Skills$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Projects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Education$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Contact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Logo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$CursorGlow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "b986a92cf6cceaba",
                children: "@keyframes gradientShift{0%{background-position:0%}50%{background-position:100%}to{background-position:0%}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(Home, "IMysd9YG1sGv9ipDPZZKJQwdQiQ=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Bproject%5D_src_app_1bc40c6c._.js.map