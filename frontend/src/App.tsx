import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute, AdminPrivateRoute } from "./components/PrivateRoute";
import Layout from "./components/Layout";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SoloProductPage from "./pages/SoloProductPage";

import AdminPage from "./pages/AdminPage";
import AddProductPage from "./pages/Add.ProductsPage";
import EditProductPage from "./pages/EditProductPage";
import CategoryPage from "./pages/CategoryPage";
import SearchByCatePage from "./pages/SearchByCatePage";
import CartPage from "./pages/CartPage";
import UserProfile from "./pages/UserProfile";
import SoloOrderPage from "./pages/SoloOrderPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="resetPassword" element={<ForgotPasswordPage />} />
          <Route path="product/:slug" element={<SoloProductPage />} />
          <Route path="cate" element={<CategoryPage />} />
          <Route path="cate/:cate" element={<SearchByCatePage />} />

          <Route element={<PrivateRoute />} >
            <Route path="cart" element={<CartPage />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="order/:id" element={<SoloOrderPage />} />
          </Route>

          <Route path="admin" element={<AdminPrivateRoute />} >
            <Route index element={<AdminPage />} />
            <Route path="add" element={<AddProductPage />} />
            <Route path="edit/:id" element={<EditProductPage />} />

          </Route> 
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
