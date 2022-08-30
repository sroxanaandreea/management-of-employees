import "./App.css";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewEmployeePage from "./Pages/ViewEmployeePage";
import MyProfilePage from "./Pages/MyProfilePage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/viewEmployeePage" element={<ViewEmployeePage />} />
          <Route path="/myProfilePage" element={<MyProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
