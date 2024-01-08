import React from 'react'

function Field({caption, value}) {
  return (
        <div className='grid grid-cols-2 gap-5 text-lg'><h3 className='font-bold text-right'>{caption}:</h3><p>{value}</p></div>
    )
}

export default Field