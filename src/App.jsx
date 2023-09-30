import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Host from "./Pages/Host";
import About from "./Pages/About";
import Vans from "./Pages/Vans/Vans";
import Layout from "./components/Layout";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Host" element={<Host />} />
            <Route path="/About" element={<About />} />
            <Route path="/Vans" element={<Vans />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// <header>
// <Link className="site-logo" to="/">
//   #VanLife
// </Link>

// <nav>
//   <NavLink to="/Host">Host</NavLink>
//   <NavLink to="/About">About</NavLink>
//   <NavLink to="/Vans">Vans</NavLink>
// </nav>
// </header>
