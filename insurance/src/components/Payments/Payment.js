'use client'
import {React, useState} from 'react'
import "./payment.css"
import {useRouter } from 'next/navigation'


function Payment() {
  const router = useRouter();
  const [payMethod, setPayMethod] = useState(true)
  return (
    <main>
      <h1 className='font-bold text-xl my-5 text-center'>Choose your insurance type and complete the payment securely.</h1>
      <form>
          <label for="name" className='font-bold'>Full Name</label><br />
          <input className="box" type="text" name="fullName" id="fullName" placeholder="Enter Full Name" required/><br />
          <label for="email" className='font-bold'>Email</label><br />
          <input className="box" type="email" name="email" id="email" placeholder="Enter Email" required/><br />
          <label for="phone" className='font-bold'>Enter Phone Number</label><br />
          <input className="box" type="tel" name="phone" id="phone" placeholder="Enter Phone Number" required/><br/>
          <label for="policyNumber" className='font-bold'>Policy ID</label><br />
          <input className="box" type="text" name="policyNumber" id="policyNumber" placeholder="Enter Policy Number" required/><br />
          <label for="amount" className='font-bold'>Payment Amount</label><br />
          <input className="box" type="number" name="amount" id="amount" placeholder="Enter Amount" required/><br />
          {/* <h2 className='font-bold'>Select Insurance Type</h2>
          <div className="insurance-buttons mt-2">
            <label><input className="insurance-button" type="radio" name='insurance-type' value="Health"/>Health</label>
            <label><input className="insurance-button" type="radio" name='insurance-type' value="Car"/>Car</label>
            <label><input className="insurance-button" type="radio" name='insurance-type' value="Animal"/>Animal</label>
            <label><input className="insurance-button" type="radio" name='insurance-type' value="House"/>House</label>
            <label><input className="insurance-button" type="radio" name='insurance-type' value="Life"/>Life</label>
          </div> */}
          {/* <input className="insurance-type-input" type="hidden" name="insuranceType" id="insuranceType"/> */}
          {/* <h2 className='font-bold'>Select Payment Frequency</h2>
          <select className="box" id="paymentFrequency" name="paymentFrequency">
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option></select><br /> */}

          {payMethod && <div className='border-t-4 border-blue-500'>
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
          </div>}
          {!payMethod && <div className='my-4 pt-3 border-t-4 border-blue-500'>
            <p className='font-semibold mb-4'>Please make the payment to the following account number: 100035463673(CBE)</p>
            <label for="transactionId" className='font-semibold'>Please enter the transaction ID after making the payment:</label>
            <input className="box" type='text' id='transactionId' required/>
          </div>}

          <label for="automaticDeduction" className='font-semibold'>Automatic Deduction for Civil Servants</label><br />
          <input type="checkbox" id="automaticDeduction" name="automaticDeduction"/>
          <label for="automaticDeduction">Enable automatic deduction from salary</label><br />
          <div className='flex gap-x-4 gap-y-2 flex-wrap my-4'>
            {/* <h2 className='w-full font-bold'>Select Payment Method</h2> */}
            <button className="bg-blue-500 font-semibold text-white py-2 px-4 hover:bg-blue-600 rounded-md" onClick={()=>{setPayMethod(true)}}>Pay Now</button>
            <button href="" className="bg-blue-500 font-semibold text-white py-2 px-4 hover:bg-blue-600 rounded-md" onClick={()=>{setPayMethod(false)}}>Payment by Transfer</button>
            <a href='/portal/policy' className="bg-red-500 font-semibold text-white py-2 px-4 hover:bg-red-600 rounded-md cursor-pointer">Cancel</a>
          </div>
      </form>
      {/*<section className="payment-details">
        <h2>Payment Details</h2>
      </section>
      <section className="payment-summary">
        <h2>Payment Summary</h2>
        <div className="payment-summary-item">
          <span className="payment-summary-name">Insurance Type</span>
          <span className="payment-summary-price" id="selectedInsurance">Not selected</span>
        </div>
        <div className="payment-summary-divider"></div>
        <div className="payment-summary-item">
          <span className="payment-summary-name">Total Amount</span>
          <span className="payment-summary-price" id="paymentAmount">Not specified</span>
        </div>
        <div className="payment-summary-divider"></div>
        <div className="payment-summary-item">
          <span className="payment-summary-name">Payment Frequency</span>
          <span className="payment-summary-price" id="paymentFrequencySummary">Not specified</span>
        </div>
        <div className="payment-summary-divider"></div>
        <div className="payment-summary-item">
          <span className="payment-summary-name">Automatic Deduction</span>
          <span className="payment-summary-price" id="automaticDeductionSummary">Not specified</span>
        </div>
      </section> */}
    </main>
  )
}
export default Payment