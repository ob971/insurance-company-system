import React from 'react'
import "./payment.css"

function PaymentInfo() {
  return (
     <main>
        <div className="payment-right">
      <form action="" className="payment-form">
        <h1 className="payment-title">Payment Details</h1>
        <div className="payment-method">
          <input type="radio" name="payment-method" id="method-1" required />
          <label for="method-1" className="payment-method-item">
            <img src="images/commercial bank.jpg" alt="" />
          </label>
          <input type="radio" name="payment-method" id="method-2" required />
          <label for="method-2" className="payment-method-item">
            <img src="images/bank of abyssina.jpg" alt="" />
          </label>
          <input type="radio" name="payment-method" id="method-3" required />
          <label for="method-3" className="payment-method-item">
            <img src="images/buna bank.jpg" alt="" />
          </label>
          <input type="radio" name="payment-method" id="method-4" required />
          <label for="method-4" className="payment-method-item">
            <img src="images/tele birr.jpg" alt="" />
          </label>
        </div>
        <form action="action">
          <label for="name">Payer Name</label><br />
          <input
            className="box"
            type="text"
            name="Pname"
            id="Pname"
            placeholder="Enter Name"
            required
          /><br />
          <label for="pemail">Enter Email</label><br />
          <input
            className="box"
            type="text"
            name="Pemail"
            id="Pemail"
            placeholder="Enter Email"
            required
          /><br />
          <label for="phone">Enter Phone Number</label><br />
          <input
            className="box"
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter Phone Number"
            required
          /><br />
          <label for="cnum">Card Number</label><br />
          <input
            className="box"
            type="number"
            name="cardNumber"
            id="cardNumber"
            placeholder="1234 1234 1234 1234"
            required
          /><br />
          <div className="div1">
            <label for="cardex">Card expiry month</label><br />
            <input
              className="box2"
              type="month"
              name="month"
              id="month"
              placeholder="MM"
              required
            /><br />
          </div>
          <div className="div1">
            <label for="year">Card expiry year</label><br />
            <input
              className="box2"
              type="year"
              name="yaar"
              id="year"
              placeholder="yyyy"
              required
            /><br />
          </div>
          <div className="div1">
            <label for="CVC">Card CVC</label><br />
            <input
              className="box2"
              type="CVC"
              name="cvc"
              id="cvc"
              placeholder="cvc"
              required
            /><br />
          </div>
          <button className="btn" type="button" onclick="submitForm()">
            Pay now
          </button>
          <button className="btn" type="button" onclick="goToHomePage()">
            Close
          </button>
        </form>
        </form>
        </div>
          </main>
  )
}
export default PaymentInfo