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
        className="w-fit px-4 h-14 bg-gray-200 hover:bg-gray-300 grid items-center rounded font-semibold cursor-pointer border border-slate-700 mr-3 hover:shadow-xl hover:shadow-slate-800"
        onClick={()=>handleClickForBig()}
      >
        {props.letter}
      </button>
     );
  }
  return (
    <button
      className="w-9 h-14 bg-gray-200 hover:bg-gray-300 grid items-center rounded font-semibold cursor-pointer border border-slate-700 mr-3 hover:shadow-xl hover:shadow-slate-800"
      onClick={()=>guessTheWord(props.letter)}
    >
      {props.letter}
    </button>
  );
};

export default Key;
