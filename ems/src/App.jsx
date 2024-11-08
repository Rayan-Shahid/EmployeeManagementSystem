import './App.css';
import { useContext, useEffect, useState } from 'react';
import AdminDash from './Components/Dashboard/AdminDash';
import EmpDash from './Components/Dashboard/EmpDash';
import Login from './Components/Auth/Login';
import { contextforAuth } from './Context/Authcontext';

function App() {
  const [user, setuser] = useState(null);
  const [loggedUser, setloggedUser] = useState(null);
  const authdata = useContext(contextforAuth);

  useEffect(() => {
    const loggedinuser = localStorage.getItem('loggedInUser');
    if (loggedinuser) {
      const parsedUser = JSON.parse(loggedinuser);
      console.log(parsedUser);

      setuser(parsedUser.role);
      if (parsedUser.role === 'employee') {
        setloggedUser(parsedUser.data);
      }
      console.log("User logged in from localStorage");
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@ceo.com" && password === "123") {
      setuser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (authdata) {
      const employee = authdata.employee.find((e) => email === e.email && password === e.password);
      if (employee) {
        setuser('employee');
        setloggedUser(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      } else {
        alert("Invalid credentials. Try again.");
      }
    } else {
      alert("Try again");
    }
  };

  const handleLogout = () => {
    setuser(null);
    setloggedUser(null);
    localStorage.removeItem('loggedInUser');
  };

  return (
    <div className="App">
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDash onLogout={handleLogout} />
      ) : (
        <EmpDash data={loggedUser} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
