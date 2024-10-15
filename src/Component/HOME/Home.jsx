import {
  BookUp,
  GroupIcon,
  LogIn,
  Magnet,
  MessageCircle,
  MousePointerClickIcon,
  PanelTopDashed,
  Presentation,
  QrCode,
  ShowerHead,
  Timer,
} from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  const nav = useNavigate();
  return (
    <div>
      <div className="h-[100vw] bg-gradient-to-b from-orange-50">
        <div className="flex justify-end">
          <div className="fixed ">
            <div className="flex justify-center">
              {toggle ? (
                <div className="bg-white shadow-sm shadow-blue-400 m-3 p-3 rounded-md">
                  <div className="pl-3 font-mono m-2 hover:bg-blue-100 pr-3 rounded-md bg-[#ddd]">
                    <NavLink to="/student">Student Section</NavLink>
                  </div>
                  <div className="pl-3 font-mono m-2 hover:bg-blue-100 pr-3 rounded-md bg-[#ddd]">
                    <NavLink to="/teacher">Teacher Login</NavLink>
                  </div>
                </div>
              ) : null}
              <BookUp
                className="w-[30px]  ease-in-out duration-300 cursor-pointer h-[30px] text-blue-600 m-3"
                onClick={() => setToggle(!toggle)}
              />
            </div>
          </div>
        </div>
        <div className="pt-[75px] flex justify-center  items-center  ">
          <div className="">
            <span className="bg-orange-400 pl-5 pr-5 pt-1 pb-1 font-mono  text-center items-center  rounded-3xl text-white shadow-orange-200 shadow-md">
              <NavLink to="/student"> Schedule Teacher</NavLink>
            </span>
          </div>
        </div>
        <hr className=" mt-5 mb-5 md:ml-[150px] mr-[50px] ml-[50px] md:mr-[150px]" />
        {/*foundataion  */}
        <div className="flex justify-center font-mono font-bold text-slate-800 text-[35px]  md:text-[70px] text-center">
          <span className="w-[1000px]">
            Find your teacher & make an Appointment
          </span>
        </div>
        <div className="flex justify-center font-thin   text-slate-600  text-[15px] text-center">
          <span className="w-[900px]">
            "In every culture, the bond between students and teachers shapes the
            foundation of knowledge. Our platform honors this timeless
            relationship by providing a modern, accessible space for meaningful
            interaction, fostering respect, learning, and collaboration across
            all borders.
          </span>
        </div>
        {/* join us link */}
        <div className="flex justify-center mt-10">
          <span className="pl-5 pr-5 pt-2 pb-2 rounded-[999px] font-mono font-bold text-white shadow-md shadow-purple-400 bg-pink-800">
            Book an Appoinment
          </span>
          <span className="font-mono text-slate-700 mt-[10px] ml-[10px]">
            Join Us
          </span>
        </div>
        {/* get started section */}
        <div>
          <div className="md:flex justify-between mt-[150px] ml-10 mr-10">
            <div>
              <div className="font-mono font-bold text-center md:text-left text-[30px] md:text-[45px]">
                Get <span className="text-orange-600">Started</span> With US
              </div>
              <div className="font-mono w-full md:text-left text-center md:w-[600px]">
                Bringing{" "}
                <span className="text-orange-600">
                  students and teachers together
                </span>
                , not just to meet, but to build relationships that inspire
                lifelong learning.
              </div>
              <div className="flex justify-center flex-wrap ">
                <div>
                  <div className="w-[200px] h-[200px] m-5 bg-green-300 rounded-lg shadow-lg">
                    <div className="flex justify-center ">
                      <div className="text-center p-5">
                        <div className="flex  justify-center">
                          <LogIn className="w-[40px] mb-5 h-[40px] text-blue-500" />
                        </div>
                        <div>
                          <span className="font-mono font-bold text-lg">
                            Register As Student
                          </span>
                        </div>
                        <div>
                          <button
                            onClick={() => {
                              nav("/student");
                            }}
                            className="bg-blue-600 text-white pl-10 pr-10 mt-3 rounded-md text-xl"
                          >
                            Register
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="w-[200px] h-[200px] m-5 bg-blue-300 rounded-lg shadow-lg">
                    <div className="flex justify-center ">
                      <div className="text-center p-5">
                        <div className="flex  justify-center">
                          <Presentation className="w-[40px] mb-5 h-[40px] text-emerald-500" />
                        </div>
                        <div>
                          <span className="font-mono font-bold text-lg">
                            Login as a Teacher
                          </span>
                        </div>
                        <div>
                          <button
                            onClick={() => {
                              nav("/teacher");
                            }}
                            className="bg-green-500 text-white pl-10 pr-10 mt-3 rounded-md text-xl"
                          >
                            Login
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/pic/mentors-meets-theam.png"
                className="w-[300px] md:w-[450px]"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* List of some Guru */}
        <div className="flex justify-center">
          <div>
            <span className="flex mt-[100px] justify-center font-mono font-bold text-slate-800 text-[35px]  md:text-[70px] text-center">
              Meet your Guru's
            </span>
            <img
              src="teacher_group-removebg-preview.png"
              className="shadow-outline shadow-emerald-70 "
              alt=""
            />
          </div>
        </div>
        <div className="md:grid md:grid-cols-2">
          <div className="relative">
            <div>
              <img
                src="istockphoto-1475870499-612x612.jpg"
                className="md:m-5 m-5 md:w-[500px] w-[300px] rounded-xl"
                alt=""
              />
            </div>
            <div className="absolute">
              <img
                src="istockphoto-1328488607-612x612.jpg"
                className="mt-[-100px] md:mt-[-200px] ml-[200px] md:ml-[350px] w-[150px] md:w-[250px] shadow-lg border-r-4 rounded-xl border-orange-400"
                alt=""
              />
            </div>
          </div>
          {/* slogen */}
          <div className="mt-[100px] md:mt-[0px] ">
            <div>
              <div className="font-mono font-bold   text-[25px] ml-[10px]   md:pt-0 pt-10 md:text-[45px]   text-slate-700">
                We <span className="text-orange-400">Care for you,</span> We
                Write for you
              </div>
              <div className=" mr-[0px]  ml-[10px]">
                <span className="font-mono text-sm text-slate-500 ">
                  Education is the bridge that connects knowledge and growth.
                  Our platform strengthens that bridge by fostering seamless
                  communication between students and teachers.
                </span>
              </div>
              <div className="mt-5 bg-white border rounded-xl shadow-md md:ml-0 ml-[10px]   md:w-[600px] border-slate-200 p-3">
                <span className="flex">
                  <Magnet className="text-purple-500" />
                  <div className="font-mono ml-3 font-bold">
                    Affordable Session
                  </div>
                </span>
                <div>
                  <span className="font-thin text-slate-500">
                    In order to get the interaction between teacher and student
                    is High. Student not ware to get teachers.
                  </span>
                </div>
              </div>
              <div className="mt-5 bg-white border rounded-xl shadow-md  md:ml-0 ml-[10px]  md:w-[600px] border-slate-200 p-3">
                <span className="flex">
                  <QrCode className="text-blue-500" />
                  <div className="font-mono ml-3 font-bold">
                    Maintain Quality
                  </div>
                </span>
              </div>
              <div className="mt-5 bg-white border rounded-xl shadow-md  md:ml-0 ml-[10px]  md:w-[600px] border-slate-200 p-3">
                <span className="flex">
                  <PanelTopDashed className="text-orange-500" />
                  <div className="font-mono ml-3 font-bold">Easy to access</div>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* testimonial */}
        <div className="pt-10">
          <div className="bg-orange-400 rounded-xl shadow-lg w-full md:p-[100px] h-[full]">
            <div className="flex justify-around  flex-wrap flex-1 ">
              <div className=" rounded-3xl  w-[330px] h-[170px] m-[20px]">
                <div className=" text-white">
                  <div className="text-[45px] font-bold font-mono ">
                    How <span className="text-black">To Start</span>
                  </div>
                  <div className="text-sm font-thin">
                    Good Teacher Play an important role to make the future of
                    student. Not by his mental health but also with his physical
                    health.
                  </div>
                </div>
              </div>

              <div className="  w-[250px] hover:rotate-345 ease-in-out duration-300  rotate-355 rounded-xl   h-[234px] m-[20px]">
                <div>
                  {" "}
                  <img
                    src="/pic/slide2.png"
                    className="rounded-xl shadow-lg"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[250px] hover:rotate-15 ease-in-out duration-300  rotate-5 rounded-xl   h-[234px] m-[20px]">
                <div>
                  <img
                    src="/pic/slide3.png"
                    className="rounded-xl shadow-lg"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[250px]   hover:rotate-345 ease-in-out duration-300  rotate-355 rounded-xl   h-[234px] m-[20px]">
                <div>
                  <img
                    src="/pic/slide3.9.png"
                    className="rounded-xl shadow-lg"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[250px] hover:rotate-15 ease-in-out duration-300  rotate-5 rounded-xl   h-[234px] m-[20px]">
                <div>
                  <img
                    src="/pic/slide4.png"
                    className="rounded-xl shadow-xl"
                    alt=""
                  />
                </div>
              </div>
              <div className="  w-[250px] shadow-xl hover:rotate-345 ease-in-out duration-300 rotate-355 rounded-xl   h-[234px] m-[20px]">
                <div>
                  {" "}
                  <img
                    src="/pic/mentor-logo-female.png"
                    className="rounded-xl "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Teacher section */}
          <div className=" pt-[100px] md:pt-[200px] ">
            <div className="flex justify-center">
              <span className="font-mono text-[35px] md:text-[45px]  w-[700px] font-bold text-center">
                Quick <span className="text-orange-400">Solution</span> for
                Teacher Scheduling With Student
              </span>
            </div>
            <div className="flex justify-center flex-wrap mt-10">
              <div className="flex justify-center mb-[40px] ml-10 mr-10 w-[200px] h-[100px]">
                <div className="">
                  <div className="flex justify-center">
                    <div className="bg-pink-200 w-[80px] h-[80px] rounded-full p-5">
                      <GroupIcon className="text-pink-600 w-[40px] h-[40px]" />
                    </div>
                  </div>
                  <div className="font-mono font-bold text-pink-600 md:text-lg text-sm text-center pt-3">
                    Login as Teacher
                  </div>
                </div>
              </div>
              <div className="flex justify-center mb-[40px] ml-10 mr-10 w-[200px] h-[100px]">
                <div>
                  <div className="flex justify-center">
                    <div className="bg-green-200 w-[80px] h-[80px] rounded-full p-5">
                      <MessageCircle className="text-green-600 w-[40px] h-[40px]" />
                    </div>
                  </div>
                  <div className="font-mono font-bold text-green-600 md:text-lg text-sm text-center pt-3">
                    See Notification
                  </div>
                </div>
              </div>
              <div className="flex justify-center mb-[40px] ml-10 mr-10 w-[200px] h-[100px]">
                <div>
                  <div className="flex justify-center">
                    <div className="  bg-blue-200 w-[80px] h-[80px] rounded-full p-5">
                      <Timer className="text-blue-600 w-[40px] h-[40px]" />
                    </div>
                  </div>
                  <div className="font-mono font-bold text-blue-600 md:text-lg text-sm text-center pt-3">
                    Send Scheduling Time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="mt-[150px] md:mt-[300px] w-full h-[90vh] md:h-[40vh] bg-orange-400">
          <div className="md:grid md:grid-cols-2 p-10">
            <div className=" md:border-b-0 border-b-2 md:p-0  pb-10 md:pb-0 md:border-r-2 border-orange-800">
              <span className="font-mono font-bold text-[45px]  text-white ">
                Let's <span className="text-black">Crack</span> Something
                Together
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
    </div>
  );
};

export default Home;
