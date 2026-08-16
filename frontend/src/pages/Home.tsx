import euMesmo from '../assets/eu_mesmo.png'

import Technologies from '../components/Footer/Technologies'
import PersonalContacts from '../components/Footer/PersonalContacts'

const Home = () => {
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={euMesmo} className="base" height="279" alt="eu_formatura" />
        </div>
        <div>
          <h1>Welcome!</h1>
          <p>
            This is my personalized web app 😎
          </p>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <Technologies />
        <PersonalContacts />
      </section>
    </>
  )
}

export default Home
