import { get, getDatabase, ref, remove, update } from "firebase/database";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import app from "../firebase/firebaseConsole";

const UpdateTeacher = () => {
  const { id } = useParams();

  const [m, setM] = useState({});
  const [teacherKey, setTeacherKey] = useState("");
  const nav = useNavigate();
  //   fetch the teacher data
  const fetchTeacherID = async () => {
    const db = getDatabase(app);
    const dataRef = ref(db, "data / teacher");
    const snapshot = await get(dataRef);

    if (snapshot.exists()) {
      const key = Object.keys(snapshot.val())[id];
      const value = Object.values(snapshot.val())[id];

      setTeacherKey(key);
      setM({
        name: Object.values(snapshot.val())[id].name,
        department: Object.values(snapshot.val())[id].department,
        subject: Object.values(snapshot.val())[id].subject,
        extraSubject1: Object.values(snapshot.val())[id].extraSubject1,
        extraSubject2: Object.values(snapshot.val())[id].extraSubject2, 
        teacherPassword: Object.values(snapshot.val())[id].teacherPassword,
        a: Object.values(snapshot.val())[id].a,
        number: Object.values(snapshot.val())[id].number,
        email: Object.values(snapshot.val())[id].email,
      });
      setTeacherKey(key);
    } else {
      alert("data is not found");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setM({ ...m, [name]: value });
  };

  // handle update data

  const handleUpdate = () => {
    if (teacherKey) {
      // Make sure we have a valid teacher key before updating
      const db = getDatabase();
      const teacherRef = ref(db, `data / teacher/${teacherKey}`); // Reference to the specific teacher

      // Now update the teacher's data
      update(teacherRef, {
        name: m.name,
        department: m.department,
        subject: m.subject,
        extraSubject1: m.extraSubject1,
        extraSubject2: m.extraSubject2,
        // appoint1: m.appoint1,
        // appoint2: m.appoint2,
        // appoint3: m.appoint3,
        teacherPassword: m.teacherPassword,
        a: m.a,
        number: m.number,
        email: m.email,
      })
        .then(() => {
          alert("Teacher updated successfully!");
          nav("/admin/admin_console/admin_view_teacher_console");
        })
        .catch((error) => {
          alert("Error updating teacher:", error);
        });
    } else {
      alert("No teacher selected to update.");
    }
  };
  const handleDelete = () => {
    if (teacherKey) {
      // Ensure a teacher has been fetched
      const db = getDatabase();
      const teacherRef = ref(db, `data / teacher/${teacherKey}`); // Reference to the specific teacher record

      // Remove the teacher's data from the database
      remove(teacherRef)
        .then(() => {
          alert("Teacher deleted successfully!");
          nav("/admin/admin_console/admin_view_teacher_console");
        })
        .catch((error) => {
          alert("Error deleting teacher:", error);
        });
    } else {
      alert("No teacher selected for deletion.");
    }
  };
  useEffect(() => {
    fetchTeacherID();
  }, []);
  return (
    <div>
      <div>
        <hr className="m-4" />
        <button
          className="pl-2 m-4 pr-2 border greeb rounded bg-green-100"
          onClick={() => nav("/admin/admin_console/admin_view_teacher_console")}
        >
          <span className="block  pl-3 pr-3 pt-1 pb-1   text-sm font-medium text-gray-900 dark:text-white">
            Back
          </span>
        </button>
        <h2 className="block mb-2 text-2xl text-center font-medium text-gray-900 dark:text-white">
          Update Teacher
        </h2>

        <div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 m-4">
            <div>
              <div className="shadow-lg rounded-md   text-md h-[120px] p-2">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="name"
                >
                  Name of Teacher
                </label>
                <input
                  required
                  id="name"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="Enter Teacher name"
                  value={m.name}
                  onChange={handleChange}
                />
              </div>
              <div className="shadow-lg rounded-md  text-md h-[120px] p-2">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="number"
                >
                  Teacher Mobile Number
                </label>
                <input
                  required
                  id="number"
                  name="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="number"
                  placeholder="Enter Teacher Mobile Number"
                  value={m.number}
                  onChange={handleChange}
                />
              </div>
              <div className="shadow-lg rounded-md  text-md h-[120px] p-2">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="email"
                >
                  Teacher Email
                </label>
                <input
                  required
                  id="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="email"
                  placeholder="Enter Teacher Email"
                  value={m.email}
                  onChange={handleChange}
                />
              </div>
              <div className="shadow-lg rounded-md  text-md h-[120px] p-2">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="department"
                >
                  Department
                </label>
                <input
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="department"
                  name="department"
                  type="text"
                  placeholder="Enter Teacher Department"
                  value={m.department}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div className="shadow-lg rounded-md  text-md h-[120px] p-2">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="subject"
                >
                  Subject teacher
                </label>
                <input
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter Teacher name"
                  value={m.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="shadow-lg rounded-md  text-md h-[120px] p-2">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="extraSubject1"
                >
                  Extra subject Teach 1
                </label>
                <input
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="extraSubject1"
                  name="extraSubject1"
                  type="text"
                  placeholder="Extra Subject teach 1"
                  value={m.extraSubject1}
                  onChange={handleChange}
                />
              </div>
              <div className="shadow-lg rounded-md  text-md h-[120px] p-2">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="extraSubject2"
                >
                  Extra subject Teach 2
                </label>
                <input
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="extraSubject2"
                  name="extraSubject2"
                  type="text"
                  placeholder="Extra Subject teach 2"
                  value={m.extraSubject2}
                  onChange={handleChange}
                />
              </div>
              <div className="shadow-lg rounded-md  text-md h-[120px] p-2">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="activity"
                >
                  Active / Disactive
                </label>
                <div>
                  {" "}
                  <select name="a" value={m.a} onChange={handleChange} id="a">
                    <option value="">Select Option</option>
                    <option value="active">Active</option>
                    <option value="disactive">Disactive</option>
                  </select>
                </div>
              </div>
              <div className="flex float-right mt-2 mb-5">
                <div>
                  <button
                    className="    mt-4 md:mt-5 hover:border-yellow-500 border-pink-300 shadow-md shadow-yellow-100"
                    onClick={handleUpdate}
                  >
                    <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white pl-3 pr-3 pt-1 pb-1 rounded bg-green-400">
                      Update
                    </span>
                  </button>
                </div>
                <div>
                  <button
                    className="   ml-3  mt-2 md:mt-5 hover:border-yellow-500 border-pink-300 shadow-md shadow-yellow-100"
                    onClick={handleDelete}
                  >
                    <span className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white pl-3 pr-3 pt-1 pb-1 rounded bg-red-400">
                      Delete Account
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <button onClick={handleDisactive}>Disactive Account</button> */}
        </div>
      </div>
    </div>
  );
};

export default UpdateTeacher;
