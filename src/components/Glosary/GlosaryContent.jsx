function Content() {
  return (
    <div className="max-w-5xl my-10 py-16 px-32 bg-white border-4 border-primary-500 rounded-lg shadow w-full">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
        Glosario: Términos clave para trabajar con interoperabilidad en salud
      </h1>
      <section id="fhir" className="glosary-section">
        <h2 className="glosary-headers">
          FHIR (Fast Healthcare Interoperability Resources)
        </h2>
        <p className="glosary-paragraph">
          Es un estándar desarrollado por HL7 para el intercambio electrónico de
          datos clínicos y administrativos. FHIR define recursos reutilizables,
          estructurados en formato JSON o XML, y usa principios web modernos
          como REST, HTTP, OAuth2 y terminologías estándar.
        </p>
      </section>
      <hr className="my-8" />

      <section id="fhir-rest" className="glosary-section">
        <h2 className="glosary-headers">Operaciones RESTful en FHIR</h2>
        <p className="glosary-paragraph">
          FHIR utiliza métodos HTTP estándar para operar sobre recursos. Los
          métodos más comunes incluyen:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>
            <strong>GET:</strong> Para leer.
          </li>
          <li>
            <strong>POST:</strong> Para crear.
          </li>
          <li>
            <strong>PUT:</strong> Para actualizar completamente.
          </li>
          <li>
            <strong>DELETE:</strong> Paara eliminar.
          </li>
        </ul>
        <br></br>
        <p>
          <strong>Ejemplo:</strong> Un sistema puede obtener los datos de un
          paciente con una llamada HTTP como:{" "}
          <code className="bg-gray-100 px-1 rounded text-sm">
            GET https://mi-servidor-fhir.com/Patient/123
          </code>
        </p>
      </section>
      <hr className="my-8" />

      <section id="resource" className="glosary-section">
        <h2 className="glosary-headers">Recurso (Resource)</h2>
        <p className="glosary-paragraph">
          Los recursos son las unidades básicas de información en FHIR. Cada
          recurso representa un concepto específico de la atención en salud,
          como un paciente, una receta, una observación clínica o una cita.
          <br />
          <br />
          <strong>Ejemplos:</strong> Patient, Observation, Encounter,
          MedicationRequest.
        </p>
      </section>
      <hr className="my-8" />

      <section id="id" className="glosary-section">
        <h2 className="glosary-headers">ID (Identificador del recurso)</h2>
        <p className="glosary-paragraph">
          Cada recurso tiene un identificador único dentro del servidor. Este ID
          permite referirse al recurso de forma precisa, pues la ID es única
          independientemente del tipo de recurso.
          <br />
          <br />
          <strong>Ejemplo:</strong>{" "}
          <code className="bg-gray-100 px-1 rounded text-sm">
            Patient/12345
          </code>{" "}
          — el ID "12345" identifica a un paciente específico.
        </p>
      </section>
      <hr className="my-8" />

      <section id="uri" className="glosary-section">
        <h2 className="glosary-headers">URI (Uniform Resource Identifier)</h2>
        <p className="glosary-paragraph">
          Es una cadena que identifica un recurso o sistema en FHIR. Puede ser
          una URL accesible o un identificador simbólico para terminologías.
          <br />
          <br />
          <strong>Ejemplos:</strong>{" "}
          <code className="bg-gray-100 px-1 rounded text-sm">
            http://hl7.org/fhir/StructureDefinition/Patient
          </code>
          ,{" "}
          <code className="bg-gray-100 px-1 rounded text-sm">
            http://loinc.org
          </code>
          .
        </p>
      </section>
      <hr className="my-8" />

      <section id="capability-statement" className="glosary-section">
        <h2 className="glosary-headers">Capability Statement</h2>
        <p className="glosary-paragraph">
          Describe las capacidades de un servidor FHIR, incluyendo los recursos
          soportados, operaciones disponibles y perfiles implementados.
          <br />
          <br />
          <strong>Ejemplo:</strong> Un servidor puede declarar que soporta las
          operaciones{" "}
          <code className="bg-gray-100 px-1 rounded text-sm">$lookup</code> o
          actualizaciones (PUT)
        </p>
      </section>
      <hr className="my-8" />

      <section id="terminology" className="glosary-section">
        <h2 className="glosary-headers">Terminología</h2>
        <p className="glosary-paragraph">
          Conjunto de conceptos clínicos codificados que se usan para
          representar información médica de forma precisa y estandarizada.
          <br />
          <br />
          <strong>Ejemplos:</strong> LOINC, SNOMED CT, ICD-10.
        </p>
      </section>
      <hr className="my-8" />

      <section id="codesystem" className="glosary-section">
        <h2 className="glosary-headers">CodeSystem</h2>
        <p className="glosary-paragraph">
          Define un conjunto completo de códigos válidos y sus significados. Es
          como un diccionario de conceptos. Code y Display son los campos
          relevantes, donde "code" es el identificador del concepto y "display"
          es su representación legible.
          <br />
          <br />
          <strong>Ejemplo:</strong>
        </p>
        <pre className="bg-gray-100 rounded p-3 overflow-x-auto text-sm mt-2">
          <code>{`{
    "resourceType": "CodeSystem",
    "url": "http://loinc.org",
    "concept": [
      { "code": "85354-9", "display": "Blood pressure panel" }
    ]
  }`}</code>
        </pre>
      </section>
      <hr className="my-8" />

      <section id="valueset" className="glosary-section">
        <h2 className="glosary-headers">ValueSet</h2>
        <p className="glosary-paragraph">
          Un ValueSet es una lista de códigos seleccionados de uno o varios
          CodeSystem. Define qué códigos son válidos en un contexto específico.
          <br />
          <br />
          <strong>Ejemplo:</strong>
        </p>
        <pre className="bg-gray-100 rounded p-3 overflow-x-auto text-sm mt-2">
          <code>{`{
    "resourceType": "ValueSet",
    "url": "http://hl7.org/fhir/ValueSet/administrative-gender",
    "compose": {
      "include": [{
        "system": "http://hl7.org/fhir/administrative-gender",
        "concept": [
          { "code": "male", "display": "Male" },
          { "code": "female", "display": "Female" }
        ]
      }]
    }
  }`}</code>
        </pre>
      </section>
      <hr className="my-8" />

      <section id="coding" className="glosary-section">
        <h2 className="glosary-headers">Codificación (Coding)</h2>
        <p className="glosary-paragraph">
          Estructura usada para representar un concepto codificado. Incluye:
          system, code y display.
          <br />
          <br />
          <strong>Ejemplo:</strong>
        </p>
        <pre className="bg-gray-100 rounded p-3 overflow-x-auto text-sm mt-2">
          <code>{`{
    "code": {
      "coding": [{
        "system": "http://loinc.org",
        "code": "85354-9",
        "display": "Blood pressure panel"
      }]
    }
  }`}</code>
        </pre>
      </section>
      <hr className="my-8" />

      <section id="extension" className="glosary-section">
        <h2 className="glosary-headers">Extensión (Extension)</h2>
        <p className="glosary-paragraph">
          Permite agregar campos personalizados que no están definidos en un
          recurso estándar. Cada extensión debe tener un URL único que defina su
          estructura.
          <br />
          <br />
          <strong>Ejemplo:</strong> agregar un campo "rango socioeconómico" al
          recurso Patient.
        </p>
      </section>
      <hr className="my-8" />

      <section id="profile" className="glosary-section">
        <h2 className="glosary-headers">Perfil (Profile)</h2>
        <p className="glosary-paragraph">
          Un perfil es una personalización de un recurso FHIR. Permite
          restringir campos, definir terminologías específicas y agregar
          extensiones.
          <br />
          <br />
          <strong>Ejemplo:</strong> un perfil chileno de Patient podría requerir
          el RUT y el lugar de nacimiento como extensiones.
        </p>
      </section>
      <hr className="my-8" />

      <section id="bundle" className="glosary-section">
        <h2 className="glosary-headers">Bundle</h2>
        <p className="glosary-paragraph">
          Un recurso especial que agrupa múltiples recursos FHIR en una única
          transacción. Puede usarse para búsquedas, cargas masivas o
          transacciones atómicas.
          <br />
          <br />
          <strong>Ejemplo:</strong> Un bundle puede contener un Patient, su
          Encounter, y varias Observation relacionadas.
        </p>
      </section>
    </div>
  );
}
export default Content;
