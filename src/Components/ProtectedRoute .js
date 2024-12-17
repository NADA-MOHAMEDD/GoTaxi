import { Navigate } from "react-router-dom";
import { useAuth } from "../Components/Auth"; 

const ProtectedRoute = ({ children }) => {
  const auth =useAuth();
  return auth.user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute; 
