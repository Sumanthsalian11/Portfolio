"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Education() {
  const canvasRef = useRef(null);

  const handleMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 10;
    const rotateY = (x - rect.width / 2) / 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const resetTilt = (card) => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const stars = Array.from({ length: 200 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.5,
      opacity: Math.random(),
      delta: Math.random() * 0.02 + 0.01,
      pulse: Math.random() * 0.05 + 0.01,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        star.opacity += star.delta;
        if (star.opacity > 1 || star.opacity < 0) star.delta *= -1;

        star.r += star.pulse;
        if (star.r > 2 || star.r < 0.5) star.pulse *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const educationData = [
    {
      title: "PU College",
      percent: 100,
      text: "Amratha Bharathi, Hebri",
      duration: "2019 - 2021",
      score: "87%",
      highlights: ["PCMCs"],
      link: "https://amrathabharathitrust.com/pu-college/",
    },
    {
      title: "Bachelor Computer Application",
      percent: 100,
      text: "MGM College, Udupi",
      duration: "2021 - 2024",
      score: "CGPA: 9",
      highlights: ["Web Dev", "DBMS", "Mini Projects"],
      link: "https://www.mgmudupi.ac.in/",
    },
    {
      title: "MSc Computer Science",
      percent: 80,
      text: "MGM College, Udupi",
      duration: "2024 - 2026",
      score: "Pursuing",
      highlights: ["AI", "Full Stack", "Research"],
      link: "https://www.mgmudupi.ac.in/",
    },
  ];

  return (
    <motion.section
      id="education"
      className="py-5 text-center position-relative"
      style={{
        color: "white",
        overflow: "hidden",
        minHeight: "90vh",
        background: "#000",
      }}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {/* ⭐ Star canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* ✨ Animated Heading */}
        <motion.h2
          className="mb-4"
          style={{
            color: "#00ffff",
            fontSize: "3rem",
            fontWeight: "bold",
            textShadow: "0 0 10px #00ffff, 0 0 20px #00cfff",
          }}
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Education
        </motion.h2>

        <div className="row">
          {educationData.map((item, i) => {
            const radius = 35;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (item.percent / 100) * circumference;

            return (
              <div key={i} className="col-md-4 mb-4">
                <a href={item.link} target="_blank">
                  <div
                    className="card p-3 text-white"
                    style={cardStyle}
                    onMouseMove={(e) => handleMove(e, e.currentTarget)}
                    onMouseLeave={(e) => resetTilt(e.currentTarget)}
                  >
                    {/* Degree Label */}
                    <h6 style={{ color: "#ff00ff", fontWeight: "bold", marginBottom: "5px" }}>
                      {item.degree}
                    </h6>

                    {/* Scan & Shine */}
                    <div style={scanLine}></div>
                    <div style={shine}></div>

                    {/* Circular Progress */}
                    <div style={{ position: "relative", margin: "auto" }}>
                      <svg width="100" height="100">
                        <circle
                          cx="50"
                          cy="50"
                          r={radius}
                          stroke="#222"
                          strokeWidth="6"
                          fill="transparent"
                        />
                        <motion.circle
                          cx="50"
                          cy="50"
                          r={radius}
                          stroke="#00ffff"
                          strokeWidth="6"
                          fill="transparent"
                          strokeDasharray={circumference}
                          strokeDashoffset={circumference}
                          animate={{ strokeDashoffset: offset }}
                          transition={{ duration: 1.5 }}
                          style={{ filter: "drop-shadow(0 0 10px #00ffff)" }}
                        />
                      </svg>
                      <div style={circleText}>{item.percent}%</div>
                    </div>

                    {/* Info */}
                    <h4 style={titleStyle}>{item.title}</h4>
                    <p style={subText}>{item.text}</p>
                    <p style={subText}>📅 {item.duration}</p>
                    <p style={subText}>🎯 {item.score}</p>

                    <div style={{ marginTop: "5px" }}>
                      {item.highlights.map((h, idx) => (
                        <span key={idx} style={tagStyle}>{h}</span>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div style={progressContainer}>
                      <motion.div
                        style={progressBar}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percent}%` }}
                        transition={{ duration: 1.5 }}
                      />
                    </div>
                    <span style={progressText}>{item.percent}% Completed</span>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: -100%; }
          100% { top: 100%; }
        }
        @keyframes shineMove {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </motion.section>
  );
}

/* 🔥 STYLES */
const cardStyle = {
  background: "#0a0a0a",
  border: "1px solid #00ffff",
  boxShadow: "0 0 15px #00f4f4",
  transition: "0.2s",
  position: "relative",
  overflow: "hidden",
  transformStyle: "preserve-3d",
};

const titleStyle = {
  color: "#00ffff",
  textShadow: "0 0 10px #00ffff",
  fontWeight: "bold",
  marginTop: "10px",
};

const subText = {
  fontSize: "13px",
  color: "#00ffff",
  textShadow: "0 0 5px #00ffff",
  margin: "2px 0",
};

const tagStyle = {
  display: "inline-block",
  padding: "3px 8px",
  margin: "3px",
  fontSize: "10px",
  border: "1px solid #00ffff",
  borderRadius: "10px",
  color: "#00ffff",
  boxShadow: "0 0 5px #00ffff55",
};

const progressContainer = {
  width: "100%",
  height: "8px",
  background: "#111",
  borderRadius: "10px",
  marginTop: "10px",
};

const progressBar = {
  height: "100%",
  background: "linear-gradient(90deg, #00ffff, #00ffcc)",
  boxShadow: "0 0 10px #00ffff",
};

const progressText = {
  fontSize: "12px",
  color: "#00ffff",
};

const circleText = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "#00ffff",
  fontWeight: "bold",
};

const scanLine = {
  position: "absolute",
  width: "100%",
  height: "2px",
  background: "rgba(0,255,255,0.5)",
  animation: "scan 3s linear infinite",
};

const shine = {
  position: "absolute",
  top: 0,
  left: "-100%",
  width: "50%",
  height: "100%",
  background: "linear-gradient(120deg, transparent, rgba(0,255,255,0.3), transparent)",
  animation: "shineMove 3s infinite",
};