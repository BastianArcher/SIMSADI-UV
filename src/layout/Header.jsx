import { useNavigate } from "react-router";
import Logo from "/simsadi.png";

function Header() {

  const navigate = useNavigate();
  const handleNavigation = (path) => navigate(path);
  const handleOpenNewTab = () => {
    window.open("/glosario", "_blank");
  };

  return (
    <header className="flex items-center top-0 w-full justify-between bg-primary-700 px-10 h-20 ">
      <button
        className="flex items-center transition hover-underline hover:scale-100 group"
        onClick={() => handleNavigation("/")}
      >
        <img src={Logo} alt="SIMSADI-UV Icon" className="size-16 p-2" />
        <p className="font-mono font-normal text-3xl text-white transition group-hover:text-primary-200">
          SIMSADI-UV
        </p>
      </button>
      <nav>
        <ul className="flex text-xl font-bold gap-8 text-white [&>li>button:hover]:text-primary-200 [&>li>button:hover]:transition">
          <li className="font-mono">
            <button
              className="px-4 hover-underline hover:scale-100"
              onClick={() => handleOpenNewTab()}
            >
              Glosario
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
