// PACKAGE IMPORTS
import axios from 'axios'

// LOCAL IMPORTS
import './Pricing.scss'
import useFormFields from '../libs/hooksLib.js'

const Pricing = () => {
  const [info, setInfo] = useFormFields({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      await axios.post('https://www.freecodecamp.com/email-submit', info)
        .then(res => console.log(res))
    }
    catch (err) {
      console.error(err)
    }
    finally {
      console.log("handleSubmit was processed.")
    }
  }

  return (
    <main id="pricing">
      <h1>Pricing</h1>

      <div className="pricing-col">
        <div className="pricing-col-1">
          <img src="../static/amazonChoice.png" alt="Amazon Choice" />
        </div>
        <div className="pricing-col-2">
          <p><span>Price</span>: $28.99 (Includes Free Shipping)</p>
          <p><span>Special Promotion</span>: $2 dollar coupon available</p>
        </div>
      </div>

      <div className="pricing-contact">
        <h3>Have questions before you hit <button>buy</button>?</h3>
        &nbsp;
        <p>Feel free to email me!</p>
        <form onSubmit={handleSubmit}>
          <div className="for-group group1">
            <label htmlFor="firstName">First Name:</label>
            &nbsp;
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Type your first name"
              value={info.firstName}
              onChange={setInfo}
              required
            />
          </div>
          <div className="for-group group2">
            <label htmlFor="lastName">Last Name:</label>
            &nbsp;
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Type your last name"
              onChange={setInfo}
              required />
          </div>
          <div className="for-group group3">
            <label htmlFor="email">Email:</label>
            &nbsp;
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Type your email"
              onChange={setInfo}
              required />
          </div>
          <div className="for-group group4">
            <label htmlFor="email">Message:</label>
            &nbsp;
            <textarea
              id="message"
              name="message"
              placeholder="Type your message"
              onChange={setInfo}
              required />
          </div>
          <input id="submit" type="submit" value="Submit" />
        </form>
      </div>
    </main>
  )
}

export default Pricing
