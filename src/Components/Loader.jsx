import React from 'react'

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-52 sm:h-60 md:h-72 bg-[#3e2f56]">
    <div className="flex space-x-2">
      <span className="w-2 h-2 bg-[#e8c1c5] rounded-full animate-bounce"></span>
      <span className="w-2 h-2 bg-[#e8c1c5] rounded-full animate-bounce [animation-delay:-0.2s]"></span>
      <span className="w-2 h-2 bg-[#e8c1c5] rounded-full animate-bounce [animation-delay:-0.4s]"></span>
    </div>
  </div>
  )
}

export default Loader