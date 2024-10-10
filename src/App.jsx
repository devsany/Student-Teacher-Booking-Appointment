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
import ViewTeacher from "./Component/ADMIN/ViewTeacher";
import ViewTeacherID from "./Component/ADMIN/ViewTeacherID";
import UpdateTeacher from "./Component/ADMIN/UpdateTeacher";
import StudentRegistration from "./Component/STUDENT/StudentRegistration";
import Student_page_id from "./Component/STUDENT/Student_page_id";
import ActivateStudent from "./Component/ADMIN/ActivateStudent";
import StudentViewTeacher from "./Component/STUDENT/StudentViewTeacher";

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
          <div>
            <NavLink to="/student">Student Section</NavLink>
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
          <Route
            path="/admin/admin_console/admin_view_teacher_console"
            element={<ViewTeacher />}
          />

          <Route
            path="/admin/admin_console/admin_view_teacher_console/:id"
            element={<ViewTeacherID />}
          />
          <Route
            path="/admin/admin_console/admin_update_teacher_console/:id"
            element={<UpdateTeacher />}
          />
          <Route path="/student" element={<StudentRegistration />} />
          <Route path="/student/:id" element={<Student_page_id />} />
          <Route
            path="/admin/admin_console/admin_student_console/asmin_studnet_console_id/:id"
            element={<ActivateStudent />}
          />
          <Route
            path="/student/teacher_search/:id"
            element={<StudentViewTeacher />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
