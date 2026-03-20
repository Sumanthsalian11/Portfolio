"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [hovered, setHovered] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", remarks: "" });
  const [submitted, setSubmitted] = useState(false);

  // New state for "Share Your Opinion" small form
  const [opinionData, setOpinionData] = useState({ name: "", email: "", remarks: "" });
  const [opinionSubmitted, setOpinionSubmitted] = useState(false);

  const canvasRef = useRef(null);

  const socialLinks = [
    {
      name: "Facebook",
      icon: "/facebook.png",
      link: "https://www.facebook.com/sumanth.salian.1232",
      profilePic: "/facebook_profile.jpeg",
    },
    {
      name: "Instagram",
      icon: "/instagram.png",
      link: "https://www.instagram.com/sumxnth_salian",
      profilePic: "/instagram_profile.jpeg",
    },
    {
      name: "WhatsApp",
      icon: "/whatsapp.png",
      link: "https://wa.me/919380437570",
      profilePic: "/whatsapp_profile.jpeg",
    },
  ];

  // ⭐ Star background effect
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
      color: Math.random() > 0.5 ? "#FFD700" : "#FFFFFF",
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
        ctx.fillStyle = `rgba(${parseInt(star.color.slice(1, 3),16)},${parseInt(star.color.slice(3,5),16)},${parseInt(star.color.slice(5,7),16)},${star.opacity})`;
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

  // Original contact form handlers (if you plan to use it separately)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.remarks,
    };

    emailjs
      .send("service_hrpluvh", "template_em7dqhj", templateParams, "IhNzmuJddVPQFZCKU")
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", remarks: "" });
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch(() => {
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  // Small "Share Your Opinion" form handlers
  const handleOpinionChange = (e) => {
    setOpinionData({ ...opinionData, [e.target.name]: e.target.value });
  };

  const handleOpinionSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: opinionData.name,
      from_email: opinionData.email,
      message: opinionData.remarks,
    };

  emailjs
  .send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
    templateParams,
    process.env.NEXT_PUBLIC_EMAILJS_KEY
  )
      .then(() => {
        setOpinionSubmitted(true);
        setOpinionData({ name: "", email: "", remarks: "" });
        setTimeout(() => setOpinionSubmitted(false), 3000);
      })
      .catch(() => {
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <motion.section
      id="contact"
      className="py-5 text-center position-relative"
      style={{ color: "white", overflow: "hidden", minHeight: "90vh", background: "#000" }}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Original Contact Heading */}
        <motion.h2
          className="mb-4"
          style={{
            color: "#dbc653",
            fontSize: "3rem",
            fontWeight: "bold",
            textShadow: "0 0 10px #FFD700, 0 0 20px #FFC700",
          }}
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>
<p
  style={{
    fontSize: "1.2rem",
    marginBottom: "30px",
    textShadow: "0 0 5px #ffdb0c, 0 0 15px #FFC70055",
  }}
>
  Email:{" "}
  <a
    href="mailto:Sumanthsalian11@gmail.com"
    style={{
      WebkitTextStroke: "1px #FFC70055",
      color: "#ffd900",
      textDecoration: "none",
      transition: "0.3s",
    }}
  >
    Sumanthsalian11@gmail.com
  </a>
</p>

<p
  style={{
    fontSize: "1.2rem",
    marginBottom: "30px",
    textShadow: "0 0 5px #ffdb0c, 0 0 15px #FFC70055",
  }}
>
  Location:{" "}
  <span
    style={{
      WebkitTextStroke: "1px #FFC70055",
      color: "#ffd900",
      transition: "0.3s",
    }}
  >
    Karnataka, India📍
  </span>
</p>

        {/* Social Links */}
        <div className="d-flex justify-content-center gap-5 mt-3 position-relative mb-5">
          {socialLinks.map((item, index) => (
            <div
              key={index}
              className="position-relative text-center"
              style={{ cursor: "pointer", transition: "0.3s" }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => window.open(item.link, "_blank")}
            >
              <motion.img
                src={item.icon}
                alt={item.name}
                style={{ width: "50px", height: "50px", borderRadius: "12px", boxShadow: "0 0 8px #FFD70033" }}
                whileHover={{ scale: 1.3, boxShadow: "0 0 20px #f3cf00, 0 0 40px #FFC70077" }}
              />
              {hovered === index && (
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: -40, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  style={{
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
                    boxShadow: "0 0 15px #ffd901b4",
                  }}
                >
                  <img
                    src={item.profilePic}
                    alt={`${item.name} profile`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* 🌟 Small Form: Share Your Opinion */}
        <motion.div
          className="mt-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            style={{ color: "#00ffff", textShadow: "0 0 10px #00ffff, 0 0 20px #00cfff", marginBottom: "20px" }}
          >
            Share Your Opinion
          </motion.h3>

          <motion.form
            onSubmit={handleOpinionSubmit}
            className="d-flex flex-column align-items-center gap-3"
            style={{
              maxWidth: "400px",
              margin: "0 auto",
              padding: "20px",
              borderRadius: "15px",
              background: "#111",
              boxShadow: "0 0 15px #00ffff55, 0 0 30px #00cfff33",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={opinionData.name}
              onChange={handleOpinionChange}
              required
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={opinionData.email}
              onChange={handleOpinionChange}
              required
              style={inputStyle}
            />
            <textarea
              name="remarks"
              placeholder="Remarks"
              value={opinionData.remarks}
              onChange={handleOpinionChange}
              required
              rows={3}
              style={{ ...inputStyle, resize: "none" }}
            />
            <motion.button
              type="submit"
              style={buttonStyle}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00ffffaa" }}
            >
              Submit
            </motion.button>

            {opinionSubmitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ color: "#00ffff", marginTop: "10px", fontWeight: "bold" }}
              >
                Thank you! Your opinion has been submitted.
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
}

/* 🔥 STYLES */
const inputStyle = {
  width: "100%",
  padding: "10px 15px",
  borderRadius: "10px",
  border: "1px solid #ffc700",
  background: "#111",
  color: "white",
  boxShadow: "0 0 10px #FFD70033",
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
  transition: "0.3s",
};