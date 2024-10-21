import Head from "./components/Head"
import Home from "./components/Home"
import ProjectSection from "./components/ProjectSection"
import Footer from "./components/Footer"

function App() {

  return (
    <div>
      <Head/>
      <Home/>
      <hr  id="proyectos" className="border-t-4 rounded border-viking-500 my-8 mx-16 lg:my-20 lg:mx-28"/>
      <ProjectSection/>
      <hr className="border-t-4 rounded border-viking-500 my-8 mx-16 lg:my-20 lg:mx-28"/>
      <Footer/>
    </div>
  )
}

export default App
