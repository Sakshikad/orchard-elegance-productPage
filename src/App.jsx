import React from "react";

import "./App.css";
import MainRoutes from "./modules/routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <MainRoutes />
    </>
  );
}

export default App;
