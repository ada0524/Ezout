import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Home()}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
