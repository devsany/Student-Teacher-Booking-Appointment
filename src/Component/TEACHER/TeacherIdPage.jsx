import { get, getDatabase, ref, update } from "firebase/database";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import app from "../firebase/firebaseConsole";

const TeacherIdPage = () => {
  const { id } = useParams();
  const [ap1, setApi1] = useState([]);
  const [ap2, setAp2] = useState([]);
  const [ap3, setAp3] = useState([]);
  const [data, setData] = useState([]);
  const [s1, setS1] = useState("");
  const [s2, setS2] = useState("");
  const [s3, setS3] = useState("");
  const [teacherKeys, setTeacherKeys] = useState("");

  console.log(id);
  const fetchData = async () => {
    const bd = getDatabase(app);
    const dataRef = ref(bd, "data / teacher");
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
      setData(
        Object.values(snapshot.val()).filter(
          (item) => item.teacherPassword == id
        )
      );
      setS1(
        Object.values(snapshot.val()).filter(
          (item) => item.teacherPassword == id
        )[0].studentInfo1
      );
      setS2(
        Object.values(snapshot.val()).filter(
          (item) => item.teacherPassword == id
        )[0].studentInfo2
      );
      setS3(
        Object.values(snapshot.val()).filter(
          (item) => item.teacherPassword == id
        )[0].studentInfo3
      );
    } else {
      alert("data is not found");
    }
  };

  console.log(data);
  console.log(typeof s1);
  console.log(s2);
  console.log(s3);

  const fetchTeacherID = async () => {
    const db = getDatabase(app);
    const dataRef = ref(db, "data / teacher");
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
      const key = Object.keys(snapshot.val());
      console.log(key);
      // setStudentKey(key);
      console.log(Object.values(snapshot.val()));
      console.log(
        Object.values(snapshot.val()).filter(
          (item) => item.teacherPassword == Number(id)
        )[0]
      );

      const index = Object.values(snapshot.val()).findIndex(
        (obj) => obj.teacherPassword === Number(id)
      );
      console.log(index);
      const keys = Object.keys(snapshot.val())[index];
      console.log(keys);
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
    if (teacherKeys) {
      // Make sure we have a valid teacher key before updating
      const db = getDatabase();
      const teacherRef = ref(db, `data / teacher/${teacherKeys}`); // Reference to the specific teacher

      // Now update the teacher's data
      update(teacherRef, {
        appoint1: false,
        appoint2: false,
        appoint3: false,
        studentInfo1: "",
        studentInfo2: "",
        studentInfo3: "",
      })
        .then(() => {
          alert("Teacher updated successfully!");
          // nav(`/teacher/${teacherId}`);
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
    fetchData();
  }, []);
  return (
    <div>
      <div className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
        {" "}
        Teacher page
      </div>
      <div>
        {data &&
          data.map((item, index) => {
            return (
              <>
                <div className="border p-10 shadow-lime-700-md ml-3 mr-3 text-lg font-medium text-gray-900 dark:text-white m-2 p-2 rounded border-green-200">
                  <div>
                    <div className="text-3xl">{item.name} </div>
                    <div className="text-lg mt-2 ml-1">({item.subject})</div>
                  </div>
                  <div> {item.department}</div>
                  <hr className="mt-4" />
                  <div className="mt-2 mb-2">
                    <div>Mobile Number:-{item.number}</div>
                    <div>Email:-{item.email}</div>
                  </div>
                  <hr className="mt-4" />
                  <div className="mb-2 mt-2">
                    Subject Teacher:-{item.subject}
                  </div>
                  <hr className="mt-4" />
                  <div className="mt-2 mb-2">
                    <div>Extra Subject (1):-{item.extraSubject1}</div>
                    <div>Extra Subject (2):-{item.extraSubject2}</div>
                  </div>
                  <hr className="mt-4" />
                  <div className="mt-2 mb-2">
                    Teacher Account Number:- {item.teacherPassword}
                  </div>
                </div>
                <div className="grid m-3 grid-cols-3 gap-4">
                  <div>
                    {s1 ? (
                      <NavLink
                        to={{
                          pathname: `/teacher/appoint_student/${id}/${index}`, // Assuming you have a route like /teacher/:id
                          // state: { s1 },

                          hash: String(s1), // Pass the student data
                        }}
                      >
                        <div className="text-lg font-medium text-gray-900 dark:text-white pl-3 pr-3 pt-1 pb-1  bg-green-200 border rounded-lg">
                          Appoint Teacher
                        </div>
                      </NavLink>
                    ) : (
                      <div className="text-lg font-medium text-gray-900 dark:text-white pl-3 pr-3 pt-1 pb-1  bg-red-200 border rounded-lg">
                        Not Appointed
                      </div>
                    )}
                  </div>
                  <div>
                    {s2 ? (
                      <NavLink
                        to={{
                          pathname: `/teacher/appoint_student/${id}/${index}`, // Assuming you have a route like /teacher/:id
                          // state: `/ram`,
                          hash: String(s2), // Pass the student data
                        }}
                      >
                        <div className="text-lg font-medium text-gray-900 dark:text-white pl-3 pr-3 pt-1 pb-1  bg-green-200 border rounded-lg">
                          Appoint Teacher
                        </div>
                      </NavLink>
                    ) : (
                      <div className="text-lg font-medium text-gray-900 dark:text-white pl-3 pr-3 pt-1 pb-1  bg-red-200 border rounded-lg">
                        Not Appointed
                      </div>
                    )}
                  </div>
                  <div>
                    {s3 ? (
                      <NavLink
                        to={{
                          pathname: `/teacher/appoint_student/${id}/${index}`, // Assuming you have a route like /teacher/:id
                          state: `/ram`,
                          hash: String(s3), // Pass the student data
                        }}
                      >
                        <div className="text-lg font-medium text-gray-900 dark:text-white pl-3 pr-3 pt-1 pb-1  bg-green-200 border rounded-lg">
                          Appoint Teacher
                        </div>
                      </NavLink>
                    ) : (
                      <div className="text-lg font-medium text-gray-900 dark:text-white pl-3 pr-3 pt-1 pb-1  bg-red-200 border rounded-lg">
                        Not Appointed
                      </div>
                    )}
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <hr className="m-4" />
      <div onClick={handleCompleteAppoinment1} className="">
        <span className="pl-4 pr-4 pt-1 pb-1 hover:text-black m-4 font-mono text-slate-600 bg-green-200 cursor-pointer rounded-md shadow-md">
          When you complete all the Appointment in a day Click here to clear
        </span>
      </div>
    </div>
  );
};

export default TeacherIdPage;
