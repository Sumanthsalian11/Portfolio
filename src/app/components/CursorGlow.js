"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const move = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + "px";
        glowRef.current.style.top = e.clientY + "px";
      }
    };

    document.addEventListener("mousemove", move);

    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",
        width: "15px",            // smaller size
        height: "15px",           // smaller size
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,255,255,0.8), transparent)", // white glow
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        left: "50%",
        top: "50%",
        zIndex: 999,
      }}
    />
  );
}