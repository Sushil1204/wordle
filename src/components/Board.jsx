import React, { useContext, useState } from 'react'
import Grid from './Grid/Grid'
import Help from './Help'
import KeyBoard from './Keyboard/KeyBoard'
import Model from './Model'
import Navbar from './Navbar'
import { WordleContext } from '../App'

const Board = () => {
  const [help, setHelp] = useState(false)
  const {guessWord , word } = useContext(WordleContext)

  return (
    <>
    {help &&(
      <Model title="How to play !" setHelp={setHelp}>
        <Help/>
      </Model>
    )}
    <div className='min-w-screen'>
      <Navbar setHelp={setHelp}/>
        <Grid />
        {guessWord===word ? (<p className='text-bold text-black dark:text-white my-2 text-center'>Congratulations you won the game 🎉 🎉 <br /> Please refresh the page  </p>):(<KeyBoard/>)}
    </div>
    </>
  )
}

export default Board