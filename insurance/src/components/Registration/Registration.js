import React from 'react'
import PolicyType from './PolicyType'

function Register() {
    return (
        <form className='flex flex-col gap-7'>
            <h1 className="font-bold text-4xl my-12 mx-10">Application Form</h1>
            <div className='bg-gray-300 p-9 rounded-2xl w-4/5 mx-auto'>
                <h2 className='font-bold text-xl'>Basic information</h2>
                <div className='my-7 grid grid-cols-2 gap-4 mx-auto justify-center'>
                    <div className='flex gap-4 justify-end'>
                        <label for="full-name" className='font-semibold'>Full Name :</label>
                        <input type="text" id="full-name" placeholder='eg. Abebe Kebede' required className='w-1/2'/>
                    </div>
                    <div className='flex gap-4 justify-end'>
                        <label for="email" className='font-semibold'>Email :</label>
                        <input type="email" id="email" placeholder='eg. abebeKebede@test.com' required className='w-1/2'/>
                    </div>
                    <div className='flex gap-4 justify-end'>
                        <label for="BD" className='font-semibold'>Birth Day :</label>
                        <input type="date" id="BD" required className='w-1/2'/>
                    </div>
                    <div className='flex gap-4 justify-end'>
                        <label for="address" className='font-semibold'>Address :</label>
                        <input type="text" id="address" required placeholder='eg. Addis Ababa, Ethiopia' className='w-1/2'/>
                    </div>
                    <div className='flex gap-4 justify-end'>
                        <label for="phone" className='font-semibold'>Phone Number :</label>
                        <input type="text" id="phone" required placeholder='eg. 0911772772' className='w-1/2'/>
                    </div>
                    <div className='flex gap-4 justify-end'>
                        <label for="occupation" className='font-semibold'>Occupation</label>
                        <input type="text" id="occupation" required placeholder='eg. Engineer' className='w-1/2'/>
                    </div>
                    <div className='flex gap-4 justify-end w-full'>
                        <p className='font-semibold'>Gender :</p>
                        <div className='flex gap-3 w-1/2'>
                            <label for="Male"><input type="radio" name='gender' id="Male"/> Male</label>
                            <label for="Female"><input type="radio" name='gender' id="Female"/> Female</label>
                        </div>
                    </div>
                </div>
            </div>
            <PolicyType/>
        </form>
    )
}



export default Register