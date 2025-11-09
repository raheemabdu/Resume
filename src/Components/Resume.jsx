// src/Resume.jsx
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Resume = () => {
  const resumeRef = useRef();

  const handleDownload = async () => {
    const el = resumeRef.current;

    // Fix oklch color bug
    el.querySelectorAll("*").forEach((node) => {
      const styles = window.getComputedStyle(node);
      let bg = styles.backgroundColor;
      let color = styles.color;

      if (bg.includes("oklch")) node.style.backgroundColor = "#ffffff";
      if (color.includes("oklch")) node.style.color = "#000000";
    });

    const canvas = await html2canvas(el, {
      scale: 2,
      backgroundColor: "#ffffff",
    });

    const img = canvas.toDataURL("image/jpeg", 1.0);
    const pdf = new jsPDF("p", "pt", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(img, "JPEG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Abdul_Reheem_Resume.pdf");
  };

  return (
    <div
      style={{
        background: "#e8eaed",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* ===== Resume Card ===== */}
      <div
        ref={resumeRef}
        style={{
          background: "#fff",
          width: "800px",
          margin: "0 auto",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          color: "#222",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 style={{ fontSize: "36px", marginBottom: "5px" }}>Abdul Reheem</h1>
          <p style={{ fontSize: "16px" }}>
            Web Developer | React.js | Tailwind CSS | Frontend Developer
          </p>
          <div style={{ fontSize: "14px", color: "#555", marginTop: "10px" }}>
            📞 +92 300 1234567 | 📧 abdulreheem@gmail.com | 🌐 linkedin.com/in/abdulreheem
          </div>
        </div>

        {/* Profile Summary */}
        <section style={{ marginBottom: "25px" }}>
          <h2
            style={{
              fontSize: "20px",
              borderBottom: "2px solid #000",
              paddingBottom: "5px",
              marginBottom: "10px",
            }}
          >
            Profile Summary
          </h2>
          <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
            Passionate and detail-oriented Frontend Developer with hands-on experience
            in building responsive web applications using React.js and Tailwind CSS.
            Strong understanding of modern JavaScript and UI design principles.
          </p>
        </section>

        {/* Skills */}
        <section style={{ marginBottom: "25px" }}>
          <h2
            style={{
              fontSize: "20px",
              borderBottom: "2px solid #000",
              paddingBottom: "5px",
              marginBottom: "10px",
            }}
          >
            Skills
          </h2>
          <ul style={{ columns: 2, listStyle: "square", paddingLeft: "20px" }}>
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
            <li>Git & GitHub</li>
            <li>Responsive Design</li>
            <li>API Integration</li>
            <li>UI/UX Basics</li>
          </ul>
        </section>

        {/* Education */}
        <section style={{ marginBottom: "25px" }}>
          <h2
            style={{
              fontSize: "20px",
              borderBottom: "2px solid #000",
              paddingBottom: "5px",
              marginBottom: "10px",
            }}
          >
            Education
          </h2>
          <p style={{ marginBottom: "5px" }}>
            <strong>Bachelor of Computer Science</strong>
          </p>
          <p style={{ color: "#555" }}>Virtual University of Pakistan (2022 - 2026)</p>
        </section>

        {/* Experience */}
        <section>
          <h2
            style={{
              fontSize: "20px",
              borderBottom: "2px solid #000",
              paddingBottom: "5px",
              marginBottom: "10px",
            }}
          >
            Experience
          </h2>
          <p>
            <strong>Frontend Developer Intern</strong> — Tech Solutions Pvt. Ltd.
          </p>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Developed responsive UI components in React.js.</li>
            <li>Worked with REST APIs and state management.</li>
            <li>Improved website load speed and accessibility.</li>
          </ul>
        </section>
      </div>

      {/* Simple Button (no CSS framework) */}
      <div style={{ textAlign: "center", marginTop: "25px" }}>
        <button
          onClick={handleDownload}
          style={{
            padding: "10px 20px",
            border: "1px solid black",
            background: "white",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Resume;