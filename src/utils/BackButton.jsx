import { useNavigate } from "react-router";
import backIcon from "/arrow.svg";

function BackButton() {
    const navigate = useNavigate();
    const handleNavigation = (path) => navigate(path);
  return (
      <button
        className="fixed top-6 left-6 px-4 py-2 text-white rounded hover:scale-105 transition"
        onClick={() => handleNavigation("/menu")}
      >
        <img
          src={backIcon}
          alt="volver"
          className="bg-white border-4 border-primary-600 rounded-xl shadow-md"
        />
      </button>
  );
}
export default BackButton;