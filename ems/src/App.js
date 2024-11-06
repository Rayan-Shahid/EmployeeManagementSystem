import './App.css';
import AdminDash from './Components/Auth/Dashboard/AdminDash';
import EmpDash from './Components/Auth/Dashboard/EmpDash';
import Login from './Components/Auth/Login';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <EmpDash/>  */}
      <AdminDash/>


    </div>
  );
}

export default App;
