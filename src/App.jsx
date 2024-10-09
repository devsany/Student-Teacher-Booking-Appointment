import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

import Admin from "./Component/ADMIN/Admin";
import Home from "./Component/HOME/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <div>
            <NavLink to="/">Home</NavLink>
          </div>
          <div>
            <NavLink to="/admin">Admin</NavLink>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
