import React, { useState } from "react";
import Board from "./components/Board";
import { createContext } from "react";
import words from "./words";
import _ from "lodash";
import { ThemeProvider } from "./Context/ThemeContext";
import Model from "./components/Model";

export const WordleContext = createContext();

function App() {
  const [word, setWord] = useState(_.sample(words).toUpperCase());
  const [guessWord, setGuessWord] = useState("");
  const [completedRows, setCompletedRows] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);

  function guessTheWord(char) {
    if (guessWord.length === 5) return;
    setGuessWord(guessWord.concat(char));
  }

  function pressEnter() {

    if (currentRow >= 5) {
      window.location.reload(true)
      return (
        alert('You have unfortunately exhausted all your trials. Press refresh to try again. ')
    )}
    if(guessWord.length<5) return
    if(!words.includes(guessWord.toLocaleLowerCase())) return alert('Word not found')
    setCurrentRow(currentRow+1)
    setCompletedRows([...completedRows ,currentRow])
    setGuessWord('')
    

  }
  function backspace() {
    setGuessWord(guessWord.slice(0, guessWord.length - 1));
  }
  return (
    <ThemeProvider>
      <WordleContext.Provider
        value={{
          guessTheWord,
          pressEnter,
          completedRows,
          currentRow,
          word,
          guessWord,
          backspace,
        }}
      >
        <div className="grid justify-center text-center min-h-screen m-0 p-0 dark:bg-zinc-800">
          <Board />
        </div>
      </WordleContext.Provider>
    </ThemeProvider>
  );
}

export default App;
