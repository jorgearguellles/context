import { createContext, useContext } from 'react';
import './App.css';

const ContextDefault = createContext('Context default value');
const Context2 = createContext('Context default value 2');

const DefaultProvider = ({children}) => {
  return (
    <ContextDefault.Provider value={'My Value'}>
      {children}
    </ContextDefault.Provider>
  )
};

const Content = () => {
  const ctx = useContext(ContextDefault);
  return (
    <div> Data by Provider: {ctx} </div>
  )
};

const Content2 = () => {
  const ctx = useContext(Context2);
  return (
    <div> Data by Provider: {ctx} </div>
  )
};

function App() {
  return (
    <DefaultProvider>
     <Content />
     <Content2 />
    </DefaultProvider>
  );
}

export default App;
