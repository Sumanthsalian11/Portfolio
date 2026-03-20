"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function About() {
  // Profile images + labels + gradient color
  const profiles = [
    { src: "/profile1.jpeg", label: "Me", gradient: "linear-gradient(135deg, #3b8bbc, #00ffff)" },
    { src: "/profile2.jpeg", label: "Coding", gradient: "linear-gradient(135deg,  #3b8bbc, #00ffff)" },
    { src: "/profile3.jpeg", label: "Playing", gradient: "linear-gradient(135deg, #c2dc8a, #87cbe9)" },
    { src: "/profile4.jpeg", label: "Gym", gradient: "linear-gradient(135deg, #3b8bbc, #00ffff)" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-cycle every 2 seconds, pause on hover
  useEffect(() => {
    if (!isHovering) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % profiles.length);
      }, 2000);
    }
    return () => clearInterval(intervalRef.current);
  }, [activeIndex, isHovering]);

  return (
    <motion.section
      id="about"
      className="d-flex flex-column flex-md-row align-items-center justify-content-center py-5 position-relative"
      style={{
        background: "#0a0a0a",
        color: "#fff",
        minHeight: "90vh",
        overflow: "hidden",
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* LEFT CONTENT */}
      <div className="col-md-6 d-flex flex-column justify-content-center px-4" style={{ zIndex: 1 }}>
        <motion.h1
          className="fw-bold"
          style={{
            fontSize: "4rem",
            background: "linear-gradient(90deg, #ff00ff, #00ffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "0.5rem",
          }}
        >
          SUMANTH
        </motion.h1>
        <motion.h1
          className="fw-bold"
          style={{
            fontSize: "4rem",
            background: "linear-gradient(90deg, #00ffff, #ffdd00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "1rem",
          }}
        >
          SALIAN
        </motion.h1>

        <p style={{ color: "#888", fontSize: "1.1rem", marginBottom: "1rem" }}>
          "Builder. Explorer. Always becoming."
        </p>

        <div className="d-flex flex-wrap gap-2 mb-3">
          {["BUILDER", "MSC - 2026", "OPEN TO WORK", "AI EXPLORER"].map((tag, i) => (
            <span
              key={i}
              style={{
                padding: "6px 14px",
                borderRadius: "20px",
                background: "rgba(0,255,255,0.1)",
                border: "1px solid #00ffff",
                color: "#00ffff",
                fontWeight: 600,
                fontSize: "0.85rem",
                textShadow: "0 0 4px #00ffff",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <p style={{ color: "#aaa", lineHeight: "1.6rem" }}>
          I'm a full-stack developer with a deep love for building things that feel alive — interfaces that breathe, APIs that sing, and systems that scale.
Currently pursuing my Msc Computer Science at Mahatma Gandhi Memorial College Udupi. I work with React, PostmanAPI, MongoDB, and dive into AI pipelines whenever I get the chance.
I enjoy turning complex problems into simple, intuitive solutions, focusing on performance, scalability, and seamless user experience.
Beyond coding, I constantly explore new technologies, experiment with creative ideas, and push myself to build products that are both meaningful and impactful.
I believe in learning by building — every project I create is a step toward mastering my craft and delivering real-world value.
        </p>

        <ul style={{ color: "#aaa", lineHeight: "1.6rem", paddingLeft: "1.2rem" }}>
          <li>Build modern UIs using React and Next.js</li>
          <li>Develop backend APIs with Node.js and Express</li>
          <li>Work on real-time systems</li>
          <li>Implement AI/ML models</li>
        </ul>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className="col-md-6 d-flex flex-column justify-content-center align-items-center mt-4 mt-md-0"
        style={{ zIndex: 1 }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          style={{
            position: "relative",
            width: "320px",
            height: "320px",
            borderRadius: "25px",
            overflow: "hidden",
            border: "2px solid #00ffff",
            boxShadow: "0 0 20px #00ffff, 0 0 60px #00ffff55",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Gradient matching active profile */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              top: "-20%",
              left: "-20%",
              width: "140%",
              height: "140%",
              background: profiles[activeIndex].gradient,
              filter: "blur(40px)",
              animation: "spin 15s linear infinite",
              zIndex: 0,
              borderRadius: "25px",
            }}
          />

          {/* Profile Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={profiles[activeIndex].src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "relative",
                zIndex: 1,
                borderRadius: "20px",
              }}
            />
          </AnimatePresence>
        </div>

        {/* Label for current profile */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            style={{
              marginTop: "10px",
              color: "#00ffff",
              fontWeight: 600,
              textShadow: "0 0 5px #00ffff",
              fontSize: "1.1rem",
            }}
          >
            {profiles[activeIndex].label}
          </motion.div>
        </AnimatePresence>

        {/* Thumbnails */}
        <div className="d-flex justify-content-center gap-3 mt-3">
          {profiles.map((p, i) => (
            <img
              key={i}
              src={p.src}
              onClick={() => setActiveIndex(i)}
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "10px",
                cursor: "pointer",
                border: activeIndex === i ? "2px solid #00ffff" : "1px solid #333",
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </motion.section>
  );
}