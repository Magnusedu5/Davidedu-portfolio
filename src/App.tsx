import './App.css'
import { Route, Routes } from "react-router";
import About from './pages/aboutPage/About';
import Projects from './pages/projectPage/Projects';
import Landing from './pages/landingPage/Index';
import ProjectsDetails from './pages/projectPage/ProjectsDetails';
import config from './utils/config';

function App() {

  const { routes } = config

  return (
    <>
      <Routes>
        <Route path={routes.home} element={<Landing />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.projects} element={<Projects />} />
        <Route path={routes.projectsDetails} element={<ProjectsDetails />} />
      </Routes>
    </>
  )
}

export default App
