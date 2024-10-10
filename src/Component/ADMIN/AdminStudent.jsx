import { get, getDatabase, ref, update } from "firebase/database";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import app from "../firebase/firebaseConsole";

const AdminStudent = () => {
  const [data, setData] = useState([]);
  const [studentKey, setStudentKey] = useState("");
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
  console.log(data);

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
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {" "}
      <div className="border p-2">
        <button onClick={handleClick}>Back</button>
      </div>
      <div>
        {data &&
          data.map((item, index) => {
            return (
              <>
                <div className="p-3 border m-2">
                  <div key={index}>Name : - {item.name}</div>
                  <div>Class : - {item.class}</div>
                  <div>Mobile Number : - {item.number}</div>
                  <div>Email : - {item.email}</div>
                  <div>School Name : - {item.school}</div>
                  <div>Student password:- {item.studentPassword}</div>
                  <div>
                    Active : -{" "}
                    {item.active ? (
                      <>
                        <div className="bg-green p-2 broder rounded-lg">
                          Activated
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-red-200 rounded-lg p-2 border ">
                          Not Activated
                        </div>
                      </>
                    )}
                  </div>
                  <div>
                    <NavLink
                      to={`/admin/admin_console/admin_student_console/asmin_studnet_console_id/${index}`}
                    >
                      <div className="border pl-3 pr-3 bg-green-300"> View</div>
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
