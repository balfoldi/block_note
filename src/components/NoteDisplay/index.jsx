import React from "react";
import Showdown from "showdown";


export const NoteDisplay = (props) => {

  const converter = new Showdown.Converter();

  
  return (
    <div className="h-50  p-3" >
      <div className="card bg-secondary h-100">
        <div class='card-header'>
          <h3 style={{height: "33px", color:'white'}}> {props.getResult && props.getResult.title} </h3>
        </div>
        <div className="card-body" style={{height:'16em', color:'white'}}  dangerouslySetInnerHTML={props.getResult && { __html: converter.makeHtml( props.getResult.content ) }}></div>
      </div>
    </div>
  )
}
