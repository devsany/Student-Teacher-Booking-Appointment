import { getDatabase, push, ref, set } from "firebase/database";

import app from "../firebase/firebaseConsole";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const StudentRegistration = () => {
  const studentPassword = Math.floor(100000 + Math.random() * 900000);

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
    })
      .then(() => {
        alert("data saved successfully");
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

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="border m-4">
          Already Register
          <form onSubmit={() => {}}>
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
            </div>
            <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
              <label htmlFor="email">Enter your Email</label>
              <div>
                <input
                  id="email"
                  name="email"
                  onChange={handleLogin}
                  type="email"
                  placeholder="Enter your Mobile Number"
                  value={r.email}
                />
              </div>
            </div>
            <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
              <label htmlFor="School">Enter your school Name</label>
              <div>
                <input
                  id="school"
                  name="school"
                  onChange={handleLogin}
                  type="text"
                  placeholder="Enter your school name"
                  value={r.school}
                />
              </div>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;
