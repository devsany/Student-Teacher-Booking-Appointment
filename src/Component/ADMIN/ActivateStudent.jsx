import { get, getDatabase, ref, update } from "firebase/database";
import React, { act, useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import app from "../firebase/firebaseConsole";

const ActivateStudent = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [studentKey, setStudentKey] = useState("");
  const nav = useNavigate();
  const [activate, setActivate] = useState({
    a: true,
  });
  //   fetching student data
  const fetchTeacherID = async () => {
    const db = getDatabase(app);
    const dataRef = ref(db, "data /students");
    const snapshot = await get(dataRef);
    console.log(snapshot);
    if (snapshot.exists()) {
      const key = Object.keys(snapshot.val())[id];
      console.log(Object.keys(snapshot.val()));
        setStudentKey(key);
      setData(Object.values(snapshot.val())[id]);
    } else {
      alert("data is not found");
    }
  };
  console.log(data);
  //   console.log(studentKey);
  const handleActivate = () => {
    if (studentKey) {
      // Make sure we have a valid teacher key before updating
      const db = getDatabase();
      const studentRef = ref(db, `data /students/${studentKey}`); // Reference to the specific student
      console.log("activeate ref", studentRef);
      // Now update the teacher's data
      update(studentRef, {
        active: true,
      })
        .then(() => {
          alert("Teacher updated successfully!");
          nav("/admin/admin_console/admin_student_console/");
          //   window.location.reload();
        })
        .catch((error) => {
          alert("Error updating teacher:", error);
        });
    } else {
      alert("No teacher selected to update.");
    }
  };
  console.log("data of active atudent", data);
  useEffect(() => {
    fetchTeacherID();
  }, []);
  return (
    <div>
      <h2 className="text-center">ActivateStudents-{id}</h2>
      <hr />
      <div>
        <button
          className="p-3 bg-gray-500 border rounded-lg text-white"
          onClick={() => {
            nav("/admin/admin_console/admin_student_console");
          }}
        >
          Back
        </button>
      </div>
      <div>
        <div>
          {data.active ? (
            <>
              <div className="bg-green-200 p-3 rounded-md border">
                Activeted
              </div>
            </>
          ) : (
            <>
              <div className="bg-red-200 p-3 border rounded-md">
                Not Activated
              </div>
            </>
          )}
        </div>
        <div>Class-{data.class}</div>
        <div>School Name - {data.school}</div>
        <div>Name-{data.name}</div>
        <div>Email-{data.email}</div>
        <div>Number-{data.number}</div>
        <div>Student Password-{data.studentPassword}</div>
        <button onClick={handleActivate}>Activate Student</button>
      </div>
    </div>
  );
};

export default ActivateStudent;
