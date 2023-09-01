import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home.jsx";
import DisplayUser from "./pages/UserList/DisplayUsers.jsx";
import UserEdit from './pages/UserList/UserEdit';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<DisplayUser />} />
          <Route path="/user/:id" element={<UserEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
