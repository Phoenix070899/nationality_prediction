import React from 'react'

export interface IButtonProps {
    title: string;
    onClick?: () => void
}
function Button({title, onClick} : IButtonProps) {

  const handleKeydown = (e : React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter') {
      console.log('Enter')
    }
  }

  return (
   <button className='w-full h-10 bg-black text-white rounded cursor-pointer' onClick={onClick} onKeyDown={(e) => handleKeydown(e)}>
    {title}
   </button>
  )
}

export default Button