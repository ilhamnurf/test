import React from "react";
import backGround from "../IMG/susi.jpg"

function Header(props) {
  const [count, setCount] = React.useState();
  const [errorMessage, setErrorMessage] = React.useState("");

  return (
    <header className="h-full w-full flex items-center  text-yellow-900 font-extrabold justify-center">
      <body>
      <h1 className="text-yellow-900 text-9xl justify-center h-5">WAFFLE AJG RESTAREA</h1>
      </body>

      <div>
        
      </div>

      <div>
        <p className="text-xl font-bold text-center">{count}</p>
        <p className="text-red-500 font-bold italic">{errorMessage}</p>
        <div>
          
        </div>
      </div>
    </header>
    
  );
}

export default Header;
