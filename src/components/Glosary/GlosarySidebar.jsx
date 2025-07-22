function Sidebar() {
  const sections = [
    { id: "fhir", label: "FHIR" },
    { id: "fhir-rest", label: "Operaciones RESTful en FHIR" },
    { id: "resource", label: "Recurso" },
    { id: "id", label: "ID" },
    { id: "uri", label: "URI" },
    { id: "terminology", label: "Terminología" },
    { id: "codesystem", label: "CodeSystem" },
    { id: "valueset", label: "ValueSet" },
    { id: "coding", label: "Codificación" },
    { id: "extension", label: "Extensión" },
    { id: "profile", label: "Perfil" },
    { id: "bundle", label: "Bundle" },
  ];
  return (
    <nav className="block sticky top-30 h-fit mr-20 self-start">
      <ul className="bg-white border-4 border-primary-500 rounded-lg shadow p-4">
        <li className="font-bold mb-2">Contenido</li>
        {sections.map((section) => (
          <li key={section.id} className="mb-1">
            <a
              href={`#${section.id}`}
              className="text-primary-600 hover:underline text-sm"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Sidebar;
