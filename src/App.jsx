import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

import Admin from "./Component/ADMIN/Admin";
import Home from "./Component/HOME/Home";
import AdminConsole from "./Component/ADMIN/AdminConsole";
import AdminTeacher from "./Component/ADMIN/AdminTeacher";
import AdminStudent from "./Component/ADMIN/AdminStudent";

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

          <Route path="/admin/admin_console" element={<AdminConsole />} />
          <Route
            path="/admin/admin_console/admin_teacher_console"
            element={<AdminTeacher />}
          />
          <Route
            path="/admin/admin_console/admin_student_console"
            element={<AdminStudent />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
