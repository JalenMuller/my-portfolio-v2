import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EnvelopeAtFill, Linkedin, Github } from "react-bootstrap-icons";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [load, setLoad] = useState(false);
  const handleChange = (e) => {};
  const handleSubmit = (e) => {};

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0, 1, 0.1)}
        className="flex-[0.75] bg-tertiary p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>My Info.</h3>
        <div className="flex flex-col gap-6 mt-10">
          <div className="flex items-center text-2xl gap-4 hover:text-purple-500 transition ease-in">
            <EnvelopeAtFill className="text-4xl" />
            <a href="mailto:jalen@jalenmuller.com">jalen@jalenmuller.com</a>
          </div>
          <div className="flex items-center text-2xl gap-4 hover:text-purple-500 transition ease-in">
            <Linkedin className="text-4xl" />
            <a
              href="https://www.linkedin.com/in/jalen-muller-374578277"
              target="_blank"
            >
              Jalen Muller
            </a>
          </div>
          <div className="flex items-center text-2xl gap-4 hover:text-purple-500 transition ease-in">
            <Github className="text-4xl" />
            <a href="https://github.com/jalenmuller" target="_blank">
              Jalen Muller
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
