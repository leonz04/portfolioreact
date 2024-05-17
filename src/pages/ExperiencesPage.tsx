import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import './styles/ExperienciesPage.css'
import { useAppSelector } from '../store/hooks'


const ExperiencesPage = () => {

  const modeView = useAppSelector((state) => state.modeView);
  const modeLanguage = useAppSelector((state) => state.modeLanguage);

  return (
    <section className={`experiencespage ${modeView ? 'ligth' : 'dark'}`}>
      <h2 className='experiencespage__title '>{modeLanguage ? 'Experiencia' : 'Experience'}</h2>

      <VerticalTimeline lineColor={'lightgray'}>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'var(--text)', color: 'var(--bg)', boxShadow: '0px 0px 1px 4px rgb(33, 150, 243)' }}
          contentArrowStyle={{ borderRight: '15px solid  rgb(33, 150, 243)' }}
          date="2022 - Presente"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <div className='job__company'>
            <div className='job__company__info'>


              <h3 className="vertical-timeline-element-title">Soldarco S.A.S</h3>
              <h4 className="vertical-timeline-element-subtitle">Tecnología</h4>
              <p>Desarrollador Jr</p>

            </div>
            <div className='logo__company__container'>
              <img className='logo__company' src="https://soldarco.com/wp-content/uploads/2022/01/Espacio-libre-del-logo.png" alt="logo_soldarco" />
            </div>


          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'var(--text)', color: 'var(--bg)', boxShadow: '0px 0px 1px 4px rgb(33, 150, 243)' }}
          contentArrowStyle={{ borderRight: '15px solid  rgb(33, 150, 243)' }}

          date="2020 - 2022"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <div className='job__company'>
            <div className='job__company__info'>

              <h3 className="vertical-timeline-element-title">Romea</h3>
              <h4 className="vertical-timeline-element-subtitle">Administrativo</h4>
              <p>
                Desarrollador Jr and <br />Comunity Managment
              </p>
            </div>

            <div className='logo__company__container'>
              <img className='logo__company' src="/company/romea.png" alt="logo_soldarco" />
            </div>
          </div>





        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'var(--text)', color: 'var(--bg)', boxShadow: '0px 0px 1px 4px rgb(33, 150, 243)' }}
          contentArrowStyle={{ borderRight: '15px solid  rgb(33, 150, 243)' }}
          date="2019 - 2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <div className='job__company'>
            <div className='job__company__info'>


              <h3 className="vertical-timeline-element-title">Beard Caps</h3>
              <h4 className="vertical-timeline-element-subtitle">Diseño</h4>
              <p>
                Diseño grafico y estampado.
              </p>
            </div>
            <div className='logo__company__container'>
              <img className='logo__company' src="/company/beardcaps.svg" alt="logo_soldarco" />
            </div>
          </div>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'var(--text)', color: 'var(--bg)', boxShadow: '0px 0px 1px 4px rgb(33, 150, 243)' }}
          contentArrowStyle={{ borderRight: '15px solid   rgb(33, 150, 243)' }}
          date="2016 - 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <div className='job__company'>
            <div className='job__company__info'>


              <h3 className="vertical-timeline-element-title">Independiente</h3>
              <h4 className="vertical-timeline-element-subtitle"></h4>
              <p>
                Asesor y Desarrollador web independiente
              </p>
            </div>
            <div className='logo__company__container'>
              <img className='logo__company' src="/company/leon.png" alt="logo_soldarco" />
            </div>
          </div>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'var(--text)', color: 'var(--bg)', boxShadow: '0px 0px 1px 4px rgb(33, 150, 243)' }}
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
          contentStyle={{ background: 'var(--text)', color: 'var(--bg)', boxShadow: '0px 0px 1px 4px rgb(33, 150, 243)' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2008-2013"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}


        >
          <div className='job__company'>
            <div className='job__company__info'>


              <h3 className="vertical-timeline-element-title">Soldarco</h3>
              <h4 className="vertical-timeline-element-subtitle">Logistica y comercial</h4>
              <p>
                Auxiliar de Logistico,<br /> Asesor Comercial
              </p>
            </div>
            <div className='logo__company__container'>
              <img className='logo__company' src={`${modeView ? '/company/soldarcoligth.svg' : '/company/soldarcodar.svg'}`} alt="logo_soldarco" />
            </div>
          </div>
        </VerticalTimelineElement>





      </VerticalTimeline>
    </section>
  )
}

export default ExperiencesPage