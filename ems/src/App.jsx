import './App.css';
import { useContext, useEffect, useState } from 'react';
import AdminDash from './Components/Dashboard/AdminDash';
import EmpDash from './Components/Dashboard/EmpDash';
import Login from './Components/Auth/Login';
import { getLocalstorage, setLocalstorage } from './Utils/Localstorage';
import { contextforAuth } from './Context/Authcontext';

function App() {

  // useEffect(() => {
  //   setLocalstorage();
  //   getLocalstorage();

  // }, [])

  const [user, setuser] = useState(null)

  const handleLogin = (email, password) => {
    if (email == "admin@ceo.com" && password == 123) {
      setuser('admin')
    }
    else if (email == "emp1@gmail.com" && password == 123) {
      setuser('user')
    }
    else {
      alert("Try again")
    }
  }

  const dataa = useContext(contextforAuth);
  console.log(dataa)


  return (
    <div className="App">

      {!user ? <Login handleLogin={handleLogin} /> : " "}
      {user == "admin" ? <AdminDash /> : <EmpDash />}
      {/* <EmpDash /> */}
      {/* <AdminDash /> */}


    </div>
  );
}

export default App;
