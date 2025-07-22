import { useNavigate } from "react-router";
import Logo from "/simsadi.png"
import DarkMode from "utils/DarkMode";
import backIcon from "/arrow.svg";

const BAHMNI_URL = import.meta.env.VITE_BAHMNI_URL;

const AccesoSelector = () => {
    const handleRedirect = (url) => {
      window.open(url, "_blank", "noopener");
    };


  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  }
  return (
    <div className="flex flex-col items-center bg-primary-300 dark:bg-primary-800 min-h-screen transition-colors">
      <button
        className="absolute top-6 left-6 px-4 py-2 text-white rounded hover:scale-105 transition"
        onClick={() => handleNavigation("/menu")}
      >
        <img 
          src={backIcon}
          alt="volver"
          className="bg-white border-4 border-primary-600 rounded-xl shadow-md"
        />
      </button>
      <button onClick={() => handleNavigation("/")}>
        <img className="w-32 h-32 rounded-xl mt-8 transition hover:scale-105" src={Logo} alt="SIMSADI-UV"/>
      </button>
      <h2 className="text-4xl font-semibold py-12 dark:text-gray-300 text-primary-800 transition-colors">Acceda a Bahmni:</h2>
      <div className="grid grid-cols-1 gap-16 max-w-4xl mx-auto">
        <button
          onClick={() => handleRedirect(BAHMNI_URL)}
          className="px-4 py-4 text-gray-200 text-xl bg-primary-600 dark:bg-primary-600 font-semibold rounded transition hover:bg-primary-700 dark:hover:bg-primary-900 hover:scale-105"
        >
          INGRESAR
        </button>
      </div>
      <DarkMode/>
    </div>
  );
};

export default AccesoSelector;