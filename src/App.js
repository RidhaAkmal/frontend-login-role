import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/user";
import AddUser from "./pages/user/Add";
import EditUser from "./pages/user/Edit";
import Products from "./pages/product";
import AddProduct from "./pages/product/Add";
import EditProduct from "./pages/product/Edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/users/add" element={<AddUser/>} />
        <Route path="/users/edit/:id" element={<EditUser/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/add" element={<AddProduct/>} />
        <Route path="/products/edit/:id" element={<EditProduct/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
