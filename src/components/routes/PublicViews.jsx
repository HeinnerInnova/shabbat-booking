import Disponibility from '../Disponibility.jsx';
import RoomDetails from '../RoomDetails.jsx';
import Success from '../Success.jsx';
import Home from '../Home.jsx';
import { Routes, Route } from 'react-router-dom';

const PublicViews = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/disponibility' element={<Disponibility />} />
            <Route path='/room-details' element={<RoomDetails />} />
            <Route path='/success' element={<Success />} />
        </Routes>
    )
}

export default PublicViews
