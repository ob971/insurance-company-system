import React from 'react'

function ClaimHistory({id, claimDate, reason, amount, paymentDate, status, paymentId,r}) {
    return (
        <tr className={`${(r%2==0) ? 'bg-blue-200':""}`}>
            <td className='border-r-4 border-blue-500 p-3'>{id}</td>
            <td className='border-r-4 border-blue-500 ps-3'>{claimDate}</td>
            <td className='border-r-4 border-blue-500 ps-3'>{reason}</td>
            <td className='border-r-4 border-blue-500 ps-3'>{amount}</td>
            <td className='border-r-4 border-blue-500 ps-3'>{paymentDate}</td>
            <td className='border-r-4 border-blue-500 ps-3'>{status}</td>
            <td className='ps-3'>{paymentId}</td>
        </tr>
    )
}

export default ClaimHistory