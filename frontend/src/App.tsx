import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute, AdminPrivateRoute } from "./components/PrivateRoute";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import AdminPage from "./pages/AdminPage";
import AddProductPage from "./pages/Add.ProductsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />

          <Route element={<PrivateRoute />} >
          </Route>

          <Route path="admin" element={<AdminPrivateRoute />} >
            <Route index element={<AdminPage />} />
            <Route path="add" element={<AddProductPage />} />
          </Route> 
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
