import { useRef, useState } from 'react';
import './styles/ProjectCard.css'
import { useAppSelector } from '../../store/hooks'

interface ProjectCardProps {
    issue:string;
    icon:string;
    projectName: string;
    projectDescription: string;
    projectLink: string;
    projectDuration: string;
    technologies: string[];
    githublink:string;
}


const ProjectCard: React.FC<ProjectCardProps> = ({ projectName, projectDescription, projectLink, projectDuration, technologies,icon, issue,githublink }) => {

    const [shadowPosition, setShadowPosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);
    const modeView=useAppSelector((state)=>state.modeView);
    const modeLanguage=useAppSelector((state)=>state.modeLanguage)




  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (cardRef.current) {
          const { clientX, clientY } = e;
          const { left, top, width, height } = cardRef.current.getBoundingClientRect();
          const x = clientX - left - width / 2;
          const y = clientY - top - height / 2;
          setShadowPosition({ x, y });
        }
      };
    


    return (
        <article className={`project__card  ${modeView?'dark':'ligth'}`}
        ref={cardRef}
        onMouseMove={handleMouseMove}  
        >
            <div
        className='shadow'
        style={{
          position: 'absolute',
          top: (shadowPosition.y+200) + 'px',
          left: (shadowPosition.x+200) + 'px',
        }}
      />
            <div className='content__header'>
            <img className='logo__project' src={icon} alt='project__logo' />
            <header className='header__project__card'>
                <h3>{projectName}</h3>
                <a className='githuba' href={githublink} target='_blank'><i className='icon__git__projectcard bx bxl-github'></i></a>
            </header>
            <hr className='hr__project__card' />
            <p className='issue__field'>
                <span className='issue__date__label'>
                {modeLanguage  ? 'Fecha publicación':'Publication date:'} 
                </span>
                <span className='issue__date__value'> {issue}</span>
            </p>
            </div>
           

            <div className='center__card'>
            
            <p className='project__card__description'>{projectDescription}</p>
            
            <div className='footer__project__Card'>
                <a className='project__link' href={projectLink} target='_blank'><i className=' icon__url bx bx-world'></i>{projectLink}</a>

                <p className='project__duration'><i className=' icon__url bx bxs-time' ></i>{projectDuration}</p>
            </div>
            </div>
            
            
            
            
            <section className='technologies__project__card'>
            <hr className='hr__project__card' />
                <h5 className='tech__title__card'>
                {modeLanguage  ? 'Tecnologías Utilizadas':'Technologies Applied'} 
                </h5>
                <div className='container__techs'>
                    {
                        technologies.map(technology =>
                            <article className='img__tech__card'>
                                <img className='img__tech__bar' src={technology} />
                            </article>
                        )
                    }

                </div>
            </section>


        </article>
    )
}

export default ProjectCard