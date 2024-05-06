import TechBar from '../components/ResumePage/TechBar'
import './styles/ResumePage.css'
import { useAppSelector } from '../store/hooks'



const ResumePage = () => {
  const modeView=useAppSelector((state)=>state.modeView);
  const modeLanguage=useAppSelector((state)=>state.modeLanguage)




  return (
    <section className={`resumepage ${modeView?'ligth':'dark'}`} >
      <h2 className='skillspage__title'>Resume</h2>
    
      <section className='generalinfo__resume' >
      <article className='generalinfo__content' >
        
        <div className='info__general__info'>
        <article className='genralinfo__info' ><b className='generalinfo__title' >{modeLanguage?'Nombre:':'Name:'}</b> <span className='info__value' >Andres Felipe Leon Zapata</span></article>
        <article className='genralinfo__info' ><b className='generalinfo__title' >{modeLanguage?'Correo:':'Email'}</b> <span className='info__value' >afleonz04@gmail.com</span></article>
        <article className='genralinfo__info' ><b className='generalinfo__title' >{modeLanguage?'Telefono:':'Phone'}</b> <span className='info__value' >+57 319 320 47 84</span></article>
        </div>
      <p className='generalinfo__aboutme'>
        {modeLanguage?'Apasionado desarrollador web comprometido con la excelencia en la creación de soluciones digitales innovadoras. Mi habilidad para adaptarme a diferentes entornos de trabajo y trabajar en equipo me permite alcanzar objetivos de manera efectiva. Siempre en busca de nuevos desafíos tecnológicos y en constante aprendizaje de las mejores prácticas en la industria. Con un enfoque proactivo y habilidades técnicas sólidas, estoy listo para hacer una contribución significativa a proyectos y aplicaciones web.':'Passionate web developer committed to excellence in creating innovative digital solutions. My ability to adapt to different work environments and work as a team allows me to achieve objectives effectively. Always looking for new technological challenges and constantly learning the best practices in the industry. With a proactive approach and strong technical skills, I am ready to make a significant contribution to web projects and applications.'}
      </p>
      
      </article>
      
      </section>
      {/* <TechBar></TechBar> */}
      <img className='img__downloadcv' src={`${modeView?'./downloadCV_ligth.svg':'./downloadCV_dark.svg'}`} alt=''/>

      <article className='softskills__general'>

        <h3 className='soft__title'>{modeLanguage?'Habilidades Blandas':'Soft Skills'}</h3>
        <ul className="softskills__content">
          <li className='softskills_item'>
            <h4 className='softskills__title' >{modeLanguage?'Aprendizaje':'Learning'}</h4>
            <img className="softskills__img" src={modeView?'./softskills/learn_ligth.svg':'./softskills/learn_dark.svg'} alt="hola"/>
            <p className='softskills__description'>{modeLanguage?'Considero que poseo una habilidad innata para el aprendizaje autónomo y rápido. En muchas ocasiones, solo necesito presenciar una vez cómo se hace algo para poder replicarlo con facilidad.':'I consider that I have an innate ability for autonomous and rapid learning. Many times, I only need to witness something being done once to be able to replicate it easily.'}</p>
          </li>

          <li className='softskills_item' >
            
            <h4 className='softskills__title' >{modeLanguage?'Liderazgo':'Leadership'}</h4>
            <img className="softskills__img" src={modeView?'./softskills/leadership_ligth.svg':'./softskills/leadership_dark.svg'} alt="hola"/>
            
            <p className='softskills__description'>{modeLanguage?'Poseo la capacidad de liderar mediante el ejemplo y la asistencia. Durante el último bootcamp en el que participé, fui reconocido por brindar ayuda a varios de mis compañeros cuando enfrentaban dificultades en sus proyectos.':'I have the ability to lead by example and assistance. During the last bootcamp I participated in, I was recognized for providing help to several of my colleagues when they were facing difficulties in their projects.'}</p>
          
          </li>

          <li className='softskills_item' >

            <h4 className='softskills__title' >{modeLanguage?'Adaptabilidad':'Adaptability'}</h4>
            <img className="softskills__img" src={modeView?'./softskills/adaptability_ligth.svg':'./softskills/adaptability_dark.svg'} alt="hola"/>

            <p className='softskills__description'>{modeLanguage?'A lo largo de los años, la experiencia me ha enseñado que la mejor manera de avanzar y progresar es adaptarse a nuevas tecnologías y entornos de trabajo. Por eso, considero que poseo la capacidad de adaptarme con la versatilidad de un camaleón.':'I have the ability to lead by example and assistance. During the last bootcamp I participated in, I was recognized for providing help to several of my colleagues when they were facing difficulties in their projects.'}</p>
            
            
          </li>

          <li className='softskills_item' >

            <h4 className='softskills__title' >{modeLanguage?'Pensamiento Critico':'Critical Thinking'}</h4>
            <img className="softskills__img" src={modeView?'./softskills/criticalthinking_ligth.svg':'./softskills/criticalthinking_dark.svg'} alt="hola"/>
            
            <p className='softskills__description'>{modeLanguage?'Al tomar decisiones, es fundamental considerar todas las variables y opciones disponibles, teniendo en cuenta las opiniones del equipo y evaluando los posibles riesgos y beneficios que cada decisión conlleve. Asumo la responsabilidad de los resultados que estas decisiones puedan generar.':'When making decisions, it is essential to consider all the variables and options available, taking into account the opinions of the team and evaluating the possible risks and benefits that each decision entails. I assume responsibility for the results that these decisions may generate.'}</p>
            

          </li>

        </ul>

      </article>

    </section>

)}

export default ResumePage