import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./layout";
import Home from "./pages/Home";
import AddSong from "./pages/AddSong";
import Analytics from "./pages/Analytics";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { GET_SONGS } from "./redux/sagas/types";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_SONGS });
  }, []);

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
