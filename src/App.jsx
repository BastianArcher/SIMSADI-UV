import Head from "./components/Head"
import Home from "./components/Home"
import ProjectSection from "./components/ProjectSection"
import Footer from "./components/Footer"

function App() {

  return (
    <div>
      <Head/>
      <Home/>
      <hr className="border-t-4 border-viking-500 my-10 m-28" />
      <ProjectSection/>
      <hr className="border-t-4 border-viking-500 my-10 m-28" />
      <Footer/>
    </div>
  )
}

export default App
