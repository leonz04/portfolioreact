import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ResumePage from './pages/ResumePage'
import EducationPage from './pages/EducationPage'
import ExperiencesPage from './pages/ExperiencesPage'
import 'react-vertical-timeline-component/style.min.css';


function App() {

  return (
   
      <div className='app'>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/skills" element={<SkillsPage/>} />
          <Route path="projects/" element={<ProjectsPage/>} />
          <Route path="experiences/" element={<ExperiencesPage />} />
          <Route path="education/" element={<EducationPage/>} />
          <Route path="/resume" element={<ResumePage/>} />
        </Routes>
      </div>
   
  )
}

export default App
