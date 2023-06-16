import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="sm:w-48 w-full">
      <motion.div
        variants={fadeIn("left", "spring", 0.8 * index, 0.7)}
        className="w-full green-pink-gradient p-0.5 rounded-md shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-md py-5 px-12 min-h-[15rem] flex flex-col justify-around items-center"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-lg font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-200 max-w-3xl leading-[1.7rem]"
      >
        I'm a software developer based in The Netherlands. My passion is for
        making good looking dynamic user interfaces and well-structured systems.
        I consider myself a full-stack developer so I focus on learning both
        front and back-end skills.
        <br />
        <br />I already completed a developing degree and have enlisted myself
        for a part-time bachelor's education at Hogeschool Rotterdam. Of course,
        I also improve my skills at home on a daily basis. I'm interested in
        anything code related and working on meaningful projects with passionate
        teams.
      </motion.p>
      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, i) => (
          <ServiceCard
            key={service.title}
            index={i}
            icon={service.icon}
            title={service.title}
          ></ServiceCard>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
