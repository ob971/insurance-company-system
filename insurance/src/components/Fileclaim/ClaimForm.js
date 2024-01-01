import React from 'react'
import "./claim.css"

function ClaimForm() {
  return (
     <main>
        <div className="claim-form-container">
        <div className="claim-form">
        <h1>Claim Form</h1>
            <form id="claimForm" enctype="multipart/form-data">
                <div className="form-group">
                <div>
                    <label for="insuredName">Full Name:</label>
                    <input type="text" id="insuredName" required/>
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" required/>
                </div>
                </div>
                <div className="form-group">
                <div>
                    <label for="contactNumber">Contact Number:</label>
                    <input type="tel" id="contactNumber" required/>
                </div>
                <div>
                    <label for="policyNumber">Policy Number:</label>
                    <input type="text" id="policyNumber" required/>
                </div>
                </div>
                <div className="form-group">
                <label for="claimDate">Claim Date:</label>
                <input type="date" id="claimDate" required/>
                </div>
                <label for="claimType">Select Claim Type:</label>
                <div className="checkbox-group">
                <label>
                    <input type="checkbox" id="motorVehicle" name="claimType" value="motorVehicle"/>
                    Motor Vehicle
                </label>
                <label>
                    <input type="checkbox" id="homeProperty" name="claimType" value="homeProperty"/>
                    Home and Property
                </label>
                <label>
                    <input type="checkbox" id="healthLife" name="claimType" value="healthLife"/>
                    Health and Life
                </label>
                <label>
                    <input type="checkbox" id="marine" name="claimType" value="marine"/>
                    Marine
                </label>
                </div>
                <label for="incidentDetails">Incident Details:</label>
                <textarea id="incidentDetails" rows="4" required></textarea>
                <label for="additionalInfo">Additional Information:</label>
                <textarea id="additionalInfo" rows="4"></textarea>
                <label for="fileUpload">Upload Files:</label>
                <input type="file" id="fileUpload" multiple accept="image/*, video/*, application/pdf"/>
                <div className="button-group">
                <button type="button" className="submit-button" onclick="submitClaimForm()">Submit</button>
                <button type="button" className="cancel-button" onclick="cancelClaimForm()">Cancel</button>
                </div>
            </form>
            </div>
        </div>
    </main>
  )
}

export default ClaimForm