import React,{ useState } from "react"
import './App.css';
import UserForm from "./components/form"

function App() {
  const [state, setState]= useState({
    Firstname: "",
    Lastname:"",
    Email:"",
    Password:"",
    Confirm:""
  });
  return (
    <div className="App">
      <UserForm  />
      
    </div>
  );
}

export default App;
