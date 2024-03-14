import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import './styles/ExperienciesPage.css'

const ExperiencesPage = () => {
  return (
    <section className='experiencespage'>
      <h2 className='experiencespage__title'>Experiences</h2>

      <VerticalTimeline lineColor={ 'lightgray' }>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: '#000',    boxShadow: '0px 0px 1px 4px rgb(33, 150, 243)'  }}
          contentArrowStyle={{ borderRight: '15px solid  rgb(33, 150, 243)' }}
          date="2022 - Presente"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
        <div className='job__company'>

          <h3 className="vertical-timeline-element-title">Soldarco S.A.S</h3>
          <h4 className="vertical-timeline-element-subtitle">Tecnología</h4>
          <p>Desarrollador Jr</p>
        <div className='logo__company__container'>      
          <img className='logo__company' src="https://soldarco.com/wp-content/uploads/2022/01/Espacio-libre-del-logo.png" alt="logo_soldarco" />
        </div>

        </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: '#000',     boxShadow: '0px 0px 1px 4px rgb(33, 150, 243)'  }}
          contentArrowStyle={{ borderRight: '15px solid  rgb(33, 150, 243)' }}

          date="2020 - 2022"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
        <div className='job__company'>

          <h3 className="vertical-timeline-element-title">Romea</h3>
          <h4 className="vertical-timeline-element-subtitle">Administrativo</h4>
          <p>
            Desarrollador Jr and <br/>Comunity Managment
          </p>
          <div className='logo__company__container'>
            <img className='logo__companyR' src="/company/romea.png" alt="logo_soldarco" />
          </div>

        </div>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: '#000',     boxShadow: '0px 0px 1px 4px rgb(33, 150, 243)'  }}
          contentArrowStyle={{ borderRight: '15px solid  rgb(33, 150, 243)' }}
          date="2019 - 2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
        <div className='job__company'>

          <h3 className="vertical-timeline-element-title">Beard Caps</h3>
          <h4 className="vertical-timeline-element-subtitle">Diseño</h4>
          <p>
            Diseño grafico y estampado.
          </p>
          <div className='logo__company__container'>
          <img  className='logo__company' src="https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/326249267_871908627408683_6017666635889321609_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHf07iTPCFO84P3gyNCeRkEX8NORf-_G3dfw05F_78bd0KSLUGArZTs2vlQCfMy6vFcy4Xj0IqFltXgUHEF6qY6&_nc_ohc=I5NVfK3BvhsAX9M8S_D&_nc_ht=scontent.fclo1-4.fna&oh=00_AfAGj1u0wkiuwH3lrmcW_00_yKB-xg1pog3GO29ze7s6-w&oe=65E9E57C" alt="logo_soldarco" />
          </div>
          </div>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: '#000',     boxShadow: '0px 0px 1px 4px rgb(33, 150, 243)'  }}
          contentArrowStyle={{ borderRight: '15px solid   rgb(33, 150, 243)' }}
          date="2016 - 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
        <div className='job__company'>

          <h3 className="vertical-timeline-element-title">Desempleado</h3>
          <h4 className="vertical-timeline-element-subtitle">Independiente</h4>
          <p>
            Asesor y Desarrollador web independiente
          </p>
          <div className='logo__company__container'>
            <img className='logo__company' src="/company/leon.png" alt="logo_soldarco" />
          </div>
        </div>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: '#000',     boxShadow: '0px 0px 1px 4px rgb(33, 150, 243)' }}
          contentArrowStyle={{ borderRight: '15px solid  rgb(33, 150, 243)' }}
          date="2013-2015"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Sagocol Importaciones</h3>
          <h4 className="vertical-timeline-element-subtitle">Logistica y Tecnología </h4>
          <p>
              Auxiliar Logistico, Auxiliar en Tecnología
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'white', color: '#000',     boxShadow: '0px 0px 1px 4px rgb(33, 150, 243)' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2008-2013"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          

        >
         <div className='job__company'>

          <h3 className="vertical-timeline-element-title">Soldarco</h3>
          <h4 className="vertical-timeline-element-subtitle">Logistica y comercial</h4>
          <p>
           Auxiliar de Logistico,<br/> Asesor Comercial
          </p>
          <div className='logo__company__container'>      
          <img className='logo__company' src="https://soldarco.com/wp-content/uploads/2022/01/Espacio-libre-del-logo.png" alt="logo_soldarco" />
        </div>
          </div>
        </VerticalTimelineElement>
        
        
       

        
      </VerticalTimeline>
    </section>
  )
}

export default ExperiencesPage