import React from 'react'

function Row({caption, value, r}) {
    return (
        <tr className={`${(r%2==0) ? 'bg-blue-200':""}`}>
            <td className='border-r-4 border-blue-500 ps-5 w-1/2 font-medium'>{caption}</td>
            <td className='ps-5 w-1/2 py-3'>{value}</td>
        </tr>
    )
}

export default Row