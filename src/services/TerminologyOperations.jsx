const operations = [
  {
    Operacion: "Listar CodeSystems",
    Metodo: "GET",
    Ruta: "[base]/CodeSystem",
    Tipo: "FHIR",
    Descripcion: "Obtiene todos los CodeSystems disponibles en el servidor.",
    Ejemplo: "",
  },
  {
    Operacion: "Obtener CodeSystem por ID",
    Metodo: "GET",
    Ruta: "[base]/CodeSystem/[CodeSystemID]",
    Tipo: "FHIR",
    Descripcion: "Obtiene un CodeSystem específico por su ID.",
    Ejemplo: "[ID]/CodeSystem/biomedica.uv.cl-SIMSADI-Especialidad-Medica",
  },
  {
    Operacion: "Buscar código específico",
    Metodo: "GET",
    Ruta: "[base]/CodeSystem/$lookup?system=[URI]&code=[CÓDIGO]",
    Tipo: "FHIR",
    Descripcion: "Busca un código específico dentro de un CodeSystem.",
    Ejemplo:
      "[IP]/Codesystem/$lookup?system=http://biomedica.uv.cl/SIMSADI/Institucion-Emisora-Titulo&code=34",
  },
  {
    Operacion: "Validar código en CodeSystem",
    Metodo: "GET",
    Ruta: "[base]/CodeSystem/[CodeSystemID]/$validate-code?coding=[CÓDIGO]",
    Tipo: "FHIR",
    Descripcion: "Valida un código dentro de un CodeSystem.",
    Ejemplo:
      "[IP]/CodeSystem/biomedica.uv.cl-SIMSADI-Institucion-Emisora-Titulo/$validate-code?coding=34",
  },
  {
    Operacion: "Leer ValueSets",
    Metodo: "GET",
    Ruta: "[base]/ValueSet",
    Tipo: "FHIR",
    Descripcion: "Obtiene todos los ValueSets disponibles en el servidor.",
    Ejemplo: "",
  },
  {
    Operacion: "Crear ValueSet",
    Metodo: "POST",
    Ruta: "[base]/ValueSet",
    Tipo: "FHIR",
    Descripcion: "Crea un nuevo ValueSet en el servidor.",
    Ejemplo: "",
  },
  {
    Operacion: "Expandir un ValueSet",
    Metodo: "GET",
    Ruta: "[base]/ValueSet/[ValueSetID]/$expand",
    Tipo: "FHIR",
    Descripcion:
      "Expande un ValueSet para obtener todos los códigos incluidos.",
    Ejemplo: "",
  },
  {
    Operacion: "Validar código en ValueSet",
    Metodo: "GET",
    Ruta: "[base]/ValueSet/[ValueSetID]/$validate-code?system=[URI]&code=[CÓDIGO]",
    Tipo: "FHIR",
    Descripcion: "Valida un código dentro de un ValueSet.",
    Ejemplo:
      "[IP]/ValueSet/biomedica.uv.cl-SIMSADI-Institucion-Emisora-Titulo-VS/$validate-code?system=http://biomedica.uv.cl/SIMSADI/Institucion-Emisora-Titulo&code=34",
  },
  {
    Operacion: "Buscar conceptos por término",
    Metodo: "GET",
    Ruta: "[base]/browser/MAIN/SNOMEDCT-ES/descriptions?term=[término]",
    Tipo: "SNOMED",
    Descripcion:
      "Busca conceptos que contengan el texto indicado en sus descripciones.",
    Ejemplo: "[IP]/browser/MAIN/SNOMEDCT-ES/concepts?term=fractura",
  },
  {
    Operacion: "Obtener concepto por ID",
    Metodo: "GET",
    Ruta: "[base]/browser/MAIN/SNOMEDCT-ES/concepts/[conceptId]",
    Tipo: "SNOMED",
    Descripcion:
      "Devuelve los detalles completos de un concepto, incluyendo relaciones y descripciones.",
    Ejemplo: "[IP]/browser/MAIN/SNOMEDCT-ES/concepts/64572001",
  },
  {
    Operacion: "Listar hijos de un concepto",
    Metodo: "GET",
    Ruta: "[base]/browser/MAIN/SNOMEDCT-ES/concepts/[conceptId]/children",
    Tipo: "SNOMED",
    Descripcion:
      "Devuelve los conceptos hijos directos (descendientes inmediatos) del concepto dado.",
    Ejemplo: "[IP]/browser/MAIN/SNOMEDCT-ES/concepts/404684003/children",
  },
  {
    Operacion: "Listar ancestros de un concepto",
    Metodo: "GET",
    Ruta: "[base]/browser/MAIN/SNOMEDCT-ES/concepts/[conceptId]/ancestors",
    Tipo: "SNOMED",
    Descripcion:
      "Devuelve todos los conceptos ancestros del concepto especificado.",
    Ejemplo: "[IP]/browser/MAIN/SNOMEDCT-ES/concepts/22298006/ancestors",
  },
  {
    Operacion: "Listar relaciones de un concepto",
    Metodo: "GET",
    Ruta: "[base]/MAIN/SNOMEDCT-ES/relationships?sourceId=[conceptId]",
    Tipo: "SNOMED",
    Descripcion:
      "Muestra las relaciones lógicas (atributos y asociaciones) del concepto.",
    Ejemplo: "[IP]/MAIN/SNOMEDCT-ES/relationships?sourceId=22298006",
  },
  {
    Operacion: "Consultar usando ECL",
    Metodo: "GET",
    Ruta: "[base]/browser/MAIN/SNOMEDCT-ES/concepts?ecl=[expresionECL]",
    Tipo: "SNOMED",
    Descripcion:
      "Realiza una consulta sobre la jerarquía SNOMED usando ECL (Expression Constraint Language).",
    Ejemplo: "[IP]/browser/MAIN/SNOMEDCT-ES/concepts?ecl=<<404684003",
  },
];
export default operations;
