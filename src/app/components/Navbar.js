"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar({ onHomeClick }) {
  const sections = ["home", "about", "skills", "projects", "education", "contact"];
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredSection, setHoveredSection] = useState(null);

  // Update activeSection based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offsets = sections.map((sec) => {
        const el = document.getElementById(sec);
        return el ? el.offsetTop : 0;
      });

      for (let i = offsets.length - 1; i >= 0; i--) {
        if (scrollY + 100 >= offsets[i]) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click
  const handleClick = (sec) => {
    if (sec === "home" && onHomeClick) {
      onHomeClick(); // trigger Hero animation
    }
    // Smooth scroll
    const el = document.getElementById(sec);
    if (el) {
      window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed-top"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "12px 30px",
        background: "rgba(30, 30, 30, 0.85)",
        borderRadius: "25px",
        boxShadow:
          "0 8px 15px rgba(255, 245, 245, 0.44), inset 0 -2px 6px rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
        width: "800px",
        margin: "10px auto",
        border: "1px solid #12d2d29c",
      }}
    >
      <div className="d-flex gap-4 justify-content-center w-100 position-relative">
        {sections.map((sec) => {
          const isActive = sec === activeSection;

          return (
            <div
              key={sec}
              style={{ position: "relative", cursor: "pointer" }}
              onMouseEnter={() => setHoveredSection(sec)}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => handleClick(sec)}
            >
              {/* Link Text */}
              <motion.a
                className="text-white text-decoration-none fw-bold"
                style={{
                  padding: "8px 15px",
                  borderRadius: "15px",
                  position: "relative",
                  zIndex: 1,
                  transition: "all 0.3s ease",
                  color: isActive ? "#00ffff" : "white",
                  textShadow: isActive
                    ? "0 0 5px #00ffff, 0 0 10px #00cfff, 0 0 20px #00ffff88"
                    : "none",
                }}
                animate={
                  isActive
                    ? {
                        textShadow: [
                          "0 0 5px #00ffff, 0 0 10px #00cfff, 0 0 20px #00ffff88",
                          "0 0 10px #00ffff, 0 0 20px #00cfff, 0 0 30px #00ffffaa",
                          "0 0 5px #00ffff, 0 0 10px #00cfff, 0 0 20px #00ffff88",
                        ],
                      }
                    : {}
                }
                transition={{ repeat: isActive ? Infinity : 0, duration: 1.2, ease: "easeInOut" }}
              >
                {sec.toUpperCase()}
              </motion.a>

              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layout
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  style={{
                    position: "absolute",
                    bottom: "-5px",
                    left: "0",
                    width: "100%",
                    height: "3px",
                    borderRadius: "2px",
                    background: "linear-gradient(90deg, #00ffff, #00cfff)",
                    boxShadow: "0 0 8px #00ffff, 0 0 15px #00cfff",
                  }}
                />
              )}

              {/* Hover sliding underline */}
              {hoveredSection === sec && !isActive && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    bottom: "-5px",
                    left: "0",
                    width: "100%",
                    height: "3px",
                    borderRadius: "2px",
                    background: "linear-gradient(90deg, #dc9bd9, #ec4646)",
                    boxShadow: "0 0 6px #ff00ff, 0 0 12px #ff69b4",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}