import ManageRequest from '../ManageRequest.jsx';
import ViewRequests from '../ViewRequests.jsx';
import Login from '../Login.jsx';
import { Routes, Route } from 'react-router-dom';

const PrivatesViews = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/manage-request' element={<ManageRequest />} />
            <Route path='/view-requests' element={<ViewRequests />} />
        </Routes>
    )
}

export default PrivatesViews
