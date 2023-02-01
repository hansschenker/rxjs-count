import React, { FC, useMemo, useState }  from "react";
import { interval, tap } from "rxjs";
import { useObservable } from "./utils/rxjs-react-helpers";

type AppProps = {
    message: string;
  };
  
//  export const App = ({ message }: AppProps) => 
 
//  <>
//  <div>{message}</div>;
//  </>
export function App({ message }: AppProps) {

   
  // const tick2$ = useMemo( () => interval(1000).pipe(
  //   tap( n =>  {
  //     if(n === 3){
  //        throw new Error("Error 2")
  //      //EMPTY - swallow error
  //     } 
  //   })
  // ), [])
  
  
  //const [count, setCount] = useState(0)
  //useSubscription( tick$, n => setCount(n))

  // const [ error, setError ] = useState('')
  // const count = useObservable(tick2$, 0, err => setError(err.message))

  return <div>  { message} </div>

   
} 

