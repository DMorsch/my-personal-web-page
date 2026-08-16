import euMesmo from '../../assets/eu_mesmo.png'
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
          I am a software engineer with a strong background in web development. I have a passion for designing solutions to real world problems through the use of technology.
          I am profficient in Javascript and Ruby and I am enthusiastic about LLMs and their potential to revolutionize how we work.
        </p>
        <p>
          My skills include front-end and back-end development, as well as experience with various frameworks and libraries.
          The main ones being React.js and Ruby on Rails. I am also familiar with database management, version control, and agile development methodologies.
        </p>
        <p>
          I am always looking to learn new technologies and improve my skills. I am a team player and enjoy collaborating with others to create innovative solutions.
        </p>
        <p>
          Thank you for visiting my page! If you would like to get in touch, please feel free to reach out to me through the contact information provided on the home page.
        </p>
      </div>
    </section>
  )
}

export default About
