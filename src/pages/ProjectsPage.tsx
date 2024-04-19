import ProjectCard from '../components/ProjectsPage/ProjectCard'
import './styles/ProjectsPage.css'
import { useAppSelector } from '../store/hooks'



const ProjectsPage = () => {

  
const modeView=useAppSelector((state)=>state.modeView);
const modeLanguage=useAppSelector((state)=>state.modeLanguage)

  


  return ( 
    <section className={`projectspage ${modeView?'ligth':'dark'}`}  >

        <h2 className='skillspage__title'>
          {modeLanguage  ? 'Proyectos':'Projects'}

          
        </h2>
        <div className='content__projects'>

        <ProjectCard
        icon={`${modeView ? '/logo-projects/reserve_ligth.svg':'/logo-projects/reserve_dark.svg' }`}
        issue=''
        githublink="https://github.com/leonz04/reservationsApp"
          projectName={modeLanguage  ? 'Reservaciones App':'Reservations App'}          
          projectDescription={modeLanguage  ? "Pensando en vacaciones?....Esta aplicacion te ayuda a investigar información sobre los diferentes hoteles en el mundo busca por por país, ciudad o precio y haz tu reservacion. Recuerda que debes haber iniciado sesion para poder hacer tu reservación y gestionarlas."
          :
          "Thinking about vacations?...This application helps you research information about different hotels in the world, search by country, city or price and make your reservation. Remember that you must be logged in to be able to make your reservation and manage them. "
          }          
          projectLink="https://reservationsapp.onrender.com"
          projectDuration="1 Week"
          technologies={['/logos/react.svg', '/logos/js.png', '/logos/Figma-logo.svg', '/logos/html.svg', '/logos/css.svg']}
        />
        <ProjectCard
        icon={`${modeView ? '/logo-projects/pokemon_ligth.svg':'/logo-projects/pokemon_dark.svg' }`}
        issue=''
        githublink="https://github.com/leonz04/reservationsApp"

          projectName="Pokedex Simulator"
          projectDescription={modeLanguage  ? "Si aun no tienes claro cuantos pokemon existen, te invitamos a que lo averigues en este simulador Pokedex en el cual podras ver todos los pokemons existentes, tambien podras filtrar por nombre y tipo de pokemon como funcion adicional podras escoger entre dos modos de vista."
          :
          "If you are still not sure how many pokemon exist, we invite you to find out in this Pokedex simulator in which you can see all the existing pokemon, you can also filter by name and type of pokemon as an additional function you can choose between two view modes"
          }        
          projectLink="https://pokedexapi2-oihn.onrender.com"
          projectDuration="2 Weeks"
          technologies={['/logos/react.svg', '/logos/js.png', '/logos/Figma-logo.svg', '/logos/html.svg', '/logos/css.svg']}
        />
        <ProjectCard
         icon={`${modeView ? '/logo-projects/rickmorty_ligth.svg':'/logo-projects/rickmorty_dark.svg' }`}
         issue=''
         githublink="https://github.com/leonz04/reservationsApp"

          projectName="Rick y Morty Dimensions"
          projectDescription={modeLanguage  ? "Consulta los personajes de Rick y morty por cada dimension que existe, esta web te permite hacerlo tambien podrias ver los episodios de la serie y los personajes que aprecen en cada episodio. Para realizar este proyecto se utilizo la API ppublica de Rick and Morty."
          :
          "Consult the characters of Rick and Morty for each dimension that exists, this website allows you to do so, you could also see the episodes of the series and the characters that appear in each episode. To carry out this project, the Rick and Morty public API was used."
          }
          projectLink="https://prorickandmortyapp.netlify.app"
          projectDuration="2 Week"
          technologies={['/logos/react.svg', '/logos/js.png', '/logos/Figma-logo.svg', '/logos/html.svg', '/logos/css.svg']}
        />
        <ProjectCard
         icon={`${modeView ? '/logo-projects/usr_crud_ligth.svg':'/logo-projects/usr_crud_dark.svg' }`}
         issue=''
         githublink="https://github.com/leonz04/reservationsApp"

          projectName="User Crud"
          projectDescription={modeLanguage  ? "Si deseas guardar inormación sobre tus conocidos o contactos esta aplicacion esta aplicacion es para ti. "
          :
          "If you want to save information about your acquaintances or contacts, this application is for you."
          }
          projectLink="https://crudusercrud.netlify.app/"
          projectDuration="2 Week"
          technologies={['/logos/react.svg', '/logos/js.png', '/logos/Figma-logo.svg', '/logos/html.svg', '/logos/css.svg']}
        />
        <ProjectCard
         icon={`${modeView ? '/logo-projects/weather_ligth.svg':'/logo-projects/weather_dark.svg' }`}
         issue=''
         githublink="https://github.com/leonz04/reservationsApp"

          projectName="Weather App"
          projectDescription={modeLanguage  ? "Deseas saber el clima de tu ciudad?..... Aqui podras el estado actual del clima en tu ubicación, tambien puedes consultar el de la ciudad o pais que desees."
          :
          "Do you want to know the weather in your city?..... Here you can see the current state of the weather in your location, you can also check the weather in the city or country you want."
          }
          projectLink="https://weatherapp-trw1.onrender.com"
          projectDuration="2 Week"
          technologies={['/logos/react.svg', '/logos/js.png', '/logos/html.svg', '/logos/css.svg']}
        />
        
          
        </div>

    </section>
  )
}

export default ProjectsPage