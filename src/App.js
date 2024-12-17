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
import ProtectedRoute from "./Components/ProtectedRoute ";
import { ContextProvider } from './Components/Auth';
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



function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgetPassword" element={<ForgotPassword/>} />
          <Route path="/CheckCode" element={<CheckCode/>} />
          <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/controltrip" element={<ProtectedRoute><ControlTrip/></ProtectedRoute>} />
          <Route path="/currentOrders" element={<ProtectedRoute><CurrentOrders /></ProtectedRoute>} />
          <Route path="/captiansrequest" element={<ProtectedRoute><CaptianRequests /></ProtectedRoute>} />
          <Route path="/clientTable" element={<ProtectedRoute><ClientsTable/> </ProtectedRoute>} />
          <Route path="/captians" element={ <ProtectedRoute><CaptianTable/> </ProtectedRoute>} />
          <Route path="/liveMap" element={ <ProtectedRoute><LiveMap/> </ProtectedRoute>} />
          <Route path="/paymentMethod" element={ <ProtectedRoute><PaymentMethod/> </ProtectedRoute>} />
          <Route path="/addPromo" element={ <ProtectedRoute><AddPromoCode/> </ProtectedRoute>} />
          <Route path="/moderators" element={ <ProtectedRoute><Moderators/> </ProtectedRoute>} />
          <Route path="/topcaptianspage" element={ <ProtectedRoute><TopCaptains/> </ProtectedRoute>} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;

