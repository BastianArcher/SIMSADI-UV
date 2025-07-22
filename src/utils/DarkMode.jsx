import { useEffect, useState } from "react";
import LightIcon from "/lightMode.svg";
import DarkIcon from "/darkMode.svg";

const DarkMode = () => {
    const [dark, setDark] = useState(
        () => localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    const toggleDarkMode = () => setDark((prev) => !prev);

    return (

        <button
            onClick={toggleDarkMode}
            className="fixed bottom-6 right-4 px-6 py-6 rounded-full dark:bg-gray-200 bg-primary-800 dark:text-gray-900 text-gray-100 transition shadow-lg z-50"
        >
            {dark ? (
                <img src={LightIcon} alt="Modo claro"/>
            ) : (
                <img src={DarkIcon} alt="Modo oscuro"/>
            )}
        </button>
    );
};

export default DarkMode;