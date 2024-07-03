// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormMain from "./components/FormMain";
import HomePage from "./components/HomePage";
import withNavbar from "./components/withNavbar";
import ApiExample from "./components/ApiExample";

const HomePageWithNavbar = withNavbar(HomePage);  
const FormMainWithNavbar = withNavbar(FormMain);
const APiExampleWithNavbar = withNavbar(ApiExample);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormMainWithNavbar />} />
        <Route path="/HomePage" element={<HomePageWithNavbar />} />
        <Route path="/FormMain" element={<FormMainWithNavbar />} />
        <Route path="/ApiExample" element={<APiExampleWithNavbar />} />
      </Routes>
    </Router>
  );
}

export default App;
