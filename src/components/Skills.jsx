import React from "react";

const skills = [
    "JavaScript", "React", "Node.js", "Python", "Cybersecurity", "Linux"
];

const Skills = () => (
    <section id="skills" className="flex flex-col items-center">
        <h2 className="text-green-400 text-3xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, idx) => (
                <span key={idx} className="bg-[#222] text-white px-4 py-2 rounded-full border border-green-400">{skill}</span>
            ))}
        </div>
    </section>
);

export default Skills;