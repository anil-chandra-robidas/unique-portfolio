import React, { useState } from "react";
import SkillsData from "./SkillsData";

const Skills = () => {
  const [skill, setSkill] = useState(SkillsData);

  return (
    <div className="user-skills" id="skill">
      <div className="user-skill">
        <h2 className="section-title" data-aos="fade-right">
          Professional Skills
        </h2>
        <div className="skill-progressbar">
          {skill.map((value, index) => {
            return (
              <div className="bar" key={index}>
                <span className="bar-text">{value.language}: </span>
                <span className="bar-fill" style={{ width: (value.percent - 10) + "%"}}></span>
                <span className="bar-number" style={{ left: (value.percent - 10 ) + "%" }}>
                  {value.percent}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
