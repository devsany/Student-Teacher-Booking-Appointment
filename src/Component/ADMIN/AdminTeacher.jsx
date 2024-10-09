import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../firebase/firebaseConsole";

import { ref, set, push, getDatabase } from "firebase/database";

const AdminTeacher = () => {
  const [m, setM] = useState({
    name: "",
    department: "",
    subject: "",
    extraSubject1: "",
    extraSubject2: "",
    appoint1: "",
    appoint2: "",
    appoint3: "",
  });
  const nav = useNavigate();
  const handleClick = () => {
    nav("/admin/admin_console");
  };

  const handleSubmit = async (e) => {
    // input setup
    e.preventDefault();

    //firebase setup
    const db = getDatabase(app);
    const newDocm = push(ref(db, "data / teacher"));
    set(newDocm, {
      name: m.name,
      department: m.department,
      subject: m.subject,
      extraSubject1: m.extraSubject1,
      extraSubject2: m.extraSubject2,
    })
      .then(() => {
        alert("data saved successfully");
      })
      .catch((err) => {
        alert("error", err.message);
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setM({ ...m, [name]: value });
  };
  return (
    <div>
      <button onClick={handleClick}>Back</button>AdminTeacher
      <div>
        <form onSubmit={handleSubmit}>
          <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
            <label htmlFor="name">Name of Teacher</label>
            <input
              id="name"
              name="name"
              className="border w-[100%] shadow-sm rounded-sm pl-1"
              type="text"
              placeholder="Enter Teacher name"
              value={m.name}
              onChange={handleChange}
            />
          </div>
          <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
            <label htmlFor="department">Department</label>
            <input
              className="border w-[100%] shadow-sm rounded-sm pl-1"
              id="department"
              name="department"
              type="text"
              placeholder="Enter Teacher Department"
              value={m.department}
              onChange={handleChange}
            />
          </div>
          <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
            <label htmlFor="subject">Subject teacher</label>
            <input
              className="border w-[100%] shadow-sm rounded-sm pl-1"
              id="subject"
              name="subject"
              type="text"
              placeholder="Enter Teacher name"
              value={m.subject}
              onChange={handleChange}
            />
          </div>
          <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
            <label htmlFor="extraSubject1">Extra subject Teach 1</label>
            <input
              className="border w-[100%] shadow-sm rounded-sm pl-1"
              id="extraSubject1"
              name="extraSubject1"
              type="text"
              placeholder="Extra Subject teach 1"
              value={m.extraSubject1}
              onChange={handleChange}
            />
          </div>
          <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
            <label htmlFor="extraSubject2">Extra subject Teach 2</label>
            <input
              className="border w-[100%] shadow-sm rounded-sm pl-1"
              id="extraSubject2"
              name="extraSubject2"
              type="text"
              placeholder="Extra Subject teach 2"
              value={m.extraSubject2}
              onChange={handleChange}
            />
          </div>
          <button
            className="border    mt-4 md:mt-5 hover:border-yellow-500 border-pink-300 shadow-md shadow-yellow-100"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminTeacher;
