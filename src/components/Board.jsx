import React from 'react'
import Grid from './Grid/Grid'
import KeyBoard from './Keyboard/KeyBoard'

const Board = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='font-extrabold text-5xl m-4 text-center'>WORDLE</h1>
      <Grid />
      <KeyBoard/>
    </div>
  )
}

export default Board