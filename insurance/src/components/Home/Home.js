'use client'
import React from 'react'
import "./home.css"
import { useRouter } from 'next/navigation';

function Home() {
  const router = useRouter();
  return (
    <div>
    <main className="container mx-auto">
        <div className='slogan my-2 mb-12'><div className="text-6xl bg-slate-800 bg-opacity-20 w-full h-full font-extrabold text-blue-500 justify-center flex items-center"><p className='w-3/5 text-center'>Manage your Insurance Effortlessly</p></div></div>
        <div id="about" className='h-screen flex flex-col justify-center'>
            <div className='text-center w-4/5 mx-auto border-b-2 border-blue-500 mb-14'>
                <h2 className='font-bold text-5xl mt-6'>Because Time Matters</h2>
                <blockquote className="mb-4 text-center text-lg px-12 py-12">Welcome to a new era of insurance management, where convenience meets control. Forget the hassle of paperwork and endless phone calls - with our innovative system, you can take charge of your policies, claims, and payments like never before.</blockquote>
            </div>
            <div className="flex items-center mb-8 w-4/5 mx-auto">
                <img src="umb.jpg" alt="pic" className="w-64 h-auto"/>
                <p className="ml-4 text-lg">Tired of feeling adrift in a sea of insurance paperwork? We get it. That's why we built, a digital life raft designed to streamline your coverage and empower you to take control. Ready to ditch the paper anchors and set sail for smoother insurance waters? Explore today. It's your compass to a clearer, simpler, and more empowering insurance experience.</p>
            </div>
        </div>
        <div className="cards flex gap-4 w-4/5 mx-auto flex-wrap">
            <h2 className="text-2xl font-bold my-5 w-full">Our Key Features</h2>
            <div className="card text-white bg-blue-500 px-4 py-4 mx-2 my-2 flex-1 rounded-lg flex flex-col gap-2 text-center">
                <h3 className="text-lg font-bold underline">Policy Portal</h3>
                <p>Access all your policy details instantly, from coverages to expiration dates, in one centralized location.</p>
            </div>
            <div className="card text-white bg-blue-500 px-4 py-4 mx-2 my-2 flex-1 rounded-lg flex flex-col gap-2 text-center">
                <h3 className="text-lg font-bold underline">Effortless Payments</h3>
                <p>Pay your premiums with ease</p>
            </div>
            <div className="card text-white bg-blue-500 px-4 py-4 mx-2 my-2 flex-1 rounded-lg flex flex-col gap-2 text-center">
                <h3 className="text-lg font-bold underline">Automated Reminders</h3>
                <p>Never miss a deadline again. Receive timely notifications for upcoming payments, policy renewals, and important updates</p>
            </div>
            <div className="card text-white bg-blue-500 px-4 py-4 mx-2 my-2 flex-1 rounded-lg flex flex-col gap-2 text-center">
                <h3 className="text-lg font-bold underline">Appointment Scheduling</h3>
                <p>Schedule appointments with insurance professionals directly through the system, at your convenience.</p>
            </div>
        </div>
        <div className='flex flex-col w-4/5 mx-auto my-14'>
            <h2 className="text-2xl font-bold my-5" id="products">Products</h2>
            <h3 className="text-xl font-bold">General Insurance</h3>
            <div className="general_insurance flex items-center mb-8">
                <img src="g2.jpg" alt="general_insurance" className="w-56 h-auto"/>
                <div className="ml-4">
                    <p>Imagine life as a thrilling rollercoaster. General Insurance is your trusty sidekick, ensuring you land on your feet even when the ride gets bumpy. It's not just about protecting your precious belongings (car, house, gadgets, you name it!), but also guarding you against unexpected liabilities.</p>
                    <button className="px-4 py-2 text-white bg-blue-500 rounded mt-4" onClick={() => router.push("/register")}>Schedule Appointment</button>
                </div>
            </div>
            <h3 className="text-xl font-bold">Life Insurance</h3>
            <div className="life_insurance flex items-center mb-8">
                <img src="OIP.jpg" alt="life insurance" className="w-56 h-auto"/>
                <div className="ml-4">
                    <p>Worried about tomorrow? Let's unlock a lifetime of protection and prosperity with our tailored life and health insurance plans. Imagine financial security blooming alongside your loved ones, all wrapped in a bouquet of peace and calm. Secure Your Future and Peace of Mind</p>
                    <button className="px-4 py-2 text-white bg-blue-500 rounded mt-4" onClick={() => router.push("/register")}>Schedule Appointment</button>
                </div>
            </div>
        </div>
    </main>
    </div>
  )
}

export default Home