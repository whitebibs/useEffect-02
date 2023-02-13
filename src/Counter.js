import {useState, useEffect} from "react"

export function Counter({initialVal= 0}){
  const [counter, setCounter] = useState(initialVal)
  
  useEffect(() => {
  console.log("mount")
  const interval= setInterval(()=> {
  setCounter(prevVal => prevVal + 1) 
  },1000)
  return () => {
   console.log("unmount");
   clearInterval(interval)
  }
  
  },[])
  useEffect(()=>{
    console.log({counter})
    return()=>{
      console.log (`before: ${counter}`)
    }
  },[counter])

  function handleIncrement(){
    setCounter((initialVal) => initialVal + 1)
  }
  
return(
  <div>
    <h4>Count: {counter}</h4>
  <button onClick={handleIncrement}>Increment</button>
  </div>
)
}
