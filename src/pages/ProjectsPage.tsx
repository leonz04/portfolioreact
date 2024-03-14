import ProjectCard from '../components/ProjectsPage/ProjectCard'
import './styles/ProjectsPage.css'


const ProjectsPage = () => {

  
  

  


  return ( 
    <section className='projectspage'  >

        <h2 className='skillspage__title'>Projects</h2>
        <div className='content__projects'>

        <ProjectCard
        icon='/logo-projects/reserve.svg'
        issue=''
          projectName="Reservations App"
          projectDescription="Pensando en vacaciones?....Esta aplicacion te ayuda a investigar información sobre los diferentes hoteles en el mundo busca por por país, ciudad o precio y haz tu reservacion. Recuerda que debes haber iniciado sesion para poder hacer tu reservación y gestionarlas. "
          projectLink="https://reservationsapp.onrender.com"
          projectDuration="1 Week"
          technologies={['/logos/react.svg', '/logos/js.png', '/logos/Figma-logo.svg', '/logos/html.svg', '/logos/css.svg']}
        />
        <ProjectCard
        icon='/logo-projects/pokemon.svg'
        issue=''
          projectName="Pokedex Simulator"
          projectDescription="Si aun no tienes claro cuantos pokemon existen, te invitamos a que lo averigues en este simulador Pokedex en el cual podras ver todos los pokemons existentes, tambien podras filtrar por nombre y tipo de pokemon como funcion adicional podras escoger entre dos modos de vista. "
          projectLink="https://pokedexapi2-oihn.onrender.com"
          projectDuration="2 Weeks"
          technologies={['/logos/react.svg', '/logos/js.png', '/logos/Figma-logo.svg', '/logos/html.svg', '/logos/css.svg']}
        />
        <ProjectCard
         icon='/logo-projects/rickmorty.svg'
         issue=''
          projectName="Rick y Morty Dimensions"
          projectDescription="Consulta los personajes de Rick y morty por cada dimension que existe, esta web te permite hacerlo tambien podrias ver los episodios de la serie y los personajes que aprecen en cada episodio. Para realizar este proyecto se utilizo la API ppublica de Rick and Morty."
          projectLink="https://prorickandmortyapp.netlify.app"
          projectDuration="2 Week"
          technologies={['/logos/react.svg', '/logos/js.png', '/logos/Figma-logo.svg', '/logos/html.svg', '/logos/css.svg']}
        />
        <ProjectCard
         icon='/logo-projects/usr-crud.svg'
         issue=''
          projectName="User Crud"
          projectDescription="Si deseas guardar inormación sobre tus conocidos o contactos esta aplicacion esta aplicacion es para ti "
          projectLink="https://crudusercrud.netlify.app/"
          projectDuration="2 Week"
          technologies={['/logos/react.svg', '/logos/js.png', '/logos/Figma-logo.svg', '/logos/html.svg', '/logos/css.svg']}
        />
        <ProjectCard
         icon='/logo-projects/weather.svg'
         issue=''
          projectName="Weather App"
          projectDescription="Deseas saber el clima de tu ciudad?..... Aqui podras el estado actual del clima en tu ubicación, tambien puedes consultar el de la ciudad o pais que desees."
          projectLink="https://weatherapp-trw1.onrender.com"
          projectDuration="2 Week"
          technologies={['/logos/react.svg', '/logos/js.png', '/logos/html.svg', '/logos/css.svg']}
        />
        
          
        </div>

    </section>
  )
}

export default ProjectsPage