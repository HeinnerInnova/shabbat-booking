import ManageRequest from '../ManageRequest.jsx';
import Login from '../Login.jsx';
import { Routes, Route } from 'react-router-dom';

const PrivatesViews = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/manage-request' element={<ManageRequest />} />
        </Routes>
    )
}

export default PrivatesViews
