import { useState } from "react";
import { admin_id } from "./config";

const Admin = () => {
  const [admin_config, setAdmin_config] = useState(admin_id);
  console.log(admin_config);
  return <div>Admin</div>;
};

export default Admin;
