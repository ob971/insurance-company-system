import React from 'react'

function Footer() {
  return (
    <footer className=' bg-blue-100 flex flex-wrap mt-14 p-5 justify-evenly'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"/>
      <div className="flex items-center">
          <img src="../../InsuranceLogo.png" alt="Insurance Logo" className="w-28"/>
          <p className="font-bold text-xl text-black">ABC Insurance</p>
      </div>
      <div>
        <h2 className='font-bold text-lg mb-4'>Quick Links</h2>
        <ul className='pl-0 text-black'>
          <li>About Us</li>
          <li>FAQs</li>
          <li>Latest News</li>
          <li>Gallery</li>
        </ul>
      </div>
      <div>
        <h2 className='font-bold text-lg mb-4'>For Feedback, Connect with us</h2>
        <ul className='flex flex-col gap-4 pl-0 text-black'>
          <li className='flex gap-4'><i className="fa-regular fa-envelope text-xl"></i>
            <ul className='pl-0'>
              <li>abc.info@abc.com</li>
              <li>abebeKebede@abc.com</li>
              <li>asterKassahun@abc.com</li>
            </ul>
          </li>
          <li className='flex gap-4'><i className="fa-solid fa-phone"></i>
            <ul className='pl-0'>
              <li>+251115570240</li>
              <li>+251911612604</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className='self-center gap-2'>
        <h2 className='font-bold text-lg mb-2'>Follow Us</h2>
        <div className='flex gap-4 text-xl text-black'>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
      <div className='w-full mt-9 -mb-3 font-semibold px-9 pr-24 flex justify-between text-sm text-black'>
        <p>Copyright ©2024 All rights reserved | ABC Insurance </p>
        <ul className='flex gap-5'>
          <li>Privacy & Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer