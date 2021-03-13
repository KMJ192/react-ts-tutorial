import React from 'react';
import './App.css';
import Counter from './Counter';
import Greeting from './Greeting';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';
import { SampleProvider } from './SampleContext';
import UseReducer from './UseReduce';

function App() {
  const onClick = (name : string) => {
    console.log(name);
  }
  const onSubmit = (form: {name : string, description: string}) =>{
    console.log(form);
  };
  
  return (
    <div className="App">
      <Greeting name="messi" onClick={onClick}/>
      <Counter/>
      <MyForm onSubmit={onSubmit}/>
      <UseReducer/>
      <SampleProvider>
        <ReducerSample/>
      </SampleProvider>
    </div>
  );
}

export default App;