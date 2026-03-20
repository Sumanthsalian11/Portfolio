"use client";

import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

const Hero = forwardRef((props, ref) => {
  const canvasRef = useRef(null);
  const nameRef = useRef(null);
  const titleRefs = useRef([]);
  const titles = ["Full Stack Developer", "React Developer", "MERN Stack Learner"];

  // Particle & scene refs
  const fireGeometryRef = useRef(null);
  const fireVelocitiesRef = useRef([]);
  const smokeGeometryRef = useRef(null);
  const smokeVelocitiesRef = useRef([]);
  const sparkGeometryRef = useRef(null);
  const sparkVelocitiesRef = useRef([]);
  const shockWaveRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);

  useImperativeHandle(ref, () => ({
    replayAnimation: () => {
      playGSAP();
      resetParticles();
    },
  }));

  const playGSAP = () => {
    if (!nameRef.current) return;

    // Reset state
    gsap.set(nameRef.current, { opacity: 0, rotationY: 0, rotationX: -90, scale: 1 });
    titleRefs.current.forEach((el) => gsap.set(el, { y: -20, opacity: 0 }));

    // Flip-in animation for name
    gsap.to(nameRef.current, {
      rotationX: 0,
      rotationY: 360,
      opacity: 1,
      duration: 1.2,
      scale: 1.2,
      ease: "back.out(1.7)",
      onComplete: () => {
        // Slight bounce after flip
        gsap.to(nameRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });

        // Animate titles sequentially
        titles.forEach((title, i) => {
          const el = titleRefs.current[i];
          gsap.fromTo(
            el,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: i * 0.5, ease: "power2.out" }
          );
        });
      },
    });

    // Reset shockwave
    if (shockWaveRef.current) {
      shockWaveRef.current.scale.set(1, 1, 1);
      shockWaveRef.current.material.opacity = 0.7;
    }
  };

  const resetParticles = () => {
    [fireGeometryRef, smokeGeometryRef, sparkGeometryRef].forEach((geoRef, idx) => {
      const velRef = [fireVelocitiesRef, smokeVelocitiesRef, sparkVelocitiesRef][idx];
      if (geoRef.current && velRef.current.length) {
        const arr = geoRef.current.attributes.position.array;
        for (let i = 0; i < arr.length; i += 3) arr[i] = arr[i + 1] = arr[i + 2] = 0;
        geoRef.current.attributes.position.needsUpdate = true;
      }
    });
  };

  // ===== THREE.JS SCENE SETUP =====
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.05);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      canvas: canvasRef.current,
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

    for (let i = 0; i < fireCount; i++) {
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
      blending: THREE.AdditiveBlending,
    });
    const fireParticles = new THREE.Points(fireGeometry, fireMaterial);
    scene.add(fireParticles);

    // ===== SMOKE PARTICLES =====
    const smokeCount = 200;
    const smokeGeometry = new THREE.BufferGeometry();
    const smokePositions = [];
    const smokeVelocities = [];
    for (let i = 0; i < smokeCount; i++) {
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
      opacity: 0.5,
    });
    const smokeParticles = new THREE.Points(smokeGeometry, smokeMaterial);
    scene.add(smokeParticles);

    // ===== SPARK PARTICLES =====
    const sparkCount = 300;
    const sparkGeometry = new THREE.BufferGeometry();
    const sparkPositions = [];
    const sparkVelocities = [];
    for (let i = 0; i < sparkCount; i++) {
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
      blending: THREE.AdditiveBlending,
    });
    const sparkParticles = new THREE.Points(sparkGeometry, sparkMaterial);
    scene.add(sparkParticles);

    // ===== SHOCKWAVE =====
    const shockGeo = new THREE.RingGeometry(0.1, 0.15, 64);
    const shockMat = new THREE.MeshBasicMaterial({
      color: 0xffcc00,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide,
    });
    const shockWave = new THREE.Mesh(shockGeo, shockMat);
    shockWave.rotation.x = Math.PI / 2;
    scene.add(shockWave);
    shockWaveRef.current = shockWave;

    // ===== ANIMATE =====
    const animate = () => {
      requestAnimationFrame(animate);

      // Fire
      const firePos = fireGeometry.attributes.position.array;
      for (let i = 0; i < firePos.length; i += 3) {
        firePos[i] += fireVelocities[i] * 0.05;
        firePos[i + 1] += fireVelocities[i + 1] * 0.05;
        firePos[i + 2] += fireVelocities[i + 2] * 0.05;
        if (firePos[i + 1] > 4) firePos[i + 1] = 4;
      }
      fireGeometry.attributes.position.needsUpdate = true;

      // Smoke
      const smokePos = smokeGeometry.attributes.position.array;
      for (let i = 0; i < smokePos.length; i += 3) {
        smokePos[i] += smokeVelocities[i] * 0.02;
        smokePos[i + 1] += smokeVelocities[i + 1] * 0.02;
        smokePos[i + 2] += smokeVelocities[i + 2] * 0.02;
        if (smokePos[i + 1] > 6) smokePos[i + 1] = 6;
      }
      smokeGeometry.attributes.position.needsUpdate = true;

      // Sparks
      const sparkPos = sparkGeometry.attributes.position.array;
      for (let i = 0; i < sparkPos.length; i += 3) {
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
    };
    animate();

    // Play initial GSAP
    playGSAP();

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="home"
      style={{
        height: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
        background: "radial-gradient(circle at center, #000000, #110000)",
        perspective: "1000px", // important for 3D flip
      }}
    >
      <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }} />

      <div
        ref={nameRef}
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#ffcc00",
          fontSize: "4rem",
          fontWeight: "bold",
          textAlign: "center",
          textShadow: "0 0 20px #ff4500, 0 0 40px #ff8c00, 0 0 60px #ffcc00",
          transformStyle: "preserve-3d", // 3D flip works only with this
        }}
      >
        Hi, I am Sumanth
        <div style={{ marginTop: "1rem", fontSize: "1.5rem", fontWeight: "500" }}>
          {titles.map((title, i) => (
            <div key={i} ref={(el) => (titleRefs.current[i] = el)}>
              {title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Hero;