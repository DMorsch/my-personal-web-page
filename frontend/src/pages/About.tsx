import euMesmo from '../assets/eu_mesmo.png'
import './About.css'

const About = () => {
  return (
    <section id="about">
      <img src={euMesmo} className="about-photo" height="200" alt="eu_formatura" />
      <div>
        <h1>About me</h1>
        <p>
          Hi, I'm Daniel Morsch! Welcome to my personal corner of the web.
        </p>
        <p>
          This page is where you'll find a bit more about who I am, my
          background, and what I'm passionate about.
        </p>
        <p>
          I'm a software engineer with a strong background in web development
          and a passion for designing solutions to real-world problems through
          technology. I'm proficient in JavaScript and Ruby, and enthusiastic
          about LLMs and their potential to change how we work.
        </p>
        <p>
          My skills span front-end and back-end development, with hands-on
          experience across several frameworks and libraries — mainly React.js
          and Ruby on Rails. I'm also familiar with database management,
          version control, and agile development practices.
        </p>
        <p>
          I enjoy learning new technologies and collaborating with others to
          build things that actually solve problems.
        </p>
        <p>
          Thanks for visiting my page! If you'd like to get in touch, you can
          find my contact information on the home page.
        </p>
      </div>
    </section>
  )
}

export default About
