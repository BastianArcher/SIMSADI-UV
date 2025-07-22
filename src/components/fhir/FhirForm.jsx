import Selector from "utils/Selector";
import Input from "utils/Input";
import Button from "utils/Button";
import operations from "services/FhirOperations";
import exampleJsons from "services/ExampleJsons";

function FhirForm({
  selectedOp,
  setSelectedOp,
  resourceType,
  setResourceType,
  resourceTypes,
  resourceId,
  setResourceId,
  params,
  setParams,
  jsonInput,
  setJsonInput,
  url
}) {
  const needsResourceType = selectedOp.Ruta.includes("[resourceType]");
  const needsId = selectedOp.Ruta.includes("[id]");
  const needsParams = selectedOp.Ruta.includes("param=value");
  const needsBody = selectedOp.Metodo === "POST" || selectedOp.Metodo === "PUT";

  return (
    <>
      <h2 className="text-2xl font-bold dark:text-gray-300 text-gray-800 mb-6">
        Herramienta FHIR
      </h2>
      <Selector
        selectedOp={selectedOp}
        onChange={(e) =>
          setSelectedOp(
            operations.find((op) => op.Operacion === e.target.value)
          )
        }
        operations={operations}
      />

      {needsResourceType && (
        <div className="mb-4">
          {selectedOp.Metodo === "POST" ? (
            <Input
              name="Tipo de Recurso"
              type="text"
              placeholder="Ej: Patient, Observation"
              value={resourceType}
              onChange={(e) => setResourceType(e.target.value)}
            />
          ) : (
            <>
              <p className="block dark:text-gray-300 text-gray-700 font-medium mb-2">
                Tipo de Recurso:
              </p>
              <select
                name="resourceType"
                value={resourceType}
                onChange={(e) => setResourceType(e.target.value)}
                className="w-full p-2 font-normal dark:text-gray-300 dark:bg-primary-600 bg-white border border-gray-300 rounded focus:outline-none focus:border-primary-400"
              >
                <option value="">Selecciona un recurso</option>
                {resourceTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
      )}

      {needsId && (
        <Input
          name="ID del Recurso"
          type="text"
          value={resourceId}
          onChange={(e) => setResourceId(e.target.value)}
        />
      )}

      {needsParams && (
        <Input
          name="Parámetros de Búsqueda"
          type="text"
          value={params}
          onChange={(e) => setParams(e.target.value)}
          placeholder="name=Juan&gender=male&birthdate=2010-01-01&_sort=-birthdate&_count=10"
        />
      )}

      {needsBody && (
        <div className="mb-4">
          <p className="block dark:text-gray-300 text-gray-700 font-medium mb-2">
            JSON del recurso:
          </p>
          <textarea
            name="jsonInput"
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            placeholder="Ingresa el JSON del recurso aquí"
            className="mt-1 font-normal w-full p-2 dark:text-gray-300 dark:bg-primary-600 bg-white border border-gray-300 rounded"
            rows={8}
          />
          <div className="mt-2 flex gap-4">
            <button
              onClick={() => {
                try {
                  const pretty = JSON.stringify(JSON.parse(jsonInput), null, 2);
                  setJsonInput(pretty);
                } catch {
                  alert("JSON inválido");
                }
              }}
              className="px-4 py-1 bg-sky-700 text-white rounded hover:bg-sky-800 transition"
            >
              Formatear JSON
            </button>
            <button
              onClick={() => {
                const resourceKey =
                  resourceType in exampleJsons ? resourceType : "Patient";
                const prettyExample = JSON.stringify(
                  exampleJsons[resourceKey],
                  null,
                  2
                );
                setJsonInput(prettyExample);
              }}
              className="px-4 py-1 bg-emerald-700 text-white rounded hover:bg-emerald-800 transition"
            >
              Mostrar ejemplo
            </button>
          </div>
        </div>
      )}
      <div className="font-mono dark:text-gray-300 dark:bg-primary-700 text-gray-500 mt-2 mb-6 p-3 bg-gray-50 rounded-md border border-gray-200">
        Operación: {selectedOp.Metodo} {selectedOp.Ruta} <br />
        Comando a ejecutar: {selectedOp.Metodo} {url}
      </div>
      <div className="flex mt-6">
        <Button text="Enviar" />
      </div>
    </>
  );
}

export default FhirForm;
