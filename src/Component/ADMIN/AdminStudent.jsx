import React from "react";
import { useNavigate } from "react-router-dom";

const AdminStudent = () => {
  const nav = useNavigate();
  const handleClick = () => {
    nav("/admin/admin_console");
  };
  return (
    <div>
      {" "}
      <button onClick={handleClick}>Back</button>AdminStudent
    </div>
  );
};

export default AdminStudent;
