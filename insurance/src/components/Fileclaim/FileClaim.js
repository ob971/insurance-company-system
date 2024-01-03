'use client'
import React from 'react'
import "./claim.css"
import { useRouter } from 'next/navigation';

function FileClaim() {
  const router = useRouter();
    const changeNavigation = () => {
        router.push('claim/claimform');
    };
  return (
    <main>
      <div className="split-container">
        <div className="left-half">
            <h1 className='font-bold text-2xl'>THE CLAIMS PROCESS</h1>
            <p>Please follow the steps and supply all necessary information to ensure that your claim is handled effectively.</p>
            <div className="claims-procedure">
              <p><strong>AUTO CLAIMS PROCEDURE</strong></p>
              <ul>
                <li>If possible, take photos of the scene of the accident, including the vehicles involved.</li>
                <li>Report the claim as soon as you are safely able to do so.</li>
                <li>For all claims that are reported, the customer must timely provide proof of loss. </li>
                <li>The customer, upon meeting the requirements set forth for such privileges, has the right to have his or her vehicle repaired at the garage of their choice.</li>
                <li>Client's shall get the consent of the insurer before taking further action on the vehicle involved in accident.</li>
              </ul>
            </div>
            <div className="claims-procedure">
              <p><strong>MARINE CLAIMS PROCEDURE</strong></p>
              <ul>
                <li>original marine insurance policy</li>
                <li>original packing list</li>
                <li>original bill of landing for sea mode of transport</li>
                <li>police report</li>
              </ul>
              <p>The remaining Classes of Claims will be handled/facilitated in accordance with the particular circumstances or nature of the accident.</p>
            </div>
        </div>
        <div className="split-line"></div>
        <div className="right-half">
          <h1 className='font-semibold text-lg'>Claims Form</h1>
          <p>No one ever wants to have to file a claim, but if an accident does happen, we make it as quick and easy as possible to get your business back on its feet. After you report a claim, you'll be contacted within 24 business hours by one of our dedicated claims professionals.</p>
          <button onClick={changeNavigation}>Report a Claim</button>
        </div>
      </div>
    </main>
  )
}

export default FileClaim