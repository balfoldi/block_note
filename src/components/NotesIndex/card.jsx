import React, { useEffect, useState } from "react";
import Showdown from "showdown";
import anime from "animejs";


export const NoteCard = (props) => {

  const converter = new Showdown.Converter();

  const spawnSliding = (defineTarget) => {
    anime({
        targets: defineTarget,
        translateX: [-300, 0],
        opacity: [0, 1],
        duration: 1300
      })
    }
    
    useEffect(() => {
      spawnSliding(`#${props.title}`)
    }, [props.content]);
    
    const reductContent = (content) => {
    if(content){
      return content.length > 100 ? content.slice(0,100).concat("...") : content
    }
    return ""
  }

  return (
    <div id={props.title}className="card bg-secondary mt-1">
      <div class='card-header' style={{color:'white'}}>
      <div className="link" onClick={() => props.editNote(props.title)}><h3 >{props.title}</h3></div>
      </div>
      <div className="card-body" dangerouslySetInnerHTML={{ __html: converter.makeHtml( reductContent(props.content) ) }} style={{color:'white'}}></div>
    </div>
  )   
}