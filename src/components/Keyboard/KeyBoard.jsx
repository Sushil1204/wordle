import React from 'react'
import Key from './Key'

const KeyBoard = () => {
    const set1 = ['Q', 'W' ,'E','R','T','Y','U','I','O','P']
    const set2 =['A','S','D','F','G','H','J','K','L']
    const set3 =['Z','X','C','V','B','N','M']
  return (
      <div className='border-2 border-solid border-slate-700 w-min rounded-md items-center justify-center mx-auto'>
          <div className='flex flex-row justify-center m-0'>
              {set1.map((char,index)=> <Key key={index} letter={char}/>)}
          </div>
          <div className='flex flex-row justify-center m-0'>
              {set2.map((char,index)=> <Key key={index} letter={char}/>)}
          </div>
          <div className='flex flex-row justify-center m-0'>
              <Key big={true} letter={'Enter'}/>
              {set3.map((char, index) => <Key key={index} letter={char} />)}
              <Key big={true} letter={'Backspace'}/>
          </div>
    </div>
  )
}

export default KeyBoard