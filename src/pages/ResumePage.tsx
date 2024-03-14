import './styles/ResumePage.css'


const ResumePage = () => {


  return (
    <section className='resumepage' >
      <h2 className='skillspage__title'>Resume</h2>
      <div className="content__technologies">

      </div>
      <section className='generalinfo__resume' >
      <article className='generalinfo__content' >
        
        <p className='genralinfo__info' ><b className='info__title' >Nombre:</b> <span>Andres Felipe Leon Zapata</span></p>
        <p className='genralinfo__info' ><b className='info__title' >Edad:</b><span>35</span></p>
        <p className='genralinfo__info' ><b className='info__title' >correo:</b> <span>afleonz04@gmail.com</span></p>
        <p className='genralinfo__info' ><b className='info__title' >Telefono:</b> <span>+57 319 320 47 84</span></p>
        
      </article>
      <img className='img__downloadcv' src='/downloadCV.svg' alt=''/>
      </section>

      <article className='softskills__general'>

        <h3 className='soft__title'>Soft Skills</h3>
        <ul className="softskills__content">
          <li className='softskills_item' >
            
            <h4 className='softskills__title' >Learning</h4>
            <img className="softskills__img" src="./softskills/learn.svg" alt="hola"/>
          
            <p className='softskills__description'>Considero que poseo una habilidad innata para el aprendizaje autónomo y rápido. En muchas ocasiones, solo necesito presenciar una vez cómo se hace algo para poder replicarlo con facilidad.</p>
            
          </li>

          <li className='softskills_item' >
            
            <h4 className='softskills__title' >Leadership</h4>
            <img className="softskills__img" src="./softskills/leadership.svg" alt="hola"/>
            
            <p className='softskills__description'>Poseo la capacidad de liderar mediante el ejemplo y la asistencia. Durante el último bootcamp en el que participé, fui reconocido por brindar ayuda a varios de mis compañeros cuando enfrentaban dificultades en sus proyectos.</p>
          
          </li>

          <li className='softskills_item' >

            <h4 className='softskills__title' >Adaptability</h4>
            <img className="softskills__img" src="./softskills/adaptability.svg" alt="hola"/>

            <p className='softskills__description' >A lo largo de los años, la experiencia me ha enseñado que la mejor manera de avanzar y progresar es adaptarse a nuevas tecnologías y entornos de trabajo. Por eso, considero que poseo la capacidad de adaptarme con la versatilidad de un camaleón.</p>
            
            
          </li>

          <li className='softskills_item' >

            <h4 className='softskills__title' >Critical Thinking</h4>
            <img className="softskills__img" src="./softskills/criticalthinking.svg" alt="hola"/>
            
            <p className='softskills__description' >Al tomar decisiones, es fundamental considerar todas las variables y opciones disponibles, teniendo en cuenta las opiniones del equipo y evaluando los posibles riesgos y beneficios que cada decisión conlleve. Asumo la responsabilidad de los resultados que estas decisiones puedan generar.</p>
            

          </li>

        </ul>

      </article>

    </section>

)}

export default ResumePage