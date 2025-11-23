import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Applyjob from "./pages/Applyjob";
import Application from "./pages/Application";
import RecruiterLogin from "./Components/RecruiterLogin";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import Dashboard from "./pages/Dashboard";
import Addjobs from "./pages/Addjobs";
import Managejobs from "./pages/Managejobs";
import ViewApplication from "./pages/ViewApplication";

function App() {
  const { showRecruiterLogin } = useContext(AppContext);

  return (
    <>
      {showRecruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<Applyjob />} />
        <Route path="/applications" element={<Application />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="add-job" element={<Addjobs />} />
          <Route path="manage-job" element={<Managejobs />} />
          <Route path="view-applications" element={<ViewApplication />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
