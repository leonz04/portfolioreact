import './styles/TechBar.css'

const TechBar = () => {
  return (
    <section className="techbar">
        
        <ul className='techbar__content'>
            <li className='techbar__item'>
                <b>React</b>
                <img className='techbar__img' src="/logos/react.svg" />
            </li  >
            <li className='techbar__item' >
                <b>Figma</b>
                <img className='techbar__img' src="/logos/Figma-logo.svg" />
            </li  >
            <li className='techbar__item' >
                <b>Html</b>
                <img className='techbar__img'  src="/logos/html.svg" />
            </li> 
            <li className="techbar__item" >
                <b>Tailwind</b>
                <img className='techbar__img' src="/logos/tailwind.svg" />
            </li>
            <li className="techbar__item" >
                <b>Node</b>
                <img className='techbar__img' src="/logos/node.png" />
            </li>
            <li className="techbar__item" >
                <b>Postgres</b>
                <img className='techbar__img' src="/logos/postgres.png" />
            </li>
            <li className="techbar__item" >
                <b>Javascript</b>
                <img className='techbar__img' src="/logos/js.png" />
            </li>
            <li className="techbar__item" >
                <b>Css</b>
                <img className='techbar__img' src="/logos/css.svg" />
            </li>
            <li className="techbar__item" >
                <b>Angular</b>
                <img className='techbar__img' src="/logos/angular.png" />
            </li>
            <li className="techbar__item" >
                <b>PHP</b>
                <img className='techbar__img' src="/logos/php-1.svg" />
            </li>
            <li className="techbar__item" >
                <b>jQuery</b>
                <img className='techbar__img' src="/logos/JQuery.png" />
            </li>
            <li className="techbar__item" >
                <b>Python</b>
                <img className='techbar__img' src="/logos/python.png" />
            </li>
            <li className="techbar__item" >
                <b>Postman</b>
                <img className='techbar__img' src="/logos/postman.svg" />
            </li>
            <li className="techbar__item" >
                <b>Next</b>
                <img className='techbar__img' src="/logos/nextjs.png" />
            </li>
            
        </ul>

    </section>
  )
}

export default TechBar