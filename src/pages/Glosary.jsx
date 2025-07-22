import Header from "layout/Header";
import Sidebar from "components/Glosary/GlosarySidebar";
import Content from "components/Glosary/GlosaryContent";
import BackToTopButton from "utils/BackToTop";
import Footer from "layout/Footer";

function Glosary() {
  return (
    <div className="bg-primary-100 min-h-screen">
      <Header />
      <main className="flex justify-center">
        <Sidebar />
        <Content />
        <BackToTopButton />
      </main>
      <Footer />
    </div>
  );
}
export default Glosary;