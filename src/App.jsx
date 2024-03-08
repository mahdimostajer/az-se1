import { HashRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainPage from "./pages/MainPage";
import { Layout } from "antd";

export default function App() {
  return (
    <Layout style={{ minHeight: "100vh" }} >
      <Layout.Content>
        <HashRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </HashRouter>
      </Layout.Content>
    </Layout >

  );
}
