import './styles/SkillsPage.css'
import { useAppSelector } from '../store/hooks'


const SkillsPage = () => {

const modeView=useAppSelector((state)=>state.modeView);
const modeLanguage=useAppSelector((state)=>state.modeLanguage)
  
  return (
    <section className={`skillspage ${modeView?'ligth':'dark'}`}>
      <h2 className='skillspage__title'>
      {modeLanguage  ? 'Habilidades':'Skills'}
      </h2>

      <div className='content__technologies'>
      <article className={`skill__Card javascript  ${modeView?'dark':'ligth'}`}>
        <h3 className="skillcard__title">Javascript</h3>
      </article>
      <article className={`react skill__Card  ${modeView?'dark':'ligth'}`}>
        <h3 className="skillcard__title">React</h3>
      </article>
      <article className={`css skill__Card  ${modeView?'dark':'ligth'}`}>
        <h3 className="skillcard__title">Css</h3>
      </article>
      <article className={`html skill__Card  ${modeView?'dark':'ligth'}`}>
        <h3 className="skillcard__title">HTML</h3>
      </article>
      <article className={`ts skill__Card  ${modeView?'dark':'ligth'}`}>
        <h3 className="skillcard__title">TypeScript</h3>
      </article>
      <article className={`illustrator skill__Card  ${modeView?'dark':'ligth'}`}>
        <h3 className="skillcard__title">Illustrator</h3>
      </article>
      <article className={`figma skill__Card  ${modeView?'dark':'ligth'}`}>
        <h3 className="skillcard__title">Figma</h3>
      </article>
      <article className={`node skill__Card  ${modeView?'dark':'ligth'}`}>
        <h3 className="skillcard__title">Node</h3>
      </article>
      <article className={`vite skill__Card  ${modeView?'dark':'ligth'}`}>
        <h3 className="skillcard__title">Vite</h3>
      </article>
      <article className={`photoshop skill__Card  ${modeView?'dark':'ligth'}`}>
        <h3 className="skillcard__title">Photoshop</h3>
      </article>
      <article className={`postgres skill__Card  ${modeView?'dark':'ligth'}`}>
        <h3 className="skillcard__title">Postgres</h3>
      </article>
      <article className={`python skill__Card  ${modeView?'dark':'ligth'}`}>
        <h3 className="skillcard__title">Python</h3>
      </article>
      <article className={`php skill__Card  ${modeView?'dark':'ligth'}`}>
        <h3 className="skillcard__title">PHP</h3>
      </article>
      <article className={`jquery skill__Card  ${modeView?'dark':'ligth'}`}>
        <h3 className="skillcard__title">JQuery</h3>
      </article>
      <article className={`materialize skill__Card  ${modeView?'dark':'ligth'}`}>
        <h3 className="skillcard__title">Materialize</h3>
      </article>
      <article className={`sequelize skill__Card  ${modeView?'dark':'ligth'}`}>
        <h3 className="skillcard__title">Sequelize</h3>
      </article>
      <article className={`tailwind skill__Card  ${modeView?'dark':'ligth'}`}>
        <h3 className="skillcard__title">Tailwind</h3>
      </article>
      <article className={`postman skill__Card  ${modeView?'dark':'ligth'}`}>
        <h3 className="skillcard__title">Postman</h3>
      </article>
      </div>     


    </section>
  )
}

export default SkillsPage