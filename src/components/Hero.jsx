import React from "react";
import { styles } from "../styles";
import { StormtrooperHelmetCanvas } from "./canvas";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[7rem] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-purple-600" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className="text-4xl font-black">
            Hi, I'm<span className="text-purple-600"> Jalen</span>
          </h1>
          <p className="sm:w-4/5 text-2xl mt-4 leading-9 text-white-100">
            I develop JS websites. User Interfaces and web applications.
          </p>
        </div>
      </div>
      <StormtrooperHelmetCanvas />
      <div className="absolute bottom-10 md:bottom-16 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-100 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-gray-100 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
