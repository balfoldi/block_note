import React, { useEffect, useState } from "react";
import {NoteCard} from "./card"

export const NotesIndex = (props) => {
  console.log(props.noteList)
  



  return(
    <div className="d-flex flex-column">
      {props.noteList.map((note)=>{
        return (
          <NoteCard editNote={props.editNote} title={note.title} content={note.content}/>
      )})}
    </div>
  )
};