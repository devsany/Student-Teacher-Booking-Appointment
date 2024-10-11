import { NavLink } from "react-router-dom";

const AdminConsole = () => {
  return (
    <div>
      <div>
        <div className="block mb-2 mt-2 text-center text-2xl font-medium text-gray-900 dark:text-white">
          Admin Console hii
        </div>
        <div className="border grid grid-cols-3 gap-4 ">
          <div className="bg-yellow-300 rounded-lg shadow-lg m-2 hover:bg-yellow-900 text-gray-900 hover:text-white">
            <NavLink to="/admin/admin_console/admin_teacher_console">
              <span className="block mb-2 mt-2 text-center text-md font-medium   dark:text-white">
                Add Teacher{" "}
              </span>
            </NavLink>
          </div>
          <div className="bg-green-300 rounded-lg shadow-lg m-2 hover:bg-green-900 text-gray-900 hover:text-white">
            <NavLink to="/admin/admin_console/admin_view_teacher_console">
              <span className="block mb-2 mt-2 text-center text-md font-medium   dark:text-white">
                List of All Teachers{" "}
              </span>
            </NavLink>
          </div>
          <div className="bg-gray-300 rounded-lg shadow-lg m-2 hover:bg-gray-900 text-gray-900 hover:text-white">
            <NavLink to="/admin/admin_console/admin_student_console">
              <span className="block mb-2 mt-2 text-center text-md font-medium   dark:text-white">
                Student Database{" "}
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminConsole;
