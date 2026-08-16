import React from "react"
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

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
            <svg
              className="button-icon"
              role="presentation"
              aria-hidden="true"
            >
              <GitHubIcon/>
            </svg>
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/daniel-morsch/" target="_blank">
            <svg
              className="button-icon"
              role="presentation"
              aria-hidden="true"
            >
            <LinkedInIcon/>
            </svg>
            Linkedin
          </a>
        </li>
      </ul>
    </div>
  )
}

export default PersonalContacts