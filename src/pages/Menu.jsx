import Header from "layout/Header";
import Card from "utils/Card";
import DarkMode from "utils/DarkMode";

function Menu() {
  return (
    <>
      <Header />
      <div className="dark:bg-primary-600 bg-primary-300 min-h-svh flex flex-col items-center">
        <h1 className="text-4xl font-semibold py-12 dark:text-gray-300">
          SELECCIONAR HERRAMIENTA
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          <Card
            src={"/fhirLogo.png"}
            alt={"Logo FHIR"}
            path={"/menu/FHIR"}
            name={"Herramienta FHIR"}
            texto={
              "Gestiona recursos clínicos mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en un servidor FHIR que facilita la interoperabilidad de datos de salud."
            }
          />
          <Card
            src={"/snowstormLogo.png"}
            alt={"Logo Snowstorm"}
            path={"/menu/terminology"}
            name={"Herramienta Terminológica"}
            texto={
              "Consulta, explora y administra terminología clínica utilizando un servidor terminológico."
            }
          />
          <Card
            src={"/bahmniLogo.png"}
            alt={"Logo Bahmni"}
            path={"/menu/bahmni"}
            name={"HIS y EMR"}
            texto={
              "Gestiona la atención médica y los registros electrónicos de pacientes a través de un sistema HIS/EMR integrado."
            }
          />
        </div>
      </div>
      <DarkMode />
    </>
  );
}
export default Menu;
