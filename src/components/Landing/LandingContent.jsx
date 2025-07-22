function Intro() {
  return (
    <>
    <section className="flex bg-med justify-center items-center">
      <article className="grid grid-cols-2 gap-6 px-14 py-28">
        <div className="flex justify-center items-center">
          <h1 className="text-8xl font-mono font-light text-white drop-shadow-lg mb-4">
            SIMSADI-UV
          </h1>
        </div>
        <div>
          <h2 className="text-4xl text-balance font-mono font-semibold text-white mb-8">
            El Entorno de Salud Digital de la Universidad de Valparaíso
          </h2>
          <p className="text-xl text-balance font-mono font-medium text-white">
            SIMSADI-UV es una plataforma del Laboratorio de Informática en Salud
            de la Universidad de Valparaíso que impulsa la interoperabilidad en
            salud. Integra un servidor FHIR, Terminológico y Bahmni, ofreciendo
            un entorno práctico para que estudiantes, profesionales y
            desarrolladores prueben y creen soluciones alineadas con estándares
            digitales.
          </p>
        </div>
      </article>
      </section>
      <div className="flex gap-32 justify-center items-center">
        <a href="https://hl7.org/fhir/">
          <img
            src="/HL7.png"
            alt="HL7 FHIR logo"
            className="landing-image"
          />
        </a>
        <a href="https://www.implementation.snomed.org/terminology-services">
          <img
            src="/snowstorm.svg"
            alt="Snowstorm logo"
            className="landing-image"
          />
        </a>
        <a href="https://bahmni.org/">
          <img
            src="/bahmni.png"
            alt="Bahmni logo"
            className="landing-image"
          />
        </a>
      </div>
    </>
  );
}
export default Intro;
