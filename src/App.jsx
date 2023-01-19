import React, { useState } from "react";
import Board from "./components/Board";
import { createContext } from "react";
import words from "./words";
import _ from 'lodash';

export const WordleContext = createContext()

function App() {
  const [word, setWord] = useState(_.sample(words).toUpperCase());
  const [guessWord, setGuessWord] = useState('');
  const [completedRows, setCompletedRows] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);

  function guessTheWord(char) {
    if (guessWord.length === 5) return
    setGuessWord(guessWord.concat(char))
  }

  function pressEnter() {
    if (guessWord.length < 5) return
    if (!words.includes(guessWord.toLowerCase())) return alert("Word not found !");
    if (guessWord == word) alert("You Won 😃 ");
    if(currentRow > 5) return alert('You have unfortunately exhausted all your trials. Press refresh to try again. ')

    setCurrentRow(currentRow + 1);
    setCompletedRows([...completedRows, currentRow]);
    setGuessWord("");
  }
  function backspace() {
    setGuessWord(guessWord.slice(0, guessWord.length - 1));
  }
  return (
    <WordleContext.Provider value={{ guessTheWord ,
      pressEnter ,
       completedRows ,
        currentRow, 
        word ,
        guessWord ,
         backspace }}>
<Board/>
    </WordleContext.Provider>
  );
}

export default App;
