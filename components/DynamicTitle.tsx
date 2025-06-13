"use client";
import { useState, useEffect } from "react";

const roles = [
  "Full-Stack Web Developer",
  "Next.js & React.js Specialist",
  "Mobile Developer with React Native",
  "Expo Expert for Cross-Platform Apps",
  "Tailwind CSS & UI Design Enthusiast",
  "Postgres & API Integration Specialist",
  "Performance Optimization Engineer",
  "Freelance Developer Available 🚀",
];

export default function DynamicTitle() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.title = `Ibrahim Yebdri - ${roles[roleIndex]}`;
  }, [roleIndex]);

  return null;
}
