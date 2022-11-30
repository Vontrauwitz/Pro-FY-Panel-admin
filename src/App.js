import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Users from "./scenes/team/Users";
import Professionals from "./scenes/team/Professionals";
// import Contacts from "./scenes/contacts";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
// import { DataUsageSharp } from "@mui/icons-material";
import Specialities from "./scenes/team/Specialities";
import Queries from "./scenes/team/Queries";
import Login from "./registerLogin/Login";
import SpecialityForm from "./scenes/SpecialtiesForm"

function App() {
  const [currentForm, setCUrrentForm] = useState()
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/professionals" element={<Professionals />} />
              <Route path="/specialities" element={<Specialities />} />
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              <Route path="/queries" element={<Queries />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path='/specialtiesform' element={<SpecialityForm />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
