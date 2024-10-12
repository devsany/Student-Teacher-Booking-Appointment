import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../firebase/firebaseConsole";

import { ref, set, push, getDatabase } from "firebase/database";

const AdminTeacher = () => {
  // teacher password generate
  const teacherPassword = Math.floor(100000 + Math.random() * 900000);

  const [m, setM] = useState({
    name: "",
    department: "",
    subject: "",
    extraSubject1: "",
    extraSubject2: "",
    appoint1: false,
    appoint2: false,
    appoint3: false,
    studentInfo1: "",
    studentInfo2: "",
    studentInfo3: "",
    teacherPassword: teacherPassword,
    a: "",
    number: "",
    email: "",
    studentMessage1: "",
    studentMessage2: "",
    studentMessage3: "",
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
      teacherPassword: m.teacherPassword,
      activity: m.a,
      number: m.number,
      email: m.email,
      appoint1: m.appoint1,
      appoint2: m.appoint2,
      appoint3: m.appoint3,
      studentInfo1: m.studentInfo1,
      studentInfo2: m.studentInfo2,
      studentInfo3: m.studentInfo3,
      studentMessage1: m.studentMessage1,
      studentMessage2: m.studentMessage2,
      studentMessage3: m.studentMessage3,
    })
      .then(() => {
        alert("data saved successfully");
        window.location.reload();
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
      <hr className="m-4" />
      <button
        className="pl-2 m-4 pr-2 border greeb rounded bg-green-100"
        onClick={handleClick}
      >
        <span className="block  pl-3 pr-3 pt-1 pb-1   text-sm font-medium text-gray-900 dark:text-white">
          Back
        </span>
      </button>
      <h2 className="block mb-2 text-2xl text-center font-medium text-gray-900 dark:text-white">
        Add Teacher
      </h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 m-4">
            <div>
              <div className="shadow-lg rounded-md   text-md h-[120px] p-2">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="name"
                >
                  Name of Teacher
                </label>
                <input
                  required
                  id="name"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="Enter Teacher name"
                  value={m.name}
                  onChange={handleChange}
                />
              </div>
              <div className="shadow-lg rounded-md  text-md h-[120px] p-2">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="number"
                >
                  Teacher Mobile Number
                </label>
                <input
                  required
                  id="number"
                  name="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="number"
                  placeholder="Enter Teacher Mobile Number"
                  value={m.number}
                  onChange={handleChange}
                />
              </div>
              <div className="shadow-lg rounded-md  text-md h-[120px] p-2">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="email"
                >
                  Teacher Email
                </label>
                <input
                  required
                  id="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="email"
                  placeholder="Enter Teacher Email"
                  value={m.email}
                  onChange={handleChange}
                />
              </div>
              <div className="shadow-lg rounded-md  text-md h-[120px] p-2">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="department"
                >
                  Department
                </label>
                <input
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="department"
                  name="department"
                  type="text"
                  placeholder="Enter Teacher Department"
                  value={m.department}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div className="shadow-lg rounded-md  text-md h-[120px] p-2">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="subject"
                >
                  Subject teacher
                </label>
                <input
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter Teacher name"
                  value={m.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="shadow-lg rounded-md  text-md h-[120px] p-2">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="extraSubject1"
                >
                  Extra subject Teach 1
                </label>
                <input
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="extraSubject1"
                  name="extraSubject1"
                  type="text"
                  placeholder="Extra Subject teach 1"
                  value={m.extraSubject1}
                  onChange={handleChange}
                />
              </div>
              <div className="shadow-lg rounded-md  text-md h-[120px] p-2">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="extraSubject2"
                >
                  Extra subject Teach 2
                </label>
                <input
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="extraSubject2"
                  name="extraSubject2"
                  type="text"
                  placeholder="Extra Subject teach 2"
                  value={m.extraSubject2}
                  onChange={handleChange}
                />
              </div>
              <div className="shadow-lg rounded-md  text-md h-[120px] p-2">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="activity"
                >
                  Active / Disactive
                </label>
                <div>
                  {" "}
                  <select name="a" value={m.a} onChange={handleChange} id="a">
                    <option value="">Select Option</option>
                    <option value="active">Active</option>
                    <option value="disactive">Disactive</option>
                  </select>
                </div>
              </div>
              <div className="flex float-right mt-2 mb-5">
                <button
                  className="border pl-6 pr-6 pt-1 pb-1 rounded-md bg-blue-200"
                  type="submit"
                >
                  <span className="block  text-md font-medium text-gray-900 dark:text-white">
                    Submit
                  </span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminTeacher;
