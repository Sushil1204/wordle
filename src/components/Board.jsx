import React, { useState } from 'react'
import Grid from './Grid/Grid'
import Help from './Help'
import KeyBoard from './Keyboard/KeyBoard'
import Model from './Model'
import Navbar from './Navbar'

const Board = () => {
  const [help, setHelp] = useState(false)
  return (
    <>
    {help &&(
      <Model title="How to play !" setHelp={setHelp}>
        <Help/>
      </Model>
    )}
    <div className='min-w-[80vw]'>
     <Navbar setHelp={setHelp}/>
      <Grid />
      <KeyBoard/>
    </div>
    </>
  )
}

export default Board