'use client'
import React from 'react'
import "./payment.css"
import {useRouter } from 'next/navigation'


function Payment() {
  const router = useRouter();
  return (
    <main>
      <h1 className='font-bold text-lg my-5 text-center'>Choose your insurance type and complete the payment securely.</h1>
      <form>
          <label for="name" className='font-bold'>Full Name</label><br />
          <input className="box" type="text" name="fullName" id="fullName" placeholder="Enter Full Name" required/><br />
          <label for="email" className='font-bold'>Email</label><br />
          <input className="box" type="email" name="email" id="email" placeholder="Enter Email" required/><br />
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
          <input className="insurance-type-input" type="hidden" name="insuranceType" id="insuranceType"/>
          {/* <h2 className='font-bold'>Select Payment Frequency</h2>
          <select className="box" id="paymentFrequency" name="paymentFrequency">
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option></select><br /> */}
          <label for="automaticDeduction" className='font-semibold'>Automatic Deduction for Civil Servants</label><br />
          <input type="checkbox" id="automaticDeduction" name="automaticDeduction"/>
          <label for="automaticDeduction">Enable automatic deduction from salary</label><br />
          <div className='flex gap-x-4 gap-y-2 flex-wrap my-4'>
            <h2 className='w-full font-bold'>Select Payment Method</h2>
            <button className="bg-blue-500 font-semibold text-white py-2 px-4 hover:bg-blue-600 rounded-md" onClick={()=>{router.push('/portal/pay/paymentinfo')}}>Pay Now</button>
            <button href="" className="bg-blue-500 font-semibold text-white py-2 px-4 hover:bg-blue-600 rounded-md">Payment by Transfer</button>
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