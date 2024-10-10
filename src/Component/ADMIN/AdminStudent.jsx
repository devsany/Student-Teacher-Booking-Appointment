import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminStudent = () => {
  const [m, setM] = useState({
    name: "",
    department: "",
    subject: "",
    extraSubject1: "",
    extraSubject2: "",
    appoint1: "",
    appoint2: "",
    appoint3: "",
    teacherPassword: "",
    a: "",
    number: "",
    email: "",
  });
  const nav = useNavigate();
  const handleClick = () => {
    nav("/admin/admin_console");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setM({ ...m, [name]: value });
  };
  return (
    <div>
      {" "}
      <div className="border p-2">
        <button onClick={handleClick}>Back</button>
      </div>
      <div>
        <select name="a" value={m.a} onChange={handleChange} id="a">
          <option value="">Select Option</option>
          <option value="active">Active</option>
          <option value="disactive">Disactive</option>
        </select>
      </div>
    </div>
  );
};

export default AdminStudent;
