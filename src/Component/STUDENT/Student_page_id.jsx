import { get, getDatabase, ref, update } from "firebase/database";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import app from "../firebase/firebaseConsole";
import { useEffect, useMemo, useState } from "react";
import StudentViewTeacher from "./StudentViewTeacher";

const Student_page_id = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Input for searching by name
  //   const [filteredTeachers, setFilteredTeachers] = useState(data);
  const [query, setQuery] = useState("");
  const { id } = useParams();

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

  const filteredItems = useMemo(() => {
    return data.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
  }, [query, data]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className=" md:flex">
            <div className="md:p-5  pt-3 pr-4 pl-4 pb-1  md:h-[50vh]">
              <div className=" rounded-[30px] pt-3 pl-5 pr-5 bg-green-700 h-[33vh]">
                <span className="text-white font-thin p-2   ">
                  Online Platform
                </span>
                <div className="text-white font-bold font-mono text-4xl p-2">
                  {" "}
                  Start your Learning Journey Today
                </div>
                <div className="text-white pt-2 pb-5 pl-2 w-[400px] font-thin">
                  join a Vibrant community of learners and transform your
                  asprirations into achievements, starting today.
                </div>
              </div>
              <div className="grid gap-3 grid-cols-2">
                <div className="border  mt-2 rounded-3xl  h-[90px] items-center justify-around font-mono font-bold text-center flex bg-gray-200">
                  <div className="text-gray-600 text-center">
                    <div className="text-md">20+ </div>
                    <div className="text-sm">partner</div>
                  </div>
                  <div className="text-gray-600 text-center">
                    {" "}
                    <div className="text-md">180+ </div>
                    <div className="text-sm">Studnets</div>
                  </div>
                  <div className="text-gray-600 text-center">
                    <div className="text-md">62+ </div>
                    <div className="text-sm">Instructore</div>
                  </div>
                </div>
                <div className="border flex items-center justify-center font-mono font-bold text-xl text-center text-blue-600  mt-2 rounded-3xl  bg-gray-200">
                  <div className="w-[150px] ">4K+ Studnets Review</div>
                </div>
              </div>
            </div>
            <div className=" pl-4 pr-4 md:p-5">
              <img
                className="rounded-[30px] w-[1280px] "
                src="/studentHii.png"
                alt="studnet-hii"
              />
            </div>
          </div>
          <div className="text-center font-mono font-bold  text-3xl text-gray-700 mt-3">
            Trusted Company
          </div>

          <div className="   overflow-hidden">
            <div className="   p-10  ">
              <div className="flex   left-0 animate-marquee-infinite">
                <div className="flex  w-30 justify-around">
                  <img src="/1.png" alt="" />
                  <img src="/2.png" alt="" />
                  <img src="/3.png" alt="" />
                  <img src="/4.png" alt="" />
                  <img src="/5.png" alt="" />
                  <img src="/1.png" alt="" />
                  <img src="/2.png" alt="" />
                  <img src="/3.png" alt="" />
                  <img src="/4.png" alt="" />
                  <img src="/5.png" alt="" />
                  <img src="/1.png" alt="" />
                  <img src="/2.png" alt="" />
                  <img src="/3.png" alt="" />
                  <img src="/4.png" alt="" />
                  <img src="/5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center font-mono font-bold  text-3xl text-gray-700 mt-3">
            join Us
          </div>
          <div className="flex mb-10 border m-3 rounded-lg shadow-md  justify-around">
            <a href="https://chat.whatsapp.com/CkoZZus7UCx4g8rRVMbamI">
              <img
                className="w-[150px] bg-green-100 rounded-md mt-3"
                src="/whatsapp-logo-icon-png-svg-removebg-preview.png"
                alt=""
              />{" "}
              <span className="font-mono mt-2">We are here to help you</span>
            </a>
          </div>
        </div>
        <div className="  ">
          <div>
            <hr />
            {/* <div className="  text-center block text-lg font-medium text-gray-900 dark:text-white">
              {" "}
              Student page Id - {id}
            </div> */}
            <div className="md:w-[390px] m-2 shadow-sm   border-green-200 border rounded-md   text-md h-[75px] p-2">
              <label
                className="block   text-sm font-medium text-gray-500 dark:text-white"
                htmlFor="search"
              >
                Search Teachers by Name
              </label>

              {/* Input for searching by teacher's name */}
              <input
                className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="search"
                id="search"
                type="text"
                placeholder="Enter Teacher's Name"
                value={query}
                onChange={(e) => setQuery(e.target.value)} // Trigger filtering on input change
              />
            </div>
          </div>
          <div className="h-[90vh] rounded-md border overflow-x-scroll w-[395px] ml-2">
            {filteredItems &&
              filteredItems.map((item, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="border m-2 p-2 shadow-md bg-red-50 rounded border-green-200 text-sm   text-gray-900 dark:text-white"
                    >
                      {" "}
                      <div className="flex">
                        {" "}
                        <div className="grid   w-full grid-cols-3">
                          <div className="col-span-2  flex">
                            <div className="text-2xl"> {item.name}</div>{" "}
                            <div className="  text-2xl">({item.subject})</div>
                          </div>
                          <div>
                            <div>
                              <NavLink
                                to={{
                                  pathname: `/student/teacher_search/${index}`, // Assuming you have a route like /teacher/:id
                                  state: `/ram`,
                                  hash: id, // Pass the student data
                                }}
                              >
                                <span className="p-1    bg-green-200 rounded-md shadow-md hover:bg-blue-500 hover:text-white ">
                                  {" "}
                                  Appoint Teacher
                                </span>
                              </NavLink>
                            </div>

                            {/* <span className="border pl-2 pr-2 bg-green-100 rounded-md">
                              {item.activity}
                            </span> */}
                          </div>
                        </div>
                      </div>
                      <div>Department:-{item.department}</div>
                      <hr className="m-1" />
                      <div>Extra Subject (1):-{item.extraSubject1}</div>
                      <div>Extra Subject (2):-{item.extraSubject2}</div>
                      <hr className="m-1" />
                      <div>Mobile Number:-{item.number}</div>
                      <div>Email:-{item.email}</div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
      <div> hii </div>
    </div>
  );
};

export default Student_page_id;
