import React from 'react'
import { useRouter } from 'next/navigation';

function PolicyPreview({type, id, premium, date, status}) {
    const router = useRouter();
    const changeNavigation = () => {
        router.push('policy/policydetail');
    };

    let source = "../car.jpg"
    switch (type) {
        case "Motor Vehicle":
            source = '../car.jpg'
            break;
        case "Property":
            source = '../house.jpg'
            break;
        case "Life Insurance":
            source = '../life_insurance.jpg'
            break;
    }

    return (
        <div className="flex justify-between bg-gray-300 p-8 rounded-2xl">
            <div className="flex flex-col justify-between items-start flex-grow">
                <div className="border-l-4 border-blue-500 px-3 py-2 w-11/12 bg-blue-100">
                    <p><span className="inline font-bold">Policy Type:</span> {type}</p>
                    <p><span className="inline font-bold">Policy ID:</span> {id}</p>
                    <div className="flex justify-between">
                        <p><span className="inline font-bold">Annual Premium:</span> {premium}</p>
                        <p className={`${status >= 2? "text-red-500 font-bold":""}`}><span className="inline font-bold">Next Payment Date:</span> {date}</p>
                    </div>
                </div>
                <button className='bg-blue-500 rounded-xl p-2 font-bold text-white' onClick={changeNavigation}>
                    Policy Details
                </button>
            </div>
            <img className='h-full w-1/3 aspect-[3/2] object-cover' src={source}/>
        </div>
    )
}

export default PolicyPreview