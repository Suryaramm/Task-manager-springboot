import logo from './logo.svg';
import {  Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Task from './Components/Task';
import AddTask from './Components/AddTask';
import UpdateTask from './Components/UpdateTask';
import DeleteTask from './Components/DeleteTask';
import Navbar from './Components/Navbar';
import TaskList from './Components/TaskList';

function App() {
  return (
    <div className="App">
   
<Navbar />
    <Routes>

{/* <Route path="/" element={<LoginForm handleLogin={handleLogin} username={username} setUsername={setUsername} password={password} setPassword={setPassword} />} /> */}


<Route path="/" element={<TaskList />} />

<Route path="/addTask" element={<AddTask />} />

<Route path="/updateTask" element={<UpdateTask />} />
<Route path="/deleteTask" element={<DeleteTask />} />


{/* <Route path="/navbar" element={<Navbar memberUser={memberUser} />} /> */}

</Routes>
    </div>
  );
}

export default App;
