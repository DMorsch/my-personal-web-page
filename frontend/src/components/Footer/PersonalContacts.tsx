import githubLogo from '../../assets/github.svg'
import linkedinLogo from '../../assets/linkedin.svg'

const PersonalContacts = () => {
  return (
    <div id="social">
      <svg className="icon" role="presentation" aria-hidden="true">
        <use href="/icons.svg#social-icon"></use>
      </svg>
      <h2>Connect with me</h2>
      <p>My links</p>
      <ul>
        <li>
          <a href="https://github.com/DMorsch" target="_blank">
            <img className="button-icon github-icon" src={githubLogo} alt="" />
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/daniel-morsch/" target="_blank">
            <img className="button-icon" src={linkedinLogo} alt="" />
            Linkedin
          </a>
        </li>
      </ul>
    </div>
  )
}

export default PersonalContacts
