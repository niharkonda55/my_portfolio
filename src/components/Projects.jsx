import React from "react";

const projects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio built with React and Framer Motion.",
        link: "#"
    },
    {
        title: "Cybersecurity Blog",
        description: "A blog sharing tips and tutorials on cybersecurity.",
        link: "#"
    }
];

const Projects = () => (
    <section id="projects" className="flex flex-col items-center">
        <h2 className="text-green-400 text-3xl font-bold mb-8">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
            {projects.map((proj, idx) => (
                <div key={idx} className="bg-[#181818] p-6 rounded-lg shadow-lg max-w-xs">
                    <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                    <p className="mb-4">{proj.description}</p>
                    <a href={proj.link} className="btn">View</a>
                </div>
            ))}
        </div>
    </section>
);

export default Projects;