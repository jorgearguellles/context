import { createContext, useState, useContext } from "react";

const Context = createContext();

const CounterProvider = ({children}) =>{
  const [counter, SetCounter] = useState(0);

  const increment = ()=>SetCounter(counter + 1);
  const decrement = ()=>SetCounter(counter - 1);
  return(
    <Context.Provider value={{ counter, increment, decrement }}>
      {children}
    </Context.Provider>
  )
};

const Increment = ()=>{
  
}


const App = () => {
  return(
    <h1>Hello Sexy</h1>
  )
};

export default App;