import React, { useState } from "react";

export default function About() {
  //  let cd={
  //    // color: '',
  //    backgroundColor: 'lightpink'
  // }

  // const [cd, setCd] = useState({
  //     // color: '',
  //     backgroundColor: 'lightpink'
  // });

  const [mystyle, setMystyle] = useState({
    backgroundColor: "#90EE90",
    color: "black",
    
  });
  const[btnText,setBtnText] = useState("Enable Green");


  let abc = () => {
    if (mystyle.backgroundColor == "#90EE90") {
      setMystyle({
        backgroundColor: "	#696969",
        color: "pink" 
       
      });
      console.log("enable Dark Mode") ;
     setBtnText("Enable Dark Mode");
    
    } else {
      setMystyle({
        backgroundColor: "#90EE90",
        color: "black",
      });
      console.log("enable Green Mode") ;
      setBtnText("Enable Green Mode");
    }
  };

  return (
    <>
      <div className="container " style={mystyle} >
        <div className="row">
          <div className="col-md-3 mt-3">
            <div className="card">
              <h4 className="mt-3">Card_Heading</h4>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  type="submit"
                  name="sub"
                  className="btn btn-inline-info btn-sm"
                  style={mystyle}
                >
                  submit
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3 mt-3">
            <div className="card">
              <h4 className="mt-3">Card_Heading</h4>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  type="submit"
                  name="sub"
                  className="btn btn-inline-info btn-sm"
                  style={mystyle}
                >
                  submit
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div className="card">
              <h4 className="mt-3">Card_Heading</h4>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  type="submit"
                  name="sub"
                  className="btn btn-inline-info btn-sm"
                  style={mystyle}
                >
                  submit
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div className="card">
              <h4 className="mt-3">Card_Heading</h4>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  type="submit"
                  name="sub"
                  className="btn btn-inline-info btn-sm"
                  style={mystyle}
                >
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-3 pb-3">
          <button
            type="submit"
            name="sub"
            onClick={abc}
            className="btn btn-inline-info btn-sm"
          >
          {btnText}
          </button>
        </div>
      </div>
    </>
  );
}
