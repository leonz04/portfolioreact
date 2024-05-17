import { Link } from "react-router-dom"
import './styles/GeneralNav.css'
import { useState } from "react"
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { setModeViewG } from '../../store/states/modeView.state';
import { setModeLanguageG } from '../../store/states/modeLanguage';


const GeneralNav = () => {

const modeView=useAppSelector((state)=>state.modeView);
const modeLanguage=useAppSelector((state)=>state.modeLanguage);


const dispatch =useAppDispatch();

  const [openMenu, setOpenMenu] = useState(false)

  const handleMenu=()=>{
    setOpenMenu(!openMenu)
  }

  const handleMode=()=>{
    dispatch(setModeViewG());
  }

  const handleLanguage=()=>{
    dispatch(setModeLanguageG())
  }



  return (
    <nav className={`nav ${modeView?'light':'dark'} `}>
        <Link className="nav__logo" to={'/'}><img className="img__logo" src={`${modeView ? "/leonz.png":"leondark.svg"}`} alt='logo_leonz'/></Link>

    

        <ul className={`nav__menu ${openMenu? 'open__menu':''}`}>            
            <li onClick={handleMenu} className="nav__menu-item"><Link to={'/skills'}><img className="icon__nav" src={modeView?'icons-nav/skillsLight.svg':'icons-nav/skillsDark.svg'}/>{modeLanguage?'Habilidades':'Skills'}</Link></li>
            <li onClick={handleMenu} className="nav__menu-item"><Link to={'/projects'}><img className="icon__nav" src={modeView?'icons-nav/projectsLight.svg':'icons-nav/projectsDark.svg'}/>{modeLanguage?'Proyectos':'Projects'}</Link></li>
            <li onClick={handleMenu} className="nav__menu-item"><Link to={'/experiences'}><img className="icon__nav" src={modeView?'icons-nav/experienceLight.svg':'icons-nav/experienceDark.svg'} />{modeLanguage?'Experiencia':'Experience'}</Link></li>
            <li onClick={handleMenu} className="nav__menu-item"><Link to={'/education'}><img className="icon__nav" src={modeView?'icons-nav/educationLigth.svg':'icons-nav/educationDark.svg'}/>{modeLanguage?'Educación':'Education'}</Link></li>
            <li onClick={handleMenu} className="nav__menu-item"><Link to={'/resume'}><img className="icon__nav" src={modeView?'icons-nav/resumeLight.svg':'icons-nav/resumeDark.svg'}/>{modeLanguage?'Resume':'Resume'}</Link></li>
        </ul>

        <section className="mode__lang">

        <div className="nav__filter-lang">
        <h3 className="nav__title-lang">Languages</h3>
        <select className="nav__select-lang" onChange={handleLanguage}>
            <option>Spanish</option>
            <option>English</option>
        </select>
        </div>
        <i className={`nav__mode-icon bx  ${modeView?'bxs-sun':'bxs-moon'}`}  onClick={handleMode}></i>
        {/* <i className='bx bxs-moon'></i> */}

        </section>
        <i onClick={handleMenu} className='nav__icon__menu bx bx-menu'></i>
        
    </nav>
  )
}

export default GeneralNav