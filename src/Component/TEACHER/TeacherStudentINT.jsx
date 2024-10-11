import { get, getDatabase, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import app from "../firebase/firebaseConsole";

const TeacherStudentINT = () => {
  const { id } = useParams();
  const fullPath = window.location.pathname; // Gives you the path after the domain
  console.log(fullPath); // Example: "/teacher/appoint_student/290014/0"
  const [ulr, setUrl] = useState(Number(fullPath.split("/")[3]));
  const location = useLocation();
  console.log(location);
  console.log(location.hash.substring(1));
  const [studentID, setStudentID] = useState(location.hash.substring(1));
  const [studentReciveID, setStudentReciveID] = useState([]);
  console.log(studentID);
  const fetchStudentID = async () => {
    const db = getDatabase(app);
    const dataRef = ref(db, "data /students");
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
      const key = Object.keys(snapshot.val())[0];

      // setStudentKey(key);
      console.log(
        Object.values(snapshot.val()).filter(
          (item) => item.studentPassword == Number(studentID)
        )[0].studentPassword
      );
      setStudentReciveID(
        Object.values(snapshot.val()).filter(
          (item) => item.studentPassword == studentID
        )
      );
    } else {
      alert("data is not found");
    }
  };
  console.log(studentReciveID);
  const nav = useNavigate();
  useEffect(() => {
    fetchStudentID();
  }, []);
  return (
    <>
      <div>Studnet Id</div>
      <button
        className="pl-2 m-4 pr-2 border greeb rounded bg-green-100"
        onClick={() => nav(`/teacher/${ulr}`)}
      >
        <span className="block  pl-3 pr-3 pt-1 pb-1   text-sm font-medium text-gray-900 dark:text-white">
          Back
        </span>
      </button>
      <div>
        {studentReciveID &&
          studentReciveID.map((item, index) => {
            return (
              <>
                <div className="border p-10 shadow-lime-700-md ml-3 mr-3 text-lg font-medium text-gray-900 dark:text-white m-2 p-2 rounded border-green-200">
                  <div>Name-{item.name}</div>
                  <div>Class-{item.class}</div>
                  <div>School Name - {item.school}</div>
                  <div>Email-{item.email}</div>
                  <div>Number-{item.number}</div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default TeacherStudentINT;
