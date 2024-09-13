import './App.css';
import Header from './components/Header';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import { useState } from 'react';
import ViewCart from './components/ViewCart';
import { cartContext } from './components/cartContext';
import Footer from './components/Footer';
import Search from './components/Search';
import ViewProducts from './components/products/ViewProducts';
import CreateProduct from './components/products/CreateProduct';
import LoginSignUp from './components/login/LoginSignUp';

const UserRoutes = () => (
  <Routes>
    <Route path='/Home' element={<Home />} />
    <Route path='/Cart' element={<ViewCart />} />
    <Route path='/Search' element={<Search />} />
  </Routes>
);

const AdminRoutes = () => (
  <Routes>
    <Route path='/showProducts' element={<ViewProducts />} />
    <Route path='/createProducts' element={<CreateProduct />} />
    <Route path='/updateProduct/:id' element={<CreateProduct />} />
  </Routes>
);

const AppContent = () => {
  const [cart, setCart] = useState([]);
  const [role, setRole] = useState('admin');
  const location = useLocation(); // Hook for current path

  // Define paths where header and footer should be hidden
  const noHeaderFooterRoutes = ['/login']; // Add more paths as needed

  // Conditional logic to show or hide header and footer based on current path
  const showHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      <cartContext.Provider value={{ cart, setCart, role, setRole }}>
        
            {/* Login page rendered outside the container */}
            {showHeaderFooter ? (
              <Routes>
                <Route path='/login' element={<LoginSignUp />} />
              </Routes>
            ) : (
              <>
                 <Header role={role} />
                  <div className="container">
                    <Routes>
                      {role === 'admin' ? (
                        <Route path='/*' element={<AdminRoutes />} />
                      ) : (
                        <Route path='/*' element={<UserRoutes />} />
                      )}
                      {/* Fallback route */}
                      <Route path="*" element={<Navigate to="/Home" />} />
                    </Routes>
                  </div>
                 <Footer />
              </>
              
            )}
         
     
       
      </cartContext.Provider>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
