const buildFhirUrl = (baseUrl, ruta, resourceType, resourceId, params) => {
  let url = ruta.replace("[base]", baseUrl)
    .replace("[resourceType]", resourceType)
    .replace("[id]", resourceId);

  if (ruta.includes("param=value") && params) {
    url = url.replace("param=value", params);
  }

  return url;
};

export default buildFhirUrl;