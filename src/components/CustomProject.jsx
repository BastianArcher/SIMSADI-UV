import LogoGithub from "../icons/github.svg";

function CustomProject({ title, description, image, repository }) {
  return (
    <article className="flex flex-col justify-between p-6 lg:p-10 m-6 border-4 border-viking-500 rounded-3xl shadow-xl max-w-xl">
      <h3 className="text-base lg:text-xl font-semibold text-viking-700 mb-2 ">{title}</h3>
      <p className="text-sm lg:text-md mb-8">{description}</p>
      <div className="flex justify-center mb-4">
        <img src={image} alt={title} className="max-w-48 max-h-24  object-contain"/>
      </div>
      <div className="mt-4">
        <a href={repository} className="flex justify-center items-center rounded-full text-xl text-white py-2 px-4 bg-viking-500 mr-2 hover:bg-opacity-85 hover:scale-105 hover:transition-transform transition-colors duration-300 ease-in-out">
          <img src={LogoGithub} alt="Icono Github" className=" size-6 lg:size-8 mr-1"/>
          <span className="text-base">GitHub</span>
        </a>
      </div>
    </article>
  );
}
export default CustomProject;