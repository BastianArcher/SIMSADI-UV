# Desarrollo de Frontend para la plataforma SIMSADI-UV
A continuación se especifican los pasos seguidos para el desarrollo del frontend de la plataforma SIMSADI-UV, que tiene por objetivo la utilización de herramientas enfocadas al desarrollo y aprendizaje en informática en salud. 

## Contenido
- [Herramientas incluidas en la plataforma](#herramientas-incluidas-en-la-plataforma)
- [Requisitos previos](#requisitos-previos)
- [Crear proyecto](#crear-proyecto)
- [Composición del proyecto](#composición-del-proyecto)
- [Desarrollo del proyecto](#desarrollo-del-proyecto)
- [Instalación de dependencias](#instalación-de-dependencias)
  - [Instalar Tailwind CSS](#instalar-tailwind-css)
  - [Configuración de Tailwind CSS](#configuración-de-tailwind-css)
  - [Instalar React Router](#instalar-react-router)
  - [Instalar React-Syntax-Highlighter](#instalar-react-syntax-highlighter)
- [Creación de landing](#creación-de-landing)
  - [Componente Login](#componente-login)
  - [Protección de rutas](#protección-de-rutas)
- [Creación de Menú de Herramientas](#creación-de-menú-de-herramientas)
- [Creación de sistemas](#creación-de-sistemas)
  - [Componente FHIR](#componente-fhir)
  - [Componente Terminology](#componente-terminology)
  - [Componente Bahmni](#componente-bahmni)
- [Levantamiento de Servidores](#levantamiento-de-servidores)


## Herramientas incluidas en la plataforma

- Servidor HAPI FHIR
- Servidor Terminológico Snowstorm
- Bahmni: Sistema de Información para la Salud

## Requisitos previos

- Instalar [Node.js](https://nodejs.org/en/download/) de acuerdo a tu sistema operativo.
- Nociones de HTML, CSS, JavaScript y React

## Crear proyecto

Para este proyecto se utiliza una herramienta de compilación llamada [Vite](https://vite.dev/guide/). Para iniciar un proyecto con Vite se ejecutan los siguientes comandos en la terminal:

```bash
npm create vite@latest
```

Luego aparecerán opciones para configurar el proyecto. Para el framework se selecciona [React](https://es.react.dev/) y como variante JavaScript. Luego se ejecuta:

```bash
cd nombre-del-proyecto
npm install
```

Esto cambiará el directorio al del proyecto e instalará las dependencias necesarias.

## Composición del proyecto

El proyecto se compone de los siguientes archivos y carpetas:

```
SIMSADI-UV-FRONTEND/
├── node_modules/          # Dependencias del proyecto
├── public/                # Archivos estáticos como imágenes y favicon
├── src/                   # Código fuente del proyecto
│   ├── components/         # Componentes principales de la aplicación
│   │   ├── landing/        # Componentes de la página de inicio
│   │   ├── glosary/        # Componente del glosario
│   │   ├── fhir/           # Componente para la herramienta FHIR
│   │   ├── terminology/    # Componente para la herramienta de terminología
│   │   └── bahmni/         # Componente para la herramienta Bahmni
│   ├── layout/          # Estructuras de navegación e interfaz
│   ├── pages/          # Páginas de la aplicación
│   ├── services/       # Servicios para interactuar con APIs
│   ├── utils/          # Utilidades y funciones auxiliares
│   ├── App.jsx         # Componente principal de la aplicación
│   ├── App.css         # Estilos globales de la aplicación
│   ├── index.css       # Estilos de Tailwind CSS y personalizados
│   └── main.jsx        # Archivo principal de React
├── .env                  # Variables de entorno del proyecto
├── index.html            # Archivo HTML principal
├── eslint.config.js       # Configuración de ESLint para el proyecto
├── package.json           # Archivo de configuración del proyecto
├── package-lock.json    # Archivo de bloqueo de dependencias
└── vite.config.js         # Configuración de Vite
```

**Nota importante:** Algunas variables como usuarios e IPs de servidores se encuentran definidas en un archivo `.env` que no será subido al repositorio. Estas variables corresponden a:

VITE_AUTH_EMAIL=
VITE_AUTH_PASSWORD=
VITE_FHIR_SERVER_IP=
VITE_TERMINOLOGY_SNOMED_IP=
VITE_TERMINOLOGY_FHIR_IP=
VITE_BAHMNI_URL="https://[IP]/bahmni/home/index.html#/login"

Al ser un proyecto compilado con Vite, las variables de entorno deben comenzar con `VITE_` para que sean accesibles en el código fuente.

## Desarrollo del proyecto

Inicialmente se reemplazan los campos de `index.html` por defecto con el contenido de la página a desarrollar. Esto sería cambiar el título, idioma, favicon, etc. Luego se elimina el contenido por defecto de `App.jsx`, dejando solamente lo siguiente:

```javascript
import './App.css'

function App() {
  return (
    <>
      <p>SIMSADI-UV</p>
    </>
  )
}

export default App
```

A continuación se ejecuta el comando para iniciar el servidor de desarrollo y comprobar que se ve correctamente el texto "SIMSADI-UV" en la página:

```bash
npm run dev
```

## Instalación de dependencias

Para el desarrollo del frontend se utilizarán varias dependencias que facilitan la creación de componentes, estilos y rutas. A continuación se detallan las dependencias instaladas y su propósito.

### Instalar Tailwind CSS

Tailwind CSS es un framework que puede instalarse en un proyecto de Vite como plugin. Esta herramienta permite agilizar la creación de estilos, reemplazando la hoja de estilos CSS utilizada normalmente con HTML.

Para instalar [Tailwind CSS](https://tailwindcss.com/docs/installation) se ejecutan los siguientes comandos:

```bash
npm install tailwindcss @tailwindcss/vite
```

En el archivo `vite.config.js` se agrega el plugin de Tailwind CSS:

```javascript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

Después se deben borrar los estilos preconfigurados en 'App.css' y 'main.css'. Luego se añade Tailwind CSS a los archivos de estilos. En el archivo `index.css` se agregan las siguientes líneas:

```css
@import "tailwindcss";
```

En caso de estar utilizando Visual Studio Code, se recomienda instalar la extensión [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) para mejorar la experiencia de desarrollo con autocompletado y sugerencias de clases de Tailwind CSS.

#### Configuración de Tailwind CSS

Adicionalmente, se utilizará una paleta de colores personalizada para el proyecto. Estos colores se definen en el archivo `index.css` de la siguiente manera:

```css
@theme {
    --color-primary-50: #B9EDF0;
    --color-primary-100: #A9E8EC;
    --color-primary-200: #87E0E4;
    --color-primary-300: #66D7DD;
    --color-primary-400: #38CBD3;
    --color-primary-500: #26A6AC;
    --color-primary-600: #1C7A7F;
    --color-primary-700: #124E51;
    --color-primary-800: #082123;
    --color-primary-900: #041314;

}
```

Una vez definidos los colores, se pueden utilizar en los estilos de Tailwind CSS. Por ejemplo, para aplicar el color primario 500 a un elemento, se puede usar la clase `bg-primary-500` para el fondo o `text-primary-500` para el texto.

### Instalar React Router

[React Router](https://reactrouter.com/en/main) es una librería que permite crear rutas en aplicaciones React. Además, servirá para crear la seguridad básica del frontend. Para instalar React Router se ejecuta el siguiente comando:

```bash
npm i react-router
```

Luego en `App.jsx` se agrega el siguiente código para importar los componentes necesarios de React Router:

```javascript
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>Hola Mundo</p>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
```

En este código `path` corresponde a la ruta de la aplicación y `element` es el componente que se renderizará cuando se acceda a esa ruta. En este caso, al acceder a la ruta raíz (`/`), se mostrará el texto "Hola Mundo".

### Instalar React-Syntax-Highlighter
Para resaltar la sintaxis de la respuesta JSON de los servidores se utiliza la librería [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter). Para instalarla se ejecuta el siguiente comando:

```bash
npm install react-syntax-highlighter
```
Un ejemplo de como se utiliza esta librería para mostrar una respuesta JSON es el siguiente:

```javascript
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

funtion Response({ response }) {
  return (
    <SyntaxHighlighter language="json" style={atomOneDark}>
      {JSON.stringify(response, null, 2)}
    </SyntaxHighlighter>
  );
}
```

## Creación de landing

Para crear la página de inicio (landing page) del proyecto, se crea una carpeta llamada `landing` dentro de la carpeta `components`. En esta carpeta se crearán los componentes necesarios para la página de inicio.

Dentro de la carpeta `landing`, se crean los siguientes archivos:

- `Landing.jsx`: Componente principal de la página de inicio.
- `login.jsx`: Componente para el inicio de sesión.
- `Glosary.jsx`: Componente para el glosario de términos.

La estructura resumida de `Landing.jsx` es la siguiente:

```javascript
import Login from "./Login"
import logo from "/simsadi.webp";

function Landing() {
    return (
        <>
        <header>
            <p>Header</p>
        </header>

        <main>
            <p>Main</p>
        </main>

        <Login>
        </Login>

        <footer>
            <p>Footer</p>
        </footer>
        </>
    )
}
export default Landing;
```

Con excepción del componente `Login`, el resto de las secciones son estáticas y contienen textos o imágenes sobre la plataforma SIMSADI-UV. El componente `Login` se encargará de gestionar el inicio de sesión del usuario y se implementará como un componente.

### Componente Login

El inicio de sesión se implementa como un componente independiente para mantener la modularidad del código. El componente `Login.jsx` se encargará de manejar el formulario de inicio de sesión y la lógica asociada. Para esto, se utiliza un archivo `.env` que almacena las credenciales que permitirán acceder a las herramientas de la plataforma. Estas variables son llamadas por una función del componente `Login` y se comparan con los datos ingresados por el usuario en el formulario de inicio de sesión.

```javascript
function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  
  const validEmail = import.meta.env.VITE_AUTH_EMAIL
  const validPassword = import.meta.env.VITE_AUTH_PASSWORD

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email === validEmail && password === validPassword) {
      sessionStorage.setItem("isAuthenticated", "true")
      navigate("/systems")
    } else {
      setError("CREDENCIALES INCORRECTAS")
    }
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>INICIO DE SESIÓN</h1>
            <Input/>
            <Input/>
            <Button/>
            {error && <p className="py-2 font-bold text-red-500">{error}</p>}
        </form>
    </div>
  );
}

export default Login
```

Además, se utiliza `sessionStorage` para almacenar el estado de autenticación del usuario. Esto permite que el usuario permanezca autenticado durante la sesión actual del navegador. Si el usuario cierra el navegador o recarga la página, deberá iniciar sesión nuevamente.

#### Protección de rutas

Para proteger las rutas de la aplicación y asegurarse de que solo los usuarios autenticados puedan acceder a ciertas páginas, se crea un componente `RouteProtection.jsx`. Este componente verifica si el usuario está autenticado y redirige al inicio de sesión si no lo está.

Este componente envuelve las rutas que se desean proteger en `App.jsx`. Aquí se muestra un ejemplo de cómo se implementa:

```javascript
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path='/glosario' element={<Glosary />} />
        <Route path='/about' element={<About />} />

        <Route path='/tool' element={
          <RouteProtection>
            <Menu/>
          </RouteProtection>
        } />
        <Route path='/tool/FHIR' element={
          <RouteProtection>
            <FHIR/>
          </RouteProtection>
        } />
        <Route path='/tool/terminology' element={
          <RouteProtection>
            <Terminology/>
          </RouteProtection>
        } />
        <Route path='/tool/bahmni' element={
          <RouteProtection>
            <Bahmni/>
          </RouteProtection>
        } />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
```

## Creación de Menú de Herramientas

Dentro de la carpeta `menu` se crea un componente llamado `Menu.jsx` que contendrá el menú de navegación para las herramientas disponibles en la plataforma SIMSADI-UV. Este menú incluirá enlaces a las diferentes herramientas como FHIR, Terminología y Bahmni. Está compuesto por tarjetas con descripciones de cada herramienta y un botón para acceder a ellas. El código del componente `Menu.jsx` es el siguiente:

Las tarjetas se crean utilizando el componente `Card.jsx`, que se encuentra en la carpeta `components/utilities`. Este componente recibe las propiedades necesarias para mostrar el título, descripción y enlace a cada herramienta utilizando la librería `react-router` para la navegación.

```javascript
import { useNavigate } from "react-router";

function Card({ path, src, alt, name, texto }) {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    }
    return (
        <div>
        /* html del componente */
        </div>
    );
}
export default Card;
```

## Creación de sistemas

Dentro de la carpeta `systems` se crean los componentes que permiten manejar las herramientas disponibles en la plataforma SIMSADI-UV. Estos componentes son los siguientes:

- `FHIR.jsx`
- `Terminology.jsx`
- `Bahmni.jsx`

Cada uno de estos componentes se encargará de renderizar la interfaz y funcionalidades específicas de cada herramienta. Por ejemplo, el componente `FHIR.jsx` se encargará de interactuar con el servidor HAPI FHIR, mientras que `Terminology.jsx` lo hará con el servidor Snowstorm. Bahmni se encargará de redirigir al usuario a la web de Bahmni, ya que no se cuenta con una API para interactuar directamente con el sistema.

### Componente FHIR

El componente `FHIR.jsx` se encargará de interactuar con el servidor HAPI FHIR. Este componente puede incluir funcionalidades como la búsqueda de recursos, la visualización de detalles de un recurso específico y la creación o actualización de recursos.

El código del componente `FHIR.jsx` se basa principalmente en variables dinámicas que permiten interactuar con el servidor HAPI FHIR. Estas son:

```javascript
const [selectedOp, setSelectedOp] = useState(operations[0]);
const [resourceType, setResourceType] = useState("");
const [resourceTypes, setResourceTypes] = useState([]);
const [resourceId, setResourceId] = useState("");
const [jsonInput, setJsonInput] = useState("");
const [params, setParams] = useState("");
const [response, setResponse] = useState("");
```

Además, se utilizan otras variables booleanas para determinar los campos de entrada que se mostrarán en la interfaz de usuario según la operación seleccionada desde `FhirOperations.jsx` en la carpeta `utilities`. Estas variables booleanas son:

```javascript
const needsResourceType = selectedOp.Ruta.includes("[resourceType]");
const needsId = selectedOp.Ruta.includes("[id]");
const needsParams = selectedOp.Ruta.includes("param=value");
const needsBody = selectedOp.Metodo === "POST" || selectedOp.Metodo === "PUT";
```

Según estas variables sean true o false se renderizarán ciertas secciones del código HTML en el sitio. Por ejemplo, si `needsResourceType` es true, se mostrará un campo de entrada para seleccionar el tipo de recurso FHIR.
```javascript
{needsResourceType && (
  <div>
    <label htmlFor="resourceType">Tipo de Recurso FHIR:</label>
    <select>
      <option value="">Opción 1</option>
      <option value="">Opción 2</option>
    </select>
  </div>
)}
```
          
#### Funciones del componente FHIR

Este componente tiene tres funciones relevantes en la lógica de la aplicación:

1. **fetchResourceTypes:** Esta función se encarga de obtener los tipos de recursos disponibles en el servidor HAPI FHIR. Utiliza la operación `$get-resource-counts` para obtener la lista de tipos de recursos en existencia. La respuesta se almacena en el estado `resourceTypes`.
2. **buildURL:** Esta función construye la URL para realizar la solicitud al servidor HAPI FHIR. Utiliza los valores de `selectedOp`, `resourceType`, `resourceId` y `params` para formar la URL correcta según la operación seleccionada.
3. **handleSend:** Esta función se encarga de enviar la solicitud al servidor HAPI FHIR. Utiliza la URL construida por `buildURL` y realiza una solicitud utilizando `fetch`. La respuesta se almacena en el estado `response` para su posterior visualización. Además añade algunas cabeceras a la solicitud, como `Accept` y `Content-Type`, para indicar que se espera una respuesta en formato JSON.

### Componente Terminology

Este componente se encargará de interactuar con el servidor Snowstorm para la gestión de terminologías. Al igual que el componente FHIR, este componente puede incluir funcionalidades como la búsqueda de términos, la visualización de detalles de un término específico y la creación o actualización de términos. Su lógica es similar a la del componente FHIR, pero adaptada a las operaciones y recursos de terminología. Además, posee un selector para elegir entre el servidor local o el servidor VPN, dependiendo de la conexión del usuario.

**Nota importante:** Este servidor no está en una IP pública, por lo que se debe utilizar un proxy local para acceder a él. Para esto, se define un proxy local en el archivo `vite.config.js` de la siguiente manera:

```javascript
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    server: {
      proxy: {
        '/terminology-local': {
          target: env.VITE_TERMINOLOGY_LOCAL_IP,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/terminology-local/, '/fhir'),
        },
        '/terminology-vpn': {
          target: env.VITE_TERMINOLOGY_VPN_IP,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/terminology-vpn/, '/fhir'),
        },
      },
    },
  };
});
```

Las variables dinámicas que se utilizan en el componente `Terminology.jsx` son las siguientes:

```javascript
const [selectedOp, setSelectedOp] = useState(operations[0]);
const [codesystemIds, setCodeSystemIds] = useState([]);
const [selectedCodeSystemId, setSelectedCodeSystemId] = useState("");
const [valueSetIds, setValueSetIds] = useState([]);
const [selectedValueSetId, setSelectedValueSetId] = useState("");
const [URI, setURI] = useState("");
const [code, setCode] = useState("");
const [jsonInput, setJsonInput] = useState("");
const [response, setResponse] = useState("");
const [tipoConexion, setTipoConexion] = useState("Local");
const [serverIp, setServerIp] = useState("");
const [realIp, setRealIp] = useState("");
```

Las variables booleanas que determinan los campos de entrada que se mostrarán en la interfaz de usuario son:

```javascript
const needsCodesystemId = selectedOp.Ruta.includes("[CodeSystemID]");
const needsValueSetId = selectedOp.Ruta.includes("[ValueSetID]");
const needsURI = selectedOp.Ruta.includes("[URI]");
const needsCode = selectedOp.Ruta.includes("[CÓDIGO]");
const needsBody = selectedOp.Metodo === "POST" || selectedOp.Metodo === "PUT";
```

#### Funciones del componente Terminology

- **tipoConexión:** Esta función se encarga de cambiar el tipo de conexión entre el servidor local y el servidor VPN. Dependiendo del tipo de conexión seleccionado, se actualizará la IP del servidor de terminología.
- **fetchCodeSystems:** Esta función se encarga de obtener los sistemas de códigos disponibles en el servidor Snowstorm. La respuesta se almacena en el estado `codesystemIds`.
- **fetchValueSets:** Esta función se encarga de obtener los ValueSets disponibles en el servidor Snowstorm. La respuesta se almacena en el estado `valueSetIds`.
- **buildURL:** Esta función construye la URL para realizar la solicitud al servidor Snowstorm. Utiliza los valores de `selectedOp`, `selectedCodeSystemId`, `selectedValueSetId`, `URI` y `code` para formar la URL correcta según la operación seleccionada.
- **handleSend:** Esta función se encarga de enviar la solicitud al servidor Snowstorm. Utiliza la URL construida por `buildURL` y realiza una solicitud utilizando `fetch`. La respuesta se almacena en el estado `response` para su posterior visualización. Además, añade algunas cabeceras a la solicitud, como `Accept` y `Content-Type`, para indicar que se espera una respuesta en formato JSON.

### Componente Bahmni

El componente `Bahmni.jsx` se encargará de redirigir al usuario a la interfaz web de Bahmni. Este componente no interactúa directamente con una API, sino que simplemente redirige al usuario a la URL de Bahmni. Esta redirección depende de la conexión del usuario, ya sea a través de una VPN o de una conexión local. Por lo tanto, se utiliza un selector para elegir entre la conexión local o la VPN.

## Levantamiento de Servidores
Para levantar los servidores necesarios para el funcionamiento de la plataforma SIMSADI-UV, se deben seguir las instrucciones de los siguientes repositorios:
- [Servidor HAPI FHIR](https://github.com/hapifhir/hapi-fhir-jpaserver-starter)
- [Servidor Terminológico Snowstorm](https://github.com/SIMSADIs/Servidor-Terminologico-SnowStorm)
- [Servidor Bahmni](https://github.com/Bahmni/bahmni-docker?tab=readme-ov-file)
