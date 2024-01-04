'use client'
import React, { useState } from 'react'

function PolicyType() {
  const forms = [
      <div className='my-7 grid grid-cols-2 gap-4 mx-auto justify-center text-right'>
          <div className='flex gap-4 justify-end'>
              <label for="plate" className='font-semibold'>Plate Number :</label>
              <input type="number" id="plate" className='h-max'/>
          </div>
          <div className='flex gap-4 justify-end'>
              <label for="chasis" className='font-semibold'>Chasis Number :</label>
              <input type="text" id="chasis" className='h-max'/>
          </div>
          <div className='flex gap-4 justify-end'>
              <label for="engine" className='font-semibold'>Engine Number :</label>
              <input type="text" id="engine" className='h-max'/>
          </div>
          <div className='flex gap-4 justify-end'>
              <label for="vehicle" className='font-semibold'>Vehicle Type :</label>
              <input type="text" id="vehicle" className='h-max'/>
          </div>
          <div className='flex gap-4 justify-end'>
              <label for="year" className='font-semibold'>Year of Manufacture :</label>
              <input type="number" id="year" className='h-max'/>
          </div>
          <div className='flex gap-4 justify-end'>
              <label for="capacity" className='font-semibold'>Carring Capacity :</label>
              <input type="text" id="capacity" className='h-max'/>
          </div>
          <div className='flex gap-4 justify-end'>
              <label for="power" className='font-semibold'> Horse Power :</label>
              <input type="text" id="power" className='h-max'/>
          </div>
          <div className='flex gap-4 justify-end'>
              <label for="purchased" className='font-semibold'>Year Purchased :</label>
              <input type="number" id="purchased" className='h-max'/>
          </div>
          <div className='flex gap-4 justify-end'>
              <label for="price" className='font-semibold'>Price Paid by Purchaser :</label>
              <input type="number" id="price" className='h-max'/>
          </div>
          <div className='flex gap-4 justify-end'>
              <label for="Estimate" className='font-semibold'>Propser's Present Estimate Value :</label>
              <input type="number" id="Estimate" className='h-max'/>
          </div>
      </div>,
      <div className='my-7 grid grid-cols-2 gap-4 mx-auto justify-center text-right'>
          <div className='flex gap-4 justify-end'>
              <label for="assetType" className='font-semibold'>Asset Type :</label>
              <input type="text" id="assetType" className='h-max'/>
          </div>
          <div className='flex gap-4 justify-end'>
              <label for="assetCity" className='font-semibold'>Asset's City :</label>
              <input type="text" id="assetCity" className='h-max'/>
          </div>
          <div className='flex gap-4 justify-end'>
              <label for="sub-city" className='font-semibold'>Sub city of The Asset :</label>
              <input type="text" id="sub-city" className='h-max'/>
          </div>
          <div className='flex gap-4 justify-end'>
              <label for="kebele" className='font-semibold'>Kebele of The Asset :</label>
              <input type="text" id="kebele" className='h-max'/>
          </div>
          <div className='flex gap-4 justify-end'>
              <label for="area" className='font-semibold'>Total Area :</label>
              <input type="number" id="area" className='h-max'/>
          </div>
          <div className='flex gap-4 justify-end'>
              <label for="value" className='font-semibold'>Proposer's Present Estimate Value :</label>
              <input type="number" id="value" className='h-max'/>
          </div>
      </div>,
      <div className='my-7 grid grid-cols-2 gap-4 mx-auto justify-center text-right'>
          <div className='flex gap-4 justify-end'>
              <label for="insured-name" className='font-semibold'>Insured's Full Name :</label>
              <input type="text" id="insured-name" required className='w-1/2'/>
          </div>
          <div className='flex gap-4 justify-end'>
              <label for="insured-age" className='font-semibold'>Insured's Age :</label>
              <input type="text" id="insured-age" required className='w-1/2'/>
          </div>
          <div className='flex gap-4 justify-end'>
              <label for="insured-occupation" className='font-semibold'>Insured's Occupation :</label>
              <input type="text" id="insured-occupation" required className='w-1/2'/>
          </div>
      </div>];
  const [index, setIndex] = useState(0);
  function switchForm(e) {
      let key = e.target.innerText
      let parent = e.target.parentNode
      let buttons = parent.childNodes;
      for (let index = 0; index < buttons.length; index++) {
          if (buttons[index] == e.target) {
              buttons[index].classList.add("bg-blue-500")
              buttons[index].classList.add("font-semibold")
              buttons[index].classList.add("text-white")
          } else {
              buttons[index].classList.remove("bg-blue-500")
              buttons[index].classList.remove("font-semibold")
              buttons[index].classList.remove("text-white")
          }
      }
      switch (key) {
          case "Motor Vehicle":
              setIndex(0)
              break;
          case "Fixed Asset":
              setIndex(1)
              break;
          case "Life Insurance":
              setIndex(2)
              break;
          default:
              break;
      }
    }
  let displayedForm = forms[index];
  return (
    <div>
      <div className='bg-gray-300 p-9 rounded-2xl w-4/5 mx-auto my-10'>
          <h3 className='font-bold text-lg'>Select Policy Type</h3>
          <div className='flex bg-blue-200 mt-8'>
              <div className='cursor-pointer p-2 bg-blue-500 font-semibold text-white' onClick={switchForm}>Motor Vehicle</div>
              <div className='p-2 cursor-pointer' onClick={switchForm}>Fixed Asset</div>
              <div className='p-2 cursor-pointer' onClick={switchForm}>Life Insurance</div>
          </div>
          {displayedForm}
          <a href='https://calendly.com/abenezerseifu123/physical-inspection' target="_blank" className='rounded-xl p-2 font-bold bg-blue-500 w-max mx-auto block text-white'>
              Schedule an appointment
          </a>
      </div>
      <div className="button mx-auto w-min flex gap-5 my-4">
        <button className="submit rounded-xl px-5 py-2 font-bold bg-blue-500 w-max text-white" type="submit">Submit</button>
        <button className="cancel rounded-xl px-5 py-2 font-bold bg-red-500 w-max text-white" type="submit">Cancel</button>
      </div>
  </div>
    )
}

export default PolicyType