import { get, getDatabase, push, ref, set } from "firebase/database";

import app from "../firebase/firebaseConsole";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  BookMarked,
  Check,
  CircleCheckIcon,
  GalleryHorizontalEnd,
  Hand,
  LucideTicket,
  Mouse,
  Phone,
  Ticket,
  TicketCheck,
} from "lucide-react";

const studentPassword = Math.floor(100000 + Math.random() * 900000);
const StudentRegistration = () => {
  const [data, setData] = useState([]);
  const [errorLogin, setErrorLogin] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();
  const [m, setM] = useState({
    name: "",
    class: "",
    appoint1: "",
    appoint2: "",
    appoint3: "",
    studentPassword: studentPassword,
    school: "",
    number: "",
    email: "",
  });

  const [r, setR] = useState({
    name: "",
    class: "",
    appoint1: "",
    appoint2: "",
    appoint3: "",
    studentPassword: studentPassword,
    school: "",
    number: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    // input

    e.preventDefault();

    //firebase setup
    const db = getDatabase(app);
    const newDocm = push(ref(db, "data /students"));
    set(newDocm, {
      name: m.name,
      class: m.class,
      studentPassword: m.studentPassword,
      school: m.school,
      number: m.number,
      email: m.email,
      active: false,
    })
      .then(() => {
        alert("data saved successfully");
        setShowPassword(true);
        nav("/");
        window.location.reload();
      })
      .catch((err) => {
        alert("error", err.message);
      });
  };
  //   for registration
  const handleChange = (e) => {
    const { name, value } = e.target;
    setM({ ...m, [name]: value });
  };
  //   for login
  const handleLogin = (e) => {
    const { name, value } = e.target;
    setR({ ...r, [name]: value });
  };
  const fetchStudentID = async () => {
    const error = {};
    if (!r.name) {
      error.name = "require to fetch password approve by admin";
    } else if (!r.class) {
      error.class = "require to fetch password approve by admin";
    } else if (!r.number) {
      error.number = "require to fetch password approve by admin";
    } else {
      const db = getDatabase(app);
      const dataRef = ref(db, "data /students");
      const snapshot = await get(dataRef);

      if (snapshot.exists()) {
        setData(
          Object.values(snapshot.val()).filter(
            (item) =>
              item.number == r.number &&
              item.name == r.name &&
              item.class == r.class &&
              item.active == true
          )
        );
      } else {
        alert("data is not found");
      }
    }
    setErrorLogin(error);
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    nav(`/student/${data[0].studentPassword}`);
  };
  return (
    <div>
      <div className="grid md:grid-cols-2   ">
        <div className=" p-4 md:border-r-1">
          <div className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
            {" "}
            Registration for new Student
          </div>
          <form onSubmit={handleSubmit}>
            <div className="shadow-sm mb-2 border-green-200 border rounded-md   text-md h-[95px] p-2">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="name"
              >
                Name of Student*
              </label>
              <div>
                <input
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  value={m.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="shadow-sm mb-2 border-green-200 border rounded-md  text-md h-[95px] p-2">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="class"
                >
                  Class*
                </label>
                <div>
                  <input
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="class"
                    name="class"
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your class"
                    value={m.class}
                  />
                </div>
              </div>
              <div className="shadow-sm mb-2 border-green-200 border rounded-md  text-md h-[95px] p-2">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="School"
                >
                  Enter your school Name*
                </label>
                <div>
                  <input
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="school"
                    name="school"
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your school name"
                    value={m.school}
                  />
                </div>
              </div>
            </div>
            <div className="shadow-sm mb-2 border-green-200 border rounded-md  text-md h-[95px] p-2">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="number"
              >
                Enter your Mobile Number*
              </label>
              <div>
                <input
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="number"
                  name="number"
                  onChange={handleChange}
                  type="number"
                  placeholder="Enter your Mobile Number"
                  value={m.number}
                />
              </div>
            </div>
            <div className="shadow-sm mb-2 border-green-200 border rounded-md  text-md h-[95px] p-2">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="email"
              >
                Enter your Email*
              </label>
              <div>
                <input
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter your Mobile Number"
                  value={m.email}
                />
              </div>
            </div>

            {showPassword ? (
              <div className="block text-sm font-medium text-gray-900 dark:text-white mb-3">
                {" "}
                Wait for Admin to verify your submited data if any query plz
                fill free to contact on 8540897814
              </div>
            ) : (
              <div className="block text-sm font-medium text-gray-900 dark:text-white mb-3">
                After Submition of Registration Form Password Will be generated
              </div>
            )}

            <div className="flex float-end">
              <button
                className="pl-2  pr-2 border greeb rounded bg-green-100"
                type="submit"
              >
                <span className="block  pl-3 pr-3 pt-1 pb-1   text-sm font-medium text-gray-900 dark:text-white">
                  Submit
                </span>
              </button>
            </div>
          </form>
        </div>
        <div className="  p-4 md:border-l-2">
          <div className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
            Login
          </div>
          <div className=" block   text-sm font-medium text-gray-900 dark:text-white">
            <div className="flex">
              <div>1. Already Register </div>
              <Check className="w-5" />{" "}
              <div className="flex">
                <div> Plz Fell Free to fill the form. </div>
              </div>
            </div>
            <div className="flex">
              <div>2. </div>
              <div>
                <Mouse className="w-5" />
              </div>
              <div className="flex">
                <div>
                  Click to generate password (If Password not generate Plz
                  Contact
                </div>

                <Phone className="w-5" />

                <div>on +91 8540897814)</div>
              </div>
            </div>{" "}
          </div>
          <div className="block text-sm font-medium text-gray-900 dark:text-white mb-3">
            {" "}
            3. Copy password Paste in Password Block you will get all access to
            you account thanku
          </div>
          <form onSubmit={handleSubmitLogin}>
            <div className="shadow-sm mb-2 border-green-200 border rounded-md  text-md h-[95px] p-2">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="name"
              >
                Name of Student*
              </label>
              <div>
                <input
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  value={r.name}
                  onChange={handleLogin}
                />
              </div>
              {/* {errorLogin.name && <>{errorLogin.name}</>} */}
            </div>
            <div className="shadow-sm mb-2 border-green-200 border rounded-md  text-md h-[95px] p-2">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="class"
              >
                Class*
              </label>
              <div>
                <input
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="class"
                  name="class"
                  onChange={handleLogin}
                  type="text"
                  placeholder="Enter your class"
                  value={r.class}
                />
              </div>
              {/* {errorLogin.class && <>{errorLogin.class}</>} */}
            </div>
            <div className="shadow-sm mb-2 border-green-200 border rounded-md  text-md h-[95px] p-2">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="number"
              >
                Enter your Mobile Number*
              </label>
              <div>
                <input
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="number"
                  name="number"
                  onChange={handleLogin}
                  type="number"
                  placeholder="Enter your Mobile Number"
                  value={r.number}
                />
              </div>
              {/* {errorLogin.number && <>{errorLogin.number}</>} */}
            </div>
            <div className="shadow-sm mb-2 border-green-200 border rounded-md  text-md h-[95px] p-2">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="password"
              >
                Enter Generated Password*
              </label>
              <div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="password"
                  name="password"
                  onChange={handleLogin}
                  type="number"
                  placeholder="Enter Generated Password"
                  value={r.password}
                />
              </div>
              {/* {errorLogin.number && <>{errorLogin.number}</>} */}
            </div>

            <div className="block  pl-3 pr-3 pt-1 pb-1     text-sm font-medium text-gray-900 dark:text-white">
              {" "}
              {data.length == 1 ? (
                <>
                  <span>{data[0].studentPassword}</span>
                </>
              ) : null}
            </div>

            <div className="flex justify-between">
              <div>
                <button
                  className="border pl-2 pr-2 bg-purple-200 rounded-md"
                  onClick={fetchStudentID}
                >
                  <span className="block  pl-3 pr-3 pt-1 pb-1   *: text-sm font-medium text-gray-900 dark:text-white">
                    Click to get admin approve password
                  </span>
                </button>
              </div>
              <div>
                <button
                  className="pl-2  pr-2 border greeb rounded-md bg-green-100 "
                  type="submit"
                >
                  <span className="block  pl-3 pr-3 pt-1 pb-1   text-sm font-medium text-gray-900 dark:text-white">
                    Submit
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;
