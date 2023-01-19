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
      className="flex justify-center my-[2px] m-[2px] items-center  w-[62px] h-[62px] border-2 border-slate-700"
    >
      <p className="flex self-center mb-2 font-bold text-5xl">{letter}</p>
    </div>
  );
};

export default Box;
