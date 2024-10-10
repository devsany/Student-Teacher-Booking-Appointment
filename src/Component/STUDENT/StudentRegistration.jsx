import { get, getDatabase, push, ref, set } from "firebase/database";

import app from "../firebase/firebaseConsole";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
    // input setup
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
      console.log(snapshot);
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
      <div className="grid grid-cols-2 border  ">
        <div className="border m-4">
          Registration for new Student
          <form onSubmit={handleSubmit}>
            <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
              <label htmlFor="name">Name of Student</label>
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  value={m.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
              <label htmlFor="class">Class</label>
              <div>
                <input
                  id="class"
                  name="class"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your class"
                  value={m.class}
                />
              </div>
            </div>
            <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
              <label htmlFor="number">Enter your Mobile Number</label>
              <div>
                <input
                  id="number"
                  name="number"
                  onChange={handleChange}
                  type="number"
                  placeholder="Enter your Mobile Number"
                  value={m.number}
                />
              </div>
            </div>
            <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
              <label htmlFor="email">Enter your Email</label>
              <div>
                <input
                  id="email"
                  name="email"
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter your Mobile Number"
                  value={m.email}
                />
              </div>
            </div>
            <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
              <label htmlFor="School">Enter your school Name</label>
              <div>
                <input
                  id="school"
                  name="school"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your school name"
                  value={m.school}
                />
              </div>
            </div>
            {showPassword ? (
              <>
                {" "}
                Wate for Admin to verify your submited data if any query plz
                fill free to contact on 8540897814
              </>
            ) : (
              <>
                After Submition of Registration Form Password Will be generated
              </>
            )}

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="border m-4">
          Already Register Plx Fill Free to fill the form and password all ready
          generated
          <ol>
            <li>Copy password</li>
            <li>
              Paste in Password Block you will get all access to you account
              thanku
            </li>
          </ol>
          <form onSubmit={handleSubmitLogin}>
            <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
              <label htmlFor="name">Name of Student</label>
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  value={r.name}
                  onChange={handleLogin}
                />
              </div>
              {errorLogin.name && <>{errorLogin.name}</>}
            </div>
            <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
              <label htmlFor="class">Class</label>
              <div>
                <input
                  id="class"
                  name="class"
                  onChange={handleLogin}
                  type="text"
                  placeholder="Enter your class"
                  value={r.class}
                />
              </div>
              {errorLogin.class && <>{errorLogin.class}</>}
            </div>
            <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
              <label htmlFor="number">Enter your Mobile Number</label>
              <div>
                <input
                  id="number"
                  name="number"
                  onChange={handleLogin}
                  type="number"
                  placeholder="Enter your Mobile Number"
                  value={r.number}
                />
              </div>
              {errorLogin.number && <>{errorLogin.number}</>}
            </div>
            <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
              <label htmlFor="password">Enter Generated Password</label>
              <div>
                <input
                  id="password"
                  name="password"
                  onChange={handleLogin}
                  type="number"
                  placeholder="Enter Generated Password"
                  value={r.password}
                />
              </div>
              {errorLogin.number && <>{errorLogin.number}</>}
            </div>
            {data.length == 1 ? <>{data[0].studentPassword}</> : null}
            <button
              className="border pl-3 pr-3 bg-green-200 rounded-md"
              onClick={fetchStudentID}
            >
              Click to get admin approve password
            </button>
            <button
              className="border pl-3 pr-3 bg-gray-400 rounded-md"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;
