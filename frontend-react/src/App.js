import './App.css';
import Header from './Header'
import Employee from './Employee';
import Company from './company';
import { user } from './Moduledemo.js'
import Data from './ToDo';
import Article from './Article';
import UseStateF from './hooks/useStateF';
import ContextHookDemo from './hooks/useContexDemo';
import UseReducerHookDemo from './hooks/useReduserDemo';
import UseRefDEmo from './hooks/useRefDemo';
function App() {
  // console.log(user)
  // let msg = "good morning"  //templets literals
  // let act = `hi ${msg}`
  // console.log(act);

  // destructive of objects

  // let add = {     
  //   state: "AP",
  //   disct: "kadapa",
  //   village: "besthavemula",
  // }
  // let { state, disct, village } = add
  // console.log(state, disct, village)

  // spread operator (...)
  // function addition(a, b, c) {
  //   console.log(a + b + c)
  // }
  // let numbers = [1, 2, 3]
  // addition(...numbers)

  // var array1 = [7, 8, 9, 4, 5]
  // var array2 = [5, 6, 8, 6]

  // var result = [...array1, ...array2]
  // console.log(result)
  // //rest operator(...)
  // function showRest(f, d, ...e) {
  //   console.log(f)
  //   console.log(d)
  //   console.log(e)
  // }
  // showRest(5, 2, 6, 3, 9, 65, 78)



  return (
    <div className="App">
      {/* <h1>My React App world</h1> */}
      {/* <Header /> */}
      {/* <Employee /> */}
      {/* <Company company="Careerx" /> */}
      {/* <Data /> */}
      {/* <Article /> */}
      {/* <UseStateF /> */}
      {/* <ContextHookDemo /> */}
      {/* <UseReducerHookDemo />
      <UseRefDEmo /> */}
    </div>
  );
}

export default App;
