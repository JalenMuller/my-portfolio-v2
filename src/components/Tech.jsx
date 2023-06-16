import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const icons = Object.values(technologies).map((technology) => technology.icon);

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <div className="w-full h-[75vh] mx-auto">
        <BallCanvas icons={icons} />
      </div>
    </div>
  );
};

export default Tech;
