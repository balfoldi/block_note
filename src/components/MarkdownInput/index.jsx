import React, { useEffect, useState } from "react";
import anime from "animejs";

export const MarkdownInput = (props) => {
  const [input, setInput] = useState({});


  const spawnSliding = (defineTarget) => {
    anime({
        targets: defineTarget,
        translateX: [-300, 0],
        opacity: [0, 1],
        duration: 1300
      })
    }
    
    const Save = () => {
      // lancer localstorage quand isSubmitted = true
      // function.(the name, the data)
      localStorage.setItem( input.title, JSON.stringify({title: input.title , content: input.content}));
      console.log(localStorage.length)
      props.pullLocalStorage()
      spawnSliding(`#${input.title}`)
    };

  const handleInputChange = (event) => {
    setInput({
      ...input,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  
  useEffect(() => {
    props.getInput(input);
  }, [input]);

  useEffect(() => {
    setInput(props.input)
  }, [props.input]);

  return (
    <div className="h-50  p-3">
      <form onSubmit={() => console.log("ploufe")}>
        <div>
          <input type="text" name="title" className="form-control" value={input && input.title} placeholder="title" onChange={handleInputChange} />
        </div>
        <div>
          <textarea style={{height:'16em'}} className='form-control w-100 mt-2' type="text" name="content" value={input && input.content} placeholder="content" onChange={handleInputChange} />
        </div>
      </form>
        <button className="btn btn-danger w-80 align-self-center mt-2" onClick={Save}> Sauvegarder </button>
    </div>
  );
};
