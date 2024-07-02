// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormMain from "./components/FormMain";
import HomePage from "./components/HomePage";
import withNavbar from "./components/withNavbar";

const HomePageWithNavbar = withNavbar(HomePage);
const FormMainWithNavbar = withNavbar(FormMain);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormMainWithNavbar />} />
        <Route path="/HomePage" element={<HomePageWithNavbar />} />
        <Route path="/FormMain" element={<FormMainWithNavbar />} />
      </Routes>
    </Router>
  );
}

export default App;
