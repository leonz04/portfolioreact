import Slider from '../components/HomePage/Slider'
import './styles/HomePage.css'
import { useAppSelector } from '../store/hooks'





const HomePage = () => {

const modeView=useAppSelector((state)=>state.modeView);
const modeLanguage=useAppSelector((state)=>state.modeLanguage)

// const modeView=useAppSelector((state)=>state.modeView);
// console.log(`hola esto es nu prueba ${modeView}`)
// const dispatch =useAppDispatch();
// useEffect(() => {
//   // Llama a dispatch(setModeViewG(!modeView)) dentro de un efecto de React
//   dispatch(setModeViewG(!modeView));
// }, []);


  return (
    <div className={`homepage ${modeView?'ligth':'dark'}`}>

      <section className='homepage__presentation'>
      <h1 className='homepage__title'>Andres Felipe Leon Zapata</h1>
      <h2 className='homepage__dev'>
        {modeLanguage  ? 'Desarrollador Full Stack' : 'Full Stack Developer'}
      </h2>

      <article className='homepage__content'>
      <p className='homepage__description'>
      {modeLanguage  ? 
              
                'Apasionado desarrollador web comprometido con la excelencia en la creación de soluciones digitales innovadoras. Mi habilidad para adaptarme a diferentes entornos de trabajo y trabajar en equipo me permite alcanzar objetivos de manera efectiva. Siempre en busca de nuevos desafíos tecnológicos y en constante aprendizaje de las mejores prácticas en la industria. Con un enfoque proactivo y habilidades técnicas sólidas, estoy listo para hacer una contribución significativa a proyectos y aplicaciones web.'
              
             : (
              <>
                Passionate web developer committed to excellence in creating innovative digital solutions. My ability to adapt to different work environments and work as a team allows me to achieve goals effectively. Always in search of new technological challenges and constantly learning the best industry practices. With a proactive approach and solid technical skills, I am ready to make a meaningful contribution to web projects and applications.
              </>
            )}
      </p>
      </article>
      <div className='homepage__iconbar'>
        
      <a href='https://github.com/leonz04' target="_blank"><i className='icon__social bx bxl-github'></i></a>
      <a href='https://www.linkedin.com/in/andres-felipe-leon-zapata-0a8637bb' target="_blank"><i className='icon__social bx bxl-linkedin-square' ></i></a>
      <a href="mailto:afleonz04@gmail.com"><i className='icon__social bx bx-at'></i></a>
      <a href="tel:+573193204784"><i className='icon__social bx bxs-phone' ></i></a>
      <a href={`${modeLanguage?'/cv/LeonCv.pdf':'/cv/LionCv.pdf'}`} download><i className='icon__social cv bx bxs-download'></i></a>
      
      </div>
      
      </section>
      <Slider/>

      
    </div>
  )
}

export default HomePage