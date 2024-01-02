import React from 'react'

function Home() {
  return (
    <div><header class="flex justify-between items-center py-4 px-8 bg-gray-100">
    <div class="flex items-center">
        <img src="./Assets/logo.jpg" alt="Logo" width="30" height="30" class="logo"/>
        <p class="ml-2 text-xl">Insurance System</p>
    </div>
    <nav class="flex items-center space-x-8">
        <a href="#products" class="text-600">Products</a>
        <a href="#about" class="text-600">About Us</a>
        <a href="#" class="text-600">Contact Us</a>
        <button class="px-4 py-2 text-white bg-blue-600 rounded">Register</button>
        <img src="account.svg" alt="profile" width="30" height="30"/>
        <a href="#" class="text-blue-600">Login</a>
    </nav>
</header>
<div class="line"></div>
<main class="container mx-auto py-8 px-4">
    <p class="text-4xl font-bold mb-4" style="background-image: url(InsHomehero.jpg);
    background-size:cover;
    height: 400px;
    color: blueviolet;
    font-size: 4rem;
    display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'DM Sans', sans-serif;">Manage your Insurance Effortlessly</p>
    <blockquote class="ml-1/4 font-serif mb-4 text-center">Welcome to a new era of insurance management, where convenience meets control. Forget the hassle of paperwork and endless phone calls – with our innovative system,<br> you can take charge of your policies, claims, and payments like never before.</blockquote>
    <div class="description flex items-center mb-8">
        <img src="umb.jpg" alt="pic" class="w-64 h-auto"/>
        <p id="about" class="ml-4">Tired of feeling adrift in a sea of insurance paperwork? We get it. That's why we built, a digital life raft designed to streamline your coverage and empower you to take control. Ready to ditch the paper anchors and set sail for smoother insurance waters? Explore today. It's your compass to a clearer, simpler, and more empowering insurance experience.</p>
    </div>
    <h2 class="text-2xl font-bold my-5">Our Key Features</h2>
    <div class="cards flex gap-4">
        <div class="card text-white bg-blue-600 px-4 py-2 mx-2 my-2 flex-1">
            <h3 class="text-xl font-bold">Policy Portal</h3>
            <p>Access all your policy details instantly, from coverages to expiration dates, in one centralized location.</p>
        </div>
        <div class="card text-white bg-blue-600 px-4 py-2 mx-2 my-2 flex-1">
            <h3 class="text-xl font-bold">Effortless Payments</h3>
            <p>Pay your premiums with ease</p>
        </div>
        <div class="card text-white bg-blue-600 px-4 py-2 mx-2 my-2 flex-1">
            <h3 class="text-xl font-bold">Automated Reminders</h3>
            <p>Never miss a deadline again. Receive timely notifications for upcoming payments, policy renewals, and important updates</p>
        </div>
        <div class="card text-white bg-blue-600 px-4 py-2 mx-2 my-2 flex-1">
            <h3 class="text-xl font-bold">Appointment Scheduling</h3>
            <p>Schedule appointments with insurance professionals directly through the system, at your convenience.</p>
        </div>
    </div>
    <h2 class="text-2xl font-bold my-5 m-5" id="products">Products</h2>
    <h3 class="text-2xl font-bold m-2">General Insurance</h3>
    <div class="general_insurance flex items-center mb-8">
        <img src="g2.jpg" alt="general_insurance" class="w-56 h-auto"/>
        <div class="ml-4">
            <p>Imagine life as a thrilling rollercoaster. General Insurance is your trusty sidekick, ensuring you land on your feet even when the ride gets bumpy. It's not just about protecting your precious belongings (car, house, gadgets, you name it!), but also guarding youagainst unexpected liabilities.</p>
            <button class="px-4 py-2 text-white bg-blue-600 rounded">Schedule Appointment</button>
        </div>
    </div>
    <h3 class="text-2xl font-bold">Life Insurance</h3>
    <div class="life_insurance flex items-center mb-8">
        <img src="OIP.jpg" alt="life insurance" class="w-56 h-auto m-2"/>
        <div class="ml-4">
            <p>Worried about tomorrow? Let's unlock a lifetime of protection and prosperity with our tailored life and health insurance plans. Imagine financial security blooming alongside your loved ones, all wrapped in a bouquet of peace and calm. Secure Your Future and Peace of Mind</p>
            <button class="px-4 py-2 text-white bg-blue-600 rounded">Schedule Appointment</button>
        </div>
    </div>
</main>
</div>
  )
}

export default Home