import React from 'react'
import "./claim.css"

function ClaimForm() {
  return (
     <main>
        <div className="claim-form-container mt-6">
            <div className="claim-form">
                <h1 className='font-semibold text-xl'>Claim Form</h1>
                <form id="claimForm" enctype="multipart/form-data">
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label for="insuredName" className='font-semibold'>Full Name:</label>
                            <input type="text" id="insuredName" required/>
                        </div>
                        <div>
                            <label for="email" className='font-semibold'>Email:</label>
                            <input type="email" id="email" required/>
                        </div>
                        <div>
                            <label for="contactNumber" className='font-semibold'>Contact Number:</label>
                            <input type="tel" id="contactNumber" required/>
                        </div>
                        <div>
                            <label for="policyNumber" className='font-semibold'>Policy Number:</label>
                            <input type="text" id="policyNumber" required/>
                        </div>
                        <div>
                            <label for="claimDate" className='font-semibold'>Claim Date:</label>
                            <input type="date" id="claimDate" required/>
                        </div>
                    </div>
                    <div className="flex p-4 gap-3 gap-x-6 flex-wrap">
                        <legend className='font-semibold text-left w-full'>Select Claim Type:</legend>
                        <label>
                            <input type="radio" id="motorVehicle" name="claimType" value="motorVehicle" className='w-min mr-2' required/>
                            Motor Vehicle
                        </label>
                        <label>
                            <input type="radio" id="homeProperty" name="claimType" value="homeProperty" className='w-min mr-2' required/>
                            Home and Property
                        </label>
                        <label>
                            <input type="radio" id="healthLife" name="claimType" value="healthLife" className='w-min mr-2' required/>
                            Health and Life
                        </label>
                        <label>
                            <input type="radio" id="marine" name="claimType" value="marine" className='w-min mr-2' required/>
                            Marine
                        </label>
                    </div>
                    <label for="incidentDetails" className='font-semibold'>Incident Details:</label>
                    <textarea id="incidentDetails" rows="4" required></textarea>
                    <label for="additionalInfo" className='font-semibold'>Additional Information:</label>
                    <textarea id="additionalInfo" rows="4"></textarea>
                    <label for="fileUpload" className='font-semibold'>Upload Files:</label>
                    <input type="file" id="fileUpload" multiple accept="image/*, video/*, application/pdf"/>
                    <div className="button-group">
                        <button className="bg-blue-500 rounded-xl px-5 py-2 font-bold">Submit</button>
                        <button className="bg-red-500 rounded-xl px-5 py-2 font-bold">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
  )
}

export default ClaimForm