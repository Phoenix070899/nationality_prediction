import React from 'react'

export interface IButtonProps {
    title: string;
    onClick?: () => void
}
function Button({title, onClick} : IButtonProps) {
  return (
   <button className='w-full h-10 bg-black text-white rounded cursor-pointer' onClick={onClick}>
    {title}
   </button>
  )
}

export default Button