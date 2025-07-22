import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { sendFhirRequest, getResourceTypes } from "services/fhirService";
import operations from "services/FhirOperations";
import FhirForm from "components/fhir/FhirForm";
import FhirResponse from "components/fhir/FhirResponse";
import buildFhirUrl from "utils/buildFhirUrl";
import DarkMode from "utils/DarkMode";
import BackButton from "utils/BackButton"; 

const FHIR = () => {
  const [selectedOp, setSelectedOp] = useState(operations[0]);
  const [resourceType, setResourceType] = useState("");
  const [resourceTypes, setResourceTypes] = useState([]);
  const [resourceId, setResourceId] = useState("");
  const [jsonInput, setJsonInput] = useState("");
  const [params, setParams] = useState("");
  const [response, setResponse] = useState("");

  const syntaxRef = useRef(null);
  const responseContainerRef = useRef(null);

  const FHIR_SERVER = import.meta.env.VITE_FHIR_SERVER_IP;
  const navigate = useNavigate();
  const handleNavigation = (path) => navigate(path);

  useEffect(() => {
    getResourceTypes(FHIR_SERVER).then(setResourceTypes);
  }, []);

  const handleSend = async () => {
    const url = buildFhirUrl(FHIR_SERVER, selectedOp.Ruta, resourceType, resourceId, params);
    const { data, error } = await sendFhirRequest(url, selectedOp.Metodo, jsonInput);
    setResponse(data || error);
    responseContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-center min-h-screen py-10 bg-primary-700">
      <BackButton/>
      <form
        className="h-fit w-5xl p-10 dark:bg-primary-800 dark:border-primary-600 bg-white border-4 border-primary-300 rounded-xl shadow-md"
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
      >
        <FhirForm
          selectedOp={selectedOp}
          setSelectedOp={setSelectedOp}
          resourceType={resourceType}
          setResourceType={setResourceType}
          resourceTypes={resourceTypes}
          resourceId={resourceId}
          setResourceId={setResourceId}
          params={params}
          setParams={setParams}
          jsonInput={jsonInput}
          setJsonInput={setJsonInput}
          url={buildFhirUrl(FHIR_SERVER, selectedOp.Ruta, resourceType, resourceId, params)}
        />
        <FhirResponse
          selectedOp={selectedOp}
          url={buildFhirUrl(FHIR_SERVER, selectedOp.Ruta, resourceType, resourceId, params)}
          response={response}
          syntaxRef={syntaxRef}
          responseContainerRef={responseContainerRef}
        />
      </form>
      <DarkMode />
    </div>
  );
};

export default FHIR;