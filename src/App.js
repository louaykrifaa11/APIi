import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import UserList from './UserList';

function App() {
 
  const [listofuser,setlistofuser]=useState([])
  useEffect( ()=> {axios.get("https://jsonplaceholder.typicode.com/users")
  .then((users)=>{setlistofuser(users.data);
    console.log(users)
  })
  .catch((err)=> console.log("err=",err))
},[])
  return (
    <div className="App">
      <header className="App-header">
      <UserList listofuser={listofuser}/>
      </header>
    </div>
  );
}

export default App;