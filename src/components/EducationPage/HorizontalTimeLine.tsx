import { useState } from 'react';
import './styles/HorizontalTimeLine.css';
import EducationCard from './EducationCard';

const HorizontalTimeLine = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Inicializar con el índice activo por defecto

  const handleInputClick = (index: number) => {
    setActiveIndex(index);

  };
  const yearsData = [
    { year: '2008', description: "Inicios Programación" },
    { year: '2009', description: "Cursos Programación" },
    { year: '2010', description: "Cursos Programación" },
    { year: '2011', description: "Cursos Programación." },
    { year: '2012', description: "Cursos Programación." },
    { year: '2016-2017', description: "Desarrollador Web." },
    { year: '2018', description: "Seminarios." },
    { year: '2023-2024', description: "Desarrollador Web Full-Stack." },


  ];

  return (

    <div className="flex-parent">
      <div className="input-flex-container">
        {yearsData.map((data, index) => (
          <div key={data.year} className={`input ${index === activeIndex ? 'active' : ''}`} onClick={() => handleInputClick(index)}>
            <span data-year={data.year} data-info={data.description}></span>
          </div>
        ))}
      </div>
      <div className="description-flex-container">

        {[<EducationCard
          institute={'javeriana'}
          topics={[
            { tech: 'Introduccion a las ciencias de la computacion' },
            { tech: 'Calculo diferencial' },
            { tech: 'Introducción a la programación' },]}
          url={"/institute/javeriana.png"} />,
        <EducationCard
          institute={'javeriana'}
          topics={[
            { tech: 'Fundamentos y estructuras de datos' },
            { tech: 'Calculo Integral' },
            { tech: 'Algebra lineal' },]}
          url={"/institute/javeriana.png"} />,
        <EducationCard
          institute={'javeriana'}
          topics={[
            { tech: 'Objetos y programacion a media escala' },
            { tech: 'Calculo Integral' },
            { tech: 'Algebra lineal' },]}
          url={"/institute/javeriana.png"} />,
        <EducationCard
          institute={'javeriana'}
          topics={[
            { tech: 'Bases de datos' },
            { tech: 'Calculo multivariable' },
            { tech: 'Matematicas discretas ' },]}
          url={"/institute/javeriana.png"} />,
        <EducationCard
          institute={'javeriana'}
          topics={[
            { tech: 'Logica en ciencias de la computacion' },
            { tech: 'Probabilidad y Estadistica' },
            { tech: ' Computacion Grafica' },]}
          url={"/institute/javeriana.png"} />,
        <EducationCard
          institute={'javeriana'}
          topics={[
            { tech: 'Desarrollador Web' }
            ]}
          url={"/institute/nextu.png"} />,
        <EducationCard
          institute={'comfenalco'}
          topics={[
            { tech: 'Seminario en Personal Branding' },
            { tech: 'Seminario Marketing digital' },]}
          url={"/institute/comfenalco.png"} />,
        <EducationCard
          institute={'Academlo'}
          topics={[
            { tech: 'Desarrollador Web Front-End' },
            { tech: 'Desarrollador Back-End' },
          ]}
          url={"/institute/academlo.png"} />].map((description, index) => (
            <p key={index} className={index === activeIndex ? 'active' : ''}>{description}</p>
          ))}
      </div>
    </div>

  );
};

export default HorizontalTimeLine;