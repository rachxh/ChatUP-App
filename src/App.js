import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "./components/Intro/Intro";
import ImpostorType from "./components/ImpostorType/ImpostorType";
import Layouts from "./pages/Layouts";
import GetStart from "./components/GetStart/GetStart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<GetStart />} />
          <Route exact path="/intro" element={<Intro />} />
          <Route exact path="/impostorTypes" element={<ImpostorType />} />
          <Route exact path="/impostortype/:label" element={<ImpostorType />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
