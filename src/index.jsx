import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { MarkdownInput } from "./components/MarkdownInput";
import { NoteDisplay } from "./components/NoteDisplay";
import { NotesIndex } from "./components/NotesIndex";
import anime from "animejs";
import "App.css";

const App = () => {
  const [input, setInput] = useState({});
  const [result, setResult] = useState({});
  const [noteList, setNoteList] = useState(
    Object.keys(localStorage).map((title) => {
      return JSON.parse(localStorage[title])
    })
  );
  const [reset, setReset] = useState(false);

  const inputValue = (defineInput) => {
    setResult(defineInput);
    console.log(result);
  };

  const pullLocalStorage = () => {
    console.log("pulling local storage")
    setNoteList(
      Object.keys(localStorage).map((title) => {
        return JSON.parse(localStorage[title])
      })
    )
    console.log(noteList)
  }

  const editNote = (title) => {
    //En cliquant sur un titre, on récupère le title et le content dans les inputs
    setInput(JSON.parse(localStorage[title]))
  }

  const spawnSliding2 = (defineTarget) => {
    anime({
        targets: defineTarget,
        easing: 'easeOutExpo',
        translateX: [300, 0],
        opacity: [0, 1],
        duration: 1000
    })
  }

  const clearDisplay = () => {
    setInput({title: "", content: ""})
    spawnSliding2("#displayCard")
  }

  const clearLocalStorage = () => {
    console.log('clearing storage')
    localStorage.clear()
    pullLocalStorage()
  }

  
  return (
    <div id="MEGADIV3000"> 
      <div className="box"> 
        <div className="app-title"> The pleasant bookmark </div>
      </div>
      <div className="container h-100">
        <div className="d-flex h-100">
          <div className="garmorant col-3 d-flex flex-column h-100">
            <button onClick={clearDisplay} className="garmorant btn btn-danger w-80 align-self-center mt-2"> Ajouter une note</button>{' '}
            <button onClick={clearLocalStorage} className="garmorant btn btn-outline-light w-80 align-self-center mt-2"> Effacer toutes les notes</button>{' '}
            <NotesIndex noteList={noteList} editNote={editNote}/>
          </div>
          <div id="displayCard" className="garmorant col-9 h-100 " >
            <NoteDisplay getResult={result} />
            <MarkdownInput input={input} reset={reset} getInput={inputValue} pullLocalStorage={pullLocalStorage}/>
          </div>
        </div>
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));