// PACKAGE IMPORTS
import Youtube from 'react-youtube'

// LOCAL IMPORTS
import './Features.scss'

const Features = () => {
  return (
    <main id="features">
      <img className="features-banner" src="/static/hero1.jpg" alt="Feature Banner" />
      <h1>Features</h1>
      <section className="features-video">
        <Youtube
          id="video"
          videoId="nG4dL13PFrg"
          opts={{ width: '640', height: '390' }}
        />
      </section>
      <section className="features-hero">
        <img id="header-img" src="/static/hero2.jpg" alt="Hero Banner" />
      </section>
      <section className="features-blobs">
      </section>
    </main>
  )
}

export default Features
