import { Analytics } from "@vercel/analytics/react";
import { Route, Routes } from "react-router-dom";
import Kapable from "./components/projectsPage/Kapable";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Analytics />
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/kapablePage" element={<Kapable />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
