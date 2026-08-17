import reactLogo from '../../assets/react.svg'
import typescriptLogo from '../../assets/typescript.svg'
import rubyLogo from '../../assets/ruby.svg'
import postgresqlLogo from '../../assets/postgresql.svg'

const Technologies = () => {
  return (
    <div id="docs">
      <svg className="icon" role="presentation" aria-hidden="true">
        <use href="/icons.svg#documentation-icon"></use>
      </svg>
      <h2>Technologies</h2>
      <p>Stacks used in this project</p>
      <ul>
        <li>
          <a>
            <img className="logo" src={typescriptLogo} alt="" />
            TypeScript
          </a>
        </li>
        <li>
          <a>
            <img className="button-icon" src={reactLogo} alt="" />
            React
          </a>
        </li>
        <li>
          <a>
            <img className="button-icon" src={rubyLogo} alt="" />
            Ruby on Rails
          </a>
        </li>
        <li>
          <a>
            <img className="button-icon" src={postgresqlLogo} alt="" />
            PostgreSQL
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Technologies