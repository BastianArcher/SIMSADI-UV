function Footer() {
  return (
    <footer className="flex w-screen gap-1 flex-row justify-evenly items-center bg-primary-700 py-4">
      <p className="text-sm text-gray-300">SIMSADI-UV</p>
      <p className="text-sm text-gray-300">
        Escuela de Ingeniería Civil Biomédica
      </p>
      <p className="text-sm text-gray-300">Universidad de Valparaíso</p>
      <p className="text-sm text-gray-300">
        Desarrollado por{" "}
        <a className="text-primary-400" href="https://github.com/BastianArcher">
          Bastián Manríquez
        </a>
      </p>
    </footer>
  );
}
export default Footer;
