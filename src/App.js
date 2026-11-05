import React, { useState } from "react";

const App=()=>{
    const [count, setCount]=useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)} className="button">Add</button>
            <button onClick={()=>setCount(count-1)} className="button">Less</button>
            <button onClick={()=>setCount(0)} className="button">Reset</button>
        </div>
        
    )
}

export default App