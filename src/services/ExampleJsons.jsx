const exampleJsons = {
  ValueSet: {
    resourceType: "ValueSet",
    status: "active",
    name: "biomedica.uv.cl-SIMSADI-Especialidad-Medica-VS",
    id: "biomedica.uv.cl-SIMSADI-Especialidad-Medica-VS",
    url: "http://biomedica.uv.cl/SIMSADI/Especialidad-Medica-VS",
    compose: {
      include: [
        {
          system: "http://biomedica.uv.cl/SIMSADI/Especialidad-Medica"
        }
      ]
    }
  },

  Patient: {
    resourceType: "Patient",
    id: "1",
    meta: {
      versionId: "1",
      lastUpdated: "",
      source: "",
      profile: [
        "https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/CorePacienteCl"
      ]
    },
    extension: [
      {
        url: "http://hl7.org/fhir/StructureDefinition/patient-occupation",
        valueString: "[Reemplazar con ocupación del paciente]"
      },
      {
        url: "https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/SexoBiologico",
        valueCodeableConcept: {
          coding: [
            {
              system: "http://hl7.org/fhir/administrative-gender",
              code: "[Reemplazar con código de sexo biológico]",
              display: "[Reemplazar con display de sexo biológico]"
            }
          ]
        }
      },
      {
        url: "https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/CodigoPaises",
        valueCodeableConcept: {
          coding: [
            {
              system: "https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais",
              code: "152",
              display: "Chile"
            }
          ]
        }
      }
    ],
    identifier: [
      {
        use: "official",
        type: {
          extension: [
            {
              url: "https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/CodigoPaises",
              valueCodeableConcept: {
                coding: [
                  {
                    system: "https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CodPais",
                    code: "152",
                    display: "Chile"
                  }
                ]
              }
            }
          ],
          coding: [
            {
              system: "https://hl7chile.cl/fhir/ig/clcore/CodeSystem/CSCodigoDNI",
              code: "NNCHL",
              display: "Chile"
            }
          ]
        },
        system: "http://regcivil.cl/Validacion/RUN",
        value: "[Reemplazar con RUN del paciente]"
      }
    ],
    name: [
      {
        use: "official",
        text: "[Reemplazar con nombre completo del paciente]",
        family: "[Primer apellido del paciente]",
        _family: {
          extension: [
            {
              url: "https://hl7chile.cl/fhir/ig/clcore/StructureDefinition/SegundoApellido",
              valueString: "[Segundo apellido del paciente]"
            }
          ]
        },
        given: [
          "[Primer nombre del paciente]",
          "[Segundo nombre del paciente (Añadir otros nombres si es necesario usando el mismo formato)]"
        ]
      }
    ],
    gender: "[Reemplazar con género del paciente]",
    birthDate: "[Reemplazar con fecha de nacimiento del paciente en formato AAAA-MM-DD]"
  }
};

export default exampleJsons;