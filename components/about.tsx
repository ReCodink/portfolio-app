"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am Student of{" "}
        <span className="font-medium"> Informatics Engineering</span>, with strong passion for backend programming. My academic journey has equipped me with fundamental in software development and problem-solving skills.{" "}
        <span className="font-medium">I am particulary interested in designing, developing and maintaining server-side applications, and ensuring they are robust, scalable, and efficient</span>.{" "}
        <span className="italic">During my studies,</span>  I have gained hands-on experience with worked on projects that involve database management, API development, and server management, which have helped me understand the intricacies of backend system, especially Scope on ExpressJS. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Node.js, Express.js, MySQL, PostgreSQL, Restful API,  
        </span>
        . I am also familiar with Sequelize as Object Relational Model. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">intership</span> as a backend
        developer.
      </p>
    </motion.section>
  );
}
