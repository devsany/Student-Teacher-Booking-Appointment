import { get, getDatabase, ref } from "firebase/database";
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
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h2 className="text-center">TeacherIdPage</h2>

      <div>
        {data &&
          data.map((item, index) => {
            return (
              <>
                <div>name:{item.name}</div>
                <div>Mobile Number:-{item.number}</div>
                <div>Email:-{item.email}</div>
                <div>Department:-{item.department}</div>
                <div>Subject Teacher:-{item.subject}</div>
                <div>Extra Subject (1):-{item.extraSubject1}</div>
                <div>Extra Subject (2):-{item.extraSubject2}</div>
                <div>Teacher Account Password:-{item.teacherPassword}</div>
                <div>Teacher Activity:-{item.activity}</div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="pl-3 pr-3 pt-1 pb-1   border rounded-lg">
                    {s1 ? (
                      <div className="bg-green-200">
                        <NavLink
                          to={{
                            pathname: `/teacher/appoint_student/${id}/${index}`, // Assuming you have a route like /teacher/:id
                            // state: { s1 },

                            hash: String(s1), // Pass the student data
                          }}
                        >
                          Appoint Teacher
                        </NavLink>
                      </div>
                    ) : (
                      <div className="bg-red-200">Not Appointed</div>
                    )}
                  </div>
                  <div className="pl-3 pr-3 pt-1 pb-1   border rounded-lg">
                    {s2 ? (
                      <div className="bg-green-200">
                        <NavLink
                          to={{
                            pathname: `/teacher/appoint_student/${id}/${index}`, // Assuming you have a route like /teacher/:id
                            // state: `/ram`,
                            hash: String(s2), // Pass the student data
                          }}
                        >
                          Appoint Teacher
                        </NavLink>
                      </div>
                    ) : (
                      <div className="bg-red-200">Not Appointed</div>
                    )}
                  </div>
                  <div className="pl-3 pr-3 pt-1 pb-1   border rounded-lg">
                    {s3 ? (
                      <div className="bg-green-200">
                        <NavLink
                          to={{
                            pathname: `/teacher/appoint_student/${id}/${index}`, // Assuming you have a route like /teacher/:id
                            state: `/ram`,
                            hash: String(s3), // Pass the student data
                          }}
                        >
                          Appoint Teacher
                        </NavLink>
                      </div>
                    ) : (
                      <div className="bg-red-200">Not Appointed</div>
                    )}
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default TeacherIdPage;
