import React from 'react'
import "./payment.css"

function PaymentInfo() {
  return (
     <main>
        <div className="payment-right">
          <div className="payment-form">
            <h1 className="payment-title my-6">Payment Details</h1>
            <form>
              <div className="payment-method">
                <input type="radio" name="payment-method" id="method-1" required />
                <label for="method-1" className="payment-method-item">
                  <img src="../../commercial_bank.jpg" alt="CBE logo" />
                </label>
                <input type="radio" name="payment-method" id="method-2" required />
                <label for="method-2" className="payment-method-item">
                  <img src="../../bank_of_abyssina.jpg" alt="BOA logo" />
                </label>
                <input type="radio" name="payment-method" id="method-3" required />
                <label for="method-3" className="payment-method-item">
                  <img src="../../buna_bank.jpg" alt="Buna bank logo" />
                </label>
                <input type="radio" name="payment-method" id="method-4" required />
                <label for="method-4" className="payment-method-item">
                  <img src="../../tele_birr.jpg" alt="telebirr logo" />
                </label>
              </div>
              <label for="name" className='font-bold'>Payer Name</label><br />
              <input
                className="box"
                type="text"
                name="Pname"
                id="Pname"
                placeholder="Enter Name"
                required
              /><br />
              <label for="Pemail" className='font-bold'>Enter Email</label><br />
              <input
                className="box"
                type="text"
                name="Pemail"
                id="Pemail"
                placeholder="Enter Email"
                required
              /><br />
              <label for="phone" className='font-bold'>Enter Phone Number</label><br />
              <input
                className="box"
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter Phone Number"
                required
              /><br />
              <label for="cnum" className='font-bold'>Card Number</label><br />
              <input
                className="box"
                type="number"
                name="cardNumber"
                id="cardNumber"
                placeholder="1234 1234 1234 1234"
                required
              /><br />
              <div className="div1">
                <label for="cardex" className='font-bold'>Card expiry month</label><br />
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
                <label for="year" className='font-bold'>Card expiry year</label><br />
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
                <label for="CVC" className='font-bold'>Card CVC</label><br />
                <input
                  className="box2"
                  type="CVC"
                  name="cvc"
                  id="cvc"
                  placeholder="cvc"
                  required
                /><br />
              </div>
              <div className='flex gap-3 my-2'>
                <button className="bg-blue-500 font-semibold text-white py-2 px-4 hover:bg-blue-600 rounded-md">Pay Now</button>
                <a href='/portal/policy' className="bg-red-500 font-semibold text-white py-2 px-4 hover:bg-red-600 rounded-md cursor-pointer">Cancel</a>
              </div>
            </form>
          </div>
        </div>
      </main>
  )
}
export default PaymentInfo