// LOCAL IMPORTS
import './Pricing.scss'

const Pricing = () => {
  return (
    <main id="pricing">
      <h1>Pricing</h1>

      <h3>An Amazon Choice</h3>
      <p>Price: $28.99 with Free Shipping Included</p>
      <p>$2 dollar coupon available</p>

      <h3>Want to learn about it or have questions?</h3>
      <p>Feel free to email me!</p>
      <form>
        <div className="for-group group1">
          <label htmlFor="firstName">First Name:</label>
          <input id="firstName" name="firstName" type="text" placeholder="Type your first name" required />
        </div>
        <div className="for-group group2">
          <label htmlFor="lastName">Last Name:</label>
          <input id="lastName" name="lastName" type="text" placeholder="Type your last name" required />
        </div>
        <div className="for-group group3">
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" placeholder="Type your email" required />
        </div>
        <input id="submit" type="button" value="Submit" />
      </form>
    </main>
  )
}

export default Pricing
