import "./App.css";
import { ThemeProvider } from "@mui/material";
// import OverridedThemes from './mui-themes/ThemeOverrides';
import ComingSoon from "./pages/coming-soon/ComingSoon";
import Landing from "./pages/landing/Landing";
import OverridedThemes from "./mui-themes/ThemeOverrides";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={OverridedThemes}>
      <Routes>
        <Route path="*" element={<Landing />} />
        <Route path="/" element={<Landing />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
