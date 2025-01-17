import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormMain from "./components/FormMain";
import HomePage from "./components/HomePage";
import withNavbar from "./components/withNavbar";
import ApiExample from "./components/ApiExample";
import Crud from "./components/Crud";
import CustomExample from "./components/CustomExample";

const HomePageWithNavbar = withNavbar(HomePage);  
const FormMainWithNavbar = withNavbar(FormMain);
const ApiExampleWithNavbar = withNavbar(ApiExample); 
const CrudWithNavbar = withNavbar(Crud);
const CustomExampleWithNavbar = withNavbar(CustomExample);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormMainWithNavbar />} />
        <Route path="/HomePage" element={<HomePageWithNavbar />} />
        <Route path="/FormMain" element={<FormMainWithNavbar />} />
        <Route path="/ApiExample" element={<ApiExampleWithNavbar />} />
        <Route path="/Crud" element={<CrudWithNavbar />} />
        <Route path="/CustomExample" element={<CustomExampleWithNavbar />} /> {/* Ensure this path matches exactly */}
      </Routes>
    </Router>
  );
}

export default App;
