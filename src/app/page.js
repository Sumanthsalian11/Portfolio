"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef } from "react";
import * as THREE from "three";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";
import Logo from "./components/Logo";

export default function Home() {
  const vantaRef = useRef(null);
  const heroRef = useRef(null); // Ref to Hero

  // 🌟 VANTA Background
  useEffect(() => {
    let effect;

    const loadVanta = async () => {
      if (typeof window === "undefined") return;

      const VANTA = await import("vanta/dist/vanta.net.min");

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
        speed: 0.5,
      });
    };

    loadVanta();

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  // Function to handle Home click
  const handleHomeClick = () => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Trigger Hero animation
    if (heroRef.current?.replayAnimation) {
      heroRef.current.replayAnimation();
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        color: "white",
        backgroundSize: "400% 400%",
        animation: "gradientShift 4s ease infinite",
      }}
    >
      {/* Navbar */}
      <Navbar onHomeClick={handleHomeClick} />

      {/* Hero (with Vanta background) */}
      <div ref={vantaRef}>
        <Hero ref={heroRef} />
      </div>

      {/* Sections */}
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Logo />

      {/* Cursor Glow */}
      <CursorGlow />

      {/* Global animation */}
      <style jsx global>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}