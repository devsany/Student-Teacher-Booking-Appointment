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

    if (snapshot.exists()) {
      const key = Object.keys(snapshot.val())[id];

      setStudentKey(key);
      setData(Object.values(snapshot.val())[id]);
    } else {
      alert("data is not found");
    }
  };

  const handleActivate = () => {
    if (studentKey) {
      // Make sure we have a valid teacher key before updating
      const db = getDatabase();
      const studentRef = ref(db, `data /students/${studentKey}`); // Reference to the specific student

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

  useEffect(() => {
    fetchTeacherID();
  }, []);
  return (
    <div className="">
      <hr />
      <div>
        <button
          className="pl-2 m-4 pr-2 border greeb rounded bg-green-100"
          onClick={() => {
            nav("/admin/admin_console/admin_student_console");
          }}
        >
          <span className="block  pl-3 pr-3 pt-1 pb-1   text-sm font-medium text-gray-900 dark:text-white">
            Back
          </span>
        </button>
      </div>
      <div className="flex justify-center">
        <div className="border p-5  text-lg font-medium text-gray-900 dark:text-white">
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
          <div>Name:- {data.name}</div>
          <div>Class:- {data.class}</div>
          <div>School Name:- {data.school}</div>
          <hr />
          <div>Email:- {data.email}</div>
          <div>Number:- {data.number}</div>
          <hr />
          <div>Student Password:- {data.studentPassword}</div>
          <button
            className="bg-slate-700 text-white pl-3 pr-3 border rounded-md shadow-md"
            onClick={handleActivate}
          >
            Activate Student
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivateStudent;
