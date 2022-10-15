import { useState,useEffect } from 'react';
import './App.css';

//Create new component
const Person = (props) =>{
  return(
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last name: {props.lastName}</h2>
    <h2>Age: {props.age}</h2>
    </>
  )
}


const App = () => {
  const name = 'John';
  const name1 = 'Jane'; /*null */
  const isNameShowing = false; /*true */
  //const isUserLoggedIn = true; //can show DOM accordingly

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    //alert('Reload');
    //Forbidden counter=100;
    //setCounter(100);
    alert(counter);
  },[counter]);

  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <h1>Hello {name}!</h1>
      <h1>Hello {isNameShowing ? name : 'someone'}!</h1>
      <h1>2 + 2 is {2+2}</h1>

      {/*React Fragment */}
      {name1 ? (
        <>
          <h1>{name1}</h1>
        </>
      ):(
        <>
          <h1>Test</h1>
          <h2>There is no name!</h2>
        </>
      )}

      {/*Call Person component and display using props to pass value to component */}
      <Person name={'John'} lastName={'Doe'} age={'30'} />
      <Person name="Jim" lastName="Jones" age={15+10}/>

      {/*React UseState */}
      <button onClick={() => {setCounter((prevCount) => prevCount - 1)}}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => {setCounter((prevCount) => prevCount + 1)}}>+</button>

    </div>
  );
}

export default App;
