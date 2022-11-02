import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getCurrentUser, registerClient, registerLawyer } from './JS/actions/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Appointment from './Pages/Appointment';
import About from './Components/About/About';
import Practice from './Components/Practice/Practice';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import AdminDashbord from './Components/AdminDashbord/AdminDashbord';
import Profile from './Pages/Profile';
import PrivateAdmin from './Private/PrivateAdmin';
import Lawyers from './Pages/Lawyers';
import LawyersDetails from './Components/LawyersDetails/LawyersDetails';
import PrivateProfile from './Private/PrivateProfile';
import Alerts from './Components/Alerts/Alerts';
import SignUpAsClient from './Components/Sign/SignUpAsClient';
import SignUpAsLawyer from './Components/Sign/SignUpAsLawyer';
import Private from './Private/Private';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.User)

  useEffect(() => {
    dispatch(getCurrentUser()) 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className="App">
      <Navbar />
      <Alerts />
      <Routes>
        <Route path='/lawyer/register' element={<SignUpAsLawyer action={registerLawyer} />} />
        <Route path='/client/register' element={<SignUpAsClient action={registerClient} />} />
        <Route path='/login' element={<Login />} />

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/practice' element={<Practice />} />
        <Route path='/contact' element={<Footer />} />

        <Route path='/dashboard' element={<PrivateAdmin user={user}><AdminDashbord /></PrivateAdmin>} />
        <Route path='/lawyers' element={<Private><Lawyers /></Private>} />
        <Route path='/profile' element={<PrivateProfile user={user}><Profile user={user} /></PrivateProfile> } />
        <Route path='/lawyers/:id' element={<LawyersDetails />} />
        <Route path='/booking' element={<Appointment />} />
      </Routes>   

    </div>
  );
}

export default App;
