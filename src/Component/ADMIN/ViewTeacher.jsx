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
    <div className="">
      {" "}
      <hr className="m-4" />
      <button
        className="pl-2 m-4 pr-2 border greeb rounded bg-green-100"
        onClick={handleClick}
      >
        <span className="block  pl-3 pr-3 pt-1 pb-1   text-sm font-medium text-gray-900 dark:text-white">
          Back
        </span>
      </button>
      <h2 className="block mb-2 text-2xl text-center font-medium text-gray-900 dark:text-white">
        Teacher's List
      </h2>
      <div className="flex justify-around flex-wrap grow-0 text-md font-medium text-gray-900 dark:text-white">
        {data &&
          data.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="border m-2 p-2 rounded border-green-200"
                >
                  <div className="m-2">
                    <div className="flex ">
                      <div className="text-3xl">{item.name} </div>
                      <div className="text-lg mt-2 ml-1">({item.subject})</div>
                    </div>
                    <div> {item.department}</div>
                    <hr />

                    <div>Mobile Number:-{item.number}</div>
                    <div>Email:-{item.email}</div>
                    <div>Subject Teacher:-</div>
                    <div>Extra Subject (1):-{item.extraSubject1}</div>
                    <div>Extra Subject (2):-{item.extraSubject2}</div>
                    <div>Teacher Account Password:-{item.teacherPassword}</div>
                    <div>Teacher Activity:-{item.activity}</div>
                  </div>
                  <div>
                    <div className="border rounded-md m-2 text-center bg-blue-200">
                      <NavLink
                        to={`/admin/admin_console/admin_view_teacher_console/${item.teacherPassword}`}
                      >
                        <span className="block  pl-3 pr-3 pt-1 pb-1   text-sm font-medium text-gray-900 dark:text-white">
                          View
                        </span>
                      </NavLink>
                    </div>
                    <div className="border rounded-md text-center m-2 bg-orange-500">
                      <NavLink
                        to={`/admin/admin_console/admin_update_teacher_console/${index}`}
                      >
                        <span className="block  pl-3 pr-3 pt-1 pb-1   text-sm font-medium text-gray-900 dark:text-white">
                          {" "}
                          Update
                        </span>
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
