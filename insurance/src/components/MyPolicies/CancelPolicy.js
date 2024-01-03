'use client'
import React, { useState } from 'react';

const CancelForm = () => {
  const [isOtherReasonVisible, setOtherReasonVisible] = useState(false);

  return (
    <div className='w-3/5 bg-gray-200 mx-auto rounded-md p-9 my-10'>
      <h2 className='font-bold text-xl text-center mb-10'>Insurance Policy Cancellation Form</h2>
      <form className="form flex flex-col gap-4 my-6 w-3/5 mx-auto">
        <label htmlFor="policyNumber" className='font-bold'>Policy Number:</label>
        <input className='h-7 rounded-md' type="text" id="policyNumber" name="policyNumber" required />
        <label htmlFor="policyHolderName" className='font-bold'>Policy Holder's Name:</label>
        <input className='h-7 rounded-md' type="text" id="policyHolderName" name="policyHolderName" required />
        <label htmlFor="cancellationReason" className='font-bold'>Reason for Cancellation:</label>
        <select className='h-7 rounded-md'
          id="cancellationReason"
          name="cancellationReason"
          onChange={(e) => {
            setOtherReasonVisible(e.target.value === "other");
          }}
          required
        >
          <option value="" disabled selected>
            Select a reason
          </option>
          <option value="changedCoverage">Changed Coverage Needs</option>
          <option value="betterDeal">Found a Better Deal</option>
          <option value="noLongerNeeded">No Longer Need Insurance</option>
          <option value="other">Other</option>
        </select>

        {isOtherReasonVisible && (
          <textarea className='w-1/2' id="otherReasonInput" rows="3" name="otherReasonInput" placeholder="Specify other reason" />
        )}

        <label htmlFor="cancellationDate" className='font-bold'>Cancellation Date:</label>
        <input className='h-7 rounded-md' type="date" id="cancellationDate" name="cancellationDate" required />

        <label className="flex gap-2 my-2 font-semibold">
          <input type="checkbox" name="acknowledgeTerms" className="agree" required />
          <span>I acknowledge and understand the cancellation terms and conditions.</span>
        </label>
        <div className='flex gap-4'>
          <button type="submit" className="bg-blue-500 rounded-xl px-5 py-2 font-bold text-white">Submit</button>
          <button type="button" className="bg-red-500 rounded-xl px-5 py-2 font-bold text-white" onClick={() => window.history.back()}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default CancelForm;