import { useNavigate } from "react-router";
import Header from "layout/Header";
import LandingContent from "components/Landing/LandingContent";
import Login from "components/Landing/Login";
import Footer from "layout/Footer";

function Landing() {
  const navigate = useNavigate();
  const handleNavigation = (path) => navigate(path);

  const handleOpenNewTab = () => window.open("/glosario", "_blank");

  return (
    <>
      <Header handleNavigation={handleNavigation} handleOpenNewTab={handleOpenNewTab} />
      <main>
        <LandingContent />
      </main>
      <Login />
      <Footer />
    </>
  );
}

export default Landing;
