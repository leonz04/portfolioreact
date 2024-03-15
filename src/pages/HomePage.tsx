import Slider from '../components/HomePage/Slider'
import './styles/HomePage.css'

const HomePage = () => {
  return (
    <div className="homepage">

      <section className='homepage__presentation'>
      <h1 className='homepage__title'>Andres Felipe Leon Zapata</h1>
      <h2 className='homepage__dev'>Desarrollador Full Stack</h2>

      <article className='homepage__content'>
      <p className='homepage__description'>Apasionado desarrollador web comprometido con la excelencia en la creación de soluciones digitales innovadoras. Mi habilidad para adaptarme a diferentes entornos de trabajo y trabajar en equipo me permite alcanzar objetivos de manera efectiva. Siempre en busca de nuevos desafíos tecnológicos y en constante aprendizaje de las mejores prácticas en la industria. Con un enfoque proactivo y habilidades técnicas sólidas, estoy listo para hacer una contribución significativa a proyectos y aplicaciones web.</p>
      </article>
      <div className='homepage__iconbar'>
        
      <i className='icon__social bx bxl-github'></i>
      <i className='icon__social bx bxl-linkedin-square' ></i>
      <i className='icon__social bx bx-at'></i>
      <i className='icon__social bx bxs-phone' ></i>
      <i className='icon__social cv bx bxs-download'></i>
      
      </div>
      
      </section>
      <Slider/>

      
    </div>
  )
}

export default HomePage