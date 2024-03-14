import { Link } from "react-router-dom"
import './styles/GeneralNav.css'
import { useState } from "react"

const GeneralNav = () => {

  const [openMenu, setOpenMenu] = useState(false)

  const handleMenu=()=>{
    setOpenMenu(!openMenu)
  }
  return (
    <nav className="nav">
        <Link className="nav__logo" to={'/'}><img className="img__logo" src="/leonz.png" alt='logo_leonz'/></Link>

    

        <ul className={`nav__menu ${openMenu? 'open__menu':''}`}>            
            <li className="nav__menu-item"><Link to={'/skills'}><img className="icon__nav" src="/icons-nav/skills.svg"/>Skills</Link></li>
            <li className="nav__menu-item"><Link to={'/projects'}><img className="icon__nav" src="/icons-nav/projects.png"/>Projects</Link></li>
            <li className="nav__menu-item"><Link to={'/experiences'}><img className="icon__nav" src="/icons-nav/experience.svg"/>Experiences</Link></li>
            <li className="nav__menu-item"><Link to={'/education'}><img className="icon__nav" src="/icons-nav/education.png"/>Education</Link></li>
            <li className="nav__menu-item"><Link to={'/resume'}><img className="icon__nav" src="/icons-nav/resume.png"/>Resume</Link></li>
        </ul>

        <section className="mode__lang">

        <div className="nav__filter-lang">
        <h3 className="nav__title-lang">Languages</h3>
        <select className="nav__select-lang">
            <option>Spanish</option>
            <option>English</option>
        </select>
        </div>
        <i className='nav__mode-icon bx bxs-sun'></i>
        {/* <i className='bx bxs-moon'></i> */}

        </section>
        <i onClick={handleMenu} className='nav__icon__menu bx bx-menu'></i>
        
    </nav>
  )
}

export default GeneralNav