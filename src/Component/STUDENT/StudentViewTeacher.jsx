import { get, getDatabase, ref, update } from "firebase/database";
import React, { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import app from "../firebase/firebaseConsole";

const StudentViewTeacher = () => {
  const location = useLocation();
  console.log(location);
  console.log(location.hash.substring(1));
  const [studentID, setStudentID] = useState(location.hash.substring(1));

  const [data, setData] = useState([]);
  const [teacherKey, setTeachertKey] = useState("");
  const [studentReciveID, setStudentReciveID] = useState([]);
  const { id } = useParams();
  const nav = useNavigate();
  const fetchTeacherID = async () => {
    const db = getDatabase(app);
    const dataRef = ref(db, "data / teacher");
    const snapshot = await get(dataRef);

    if (snapshot.exists()) {
      const key = Object.keys(snapshot.val())[id];

      setTeachertKey(key);
      setData(Object.values(snapshot.val())[id]);
    } else {
      alert("data is not found");
    }
  };
  // fetch the student through id
  const fetchStudentID = async () => {
    const db = getDatabase(app);
    const dataRef = ref(db, "data /students");
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
      const key = Object.keys(snapshot.val())[0];

      // setStudentKey(key);
      console.log(
        Object.values(snapshot.val()).filter(
          (item) => item.studentPassword == studentID
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

  const handleActivate1 = () => {
    if (teacherKey) {
      // Make sure we have a valid teacher key before updating
      const db = getDatabase();
      const teacherRef = ref(db, `data / teacher/${teacherKey}`); // Reference to the specific student

      // Now update the teacher's data
      update(teacherRef, {
        appoint1: true,
        // appointStudent1: data,
        studentInfo1: studentReciveID[0].studentPassword,
      })
        .then(() => {
          alert("Teacher appointed successfully!");
          nav(`/student/` + studentID);
          //   window.location.reload();
        })
        .catch((error) => {
          alert("Error updating teacher:", error);
        });
    } else {
      alert("No teacher selected to update.");
    }
  };
  const handleActivate2 = () => {
    if (teacherKey) {
      // Make sure we have a valid teacher key before updating
      const db = getDatabase();
      const teacherRef = ref(db, `data / teacher/${teacherKey}`); // Reference to the specific student

      // Now update the teacher's data
      update(teacherRef, {
        appoint2: true,

        studentInfo2: studentReciveID[0].studentPassword,
      })
        .then(() => {
          alert("Teacher appointed successfully!");
          nav(`/student/` + studentID);
          //   window.location.reload();
        })
        .catch((error) => {
          alert("Error updating teacher:", error);
        });
    } else {
      alert("No teacher selected to update.");
    }
  };
  const handleActivate3 = () => {
    if (teacherKey) {
      // Make sure we have a valid teacher key before updating
      const db = getDatabase();
      const teacherRef = ref(db, `data / teacher/${teacherKey}`); // Reference to the specific student

      // Now update the teacher's data
      update(teacherRef, {
        appoint3: true,

        studentInfo3: studentReciveID[0].studentPassword,
      })
        .then(() => {
          alert("Teacher appointed successfully!");
          nav(`/student/` + studentID);
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
    fetchStudentID();
    // fetchTeacherWithMobileNumber();
  }, []);
  return (
    <div>
      <h2 className="text-center">Teacher id-{id}</h2>
      <div>
        <button
          className="bg-gray-500 border rounded-lg p-2"
          onClick={() => nav(`/student/` + studentID)}
        >
          Back
        </button>
      </div>
      <div>
        <div>
          <div>name:{data.name}</div>
          <div>Mobile Number:-{data.number}</div>
          <div>Email:-{data.email}</div>
          <div>Department:-{data.department}</div>
          <div>Subject Teacher:-{data.subject}</div>
          <div>Extra Subject (1):-{data.extraSubject1}</div>
          <div>Extra Subject (2):-{data.extraSubject2}</div>
          <div>Teacher Activity:-{data.activity}</div>
          <div className="grid grid-cols-3">
            <div onClick={handleActivate1}>
              {data.appoint1 ? (
                <div className="bg-green-200 m-2 p-2 rounded-lg border">
                  Appointed 1
                </div>
              ) : (
                <div className="bg-red-200 m-2 p-2 rounded-lg border">
                  Not Appointed
                </div>
              )}
            </div>
            <div onClick={handleActivate2}>
              {" "}
              {data.appoint2 ? (
                <div className="bg-green-200 m-2 p-2 rounded-lg border">
                  Appointed 2
                </div>
              ) : (
                <div className="bg-red-200 m-2 p-2 rounded-lg border">
                  Not Appointed
                </div>
              )}
            </div>
            <div onClick={handleActivate3}>
              {data.appoint3 ? (
                <div className="bg-green-200 m-2 p-2 rounded-lg border">
                  Appointed 3
                </div>
              ) : (
                <div className="bg-red-200 m-2 p-2 rounded-lg border">
                  Not Appointed
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentViewTeacher;
