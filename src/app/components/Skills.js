"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaBootstrap, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub 
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiNextdotjs, SiExpress, SiMysql, SiPostman } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MySql", icon: <SiMysql /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Github", icon: <FaGithub /> },
  ];

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const stars = Array.from({ length: 150 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5,
      opacity: Math.random(),
      delta: Math.random() * 0.02 + 0.01,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        star.opacity += star.delta;
        if (star.opacity > 1 || star.opacity < 0) star.delta *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
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

  return (
    <motion.section
      id="skills"
      className="d-flex flex-column flex-md-row align-items-center py-5 position-relative overflow-hidden"
      style={{
        background: "#000", // pure black
        color: "#fff",
        minHeight: "80vh",
      }}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Star Canvas */}
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

      {/* Left Side - Big Heading Centered */}
      <motion.div
        className="d-flex justify-content-center align-items-center"
        style={{
          flex: "1",
          fontSize: "8rem",
          fontWeight: "bold",
          color: "#34d399",
          textShadow: "0 0 20px #34d399, 0 0 50px #10b981",
          textAlign: "center",
          height: "100%",
          zIndex: 1,
        }}
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.div>

      {/* Right Side - Skill Cards */}
      <div
        className="d-flex flex-wrap justify-content-center gap-4 flex-1"
        style={{ paddingLeft: "2rem", zIndex: 1 }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.15,
              boxShadow: "0 0 15px #34d399, 0 0 40px #10b981",
              color: "#000",
              background: "#34d399",
            }}
            style={{
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
              background: "rgba(15,15,15,0.7)",
            }}
          >
            <span style={{ fontSize: "2rem" }}>{skill.icon}</span>
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}