import { get, getDatabase, ref, update } from "firebase/database";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import app from "../firebase/firebaseConsole";
import { useEffect, useMemo, useState } from "react";
import StudentViewTeacher from "./StudentViewTeacher";
import {
  CarFront,
  Cylinder,
  GalleryVerticalEndIcon,
  HousePlusIcon,
  MousePointerClickIcon,
} from "lucide-react";

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
          <div className="text-center font-mono font-bold   text-3xl text-gray-700 mt-3">
            join Us
          </div>
          <div className="flex mb-10 border m-3 pt-10 pb-10 mt-10 rounded-lg shadow-md  justify-around">
            <a href="https://chat.whatsapp.com/CkoZZus7UCx4g8rRVMbamI">
              <img
                className="w-[150px] bg-green-100 rounded-md mt-3"
                src="/whatsapp-logo-icon-png-svg-removebg-preview.png"
                alt=""
              />{" "}
              <span className="font-mono mt-2 text-xl font-bold text-gray-700">
                We are here to help you
              </span>
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
          <div className="h-[117.5vh] rounded-md border overflow-x-scroll   md:w-[395px] ml-2">
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
      <div>
        {/* <div className="text-center font-mono font-bold mb-10  text-3xl text-gray-700 mt-10"></div> */}
        <div className="grid h-[100vh] md:grid-cols-2">
          <div className="flex items-center">
            <img className=" w-[90%]  " src="/mission2.png" alt="" />
          </div>
          <div className="items-center pl-4 flex ">
            <div>
              <span className="font-bold  text-blue-900 font-mono text-4xl  md:text-6xl  mr-10 pt-10">
                Learning with Love & laughter
              </span>
              <h2 className=" mt-1 font-thin w-[80%] ">
                Education is the most powerful weapon which you can use to
                change. Working hard is the only way to increase the chance of
                success. the world.
                <div className="   mt-5">
                  <NavLink to="/">
                    <span className="pl-2 pr-2 pt-1 pb-1 hover:bg-blue-400 hover:text-blue-950 bg-blue-900 text-white rounded-md">
                      Click To start
                    </span>
                  </NavLink>
                </div>
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div className="grid md:grid-cols-5 h-[50vh] mt-10 gap-6">
            <div className="col-span-2 md:mt-0 mt-10 flex items-center pl-4">
              <div>
                <div className="md:text-6xl text-4xl w-[340px] md:w-[500px] font-mono font-bold text-blue-900">
                  Awesome feature We Provide
                </div>
                <div>
                  <div className="font-thin text-md w-[300px]">
                    Learning is the best method to make you life stable. We are
                    here to help you with persional guidence
                  </div>
                </div>
              </div>
            </div>

            <div className="border flex items-center">
              <div>
                <div className="flex pt-4 items-center justify-center ">
                  <CarFront className=" text-blue-500 " />
                </div>
                <div className="text-center font-mono font-bold text-xl p-3 text-blue-500">
                  Drive you Carrior with us.
                </div>
              </div>
            </div>
            <div className="border flex items-center">
              <div>
                <div className="flex pt-4 items-center justify-center ">
                  <HousePlusIcon className=" text-purple-500 " />
                </div>
                <div className="text-center font-mono font-bold text-xl p-3 text-purple-500">
                  Make your Future bright.
                </div>
              </div>
            </div>
            <div className="border flex items-center">
              <div>
                <div className="flex pt-4 items-center justify-center ">
                  <GalleryVerticalEndIcon className=" text-yellow-800 " />
                </div>
                <div className="text-center font-mono font-bold text-xl p-3 text-yellow-800">
                  Showcase your Dream with us.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" p-4 md:mt-10 mt-[200px] h-[100vh] flex items-center">
        <div className="flex items-center">
          <div>
            <div className="md:grid md:grid-cols-2">
              <div>
                <img src="/mission3.jpg" alt="" />
              </div>

              <div className="items-center pl-4 flex ">
                <div>
                  <span className="font-bold  text-blue-900 font-mono text-xl  md:text-4xl  mr-10 pt-10">
                    We Focuse on Sustainable Development
                  </span>
                  <h2 className=" mt-1 font-thin w-[80%] ">
                    All round development is one of the main thing that we
                    should takecare while we are giving you Education.
                    <div className="   mt-5">
                      <NavLink to="/">
                        <span className="pl-2 pr-2 pt-1 pb-1 hover:bg-blue-400 hover:text-blue-950 bg-blue-900 text-white rounded-md">
                          Click To start
                        </span>
                      </NavLink>
                    </div>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      hii
      <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fsearch%2Fwebsite-gifs&psig=AOvVaw2ikqB8xaoG2T7HM-f_md9x&ust=1729445138144000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJjrlaz7mokDFQAAAAAdAAAAABAR"
        alt=""
      />
      {/* footer */}
      <div className="mt-[150px] md:mt-[300px] w-full h-[90vh] md:h-[40vh] bg-orange-400">
        <div className="md:grid md:grid-cols-2 p-10">
          <div className=" md:border-b-0 border-b-2 md:p-0  pb-10 md:pb-0 md:border-r-2 border-orange-800">
            <span className="font-mono font-bold text-[45px]  text-white ">
              Let's <span className="text-black">Crack</span> Something Together
            </span>
            <div className="text-white font-mono pr-5">
              Our <span className="text-black">Team is always ready</span> to
              help you. If you face any trouble plz free to contact us we are
              ready to help you{" "}
            </div>
          </div>
          <div className="pl-10">
            <div className="flex justify-center items-end h-[18vh]">
              <a href="https://app.formbricks.com/s/cm29wcjhw000anf2yqf7xxgz5">
                <div className="flex ">
                  <div className="pl-3 pr-3 pt-[6px] rounded-xl text-[18px] text-white bg-blue-500 font-mono font-bold ">
                    Submit Your Answer{" "}
                  </div>
                  <MousePointerClickIcon className=" w-[40px] h-[40px] text-white ml-[-10px]" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student_page_id;
