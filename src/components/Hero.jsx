import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import bitmoji from "../assets/bitmoji.png";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      {/* Text Section */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-start gap-10 z-10`}
      >
        <div className='flex flex-col justify-start items-start'>
          {/* Heading */}
          <h1 className='text-[38px] md:text-[46px] lg:text-[48px] font-black text-white leading-tight'>
            Hi, I'm{" "}
            <span className='text-[#915EFF]'>
              <TypeAnimation
                sequence={[
                  "Aditya Gupta",
                  2000,
                  "a Full Stack Developer",
                  2000,
                  "a Hackathon Enthusiast",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </span>
          </h1>

          {/* Paragraph */}
          <p className='text-[20px] md:text-[24px] text-white-100 mt-4 mb-14'>
            I build modern web apps, love data structures,<br />
            and enjoy solving real-world problems with code.
          </p>
        </div>
      </div>

      {/* Bitmoji with float + scale + spin-on-hover */}
      <div className='absolute right-10 top-[150px] hidden md:block z-20'>
        <motion.img
          src={bitmoji}
          alt='Aditya Bitmoji'
          className='w-[260px] h-[260px] object-contain cursor-pointer'
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.05, 1],
          }}
          whileHover={{ rotate: 360 }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
        />
      </div>

      {/* Background 3D Canvas */}
      <ComputersCanvas />

      {/* Scroll Indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
