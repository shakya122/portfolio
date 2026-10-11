import freshmart from "@/assets/project-1.png";
import voice from "@/assets/project-2.png";
import students from "@/assets/project-4.png";
import health from "@/assets/project-5.png";
import ares from "@/assets/project-6.png";
import tech from "@/assets/project-7.png";

export const projects = [
  { id: "01", title: "FreshMart", category: "FULL STACK · E-COMMERCE", image: freshmart, description: "A connected supermarket experience. Fresh groceries, live inventory, and powerful store management.", tags: ["React", "Spring Boot", "MySQL"] },
  { id: "02", title: "VoiceNotes", category: "WEB APP · ACCESSIBILITY", image: voice, description: "Speak your thoughts. Search your ideas. An accessible, voice-first notes experience with AI-powered answers.", tags: ["Next.js", "PostgreSQL", "Gemini AI"] },
  { id: "03", title: "AresAML", category: "SOFTWARE · DATA ANALYSIS", image: ares, description: "Making hidden patterns visible. Graph-based transaction analysis that detects cycles and suspicious transfers.", tags: ["Java", "Graph algorithms", "Swing"] },
  { id: "04", title: "TechFix", category: "MOBILE APP · SERVICES", image: tech, description: "From booking to repair. A mobile-first service experience with live tracking and branch routing.", tags: ["Java", "Android", "Firebase"] },
  { id: "05", title: "Smart Health Monitor", category: "IOT · REAL-TIME DATA", image: health, description: "From a breadboard to the browser. Connected sensors and a real-time health monitoring interface.", tags: ["ESP8266", "Arduino", "Firebase"] },
  { id: "06", title: "Student Management", category: "DESKTOP APP · EDUCATION", image: students, description: "Student records, courses, marks, and printable reports in one organized desktop experience.", tags: ["Java", "MySQL", "JasperReports"] },
];