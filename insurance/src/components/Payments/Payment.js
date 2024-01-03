import React from 'react'
import "./payment.css"

function Payment() {
  return (
     <main>
        
    <h1>Choose your insurance type and complete the payment securely.</h1>
    
    <form>
      <label for="name">Your Full Name</label><br />
      <input
        className="box"
        type="text"
        name="fullName"
        id="fullName"
        placeholder="Enter Full Name"
        required
      /><br />
      <label for="email">Your Email</label><br />
      <input
        className="box"
        type="email"
        name="email"
        id="email"
        placeholder="Enter Email"
        required
      /><br />
      <label for="policyNumber">Policy Number</label><br />
      <input
        className="box"
        type="text"
        name="policyNumber"
        id="policyNumber"
        placeholder="Enter Policy Number"
        required
      /><br />
      <label for="amount">Payment Amount</label><br />
      <input
        className="box"
        type="number"
        name="amount"
        id="amount"
        placeholder="Enter Amount"
        required
      /><br />
      <h2>Select Insurance Type</h2>
      <div className="insurance-buttons">
        <button
          className="insurance-button"
          type="button"
          onclick="selectInsurance('Health')"
          data-type="Health"
        >
          Health
        </button>
        <button
          className="insurance-button"
          type="button"
          onclick="selectInsurance('Car')"
          data-type="Car"
        >
          Car
        </button>
        <button
          className="insurance-button"
          type="button"
          onclick="selectInsurance('Animal')"
          data-type="Animal"
        >
          Animal
        </button>
        <button
          className="insurance-button"
          type="button"
          onclick="selectInsurance('House')"
          data-type="House"
        >
          House
        </button>
        <button
          className="insurance-button"
          type="button"
          onclick="selectInsurance('Life')"
          data-type="Life"
        >
          Life
        </button>
      </div>
      <input
        className="insurance-type-input"
        type="hidden"
        name="insuranceType"
        id="insuranceType"
      />
      <h2>Select Payment Frequency</h2>
      <select className="box" id="paymentFrequency" name="paymentFrequency">
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option></select
      ><br />
      <label for="automaticDeduction"
        >Automatic Deduction for Civil Servants</label
      ><br />
      <input
        type="checkbox"
        id="automaticDeduction"
        name="automaticDeduction"
      />
      <label for="automaticDeduction"
        >Enable automatic deduction from salary</label
      ><br />
      <h2>Select Payment Method</h2>
       <button className="btn" type="button" onclick="validateAndSubmit()">
        Pay Now
      </button>
      <button className="btn" type="button" onclick="paymentByTransfer()">
        Payment by Transfer</button>
<button className="btn" type="button" onclick="redirectToHome()">
  Close
</button>
    </form>
    <section className="payment-details">
      <h2>Payment Details</h2>
    </section>
    <section className="payment-summary">
      <h2>Payment Summary</h2>
      <div className="payment-summary-item">
        <span className="payment-summary-name">Insurance Type</span>
        <span className="payment-summary-price" id="selectedInsurance"
          >Not selected</span
        >
      </div>
      <div className="payment-summary-divider"></div>
      <div className="payment-summary-item">
        <span className="payment-summary-name">Total Amount</span>
        <span className="payment-summary-price" id="paymentAmount"
          >Not specified</span
        >
      </div>
      <div className="payment-summary-divider"></div>
      <div className="payment-summary-item">
        <span className="payment-summary-name">Payment Frequency</span>
        <span className="payment-summary-price" id="paymentFrequencySummary"
          >Not specified</span
        >
      </div>
      <div className="payment-summary-divider"></div>
      <div className="payment-summary-item">
        <span className="payment-summary-name">Automatic Deduction</span>
        <span className="payment-summary-price" id="automaticDeductionSummary"
          >Not specified</span
        >
      </div>
    </section>
    </main>
       )
    }
    export default Payment