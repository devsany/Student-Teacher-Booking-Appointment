import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import app from "../firebase/firebaseConsole";
import { ref, get, getDatabase } from "firebase/database";

const ViewTeacher = () => {
  const [data, setData] = useState([]);
  const [teacherKey, setTeacherKey] = useState("");
  const nav = useNavigate();
  const handleClick = () => {
    nav("/admin/admin_console");
  };
  //   get data of all teacher to admin panel through firebase
  const fetchData = async () => {
    const bd = getDatabase(app);
    const dataRef = ref(bd, "data / teacher");
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
      setData(Object.values(snapshot.val()));
    } else {
      alert("data is not found");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {" "}
      <button
        className="pl-2 pr-2 border greeb rounded bg-green-100"
        onClick={handleClick}
      >
        Back
      </button>
      <h2 className="text-center">List of all Teacher</h2>
      <div>
        {data &&
          data.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="border m-2 p-2 rounded border-green-200"
                >
                  <div>name:{item.name}</div>
                  <div>Mobile Number:-{item.number}</div>
                  <div>Email:-{item.email}</div>
                  <div>Department:-{item.department}</div>
                  <div>Subject Teacher:-{item.subject}</div>
                  <div>Extra Subject (1):-{item.extraSubject1}</div>
                  <div>Extra Subject (2):-{item.extraSubject2}</div>
                  <div>Teacher Account Password:-{item.teacherPassword}</div>
                  <div>Teacher Activity:-{item.activity}</div>
                  <div>
                    <div>
                      <NavLink
                        to={`/admin/admin_console/admin_view_teacher_console/${item.teacherPassword}`}
                      >
                        View
                      </NavLink>
                    </div>
                    <div>
                      <NavLink
                        to={`/admin/admin_console/admin_update_teacher_console/${index}`}
                      >
                        Update
                      </NavLink>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default ViewTeacher;
