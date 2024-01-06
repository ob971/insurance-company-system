'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import PolicyPreview from './PolicyPreview'

function PolicyList() { 
    const router = useRouter();
    let policiesFromDB = [{policyType: "Motor Vehicle", policyId: "1234-5678", annualPremium: "10,000 ETB", nextPaymentDate: "02/01/2024", status: 0},
                        {policyType: "Property", policyId: "1234-5678", annualPremium: "50,000 ETB", nextPaymentDate: "02/01/2024", status: 2},
                        {policyType: "Life Insurance", policyId: "1234-5678", annualPremium: "10,000 ETB", nextPaymentDate: "02/01/2024", status: 1}]

    let policies = []
    for (let i = 0; i < policiesFromDB.length; i++) {
        policies.push(<PolicyPreview type={policiesFromDB[i].policyType} id={policiesFromDB[i].policyId} premium={policiesFromDB[i].annualPremium} date={policiesFromDB[i].nextPaymentDate} status={policiesFromDB[i].status}/>)
    }
    return (
        <div>
            <h1 className="font-bold text-6xl my-14 mx-10">Welcome, Abebe</h1>
            <div className="w-4/5 mx-auto flex flex-col gap-11 p-5">
                {policies}
                <button className='button rounded-xl bg-blue-500 py-2 px-4 font-bold text-white w-max self-end' onClick={() => router.push("/portal/policy/newPolicy")}>
                    Add New Policy
                </button>
            </div>
            
    </div>
    )
}

export default PolicyList
