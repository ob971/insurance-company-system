import React from 'react'

function Notification({title, detail}) {
  return (
    <div className='flex bg-blue-400 rounded-md gap-4 p-2 justify-between'>
        <h4 className='font-semibold'>{title}</h4>
        <p>{detail}</p>
    </div>
    )
}

export default Notification