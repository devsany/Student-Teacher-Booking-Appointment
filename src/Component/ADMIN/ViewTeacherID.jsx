import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import app from "../firebase/firebaseConsole";
import { ref, get, getDatabase } from "firebase/database";

const ViewTeacherID = () => {
  const [data, setData] = useState([]);
  const [mainData, setMainData] = useState([]);
  const { id } = useParams();
  const nav = useNavigate();
  const fetchTeacherID = async () => {
    const db = getDatabase(app);
    const dataRef = ref(db, "data / teacher");
    const snapshot = await get(dataRef);

    if (snapshot.exists()) {
      setData(
        Object.values(snapshot.val()).filter(
          (item) => item.teacherPassword == id
        )
      );
    } else {
      alert("data is not found");
    }
  };

  //   filter teacher which mobile numeber is difference
  //   const fetchTeacherWithMobileNumber = () => {
  //     const teacherIDDetail = data.filter((item) => item.number === id);
  //     setMainData(teacherIDDetail);
  //   };

  //   useeffect to fetch the teacher detail through ID
  useEffect(() => {
    fetchTeacherID();
    // fetchTeacherWithMobileNumber();
  }, []);
  return (
    <div>
      <button
        className="pl-2 pr-2 border border-slate-600 bg-green-100 rounded-md"
        onClick={() => nav("/admin/admin_console/admin_view_teacher_console")}
      >
        Back
      </button>
      ViewTeacherID {id} hi
      <div>
        {data &&
          data.map((item, index) => {
            return (
              <>
                <div className="border m-2 p-2 rounded border-green-200">
                  {" "}
                  <div key={index}>name:{item.name}</div>
                  <div>Mobile Number:-{item.number}</div>
                  <div>Email:-{item.email}</div>
                  <div>Department:-{item.department}</div>
                  <div>Subject Teacher:-{item.subject}</div>
                  <div>Extra Subject (1):-{item.extraSubject1}</div>
                  <div>Extra Subject (2):-{item.extraSubject2}</div>
                  <div>Teacher Account Password:-{item.teacherPassword}</div>
                  <div>Teacher Activity:-{item.activity}</div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default ViewTeacherID;
