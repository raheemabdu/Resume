// src/Components/Resume.jsx
import React, { useRef } from "react";
import html2pdf from "html2pdf.js";

const Resume = () => {
  const resumeRef = useRef();

  const handleDownload = () => {
    const element = resumeRef.current;
    if (!element) return;

    const opt = {
      margin: 0,
      filename: "Abdul-Raheem-Resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        ignoreElements: (el) => {
          const style = window.getComputedStyle(el);
          return style.color.includes("oklch") || style.backgroundColor.includes("oklch");
        },
      },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
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
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Abdul Raheem Sheikh
        </h1>
        <h2 className="text-center text-gray-600 mb-6">
          Frontend Developer | React + Tailwind Specialist
        </h2>

        {/* Profile Section */}
        <section className="mb-6">
          <h3 className="font-semibold text-lg mb-2 text-blue-700">Profile</h3>
          <p className="text-gray-700 leading-relaxed">
            Passionate and self-motivated Frontend Developer with hands-on
            experience in building responsive, user-friendly web applications
            using React, Vite, and Tailwind CSS. Skilled in turning Figma
            designs into pixel-perfect interfaces with clean, optimized code.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-6">
          <h3 className="font-semibold text-lg mb-2 text-blue-700">Experience</h3>
          <div className="mb-3">
            <h4 className="font-semibold text-gray-800">
              Frontend Developer – Freelance
            </h4>
            <p className="text-sm text-gray-600 mb-1">2023 – Present</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Developed modern UI components using React and Tailwind CSS.</li>
              <li>Converted Figma designs into working responsive pages.</li>
              <li>Integrated APIs and handled dynamic data rendering.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800">Intern – Web Developer</h4>
            <p className="text-sm text-gray-600 mb-1">2022 – 2023</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Collaborated on frontend layout for small-scale projects.</li>
              <li>Improved page load speed and code readability.</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-6">
          <h3 className="font-semibold text-lg mb-2 text-blue-700">Education</h3>
          <p className="text-gray-800 font-medium">
            BS in Computer Science – University of Karachi
          </p>
          <p className="text-gray-600 text-sm">Expected Graduation: 2026</p>
        </section>

        {/* Projects Section */}
        <section className="mb-6">
          <h3 className="font-semibold text-lg mb-2 text-blue-700">Projects</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Resume Builder App:</strong> Built using React + Tailwind, allows users to create and download PDF resumes dynamically.
            </li>
            <li>
              <strong>Portfolio Website:</strong> Designed a personal portfolio with smooth animations and responsive layout.
            </li>
          </ul>
        </section>

        {/* Skills Section */}
        <section className="mb-6">
          <h3 className="font-semibold text-lg mb-2 text-blue-700">Skills</h3>
          <ul className="list-disc list-inside text-gray-700 grid grid-cols-2 gap-x-6">
            <li>React + Vite</li>
            <li>Tailwind CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>Figma to React</li>
            <li>HTML5 / CSS3</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section>
          <h3 className="font-semibold text-lg mb-2 text-blue-700">Contact</h3>
          <p>Email: abdulraheemsheikh@example.com</p>
          <p>Phone: +92-301-1234567</p>
          <p>LinkedIn: linkedin.com/in/abdulraheem</p>
          <p>GitHub: github.com/abdulraheem-dev</p>
        </section>
      </div>
    </div>
  );
};

export default Resume;