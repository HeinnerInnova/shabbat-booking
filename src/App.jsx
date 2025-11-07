
import Home from './components/Home.jsx';
import Disponibility from './components/Disponibility.jsx';
import RoomDetails from './components/RoomDetails.jsx';
import Success from './components/Success.jsx';
import Login from './components/Login.jsx';
import ManageRequest from './components/ManageRequest.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/disponibility' element={<Disponibility />} />
        <Route path='/room-details' element={<RoomDetails />} />
        <Route path='/success' element={<Success />} />
        <Route path='/login' element={<Login />} />
        <Route path='/manage-request' element={<ManageRequest />} />
      </Routes>
    </div>
  )
}

export default App
