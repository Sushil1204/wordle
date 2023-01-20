import React from 'react'
import Key from './Key'

const keyboard = {
    line1: "QWERTYUIOP",
    line2: "ASDFGHJKL",
    line3: "ZXCVBNM",
}
const KeyBoard = () => {

  return (
      <div className='flex flex-col items-center w-100'>
          <div className='flex flex-col items-center border-2 py-2 px-2 rounded-md border-slate-70'>
            <div className='flex gap-1 my-1 w-fit'>
            {keyboard.line1.split("").map((char, index) => (
                <Key key={index} letter={char} />
              ))}
            </div>
            <div className='flex gap-1 my-1 w-fit'>
            {keyboard.line2.split("").map((char, index) => (
                <Key key={index} letter={char} />
              ))}
            </div>
            <div className='flex gap-1 my-1 w-fit'>
                <Key big={true} letter={'Enter'}/>
                {keyboard.line3.split("").map((char, index) => (
                <Key key={index} letter={char} />
              ))}
                <Key big={true} letter={'Backspace'}/>
            </div>
          </div>
    </div>
  )
}

export default KeyBoard