import { get, getDatabase, ref, update } from "firebase/database";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import app from "../firebase/firebaseConsole";
import { useEffect, useState } from "react";
import StudentViewTeacher from "./StudentViewTeacher";

const Student_page_id = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Input for searching by name
  //   const [filteredTeachers, setFilteredTeachers] = useState(data);
  const [query, setQuery] = useState("");
  const { id } = useParams();
  console.log(typeof id);

  const [studentID, setStudentID] = useState(id);

  const fetchData = async () => {
    const db = getDatabase(app);
    const dataRef = ref(db, "data / teacher");
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
      setData(Object.values(snapshot.val()));
    } else {
      alert("data is not found");
    }
  };

  const filteredItems = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <hr />
        <div className="  text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
          {" "}
          Student page Id - {id}
        </div>
        <div className="md:w-[400px] m-2 shadow-sm mb-2 border-green-200 border rounded-md   text-md h-[95px] p-2">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="search"
          >
            Search Teachers by Name
          </label>

          {/* Input for searching by teacher's name */}
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="search"
            id="search"
            type="text"
            placeholder="Enter Teacher's Name"
            value={query}
            onChange={(e) => setQuery(e.target.value)} // Trigger filtering on input change
          />
        </div>
      </div>
      <div>
        {filteredItems &&
          filteredItems.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="border m-2 p-2 shadow-md rounded border-green-200 text-md font-medium text-gray-900 dark:text-white"
                >
                  {" "}
                  <div className="flex">
                    {" "}
                    <div className="text-4xl"> {item.name}</div>{" "}
                    <div className="mt-3 text-xl">({item.subject})</div>
                  </div>
                  <div>Department:-{item.department}</div>
                  <hr className="mt-3 mb-3" />
                  <div>Extra Subject (1):-{item.extraSubject1}</div>
                  <div>Extra Subject (2):-{item.extraSubject2}</div>
                  <hr className="mt-3 mb-3" />
                  <div>Mobile Number:-{item.number}</div>
                  <div>Email:-{item.email}</div>
                  <hr className="mt-3 mb-3" />
                  <div className="mt-2 mb-2">
                    {" "}
                    <span className="border pl-2 pr-2 bg-green-100 rounded-md">
                      {item.activity}
                    </span>
                  </div>
                  <div className="bg-green-300 p-3 border rounded-md">
                    <NavLink
                      to={{
                        pathname: `/student/teacher_search/${index}`, // Assuming you have a route like /teacher/:id
                        state: `/ram`,
                        hash: id, // Pass the student data
                      }}
                    >
                      Appoint Teacher
                    </NavLink>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Student_page_id;
