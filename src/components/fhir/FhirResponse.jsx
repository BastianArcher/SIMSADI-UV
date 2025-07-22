import { useState, useEffect, useRef } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrow, tomorrowNightEighties } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const FhirResponse = ({ response }) => {
  const syntaxRef = useRef(null);
  const responseContainerRef = useRef(null);

  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (syntaxRef.current) {
      syntaxRef.current.scrollTop = 0;
    }
    if (responseContainerRef.current) {
      responseContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [response]);

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold dark:text-gray-300 text-gray-800 mb-3">
        Respuesta del servidor:
      </h3>
      <div ref={responseContainerRef}>
        <SyntaxHighlighter
              ref={syntaxRef}
              language="json"
              style={isDarkMode ? tomorrowNightEighties : tomorrow}
              customStyle={{
                maxHeight: "24rem",
                minHeight: "6rem",
                border: "1px solid #ccc",
                borderRadius: "0.5rem",
                padding: "1rem",
                overflowY: "auto",
              }}        
            >
              {response || "// Esperando operación..."}
            </SyntaxHighlighter>
          </div>
    </div>
  );
};

export default FhirResponse;
