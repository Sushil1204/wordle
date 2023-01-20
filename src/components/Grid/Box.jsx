import React, { useContext, useEffect, useState } from "react";
import { WordleContext } from "../../App";

const Box = ({id,rowId}) => {
  const [letter, setLetter] = useState('');
  const [completed, setCompleted] = useState(true);
  const [colors, setColor] = useState({ back: "white", font: "black" });
  const {guessWord , word , currentRow , completedRows} = useContext(WordleContext)
  const style = {
    backgroundColor: colors.back,
    color: colors.font,
  };

  function changeColors(){
    const arrayWord = word.split('')
    if(arrayWord.includes(letter)){
        if (arrayWord[id]===letter){  
            return setColor({back:'lightgreen' , font:'white'})
        }
        return setColor({back:'gold', font:'white'})
    }
    return setColor({back:"grey" , font:"white"})
}

  useEffect(()=>{   
    if(currentRow === rowId){
        setLetter(guessWord[id])
    }
    if(completedRows.includes(rowId) && completed){
        changeColors()
        setCompleted(false)
    }
  }, [guessWord, completedRows])
  
  return (
    <div
      style={style}
      className="flex justify-center p-0 m-0 items-center  w-14 h-14 border-2 border-slate-700"
    >
      <p className="flex place-self-center mb-2 font-bold text-3xl">{letter}</p>
    </div>
  );
};

export default Box;
