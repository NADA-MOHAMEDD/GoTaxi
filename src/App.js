// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import Login from './pages/Login';
// import CurrentOrders from './pages/CurrentOrders';
// import CaptianRequests from './pages/CaptianRequests';
// import ForgotPassword from './pages/ForgotPassword';
// import { ContextProvider } from './Components/Auth';


// function App() {
//   return (
//     <Router>
//       <ContextProvider>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/login" element={<Login />} />
// <Route path="/currentOrders" element={<CurrentOrders />} />
// <Route path="/captiansrequest" element={<CaptianRequests />} />
//           <Route path="/forgetpassword" element={<ForgotPassword />} />




/* <Route path="/orders" element={<Orders />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/live-map" element={<LiveMap />} />
        <Route path="/moderators" element={<Moderators />} />
        <Route path="/settings" element={<Settings />} /> */
/* </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App; */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CurrentOrders from './pages/CurrentOrders';
import CaptianRequests from './pages/CaptianRequests';
import ControlTrip from "./pages/ControlTrip";
import CaptianTable from "./pages/CaptianTable";
import ClientsTable from "./pages/ClientsTable";
import AddPromoCode from "./pages/AddPromoCode";
import Moderators from "./pages/Moderators";
import TopCaptains from "./pages/TopCaptains";
import LiveMap from "./pages/Map";
import ForgotPassword from "./pages/ForgotPassword";
import PaymentMethod from "./pages/PaymentMethod";
import CheckCode from "./pages/CheckCode";
import UserTokenContextProvider from "./Context/UserTokenContext";
import ProtectedRoutesRegister from "./Components/ProtectedRoutesRegister";



function App() {
  return (
    <UserTokenContextProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<ProtectedRoutesRegister><Login /></ProtectedRoutesRegister>} />
          <Route path="/forgetPassword" element={<ProtectedRoutesRegister><ForgotPassword/> </ProtectedRoutesRegister>} />
          <Route path="/CheckCode" element={<ProtectedRoutesRegister><CheckCode/></ProtectedRoutesRegister> } />
          <Route path="/" element={<Dashboard />} />
          <Route path="/controltrip" element={<ControlTrip/>} />
          <Route path="/currentOrders" element={<CurrentOrders />} />
          <Route path="/captiansrequest" element={<CaptianRequests />} />
          <Route path="/clientTable" element={<ClientsTable/> } />
          <Route path="/captians" element={<CaptianTable/>} />
          <Route path="/liveMap" element={<LiveMap/>} />
          <Route path="/paymentMethod" element={<PaymentMethod/>} />
          <Route path="/addPromo" element={<AddPromoCode/> } />
          <Route path="/moderators" element={ <Moderators/> } />
          <Route path="/topcaptianspage" element={<TopCaptains/>} />
        </Routes>
      </Router>
     </UserTokenContextProvider>
    
  );
}

export default App;

