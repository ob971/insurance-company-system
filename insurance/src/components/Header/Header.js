'use client'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import './header.css'

function Header() {
    const router = useRouter();
    const changeNavigation = (btn) => {
        if (btn == "register") {
            router.push('/register');
        }
    };

    const url = usePathname().split("/");
    let navbar;
    if (url.includes("portal")) {
        navbar = 
        <nav className='self-end'>
            <ul className="flex gap-10 mb-0 text-bold">
                <li className={url.includes("policy") ? 'list-disc font-bold' : ''}><a href="/portal/policy" className='text-black'>My Policies</a></li>
                <li className={url.includes("claim") ? 'list-disc font-bold' : ''}><a href="/portal/claim" className='text-black'>File Claim</a></li>
                <li className={url.includes("pay") ? 'list-disc font-bold' : ''}><a href="/portal/pay" className='text-black'>Pay Premium</a></li>
                <li className={url.includes("contact") ? 'list-disc font-bold' : ''}><a href="/portal/contact" className='text-black'>Contact Us</a></li>
                <li className={url.includes("profile") ? 'list-disc font-bold' : ''}><a href="/portal/profile" className='text-black'>Profile</a></li>
            </ul>
        </nav>
    } else {
        navbar = <nav className="flex items-end space-x-8 self-end">
            <a href="/#products" className="text-600 font-semibold text-black">Products</a>
            <a href="/#about" className="text-600 font-semibold text-black">About Us</a>
            <a href="/contact" className="text-600 font-semibold text-black">Contact Us</a>
            <button className="px-4 py-2 text-white bg-blue-500 rounded font-semibold" onClick={() => changeNavigation("register")}>Register</button>
            <a href="/login" className="text-blue-500 flex gap-3 items-center font-bold">
                <img src="account.svg" alt="profile" width="30" height="30"/>
                Login</a>
        </nav>
    }


    return (
        <header className="navbar flex justify-between mx-5 px-8 py-3 items-end ">
        <a href='/' className='flex items-end'>
            <img src="../../InsuranceLogo.png" alt="Insurance Logo" className="w-24"/>
            <h1 className="font-bold text-2xl mb-0">ABC Insurance</h1>
        </a>
        {navbar}
        </header>
    )
}
    
export default Header