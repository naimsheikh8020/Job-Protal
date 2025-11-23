import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Applyjob from "./pages/Applyjob";
import Application from "./pages/Application";
import RecruiterLogin from "./Components/RecruiterLogin";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const {showRecruiterLogin} = useContext(AppContext)

  return (
    <>
    {showRecruiterLogin && <RecruiterLogin/>}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/apply-job/:id" element={<Applyjob/>} />
        <Route path="/applications" element={<Application/>} />
      </Routes>
    </>
  );
}

export default App;
