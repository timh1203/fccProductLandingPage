// PACKAGE IMPORTS
import Youtube from 'react-youtube'

// LOCAL IMPORTS
import './Features.scss'

const Features = () => {
  return (
    <main id="features">
      <h1>Features</h1>
      <Youtube
        videoId="nG4dL13PFrg"
        opts={{ width: '640', height: '390' }}
      />
    </main>
  )
}

export default Features
