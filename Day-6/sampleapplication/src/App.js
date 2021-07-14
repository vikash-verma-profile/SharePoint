import React, { useState,useEffect } from 'react'

const useDocumentTitle=title=>{
  useEffect(()=>{
    document.title=title;
  },[title]);
}
function App(){
  const[count,setCount]=useState(0);
  const incrementCount=()=>setCount(count+1);
  useDocumentTitle(`You clicked ${count}  times`);

  return(
      <div>
        <p>You clicked {count} times</p>
        <button onClick={incrementCount}>Click ME</button>
        </div>
  );
}

export default App;
