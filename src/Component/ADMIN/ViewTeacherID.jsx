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
        className="pl-2 m-4 pr-2 border greeb rounded bg-green-100"
        onClick={() => nav("/admin/admin_console/admin_view_teacher_console")}
      >
        <span className="block  pl-3 pr-3 pt-1 pb-1   text-sm font-medium text-gray-900 dark:text-white">
          Back
        </span>
      </button>

      <div className="flex justify-around">
        <div className="">
          {data &&
            data.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="border p-10 shadow-lime-700-md ml-3 mr-3 text-lg font-medium text-gray-900 dark:text-white m-2 p-2 rounded border-green-200"
                  >
                    {" "}
                    <div className="flex ">
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
                    <div>
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
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ViewTeacherID;
