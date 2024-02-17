import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./layout";
import Home from "./pages/Home";
import AddSong from "./pages/AddSong";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="addsong" element={<AddSong />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
