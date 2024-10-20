import CustomProyect from "./CustomProject";
import logoFALP from "../assets/logo_falp.svg";
import logoGravity from "../assets/logo_gravity.svg";
import logoIPS from "../assets/logo_ips.webp";

const projects = [
    {
        title: "Diseño para GI basado en estándar FHIR para agendamiento de procedimientos post intervención quirúrgica",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation",
        image: logoFALP,
        repository: "https://github.com/SIMSADIs/GI-CORE-Falp",
    },
    {
        title: "Gravity Project - Por definir",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation",
        image: logoGravity,
        repository: "",
    },
    {
        title: "International Patient Summary (IPS) - Por definir",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation",
        image: logoIPS,
        repository: "",
    },
    ];


function projectsection() {
    return (
    <section id="proyectos">
        <h2 className="p-5 m-6 text-6xl text-center text-viking-700 ">Proyectos de SIMSADI</h2>
        <div className="grid grid-cols-1 md:grid-cols-3">
            {projects.map((project, index) => (
                <div key={index} className="flex justify-center">
                    <CustomProyect 
                        title={project.title} 
                        description={project.description} 
                        image={project.image} 
                        repository={project.repository} 
                    />
                </div>
            ))}
        </div>
    </section>
  );
}

export default projectsection;