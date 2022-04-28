import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import AppRouting from "./index.routes";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouting />
    </BrowserRouter>
  );
}

export default App;
