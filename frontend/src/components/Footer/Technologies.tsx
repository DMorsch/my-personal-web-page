import reactLogo from '../../assets/react.svg'
import typescriptLogo from '../../assets/typescript.svg'

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
            Typescript
          </a>
        </li>
        <li>
          <a>
            <img className="button-icon" src={reactLogo} alt="" />
            React
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Technologies