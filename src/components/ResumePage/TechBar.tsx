import './styles/TechBar.css'


const TechBar = () => {

  return (
    <section className="techbar">
        
        <ul className='techbar__content'>
            <li className='techbar__item'>
                <b className='techbar__title'>React</b>
                <img className='techbar__img' src="/logos/react.svg" />
            </li  >
            <li className='techbar__item' >
                <b className='techbar__title'>Figma</b>
                <img className='techbar__img' src="/logos/Figma-logo.svg" />
            </li  >
            <li className='techbar__item' >
                <b className='techbar__title'>Html</b>
                <img className='techbar__img'  src="/logos/html.svg" />
            </li> 
            <li className="techbar__item" >
                <b className='techbar__title'>Tailwind</b>
                <img className='techbar__img' src="/logos/tailwind.svg" />
            </li>
            <li className="techbar__item" >
                <b className='techbar__title'>Node</b>
                <img className='techbar__img' src="/logos/node.png" />
            </li>
            <li className="techbar__item" >
                <b className='techbar__title'>Postgres</b>
                <img className='techbar__img' src="/logos/postgres.png" />
            </li>
            <li className="techbar__item" >
                <b className='techbar__title'>Javascript</b>
                <img className='techbar__img' src="/logos/js.png" />
            </li>
            <li className="techbar__item" >
                <b className='techbar__title'>Css</b>
                <img className='techbar__img' src="/logos/css.svg" />
            </li>
            <li className="techbar__item" >
                <b className='techbar__title'>Angular</b>
                <img className='techbar__img' src="/logos/angular.png" />
            </li>
            <li className="techbar__item" >
                <b className='techbar__title'>PHP</b>
                <img className='techbar__img' src="/logos/php-1.svg" />
            </li>
            <li className="techbar__item" >
                <b className='techbar__title'>jQuery</b>
                <img className='techbar__img' src="/logos/JQuery.png" />
            </li>
            <li className="techbar__item" >
                <b className='techbar__title'>Python</b>
                <img className='techbar__img' src="/logos/python.png" />
            </li>
            <li className="techbar__item" >
                <b className='techbar__title'>Postman</b>
                <img className='techbar__img' src="/logos/postman.svg" />
            </li>
            <li className="techbar__item" >
                <b className='techbar__title'>Next</b>
                <img className='techbar__img' src="/logos/nextjs.png" />
            </li>
            <li className="techbar__item" >
                <b className='techbar__title'>NestJS</b>
                <img className='techbar__img' src="/logos/nest.svg" />
            </li>
            
        </ul>

    </section>
  )
}

export default TechBar