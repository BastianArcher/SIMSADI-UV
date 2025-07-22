import operations from "services/TerminologyOperations";
import Selector from "utils/Selector";
import Input from "utils/Input";
import Button from "utils/Button";
import exampleJsons from "services/ExampleJsons";

const TerminologyForm = ({
  selectedOp,
  setSelectedOp,
  handleSend,
  jsonInput,
  setJsonInput,
  code,
  setCode,
  termino,
  setTermino,
  conceptId,
  setConceptId,
  expresionECL,
  setExpresionECL,
  URI,
  setURI,
  selectedCodeSystemId,
  setSelectedCodeSystemId,
  selectedValueSetId,
  setSelectedValueSetId,
  codesystemIds,
  valueSetIds,
  buildRealUrl,
}) => {
  const needsCodesystemId = selectedOp.Ruta.includes("[CodeSystemID]");
  const needsValueSetId = selectedOp.Ruta.includes("[ValueSetID]");
  const needsURI = selectedOp.Ruta.includes("[URI]");
  const needsCode = selectedOp.Ruta.includes("[CÓDIGO]");
  const needsTermino = selectedOp.Ruta.includes("[término]");
  const needsConceptId = selectedOp.Ruta.includes("[conceptId]");
  const needsExpresionECL = selectedOp.Ruta.includes("[expresionECL]");
  const needsBody = selectedOp.Metodo === "POST" || selectedOp.Metodo === "PUT";

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold dark:text-gray-300 text-gray-800 mb-6">
          Herramienta Terminológica
        </h2>
      </div>

      <Selector
        selectedOp={selectedOp}
        onChange={(e) =>
          setSelectedOp(
            operations.find((op) => op.Operacion === e.target.value)
          )
        }
        operations={operations}
      />

      {needsCodesystemId && (
        <div className="mb-4">
          <p className="block dark:text-gray-300 text-gray-700 font-medium mb-2">
            ID del CodeSystem:
          </p>
          <select
            value={selectedCodeSystemId}
            onChange={(e) => setSelectedCodeSystemId(e.target.value)}
            className="w-full p-2 dark:text-gray-300 dark:bg-primary-600 bg-white border border-gray-300 rounded focus:outline-none focus:border-primary-400"
          >
            <option value="">Selecciona un CodeSystem</option>
            {codesystemIds.map((id) => (
              <option key={id} value={id}>
                {id}
              </option>
            ))}
          </select>
        </div>
      )}

      {needsValueSetId && (
        <div className="mb-4">
          <p className="block dark:text-gray-300 text-gray-700 font-medium mb-2">
            ID del ValueSet:
          </p>
          <select
            value={selectedValueSetId}
            onChange={(e) => setSelectedValueSetId(e.target.value)}
            className="w-full p-2 dark:text-gray-300 dark:bg-primary-600 bg-white border border-gray-300 rounded focus:outline-none focus:border-primary-400"
          >
            <option value="">Selecciona un ValueSet</option>
            {valueSetIds.map((id) => (
              <option key={id} value={id}>
                {id}
              </option>
            ))}
          </select>
        </div>
      )}

      {needsURI && (
        <Input
          name="URL de CodeSystem"
          value={URI}
          onChange={(e) => setURI(e.target.value)}
          placeholder="Ingresa URL del sistema"
        />
      )}

      {needsCode && (
        <Input
          name="Código"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Ingresa un código"
        />
      )}
      {needsTermino && (
        <Input
          name="Término"
          value={termino}
          onChange={(e) => setTermino(e.target.value)}
          placeholder="Ingresa un término"
        />
      )}
      {needsConceptId && (
        <Input
          name="Concept ID"
          value={conceptId}
          onChange={(e) => setConceptId(e.target.value)}
          placeholder="Ingresa un Concept ID"
        />
      )}
      {needsExpresionECL && (
        <Input
          name="Expresión ECL"
          value={expresionECL}
          onChange={(e) => setExpresionECL(e.target.value)}
          placeholder="Ingresa una expresión ECL"
        />
      )}

      {needsBody && (
        <div className="mb-4">
          <p className="block dark:text-gray-300 text-gray-700 font-medium mb-2">
            JSON de entrada:
          </p>
          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            placeholder="Ingresa el JSON de entrada"
            className="w-full p-2 dark:text-gray-300 dark:bg-primary-600 bg-white border border-primary-300 rounded focus:outline-none focus:border-primary-400 min-h-24 max-h-96 font-mono"
          />
          <div className="mt-2 flex gap-4">
            <button
              type="button"
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
              type="button"
              onClick={() => {
                const example = exampleJsons["ValueSet"];
                const pretty = JSON.stringify(example, null, 2);
                setJsonInput(pretty);
              }}
              className="px-4 py-1 bg-emerald-700 text-white rounded hover:bg-emerald-800 transition"
            >
              Mostrar Ejemplo
            </button>
          </div>
        </div>
      )}

      <div className="font-mono dark:text-gray-300 dark:bg-primary-700 text-gray-500 mt-2 mb-6 p-3 bg-gray-50 rounded-md border border-gray-200">
        <strong>Operación:</strong> {selectedOp.Metodo} {selectedOp.Ruta} <br />
        <strong>Comando a ejecutar:</strong> {selectedOp.Metodo} {buildRealUrl()}
        {selectedOp.Ejemplo && (
          <p className="mt-2">
            <strong>Ejemplo: </strong>
            {selectedOp.Ejemplo}
          </p>
        )}
      </div>

      <Button text="Enviar Solicitud" onClick={handleSend} />
    </>
  );
};

export default TerminologyForm;
