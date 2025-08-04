import { useRef, useState, useEffect } from "react";
import terminologyOperations from "services/TerminologyOperations";
import exampleJsons from "services/ExampleJsons";
import TerminologyForm from "components/Terminology/terminologyForm";
import TerminologyResponse from "components/terminology/terminologyResponse";
import DarkMode from "utils/DarkMode";
import BackButton from "utils/BackButton";

const Terminology = () => {
  const [selectedOp, setSelectedOp] = useState(terminologyOperations[0]);
  const [codesystemIds, setCodeSystemIds] = useState([]);
  const [valueSetIds, setValueSetIds] = useState([]);
  const [selectedCodeSystemId, setSelectedCodeSystemId] = useState("");
  const [selectedValueSetId, setSelectedValueSetId] = useState("");
  const [URI, setURI] = useState("");
  const [code, setCode] = useState("");
  const [termino, setTermino] = useState("");
  const [conceptId, setConceptId] = useState("");
  const [expresionECL, setExpresionECL] = useState("");
  const [jsonInput, setJsonInput] = useState("");
  const [response, setResponse] = useState("");

  const syntaxRef = useRef(null);
  const responseContainerRef = useRef(null);

  const FHIR_REAL = import.meta.env.VITE_TERMINOLOGY_FHIR_IP;
  const SNOMED_REAL = import.meta.env.VITE_TERMINOLOGY_SNOMED_IP;

  const FHIR_PROXY = "/terminology-fhir";
  const SNOMED_PROXY = "/terminology-snomed";

  const getEffectiveBaseUrl = () => {
    if (selectedOp.Tipo === "FHIR") return FHIR_PROXY;
    if (selectedOp.Tipo === "SNOMED") return SNOMED_PROXY;
    return "";
  };

  const getRealBaseUrl = () => {
    if (selectedOp.Tipo === "FHIR") return `${FHIR_REAL}/fhir`;
    if (selectedOp.Tipo === "SNOMED") return `${SNOMED_REAL}`;
    return "";
  };

  useEffect(() => {
    const fetchResources = async (type, setter) => {
      try {
        const res = await fetch(`${FHIR_PROXY}/${type}`);
        const data = await res.json();
        if (data?.entry) {
          const ids = data.entry
            .map((entry) => entry.resource?.id)
            .filter(Boolean);
          setter(ids);
        }
      } catch (error) {
        console.error(`Error al obtener ${type}:`, error);
      }
    };

    fetchResources("CodeSystem", setCodeSystemIds);
    fetchResources("ValueSet", setValueSetIds);
  }, []);

  const buildUrl = () => {
    let url = selectedOp.Ruta.replace("[base]", getEffectiveBaseUrl());

    if (url.includes("[CodeSystemID]"))
      url = url.replace("[CodeSystemID]", selectedCodeSystemId);
    if (url.includes("[ValueSetID]"))
      url = url.replace("[ValueSetID]", selectedValueSetId);
    if (url.includes("[URI]")) url = url.replace("[URI]", URI);
    if (url.includes("[CÓDIGO]")) url = url.replace("[CÓDIGO]", code);
    if (url.includes("[término]")) url = url.replace("[término]", termino);
    if (url.includes("[conceptId]")) url = url.replace("[conceptId]", conceptId);
    if (url.includes("[expresionECL]")) url = url.replace("[expresionECL]", expresionECL);

    return url;
  };

  const buildRealUrl = () => {
    let url = selectedOp.Ruta.replace("[base]", getRealBaseUrl());

    if (url.includes("[CodeSystemID]"))
      url = url.replace("[CodeSystemID]", selectedCodeSystemId);
    if (url.includes("[ValueSetID]"))
      url = url.replace("[ValueSetID]", selectedValueSetId);
    if (url.includes("[URI]"))
      url = url.replace("[URI]", URI);
    if (url.includes("[CÓDIGO]")) 
      url = url.replace("[CÓDIGO]", code);
    if (url.includes("[término]"))
      url = url.replace("[término]", termino);
    if (url.includes("[conceptId]"))
      url = url.replace("[conceptId]", conceptId);
    if (url.includes("[expresionECL]"))
      url = url.replace("[expresionECL]", expresionECL);
    return url;
  };

  const handleSend = async () => {
    if (selectedOp.Ruta.includes("[CodeSystemID]") && !selectedCodeSystemId)
      return setResponse("Por favor, selecciona un CodeSystem ID.");
    if (selectedOp.Ruta.includes("[ValueSetID]") && !selectedValueSetId)
      return setResponse("Por favor, selecciona un ValueSet ID.");
    if (selectedOp.Ruta.includes("[URI]") && !URI)
      return setResponse("Por favor, ingresa un URI.");
    if (selectedOp.Ruta.includes("[CÓDIGO]") && !code)
      return setResponse("Por favor, ingresa un código.");
    if (selectedOp.Ruta.includes("[término]") && !termino)
      return setResponse("Por favor, ingresa un término.");
    if (selectedOp.Ruta.includes("[conceptId]") && !conceptId)
      return setResponse("Por favor, ingresa un conceptId.");
    if (selectedOp.Ruta.includes("[expresionECL]") && !expresionECL)
      return setResponse("Por favor, ingresa una expresión ECL.");

    const url = buildUrl();
    const needsBody =
      selectedOp.Metodo === "POST" || selectedOp.Metodo === "PUT";

    const options = {
      method: selectedOp.Metodo,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Accept-Language": "es",
      },
    };

    if (needsBody) {
      try {
        options.body = JSON.stringify(JSON.parse(jsonInput));
      } catch {
        return setResponse("JSON inválido");
      }
    }

    try {
      const res = await fetch(url, options);
      console.log("URL:", url);
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
      responseContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    } catch (err) {
      setResponse(`Error: ${err.message}`);
      responseContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center min-h-screen py-10 bg-gradient-to-br from-snowstorm-2 to-snowstorm-3 dark:from-snowstorm-2-dark dark:to-snowstorm-3-dark">
      <BackButton />
      <form
        className="h-fit w-5xl p-10 bg-white dark:bg-primary-800 border-4 dark:border-primary-600 border-primary-300 rounded-xl shadow-md"
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
      >
        <TerminologyForm
          selectedOp={selectedOp}
          setSelectedOp={setSelectedOp}
          operations={terminologyOperations}
          code={code}
          setCode={setCode}
          termino={termino}
          setTermino={setTermino}
          conceptId={conceptId}
          setConceptId={setConceptId}
          expresionECL={expresionECL}
          setExpresionECL={setExpresionECL}
          URI={URI}
          setURI={setURI}
          selectedCodeSystemId={selectedCodeSystemId}
          setSelectedCodeSystemId={setSelectedCodeSystemId}
          codesystemIds={codesystemIds}
          selectedValueSetId={selectedValueSetId}
          setSelectedValueSetId={setSelectedValueSetId}
          valueSetIds={valueSetIds}
          jsonInput={jsonInput}
          setJsonInput={setJsonInput}
          exampleJson={exampleJsons.ValueSet}
          buildRealUrl={buildRealUrl}
        />

        <TerminologyResponse
          response={response}
          responseContainerRef={responseContainerRef}
          syntaxRef={syntaxRef}
        />
      </form>
      <DarkMode />
    </div>
  );
};

export default Terminology;
