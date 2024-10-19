import { get, getDatabase, ref, update } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import app from "../firebase/firebaseConsole";

const TeacherStudentINT = () => {
  const { id } = useParams();
  const fullPath = window.location.pathname; // Gives you the path after the domain
 
  const [ulr, setUrl] = useState(fullPath.split("/")[3]);
  const parts = fullPath.split("/");
  // const teacherId = parts[3]; // 312473
  const [teacherId, setTeacherId] = useState(parts[3]);
  const location = useLocation();
 
  const [studentID, setStudentID] = useState(location.hash.substring(1));
  const [studentReciveID, setStudentReciveID] = useState([]);
  const [teacherKey, setTeacherKeys] = useState("");
 
  const fetchStudentID = async () => {
    const db = getDatabase(app);
    const dataRef = ref(db, "data /students");
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
      const key = Object.keys(snapshot.val())[0];

      // setStudentKey(key);
     
      setStudentReciveID(
        Object.values(snapshot.val()).filter(
          (item) => item.studentPassword == studentID
        )
      );
    } else {
      alert("data is not found");
    }
  };

  const fetchTeacherID = async () => {
    const db = getDatabase(app);
    const dataRef = ref(db, "data / teacher");
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
      const key = Object.keys(snapshot.val());
    

      const index = Object.values(snapshot.val()).findIndex(
        (obj) => obj.teacherPassword === Number(teacherId)
      );
    
      const keys = Object.keys(snapshot.val())[index];
     
      setTeacherKeys(keys);
      // setStudentReciveID(
      //   Object.values(snapshot.val()).filter(
      //     (item) => item.studentPassword == studentID
      //   )
      // );
    } else {
      alert("data is not found");
    }
  };
  const handleCompleteAppoinment1 = () => {
    // teacherKey
    if (teacherKey) {
      // Make sure we have a valid teacher key before updating
      const db = getDatabase();
      const teacherRef = ref(db, `data / teacher/${teacherKey}`); // Reference to the specific teacher

      // Now update the teacher's data
      update(teacherRef, {
        appoint1: false,
        studentInfo1: "",
      })
        .then(() => {
          alert("Teacher updated successfully!");
          nav(`/teacher/${teacherId}`);
        })
        .catch((error) => {
          alert("Error updating teacher:", error);
        });
    } else {
      alert("No teacher selected to update.");
    }
  };
 
  const nav = useNavigate();
  useEffect(() => {
    fetchStudentID();
    fetchTeacherID();
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
                <div
                  key={index}
                  className="border p-10 shadow-lime-700-md ml-3 mr-3 text-lg font-medium text-gray-900 dark:text-white m-2 p-2 rounded border-green-200"
                >
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
