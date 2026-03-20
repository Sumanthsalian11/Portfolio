"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const canvasRef = useRef(null);

  const handleMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 12;
    const rotateY = (x - rect.width / 2) / 12;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const resetTilt = (card) => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Create stars
    const stars = Array.from({ length: 250 }).map(() => ({
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

  const projects = [
    {
      title: "Plant Disease Detection",
      img: "/plant.jpeg",
      text: "AI-Based Plant Disease Detection System using image processing and AI. I designed and implemented a machine learning system to detect plant diseases from leaf images using deep learning techniques, specifically Convolutional Neural Networks (CNNs). I developed and compared architectures such as MobileNet and EfficientNet, leveraging the PlantVillage dataset from Kaggle for training and validation. The workflow included comprehensive image preprocessing—resizing, normalization, data augmentation, and noise removal—along with transfer learning and fine-tuning to enhance model accuracy and reduce overfitting. I optimized performance by tuning hyperparameters like learning rate, batch size, and epochs, and evaluated models across training, validation, and testing datasets. Additionally, I addressed real-world challenges such as lighting variations and background noise, demonstrating how automated disease detection can enable early diagnosis and improve crop productivity.",
      github: "https://github.com/Sumanthsalian11/Plant-disease-detection",
      tech: ["Python", "TensorFlow", "Flask"],
    },
    {
      title: "College-Portal",
      img: "/college.jpeg",
      text: "MERN Stack system with admin login for managing faculty and departments.I designed and developed a responsive college website using React.js for the frontend and Node.js for the backend, implementing a component-based UI architecture to enhance reusability and maintainability. I built backend services in Node.js to manage server-side logic and data requests, integrating the frontend and backend through RESTful APIs. Key features included college information pages, department details, notices, and contact forms, with React hooks and state management used to handle dynamic content and user interactions. The website was fully responsive for both desktop and mobile devices, following best practices for routing, error handling, and code structure, while delivering a clean UI and smooth navigation to enhance the overall user experience.",
      github: "https://github.com/Sumanthsalian11/College-website",
      tech: ["React", "Node.js", "MongoDB","CSS","Tailwind"],
    },
    {
      title: "Work-Order Management System",
      img: "/production.jpeg",
      text: "Dashboard for tracking production, dispatch, and analytics in real-time. I designed and developed a Work Order Management System to streamline operations across planning, production, dispatch, and reporting. The system automates previously manual processes, allowing work orders to be efficiently tracked from creation to completion. It features modules for production planning, dispatch scheduling, and generating various reports via an interactive dashboard, providing managers with real-time insights. The system also includes functionality to export reports in PDF and Excel formats, enabling easy sharing and record-keeping. By automating workflows, reducing manual errors, and centralizing data, the system significantly improves operational efficiency and decision-making.",
      github: "https://github.com/Sumanthsalian11/Production-System",
      tech: ["React", "Express", "MongoDB","CSS","Bootstrap","Node"],
    },
  ];

  return (
    <motion.section
      id="projects"
      className="position-relative py-5"
      style={{ color: "white", overflow: "hidden", background: "#000" }}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Star Background */}
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

      <div className="container position-relative" style={{ zIndex: 1, background: "transparent" }}>
        {/* ✨ Animated Heading */}
        <motion.h2
          className="mb-5 text-center"
          style={{
            color: "#f9a8d4",
            fontSize: "3rem", // smaller than Skills
            fontWeight: "bold",
            textShadow: "0 0 10px #f9a8d4, 0 0 20px #ec92c0",
          }}
          initial={{ opacity: 0, x: 150 }} // slide from right
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>

        <div className="row">
          {projects.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className="col-12 mb-4">
                <div
                  style={cardStyle}
                  onMouseMove={(e) => handleMove(e, e.currentTarget)}
                  onMouseLeave={(e) => resetTilt(e.currentTarget)}
                >
                  {/* Scan line */}
                  <div style={scanLine}></div>
                  {/* Shine effect */}
                  <div style={shine}></div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: isEven ? "row" : "row-reverse",
                      alignItems: "center",
                      gap: "25px",
                      padding: "25px",
                    }}
                  >
                    {/* IMAGE */}
                    <div style={{ position: "relative" }}>
                      <img src={item.img} style={imageStyle} />
                      <div className="overlay">
                        <a href={item.github} target="_blank" style={buttonStyle}>
                          View Code
                        </a>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7 }}
                      style={{ flex: 1, textAlign: "left" }}
                    >
                      <h4 style={titleStyle}>{item.title}</h4>
                      <p style={{ color: "#fbcfe8" }}>{item.text}</p>
                      <div className="d-flex flex-wrap gap-2 mt-3">
                        {item.tech.map((tech, index) => (
                          <motion.span
                            key={index}
                            whileHover={{
                              scale: 1.2,
                              backgroundColor: "#f9a8d4",
                              color: "#000",
                            }}
                            style={badgeStyle}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: 0.3s ease;
          border-radius: 12px;
        }

        div:hover > .overlay {
          opacity: 1;
        }

        @keyframes scan {
          0% { top: -100%; }
          100% { top: 100%; }
        }

        @keyframes shineMove {
          0% { left: -100%; }
          100% { left: 100%; }
        }
          /* MOBILE RESPONSIVE ONLY */
@media (max-width: 768px) {
  h2 {
    font-size: 2.2rem !important; /* smaller heading */
  }

  div[style*="flex-direction: row"], div[style*="flex-direction: row-reverse"] {
    flex-direction: column !important; /* stack cards on mobile */
    gap: 15px !important;
  }

  img {
    width: 100% !important;
    height: auto !important; /* responsive images */
  }

  div[style*="padding: 25px"] {
    padding: 15px !important; /* reduce padding on small screens */
  }
}
      `}</style>
    </motion.section>
  );
}

/* 🔥 STYLES */
const cardStyle = {
  background: "#0a0a0a",
  border: "1px solid #fff",
  boxShadow: "0 0 20px #ec92c0",
  borderRadius: "15px",
  transition: "0.2s",
  position: "relative",
  overflow: "hidden",
  transformStyle: "preserve-3d",
  maxWidth: "1050px",
  margin: "0 auto",
};

const imageStyle = {
  width: "280px",
  height: "190px",
  objectFit: "cover",
  borderRadius: "12px",
  border: "2px solid #f9a8d4",
  boxShadow: "0 0 15px #dc97badd",
};

const titleStyle = {
  color: "#f9a8d4",
  textShadow: "0 0 10px #e9bcd3",
  fontWeight: "bold",
};

const badgeStyle = {
  padding: "6px 14px",
  fontSize: "12px",
  borderRadius: "20px",
  background: "#020617",
  color: "#f9a8d4",
  border: "1px solid #f9a8d4",
};

const buttonStyle = {
  padding: "10px 22px",
  background: "#f9a8d4",
  color: "#000",
  borderRadius: "20px",
  textDecoration: "none",
  fontWeight: "bold",
  boxShadow: "0 0 10px #cfa4bacd",
};

const scanLine = {
  position: "absolute",
  width: "100%",
  height: "2px",
  background: "rgba(249,168,212,0.5)",
  animation: "scan 3s linear infinite",
};

const shine = {
  position: "absolute",
  top: 0,
  left: "-100%",
  width: "50%",
  height: "100%",
  background:
    "linear-gradient(120deg, transparent, rgba(249,168,212,0.3), transparent)",
  animation: "shineMove 3s infinite",
};