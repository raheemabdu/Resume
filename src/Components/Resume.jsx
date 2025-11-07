// src/Components/Resume.jsx
import React, { useRef } from "react";
import html2pdf from "html2pdf.js";

const Resume = () => {
  const resumeRef = useRef();

  const handleDownload = async () => {
    const element = resumeRef.current;
    if (!element) return;

    // ✅ Wait for fonts to load completely before capturing
    await document.fonts.ready;

    const opt = {
      margin: 0,
      filename: "abdul-Resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        letterRendering: true, // ✅ Important: fix for missing text
        ignoreElements: (el) => {
          const style = window.getComputedStyle(el);
          return (
            style.color.includes("oklch") ||
            style.backgroundColor.includes("oklch")
          );
        },
      },
      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait",
        textRenderingMode: "geometricPrecision", // ✅ better font rendering
      },
    };

    try {
      html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("❌ PDF generation failed:", error);
      alert("PDF download error, please check console");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 font-[Poppins]">
      {/* 🔹 Download Button */}
      <button
        onClick={handleDownload}
        className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition"
      >
        Download Resume
      </button>

      {/* 🔹 Resume Content */}
      <div
        ref={resumeRef}
        className="mt-8 bg-white shadow-2xl rounded-xl w-full max-w-3xl p-10"
      >
        <h1 className="text-3xl font-bold text-center mb-2">abdul raheem</h1>
        <h2 className="text-center text-gray-600 mb-6">Software Engineer</h2>

        <section className="mb-5">
          <h3
            className="text-lg mb-2"
            style={{ fontWeight: "600", color: "#1d4ed8" }}
          >
            Profile
          </h3>
          <p>
            Passionate and detail-oriented Frontend Developer focused on
            building responsive, clean, and visually appealing web experiences.
          </p>
        </section>

        <section className="mb-6">
          <h3
            className="text-lg mb-2"
            style={{ fontWeight: "600", color: "#1d4ed8" }}
          >
            Education
          </h3>
          <p className="font-medium">
            BS in Computer Science – University of Karachi
          </p>
          <p className="text-sm text-gray-600">Expected Graduation: 2026</p>
        </section>

        <section className="mb-6">
          <h3
            className="text-lg mb-2"
            style={{ fontWeight: "600", color: "#1d4ed8" }}
          >
            Projects
          </h3>
          <ul className="list-disc list-inside">
            <li>
              <strong>Resume Builder App:</strong> Built using React + Tailwind,
              allows users to create and download PDF resumes dynamically.
            </li>
            <li>
              <strong>Portfolio Website:</strong> Designed a personal portfolio
              with smooth animations and responsive layout.
            </li>
          </ul>
        </section>

        <section className="mb-5">
          <h3
            className="text-lg mb-2"
            style={{ fontWeight: "600", color: "#1d4ed8" }}
          >
            Skills
          </h3>
          <ul className="list-disc list-inside">
            <li>React + Vite</li>
            <li>Tailwind CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>UI/UX Design</li>
          </ul>
        </section>

        <section>
          <h3
            className="text-lg mb-2"
            style={{ fontWeight: "600", color: "#1d4ed8" }}
          >
            Contact
          </h3>
          <p>Email: abdul@example.com</p>
          <p>Phone: +92-300-0000000</p>
        </section>
      </div>
    </div>
  );
};

export default Resume;