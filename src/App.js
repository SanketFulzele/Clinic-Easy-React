import './App.css';
import Login from './pages/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OTPPage from './pages/OTPpage/OTPPage';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/OTP" element={<OTPPage/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
