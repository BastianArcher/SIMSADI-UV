import { useNavigate } from "react-router";

function Card({ path, src, alt, name, texto }) {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    }
    return (
        <div className="flex flex-col items-center bg-primary-500 dark:bg-primary-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
            <button 
            className="bg-white dark:bg-primary-900 rounded-4xl shadow-md p-2 transition duration-500 hover:scale-105 hover:bg-gradient-to-br from-primary-200 via-primary-500 to-primary-200 dark:from-primary-700 dark:via-primary-800 dark:to-primary-700 ease-in-out"
            onClick={() => handleNavigation(path)}>
                <div className="flex flex-col items-center justify-center rounded-3xl bg-white dark:bg-primary-900 p-4">
                    <img className="size-40 object-contain" src={src} alt={alt} />
                    <p className="font-bold text-lg w-3xs mt-6 p-3 bg-primary-100 dark:bg-primary-700 dark:text-gray-300 rounded-full">{name}</p>
                </div>
            </button>
            <p className="mt-4 text-center text-white dark:text-gray-300 font-semibold text-md">
                {texto}
            </p>
        </div>
    );
}
export default Card;