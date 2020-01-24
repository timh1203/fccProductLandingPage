// PACKAGE IMPORTS
import Youtube from 'react-youtube'

// LOCAL IMPORTS
import './Usage.scss'

const Usage = () => {
  return (
    <main id="usage">
      <h1>Usage</h1>

      <section className="usage-intro">
        <div className="usage-intro-col-1">
          <Youtube
            id="video"
            videoId="nG4dL13PFrg"
            opts={{ width: '640', height: '390' }}
          />
        </div>
        <div className="usage-intro-col-2">
          <h3>27 Types Lighting Modes Instruction</h3>
          <ul>
            <li><kbd>Fn+Ins</kbd> Customized Backlight Mode 1</li>
            <li><kbd>Fn+Home</kbd> Customized Backlight Mode 2</li>
            <li><kbd>Fn+PgUp</kbd> Customized Backlight Mode 3</li>
            <li><kbd>Fn+Del</kbd> Backlight Fully Mode</li>
            <li><kbd>Fn+End</kbd> RTS Gaming Backlight Mode</li>
            <li><kbd>Fn+PgDn</kbd> FPS Gaming Backlight Mode</li>
            <li><kbd>Fn+7</kbd> Office Backlight Mode</li>
          </ul>
        </div>
      </section>

      <section className="usage-info">
        <div className="usage-info-text">
          <h3>How to customize your own lighting mode?</h3>
          <p>1.Press Fn+1 to enter into customized lighting mode. 2.Press FN+ESC to activate the editing function, and then you can choose your desired lighting mode and press the corresponding buttons to light up, and finally press FN+ESC to save the setting.</p>
        </div>
        <div className="usage-info-image">
          <img className="usage-banner" src="/static/hero3.jpg" alt="Usage Hero Banner" />
        </div>
      </section>
    </main>
  )
}

export default Usage
