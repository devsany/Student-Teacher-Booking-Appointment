import { get, getDatabase, ref, update } from "firebase/database";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import app from "../firebase/firebaseConsole";

const AdminStudent = () => {
  const [data, setData] = useState([]);
  const [studentKey, setStudentKey] = useState("");
  const [toggle, setToggle] = useState(true);
  const [m, setM] = useState({
    name: "",
    department: "",
    subject: "",
    extraSubject1: "",
    extraSubject2: "",
    appoint1: "",
    appoint2: "",
    appoint3: "",
    teacherPassword: "",
    a: "",
    number: "",
    email: "",
  });
  const nav = useNavigate();
  const handleClick = () => {
    nav("/admin/admin_console");
  };
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setM({ ...m, [name]: value });
  // };
  const fetchData = async () => {
    const bd = getDatabase(app);
    const dataRef = ref(bd, "data /students");
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
      const key = Object.keys(snapshot.val())[0];

      setStudentKey(key);
      setData(Object.values(snapshot.val()));
    } else {
      alert("data is not found");
    }
  };

  const handleStudentActivate = (e) => {
    if (studentKey) {
      // Make sure we have a valid teacher key before updating
      const db = getDatabase();
      const studentRef = ref(db, `data /students/${e}`); // Reference to the specific teacher

      // Now update the teacher's data
      update(studentRef, {
        active: true,
      })
        .then(() => {
          alert("Student Activated successfully!");
        })
        .catch((error) => {
          alert("Error updating student:", error);
        });
    } else {
      alert("No Student selected to update.");
    }
  };
  const togglehandle = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {" "}
      <hr />
      <div className=" p-2">
        <button
          className="pl-2 m-4 pr-2 border greeb rounded bg-green-100"
          onClick={handleClick}
        >
          <span className="block  pl-3 pr-3 pt-1 pb-1   text-sm font-medium text-gray-900 dark:text-white">
            Back
          </span>
        </button>
      </div>
      <h2 className="block mb-2 text-2xl text-center font-medium text-gray-900 dark:text-white">
        Students List
      </h2>
      <div className="flex justify-around   flex-wrap">
        {data &&
          data.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="p-3 border w-[400px]  text-md font-medium text-gray-900 dark:text-white rounded-md shadow-md m-2"
                >
                  <div key={index}>Name : - {item.name}</div>
                  <div>Class : - {item.class}</div>
                  <div>School Name : - {item.school}</div>
                  <hr className="mt-2 mb-2" />
                  <div>Mobile Number : - {item.number}</div>
                  <div>Email : - {item.email}</div>
                  <hr className="mt-2 mb-2" />
                  <div>Student password:- {item.studentPassword}</div>
                  <hr className="mt-2 mb-2" />
                  <div>
                    {item.active ? (
                      <>
                        <div className=" mb-2   ">
                          <span className="pl-4 pb-1 pt-1 pr-4 bg-green-200 broder rounded-lg">
                            Activated
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className=" mb-2   ">
                          <span className="pl-4 pb-1 pt-1 pr-4 bg-red-200 broder rounded-lg">
                            Not Activated
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                  <div>
                    <NavLink
                      to={`/admin/admin_console/admin_student_console/asmin_studnet_console_id/${index}`}
                    >
                      <div className="border text-center hover:bg-blue-300 pl-3 pr-3 bg-blue-300 rounded-md shadow-sm">
                        {" "}
                        View
                      </div>
                    </NavLink>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default AdminStudent;
