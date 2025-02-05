import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoutesRegister({ children }) {
    const token = localStorage.getItem("token");
    if (token && token !== "null" && token !== "undefined") {
        return <Navigate to={"/"} />;
    }

    else {
        return children
    }
}