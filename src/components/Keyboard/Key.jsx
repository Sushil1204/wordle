import React, { useContext } from "react";
import { WordleContext } from "../../App";

const Key = (props) => {
  const {guessTheWord , backspace , pressEnter} = useContext(WordleContext)

    function handleClickForBig() {
        if (props.letter == "Enter") {
            pressEnter();
        } else {
            backspace();
        }
    }

  if (props.big) {
    return (
      <button
        className="grid place-items-center bg-[#d3d6da] text-black cursor-pointer font-bold text-xl m-2 rounded-md h-[58px] w-min px-4 border-2 border-solid border-slate-700 outline-none shadow-md hover:shadow-slate-500"
        onClick={()=>handleClickForBig()}
      >
        {props.letter}
      </button>
     );
  }
  return (
    <button
      className="grid place-items-center bg-[#d3d6da] text-black cursor-pointer font-bold text-xl m-2 rounded-md h-[58px] w-[43px] border-2 border-solid border-slate-700 outline-none shadow-md hover:shadow-slate-500"
      onClick={()=>guessTheWord(props.letter)}
    >
      {props.letter}
    </button>
  );
};

export default Key;
