import logo from "../assets/simsadi.webp";

function Head() {
  return (
      <header className="flex items-center top-0 w-full justify-between bg-viking-600 px-4 lg:px-10 max-h-28 border-b-4 border-viking-500">
          <div className="flex items-center">
              <img src={logo} alt="SIMSADI-UV Icon" className="size-16 lg:size-24 p-2" />
              <p className="font-bold text-lg lg:text-2xl text-white">SIMSADI-UV</p>
          </div>
          <nav className="">
              <ul className="flex text-base md:text-xl font-bold text-white [&>li>a:hover]:text-viking-800 [&>li>a:hover]:transition-colors [&>li>a]:duration-500">
                  <li className="pr-3 lg:pr-10"><a href="#proyectos">Proyectos</a></li>
                  <li><a href="#">Nosotros</a></li>
              </ul>
          </nav>
      </header>
  )
}

export default Head