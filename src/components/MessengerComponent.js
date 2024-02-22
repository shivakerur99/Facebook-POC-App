import React from 'react'

const MessengerComponent = ({ text }) => {
  return (
    <div className='p-2 bg-cyan-100 border rounded-xl max-w-80 text-sm text-black font-sans'>
     {text}
    </div>
  )
}

export default MessengerComponent;
