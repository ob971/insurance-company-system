import React from 'react'

function PaymentHistory({date, id, amount, reason, transactionMethod, r}) {
    return (
        <tr className={`${(r%2==0) ? 'bg-blue-200':""}`}>
            <td className='border-r-4 border-blue-500 p-3'>{date}</td>
            <td className='border-r-4 border-blue-500 ps-3'>{id}</td>
            <td className='border-r-4 border-blue-500 ps-3'>{amount}</td>
            <td className='border-r-4 border-blue-500 ps-3'>{reason}</td>
            <td className='ps-3'>{transactionMethod}</td>
        </tr>
    )
}

export default PaymentHistory