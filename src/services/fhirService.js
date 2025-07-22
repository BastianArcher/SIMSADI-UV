export const sendFhirRequest = async (url, method, jsonInput) => {
  const needsBody = method === "POST" || method === "PUT";

  let options = {
    method,
    headers: {
      "Content-Type": "application/fhir+json",
      Accept: "application/fhir+json",
    },
  };

  if (needsBody) {
    try {
      options.body = JSON.stringify(JSON.parse(jsonInput));
    } catch {
      return { error: "JSON inválido" };
    }
  }

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return { data: JSON.stringify(data, null, 2) };
  } catch (err) {
    return { error: `Error: ${err.message}` };
  }
};

export const getResourceTypes = async (baseUrl) => {
  try {
    const res = await fetch(`${baseUrl}/$get-resource-counts`);
    const data = await res.json();
    return data?.parameter?.map((p) => p.name) || [];
  } catch (err) {
    console.error("Error al obtener los tipos de recursos:", err);
    return [];
  }
};