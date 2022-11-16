import React, { useState } from "react";

export default function Textform(props) {

// Declare a new state variable, which we'll call "count"
const [test, setTest] = useState("This is State !");
// setTest("Text hare !");


  const handler = (event) => {
    console.log("On change");
    setTest(event.target.value);
  };


  const uperclick = () => {
    console.log("Upcase was clicked");
    //setTest("You Have Click in Handle Chick");
    let newtest = test.toUpperCase();
    setTest(newtest);
    props.arror("UpperCase","success")
  };

  const lowerclick = () => {
    console.log("lowercase was clicked");
   // setTest("You Have Click in Handle Chick");
    let newtest = test.toLowerCase();
    setTest(newtest);
    props.arror("LowerCase","success")
  };

  const click=()=>
  {
    alert("You Are Visit On click button");
    setTest("thanks for visit");
   
  }



  
  return (
    <>
   
      <div className="container mt-3" style={{color: props.mode==='dark'?'white':'black'}} >
        <div>
          <div className="form-lable">
            <h2>{props.heading}</h2>
            <label htmlFor="text">Text Form</label>
            <textarea
              className="form-control"
              id="text"
              aria-describedby="emailHelp"
              value={test}
              onChange={handler}
              style={{background: props.mode==='dark'?'red':'white'}}
              
            />
          </div>
          <button
            type="submit"
            onClick={uperclick}
            className="btn btn-outline-secondary btn-sm mt-2"
          >
            ToUperCase
          </button>
          <button
            type="submit"
            onClick={lowerclick}
            className="btn btn-outline-primary btn-sm mt-2 ml-3"
          >
            ToLowerCase
          </button>
          <button
            type="submit"
            onClick={click}
            className="btn btn-outline-info btn-sm mt-2 ml-3"
          >
            Change
          </button>
        </div>
      </div>

      <div className="container mt-5" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        
          text {test.split(" ").length} and Length {test.length}
          <p> {0.008 * test.split(" ").length} Mint for Read </p>
        
      </div>

      <h3 className="mt-5">Priview</h3>
      <p>{test.length>0?test:"Kindly Write some Latters"}</p>




    </>
  );
}
