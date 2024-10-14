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
import TeacherLogin from "./Component/TEACHER/TeacherLogin";
import TeacherIdPage from "./Component/TEACHER/TeacherIdPage";
import TeacherStudentINT from "./Component/TEACHER/TeacherStudentINT";
import { useState } from "react";

const App = () => {
  const [toggle, setToggle] = useState(false);
  // toggle the butgure icon
  const handleClickburgur = () => {
    setToggle(!toggle);
  };
  const handleClose = () => {
    setToggle(false);
  };
  return (
    <div>
      <BrowserRouter>
        <div className="md:grid border-b-2 shadow-purple-200 shadow-md md:grid-cols-8">
          <div className="md:col-span-4  flex justify-between">
            <div className="  ">
              <img
                src="Slide1.PNG"
                alt="Header Logo"
                className="md:m-1 m-2 w-[230px] md:w-[270px]"
              />
            </div>
            {toggle ? (
              <div className="lg:hidden m-3 md:m-2 xl:hidden md:hidden">
                <img
                  onClick={handleClickburgur}
                  src="close.png"
                  alt="burgure icon"
                  className="md:w-[35px] w-[20px] cursor-pointer"
                />
              </div>
            ) : (
              <div className="lg:hidden m-2 md:m-2 xl:hidden md:hidden">
                <img
                  onClick={handleClickburgur}
                  src="burger-bar (1).png"
                  alt="burgure icon"
                  className="md:w-[35px] w-[30px] cursor-pointer"
                />
              </div>
            )}
          </div>

          {toggle ? (
            <div className="md:grid text-center  mt-4 grid-cols-4 col-span-4">
              <div>
                <NavLink to="/">Home</NavLink>
              </div>
              <div>
                <NavLink to="/admin">Admin</NavLink>
              </div>
              <div>
                <NavLink to="/student">Student Section</NavLink>
              </div>
              <div>
                <NavLink to="/teacher">Teacher Login</NavLink>
              </div>
            </div>
          ) : null}
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
          <Route path="/teacher" element={<TeacherLogin />} />
          <Route path="/teacher/:id" element={<TeacherIdPage />} />
          <Route
            path="/teacher/appoint_student/:id/:id"
            element={<TeacherStudentINT />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
