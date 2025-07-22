const operations = [
  {
    Operacion: "Leer un tipo de recurso",
    Metodo: "GET",
    Ruta: "[base]/[resourceType]",
    Descripcion: "Obtiene una lista de recursos del tipo especificado.",
  },
  {
    Operacion: "Leer recurso según ID",
    Metodo: "GET",
    Ruta: "[base]/[resourceType]/[id]",
    Descripcion: "Obtiene un recurso individual por su ID.",
  },
  {
    Operacion: "Crear recurso",
    Metodo: "POST",
    Ruta: "[base]/[resourceType]",
    Descripcion: "Crea un nuevo recurso del tipo especificado.",
  },
  {
    Operacion: "Actualizar recurso",
    Metodo: "PUT",
    Ruta: "[base]/[resourceType]/[id]",
    Descripcion: "Reemplaza un recurso existente o lo crea si no existe.",
  },
  {
    Operacion: "Eliminar recurso",
    Metodo: "DELETE",
    Ruta: "[base]/[resourceType]/[id]",
    Descripcion: "Elimina un recurso identificado por su ID.",
  },
  {
    Operacion: "Buscar recursos",
    Metodo: "GET",
    Ruta: "[base]/[resourceType]?param=value",
    Descripcion: "Busca recursos según parámetros definidos.",
  },
  {
    Operacion: "Leer metadatos del servidor",
    Metodo: "GET",
    Ruta: "[base]/metadata",
    Descripcion: "Obtiene el CapabilityStatement del servidor FHIR.",
  },
  {
    Operacion: "Validar recurso",
    Metodo: "POST",
    Ruta: "[base]/[resourceType]/$validate",
    Descripcion: "Valida si un recurso cumple con su definición y restricciones.",
  },
];
export default operations;
