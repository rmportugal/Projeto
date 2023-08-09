import { useContext } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
    
  } from "react-router-dom";
import Login from "../Pages/LoginPage";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import PropTypes from 'prop-types';

import { AuthContext, AuthProvider  } from "../Context/auth";

function Private({ children }) {
  Private.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const { authenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  if (!authenticated) {
    return <Navigate to="/" />;
  }

  return children;
}

function AppRoutes() {
    return (
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/cadastro" element={<Register />} />
            <Route exact path="/home" element={<Private><Home /></Private>} />
            <Route path="*" element={<h1>Error 404 - Page Not Found!</h1>} />
          </Routes>
          </AuthProvider>
      </Router>
    );
  }
  
  export default AppRoutes;