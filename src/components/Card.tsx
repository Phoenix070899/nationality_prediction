import React, { FC } from 'react'
import PropTypes from 'prop-types'
import Input from './Input'

export interface ICardProps {

}

function Card(props : ICardProps) {
  return (
    <div className='h-1/3 w-1/3 bg-white text-black flex flex-col items-center p-5 rounded'>
        <h1>Nationality Prediction</h1>
        <Input />
    </div>
  )
}


export default Card
