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
      <div className="flex  justify-around  flex-wrap grow-0 text-md font-medium text-gray-900 dark:text-white">
        {/* {data &&
          data.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="border w-[400px] m-2 p-2 rounded border-green-200"
                >
                  <div className="m-2">
                    <div className="flex ">
                      <div className="text-3xl">{item.name} </div>
                      <div className="text-lg mt-2 ml-1">({item.subject})</div>
                    </div>
                    <div> {item.department}</div>
                    <hr />

                    <div className="mt-2 mb-2">
                      <div>Mobile Number:-{item.number}</div>
                      <div>Email:-{item.email}</div>
                    </div>
                    <hr />
                    <div className="mb-2 mt-2">
                      Subject Teacher:-{item.subject}
                    </div>
                    <hr />
                    <div className="mt-2 mb-2">
                      <div>Extra Subject (1):-{item.extraSubject1}</div>
                      <div>Extra Subject (2):-{item.extraSubject2}</div>
                    </div>
                    <hr />
                    <div className="mt-2 mb-2">
                      Teacher Account:- {item.teacherPassword}
                    </div>
                    {item.activity ? (
                      <div className=" pl-2 rounded-md shadow-sm mt-1 mb-1 border bg-green-200 ">
                        Active
                      </div>
                    ) : (
                      <div className="pl-2 rounded-md shadow-sm mt-1 mb-1 border bg-red-200">
                        Not Active
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="mt-2 mb-2">
                      <hr />
                    </div>
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
          })} */}
        <table className="w-full text-sm    text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th>Teacher ID</th>
              <th>Name of Teacher</th>
              <th>Activity</th>
              <th>Appointment 1</th>
              <th>Appointment 2</th>
              <th>Appointment 3</th>
              <th>Department</th>
              <th>Email</th>
              <th>Subject 1</th>
              <th>Subject 2</th>
              <th>Mobile Number</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {data.map((item, index) => {
              return (
                <>
                  <tr className="hover:bg-gray-100 border-b-2 ">
                    <td>{item.teacherPassword}</td>
                
                    <td className=" ">
                      {item.name} ({item.subject})
                    </td>
                    <td>
                      <div className="pl-2 pr-2 bg-green-200 rounded-md pt-1 pb-1">
                        {item.activity}
                      </div>
                    </td>
                    <td>
                      {item.appoint1 ? (
                        <div className="pl-2 pr-2 bg-green-200 rounded-md pt-1 pb-1">
                          Appointed
                        </div>
                      ) : (
                        <div className="pl-2 pr-2 bg-red-200 rounded-md pt-1 pb-1">
                          Not Appointed
                        </div>
                      )}
                    </td>
                    <td>
                      {item.appoint2 ? (
                        <div className="pl-2 pr-2 bg-green-200 rounded-md pt-1 pb-1">
                          Appointed
                        </div>
                      ) : (
                        <div className="pl-2 pr-2 bg-red-200 rounded-md pt-1 pb-1">
                          Not Appointed
                        </div>
                      )}
                    </td>
                    <td>
                      {item.appoint3 ? (
                        <div className="pl-2 pr-2 bg-green-200 rounded-md pt-1 pb-1">
                          Appointed
                        </div>
                      ) : (
                        <div className="pl-2 pr-2 bg-red-200 rounded-md pt-1 pb-1">
                          Not Appointed
                        </div>
                      )}
                    </td>
                    <td>{item.department}</td>
                    <td>{item.email}</td>
                    <td>{item.extraSubject1}</td>
                    <td>{item.extraSubject2}</td>
                    <td>{item.number}</td>
                    <td>
                      <NavLink
                        to={`/admin/admin_console/admin_view_teacher_console/${item.teacherPassword}`}
                      >
                        <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          View
                        </span>
                      </NavLink>
                    </td>
                    <td>
                      <div className="border rounded-md text-center m-2 bg-gray-200 hover:bg-gray-300">
                        <NavLink
                          to={`/admin/admin_console/admin_update_teacher_console/${index}`}
                        >
                          <span className="font-medium pl-3 pr-3 pt-2 pb-2 text-blue-600 dark:text-blue-500 hover:underline">
                            {" "}
                            Update
                          </span>
                        </NavLink>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewTeacher;
