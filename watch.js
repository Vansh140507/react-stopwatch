// import React, { useRef, useState } from "react";
// import { createRoot } from "react-dom/client";


// function App(){
//     const [Time,setTime] = useState(0);
//     const intervalref = useRef(null);
//     const [running,setrunning] = useState(false)
    
//     function Start(){
//         if(!running){
//         intervalref.current = setInterval(()=>{
//             setTime((Prevtime)=>Prevtime+1);       
//         },1000)
//         setrunning(true);

//     }
// }

       
//     function Stop(){
//          if(running){
//         clearInterval(intervalref.current);
//         intervalref.current = null;
//         setrunning(false)
//          }

//     }

//     function Reset(){
//         clearInterval(intervalref.current);
//         intervalref.current = null;
//         setTime(0);


//     }

//     return(
//         <>
//         <h1>STOP WATCH</h1>
//         <div className="box">
//             <div className="head">
//                 <h2>{Time}</h2>

//             </div>
           

           
//             <div className="but" >
//                 <button onClick={Start}>Start</button>
//                 <button onClick={Stop}>Stop</button>
//                 <button onClick={Reset}>Reset</button>

//             </div>
         
            

//         </div>
//         </>
//     )
// }
// const root = createRoot(document.getElementById("display"));
// root.render(<App/>);


// improvement



import React, { useRef, useState } from "react";
import { createRoot } from "react-dom/client";


function App(){
    const [Time,setTime] = useState(0);
    const intervalref = useRef(null);
    const [running,setrunning] = useState(false)
    
    function Start(){
        if(!running){
        intervalref.current = setInterval(()=>{
            setTime((Prevtime)=>Prevtime+1);       
        },1000)
        setrunning(true);

    }
}

       
    function Stop(){
         if(running){
        clearInterval(intervalref.current);
        intervalref.current = null;
        setrunning(false)
         }

    }

    function Reset(){
        clearInterval(intervalref.current);
        intervalref.current = null;
        setTime(0);


    }


    const hours = Math.floor(Time / 3600);
    const min = Math.floor((Time % 3600) / 60);
    const sec = Time % 60;
    const formatTime = (value) => (value < 10 ? `0${value}` : value);

    return(
        <>
        <h1>STOP WATCH</h1>
        <div className="box">
            <div className="head">
                <h2>
                    {formatTime(hours)} : {formatTime(min)} : {formatTime(sec)}
                </h2>

            </div>
           

           
            <div className="but" >
                <button onClick={Start}>Start</button>
                <button onClick={Stop}>Stop</button>
                <button onClick={Reset}>Reset</button>

            </div>
         
            

        </div>
        </>
    )
}
const root = createRoot(document.getElementById("display"));
root.render(<App/>);




