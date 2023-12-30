import React from 'react'

function Header() {
  return (
    <header className="navbar flex justify-between mx-5 px-8 py-3 items-end ">
      <div className="flex items-end">
          <img src="InsuranceLogo.png" alt="Insurance Logo" className="w-24"/>
          <h1 className="font-bold text-2xl">ABC Insurance</h1>
      </div>
      <nav>
          <ul className="flex gap-10">
              <li className="list-disc font-bold"><a href="">My Policies</a></li>
              <li><a href="">File Claim</a></li>
              <li><a href="">Pay Premium</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Profile</a></li>
          </ul>
      </nav>
    </header>
  )
}

export default Header