import CustomProyect from "./CustomProject";
import logoFALP from "../assets/logo_falp.svg";
import logoGravity from "../assets/logo_gravity.svg";
import logoIPS from "../assets/logo_ips.webp";
import logoSnowStorm from "../assets/logo_snowstorm.svg";
import logoFR from "../assets/logo_FR.webp";

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
    {
        title: "Despliegue de Servidor Terminológico utilizando SnowStorm ",
        description: "Snowstorm es un servidor terminológico de código abierto creado por la IHTSDO para gestionar y consultar SNOMED CT. Ofrece una API RESTful para integrar datos terminológicos en aplicaciones de salud. El repositorio muestra cómo desplegarlo localmente, cargar terminologías locales e internacionales e integrarlo con Bahmni como front para demostrar sus usos.",
        image: logoSnowStorm,
        repository: "https://github.com/SIMSADIs/Terminology-Server-SnowStorm"
    },
    {
        title: "Diseño del Modelo y PoC para una Ficha Psico-Socio-Jurídica con Cuestionario FHIR",
        description: "Diseñar un modelo interoperable para una ficha con datos clínicos, sociales y jurídicos basado en el estándar HL7 FHIR, así como también su Prueba de Concepto, para mejorar el acceso a información relevante y facilitar la toma de decisiones para los profesionales del ámbito.",
        image: logoFR,
        repository: "https://github.com/SIMSADIs/FichaPSJ"
    }
    ];


export default function projectsection() {
    return (
    <section>
        <h2 className="lg:p-5 lg:my-10 text-3xl lg:text-6xl text-center text-viking-700 ">Proyectos de SIMSADI</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3">
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