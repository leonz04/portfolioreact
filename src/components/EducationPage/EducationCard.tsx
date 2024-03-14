import './styles/EducationCard.css'

interface Topic {
    
    tech:string;
  }

interface EducationCardProps {
    institute: string; // Puedes ajustar el tipo según sea necesari
    topics:Topic[];
    url:string;
  }

 

const EducationCard:React.FC<EducationCardProps> = ({topics,url}) => {
  return (
    <article className="educationcard">
        <ul>
            {
                topics.map((topic:Topic)=>(
                    <li className='topic__item' key={topic.tech}><span className='topic__label'>{topic.tech}</span><span className='certidicated'> Ver Certificado</span></li>
                    
                ))
            }
        </ul>
        
           

        <img className='img__institute' src={url} alt='instutute logo' />
      

    </article>

  )
}

export default EducationCard