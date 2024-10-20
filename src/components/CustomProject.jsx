import LogoGithub from "../icons/github.svg";

function CustomProject({ title, description, image, repository }) {
  return (
    <article className="flex flex-col justify-between p-8 m-10 border-4 border-viking-500 rounded-3xl shadow-xl">
      <h3 className="mb-4 text-xl font-semibold text-viking-700">{title}</h3>
      <p className="mb-8 text-md">{description}</p>
      <div className="flex justify-center mb-4">
        <img src={image} alt={title} className="max-w-96 max-h-48 object-contain"/>
      </div>
      <div className="mt-auto">
        <a href={repository} className="flex justify-center items-center rounded-full text-xl text-white py-2 px-4 bg-viking-500 mr-2 hover:bg-opacity-85 hover:scale-105 hover:transition-transform transition-colors duration-300 ease-in-out">
          <img src={LogoGithub} alt="Icono Github" className="w-8 h-8 mr-1"/>
          <span>GitHub</span>
        </a>
      </div>
    </article>
  );
}
export default CustomProject;