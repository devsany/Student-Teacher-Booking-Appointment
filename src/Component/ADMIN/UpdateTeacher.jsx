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
    console.log(snapshot);
    if (snapshot.exists()) {
      const key = Object.keys(snapshot.val())[0];

      setTeacherKey(key);
      setM({
        name: Object.values(snapshot.val()).filter(
          (item) => item.number == id
        )[0].name,
        department: Object.values(snapshot.val()).filter(
          (item) => item.number == id
        )[0].department,
        subject: Object.values(snapshot.val()).filter(
          (item) => item.number == id
        )[0].subject,
        extraSubject1: Object.values(snapshot.val()).filter(
          (item) => item.number == id
        )[0].extraSubject1,
        extraSubject2: Object.values(snapshot.val()).filter(
          (item) => item.number == id
        )[0].extraSubject2,
        // appoint1: Object.values(snapshot.val()).filter(
        //   (item) => item.number == id
        // )[0].appoint1,
        // appoint2: Object.values(snapshot.val()).filter(
        //   (item) => item.number == id
        // )[0].appoint2,
        // appoint3: Object.values(snapshot.val()).filter(
        //   (item) => item.number == id
        // )[0].appoint3,
        teacherPassword: Object.values(snapshot.val()).filter(
          (item) => item.number == id
        )[0].teacherPassword,
        a: Object.values(snapshot.val()).filter((item) => item.number == id)[0]
          .a,
        number: Object.values(snapshot.val()).filter(
          (item) => item.number == id
        )[0].number,
        email: Object.values(snapshot.val()).filter(
          (item) => item.number == id
        )[0].email,
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
          console.log("Teacher deleted successfully!");
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
        <button
          onClick={() => nav("/admin/admin_console/admin_view_teacher_console")}
        >
          Back
        </button>
        <h2 className="text-center">UpdateTeacher</h2>
        {id}
        <div>
          <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
            <label htmlFor="name">Name of Teacher</label>

            <div>
              <input
                id="name"
                name="name"
                className="border w-[100%] shadow-sm rounded-sm pl-1"
                type="text"
                placeholder="Enter Teacher name"
                value={m.name}
                //   onChange={(e) => setM(e.target.value)}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
            <label htmlFor="number">Teacher Mobile Number</label>
            <input
              id="number"
              name="number"
              className="border w-[100%] shadow-sm rounded-sm pl-1"
              type="number"
              placeholder="Enter Teacher Mobile Number"
              value={m.number}
              onChange={handleChange}
            />
          </div>
          <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
            <label htmlFor="email">Teacher Email</label>
            <input
              id="email"
              name="email"
              className="border w-[100%] shadow-sm rounded-sm pl-1"
              type="email"
              placeholder="Enter Teacher Email"
              value={m.email}
              onChange={handleChange}
            />
          </div>
          <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
            <label htmlFor="department">Department</label>
            <input
              className="border w-[100%] shadow-sm rounded-sm pl-1"
              id="department"
              name="department"
              type="text"
              placeholder="Enter Teacher Department"
              value={m.department}
              onChange={handleChange}
            />
          </div>
          <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
            <label htmlFor="subject">Subject teacher</label>
            <input
              className="border w-[100%] shadow-sm rounded-sm pl-1"
              id="subject"
              name="subject"
              type="text"
              placeholder="Enter Teacher name"
              value={m.subject}
              onChange={handleChange}
            />
          </div>
          <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
            <label htmlFor="extraSubject1">Extra subject Teach 1</label>
            <input
              className="border w-[100%] shadow-sm rounded-sm pl-1"
              id="extraSubject1"
              name="extraSubject1"
              type="text"
              placeholder="Extra Subject teach 1"
              value={m.extraSubject1}
              onChange={handleChange}
            />
          </div>
          <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
            <label htmlFor="extraSubject2">Extra subject Teach 2</label>
            <input
              className="border w-[100%] shadow-sm rounded-sm pl-1"
              id="extraSubject2"
              name="extraSubject2"
              type="text"
              placeholder="Extra Subject teach 2"
              value={m.extraSubject2}
              onChange={handleChange}
            />
          </div>
          <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
            <label htmlFor="activity">Active / Disactive</label>
            <div>
              {" "}
              <select name="a" value={m.a} onChange={handleChange} id="a">
                <option value="">Select Activity</option>
                <option value="active">Active</option>
                <option value="disactive">Disactive</option>
              </select>
            </div>
          </div>
          <button
            className="border    mt-4 md:mt-5 hover:border-yellow-500 border-pink-300 shadow-md shadow-yellow-100"
            onClick={handleUpdate}
          >
            Update
          </button>
          <button onClick={handleDelete}>Delete Account</button>
          {/* <button onClick={handleDisactive}>Disactive Account</button> */}
        </div>
      </div>
    </div>
  );
};

export default UpdateTeacher;
