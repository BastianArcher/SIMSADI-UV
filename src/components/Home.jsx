const objetivos = ["Objetivo 1", "Objetivo 2", "Objetivo 3", "Objetivo 4"];

function renderObjetivos(objetivos) {
    return (
        <ul className="list-disc list-inside">
            {objetivos.map((objetivo, index) => (
                <li key={index} className="text-white">{objetivo}</li>
            ))}
        </ul>
    );
}

{renderObjetivos(objetivos)}
 
 
 
 export default function Home() {
    return (
        <section id="inicio" className="flex flex-col">

            <article className="bg-viking-500 px-14 py-28">
                <h1 className="text-6xl font-bold text-white drop-shadow-lg mb-4">SIMSADI-UV</h1>
                <h2 className="text-4xl font-medium text-white mb-8">El Entorno de Salud Digital de la Universidad de Valparaíso</h2>
                <p className="text-xl font-medium text-white">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum</p>
            </article>

            <article className="flex flex-col md:grid md:grid-cols-3 justify-between">

                <div className="bg-viking-400 p-16 m-8 rounded-3xl min-h-96 hover:scale-105 hover:transition-transform duration-500 ease-out">
                    <h2 className="text-2xl text-viking-800 pb-2">Misión</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>

                <div className="bg-viking-500  text-viking-800 p-16 m-8 rounded-3xl min-h-96 hover:scale-105 hover:transition-transform duration-500 ease-out">
                    <h2 className="text-2xl text-white pb-2">Objetivos</h2>
                    {renderObjetivos(objetivos)}
                </div>

                <div className="bg-viking-400 text-viking-800 p-16 m-8 rounded-3xl min-h-96 hover:scale-105 hover:transition-transform duration-500 ease-out">
                    <h2 className="text-2xl pb-2">Coordinador</h2>
                    <h3>-----------</h3>
                </div>
            </article>
        </section>
    )
}