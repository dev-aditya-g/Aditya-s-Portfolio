import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
         className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          <p>
            I’m a Computer Science & Engineering undergraduate at NIT Durgapur with hands-on experience in building scalable, full-stack applications. I’ve worked as a Software Engineer Intern at Whisperwave, where I contributed to real-time, low-latency communication systems and backend services focused on performance, security, and reliability.
            I have a strong problem-solving background, having solved 500+ Data Structures and Algorithms problems across major platforms, along with a solid understanding of core computer science fundamentals including OOP, DBMS, Operating Systems and Computer Networks. I have participated in 10+ national-level hackathons , including being a Quarter-Finalist at HP PowerLab (Top 180 teams out of 1.3 lakh registrations). I enjoy applying my technical skills to build impactful, real-world solutions.
          </p>


      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
