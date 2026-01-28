"use client";

import { useState } from "react";
import SectionHeader from "../../ui/section-header/SectionHeader";
import styles from "./ProjectShowcase.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "AC Milan App",
    description:
      "An official mobile experience crafted to bring fans closer to the club through performance-driven design and intuitive interaction.",
    label: "Official App Milan",
    image: "/projects/project1.png",
  },
  {
    title: "FinanceFlow Dashboard",
    description:
      "A comprehensive financial management platform that simplifies budgeting, expense tracking, and investment monitoring for modern businesses.",
    label: "Financial Platform",
    image: "/projects/project2.png",
  },
];

export default function ProjectShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className={styles.showcase}>
      <div className="container">
        <SectionHeader
          title="Progetti digitali di cui siamo orgogliosi"
          description="Piattaforma e-commerce scalabile, progettata per offrire un'esperienza utente fluida e pagamenti sicuri."
        />
        <div className={styles.showcaseFlex}>
          <div className={styles.leftContent}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className={styles.projectContent}
              >
                <h3 className={styles.projectTitle}>{currentProject.title}</h3>

                <p className={styles.projectDescription}>
                  {currentProject.description}
                </p>

                <div className={styles.projectFooter}>
                  <span className={styles.projectLabel}>
                    {currentProject.label}
                  </span>
                  <div className={styles.navButtons}>
                    <button
                      className={styles.navButton}
                      onClick={goToPrevious}
                      aria-label="Previous project"
                    >
                      <ChevronLeft />
                    </button>
                    <button
                      className={styles.navButton + " " + styles.navButtonBlue}
                      onClick={goToNext}
                      aria-label="Next project"
                    >
                      <ChevronRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={styles.rightImage}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                src={currentProject.image}
                alt={currentProject.title}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
