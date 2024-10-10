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
  const { ids } = location.state || {}  ; // Get the passed student data

  console.log("student data", ids);
  const [data, setData] = useState([]);
  const [teacherKey, setTeachertKey] = useState("");
  const { id } = useParams();
  const nav = useNavigate();
  const fetchTeacherID = async () => {
    const db = getDatabase(app);
    const dataRef = ref(db, "data / teacher");
    const snapshot = await get(dataRef);
    console.log(snapshot);
    if (snapshot.exists()) {
      const key = Object.keys(snapshot.val())[id];
      console.log(key);
      setTeachertKey(key);
      setData(Object.values(snapshot.val())[id]);
    } else {
      alert("data is not found");
    }
  };
  console.log(data);

  const handleActivate1 = () => {
    if (teacherKey) {
      // Make sure we have a valid teacher key before updating
      const db = getDatabase();
      const teacherRef = ref(db, `data / teacher/${teacherKey}`); // Reference to the specific student
      console.log("activeate ref", teacherRef);
      // Now update the teacher's data
      update(teacherRef, {
        appoint1: true,
        appointStudent1: data,
      })
        .then(() => {
          alert("Teacher appointed successfully!");
          nav(`/student/` + id);
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
      console.log("activeate ref", teacherRef);
      // Now update the teacher's data
      update(teacherRef, {
        appoint2: true,
      })
        .then(() => {
          alert("Teacher appointed successfully!");
          nav(`/student/` + id);
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
      console.log("activeate ref", teacherRef);
      // Now update the teacher's data
      update(teacherRef, {
        appoint3: true,
      })
        .then(() => {
          alert("Teacher appointed successfully!");
          nav(`/student/` + id);
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
    // fetchTeacherWithMobileNumber();
  }, []);
  return (
    <div>
      <h2 className="text-center">Teacher id-{id}</h2>
      <div>
        <button
          className="bg-gray-500 border rounded-lg p-2"
          onClick={() => nav(`/student/` + id)}
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
