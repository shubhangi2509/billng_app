import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './Components/stocks_components/Layout/NavBar';
import Update from './Components/stocks_components/Pages/User/Update';
import Add from './Components/stocks_components/Pages/User/Add';
import Show from './Components/stocks_components/Pages/User/Show';
import Delete from './Components/stocks_components/Pages/User/Delete';
import Login from './Components/auth_components/Login';
import CEODashboard from './Components/dashborad/CEODashboard';
import UserRegistration from './Components/auth_components/UserRegistration';
import EmployeeList from './Components/auth_components/EmployeeList';
import RemoveEmployee from './Components/auth_components/RemoveEmployee';
import UpdateEmployee from './Components/auth_components/UpdateEmployee';
import ManagerDashboard from './Components/dashborad/ManagerDashboard';
import AccountantDashBoard from './Components/dashborad/AccountantDashBoard';
import SalesManDashboard from './Components/dashborad/SalesManDashboard';
import StaffDashboard from './Components/dashborad/StaffDashboard';
import Password from './Components/auth_components/Password';
import Error from './Components/Layout/Error';


function App() {
  return (
    <>
  
      <BrowserRouter>
      <NavBar/>
        <Routes>

        <Route  path='/' element={<Login />} />
         
        <Route  path='/ceo' element={<CEODashboard />} >
          <Route  path='register' element={<UserRegistration />} />
          <Route  path='list' element={<EmployeeList />} />
          <Route  path='remove' element={<RemoveEmployee />} />
          <Route  path='update' element={<UpdateEmployee />} />
          <Route  path='*' element={<Error />} />
        </Route>

        <Route  path='/manager' element={<ManagerDashboard />} />
        <Route  path='/accountant' element={<AccountantDashBoard />} />
        <Route  path='/salesman' element={<SalesManDashboard />} /> 
        <Route  path='/staff' element={<StaffDashboard />} /> 
        <Route path='/password' element={<Password />} /> 

                    <Route path='/user/add' element={<Add/>}/>
                    <Route path='/user/show' element={<Show/>}/>
                    <Route path='/user/update/:userId'  element={<Update/>}/>
                    <Route path='/user/delete/:userId' element={<Delete/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
