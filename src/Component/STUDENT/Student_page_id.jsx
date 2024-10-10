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
  const [studentID, setStudentID] = useState(id);
  console.log(studentID);
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
  console.log(data);
  const filteredItems = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-center">Student_page_id - {id}</h2>
      <div>
        <h2>Search Teachers by Name</h2>

        {/* Input for searching by teacher's name */}
        <input
          type="text"
          placeholder="Enter Teacher's Name"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Trigger filtering on input change
        />
      </div>
      <div>
        {filteredItems &&
          filteredItems.map((item, index) => {
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
                  {/* <div>Teacher Account Password:-{item.teacherPassword}</div> */}
                  <div>Teacher Activity:-{item.activity}</div>
                  <div className="bg-green-300 p-3 border rounded-md">
                    <NavLink
                      to={{
                        pathname: `/student/teacher_search/${index}`, // Assuming you have a route like /teacher/:id
                        state: { ids: id }, // Pass the student data
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
