import './App.css';
import { Navbar } from './components/Navbar';
import { Nav } from './components/Nav';
import { Salebar } from './components/Salebar';
import { Route, Routes } from 'react-router-dom';
import { New } from "./components/New";
import { Men } from "./components/Men";
import { Women } from "./components/Women";
import { Kids } from "./components/Kids";
import { Sale } from "./components/Sale";
import { Home } from "./components/Home";
import { Snkrs } from "./components/Snkrs";
function App() {
  return (
    <>
      <Nav />
      <Navbar />
      <Salebar />




      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new&featured" element={<New />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/women" element={<Women />}></Route>
        <Route path="/kids" element={<Kids />}></Route>
        <Route path="/sale" element={<Sale />}></Route>
        <Route path="/snkrs" element={<Snkrs />}></Route>
      </Routes>
    </>
  );
}

export default App;
