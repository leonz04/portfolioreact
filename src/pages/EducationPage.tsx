import HorizontalTimeLine from '../components/EducationPage/HorizontalTimeLine';
import './styles/EducationPage.css'
import { useAppSelector } from '../store/hooks'


const EducationPage = () => {
  const modeLanguage=useAppSelector((state)=>state.modeLanguage);
  const modeView=useAppSelector((state)=>state.modeView);


  return (
    
    <section className={`educationpage ${modeView?'ligth':'dark'}`}>
      <h2 className='skillspage__title'>{modeLanguage?'Educación':'Education'}</h2>
      <HorizontalTimeLine/>
     
    </section>
  )
}

export default EducationPage