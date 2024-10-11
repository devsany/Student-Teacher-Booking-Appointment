import { get, getDatabase, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../firebase/firebaseConsole";

const TeacherLogin = () => {
  const [m, setM] = useState({
    name: "",
    password: "",
  });
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const nav = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setM({ ...m, [name]: value });
  };
  const fetchtTeacherData = async () => {
    const db = getDatabase(app);
    const dataRef = ref(db, "data / teacher");
    const snapshot = await get(dataRef);

    if (snapshot.exists()) {
      setData(
        Object.values(snapshot.val()).filter(
          (item) => item.teacherPassword == m.password && item.name == m.name
        )
      );
    } else {
      alert("data is not found");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchtTeacherData();
    if (data.length == 1) {
      nav(`/teacher/${m.password}`);
    } else {
      setError(true);
    }
    console.log("clicked teacher");
  };
  return (
    <div>
      <hr className="m-4" />
      <div className="flex justify-center">
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <div className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                {" "}
                Teacher Login
              </div>
            </div>
            <div>
              <div>
                {error && (
                  <span className="text-red font-medium">
                    Wrong Name and password
                  </span>
                )}
              </div>
            </div>
            <div className="shadow-sm mb-2 border-green-200 border rounded-md   text-md h-[95px] p-2">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="name"
              >
                Enter Teacher name
              </label>
              <div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  value={m.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="shadow-sm mb-2 border-green-200 border rounded-md   text-md h-[95px] p-2">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="password"
              >
                Enter password (If not! contact Admin for password 8540897814)
              </label>
              <div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="password"
                  name="password"
                  type="text"
                  placeholder="Enter your Password"
                  value={m.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <button className="pl-2  pr-2 border greeb rounded bg-green-100">
                <span className="block  pl-3 pr-3 pt-1 pb-1   text-sm font-medium text-gray-900 dark:text-white">
                  Submit
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeacherLogin;
