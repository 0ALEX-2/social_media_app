import "./App.css";
import Feed from "./components/feed";
import Header from "./components/header";
import Profile from "./components/profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/:userName" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
