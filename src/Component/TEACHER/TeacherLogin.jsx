import { get, getDatabase, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../firebase/firebaseConsole";

const TeacherLogin = () => {
  const [m, setM] = useState({
    name: "",
    password: "",
  });
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const nav = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setM({ ...m, [name]: value });
  };
  const fetchtTeacherData = async () => {
    const db = getDatabase(app);
    const dataRef = ref(db, "data / teacher");
    const snapshot = await get(dataRef);

    if (snapshot.exists()) {
      setData(
        Object.values(snapshot.val()).filter(
          (item) => item.teacherPassword == m.password && item.name == m.name
        )
      );
    } else {
      alert("data is not found");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchtTeacherData();
    if (data.length == 1) {
      nav(`/teacher/${m.password}`);
    } else {
      setError(true);
    }
    console.log("clicked teacher");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <hr />
          <h2 className="text-center">Teacher Login Page</h2>
        </div>
        <div>{error && <>Wrong Name and password</>}</div>
        <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
          <label htmlFor="name">Name Your name</label>
          <div>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter Your Name"
              value={m.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
          <label htmlFor="password">
            Name your password (contact Admin for password 8540897814)
          </label>
          <div>
            <input
              id="password"
              name="password"
              type="text"
              placeholder="Enter your Password"
              value={m.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <button className="p-2 m-3border bg-green-200">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default TeacherLogin;
