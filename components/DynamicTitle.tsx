"use client";

import { useEffect, useState } from "react";

const roles = [
  "Informatique, logiciel & systèmes",
  "Développement web et mobile",
  "Bases de données, Cloud & data",
  "Étudiant en systèmes d’information",
];

export default function DynamicTitle() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => setRoleIndex((index) => (index + 1) % roles.length), 3500);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    document.title = `Ibrahim Yebdri | ${roles[roleIndex]}`;
  }, [roleIndex]);

  return null;
}
