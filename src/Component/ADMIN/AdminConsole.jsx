import { NavLink } from "react-router-dom";

const AdminConsole = () => {
  return (
    <div>
      <div>Admin Console hii</div>
      <div className="border">
        <div>
          <NavLink to="/admin/admin_console/admin_teacher_console">
            Add Teacher{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to="/admin/admin_console/admin_view_teacher_console">
            List of All Teachers{" "}
          </NavLink>
        </div>
        <div>
          <NavLink to="/admin/admin_console/admin_student_console">
            Student Database{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AdminConsole;
