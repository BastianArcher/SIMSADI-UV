import { useEffect, useState } from "react";
import Arrow from "/arrow.svg";

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-white border-primary-500 shadow-lg"
      aria-label="Volver al inicio"
    >
      <img src={Arrow} alt="Volver al inicio" className="w-10 h-10 rotate-90 hover:scale-110 transition " />
    </button>
  );
}

export default BackToTopButton;
