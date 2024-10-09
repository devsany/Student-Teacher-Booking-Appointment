import { useState } from "react";
import { admin_id } from "./config";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [data, setData] = useState("");
  const [id, setAdminID] = useState("");
  const [password, setAdminPassword] = useState("");
  const [syntaxErrors, setSyntaxError] = useState({});
  const [inputVarificationErrors, setInputVarificationErrors] = useState({});
  const [admin_config] = useState(admin_id);
  const nav = useNavigate();

  // handle form on form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // syntax error
    const syntaxError = {};
    const inputVarificationError = {};

    if (!id) {
      syntaxError.id = "require";
    } else if (!password) {
      syntaxError.password = "require";
    } else {
      // input field check
      if (id !== admin_config.id) {
        inputVarificationError.id = "ID is not Correct";
      } else if (password !== admin_config.password) {
        inputVarificationError.password = "Password is InCorrect";
      } else {
        setAdminID("");
        setAdminPassword("");
        nav("/admin/admin_console");
      }
    }
    // setData to form submit
    setSyntaxError(syntaxError);
    setInputVarificationErrors(inputVarificationError);
  };

  return (
    <div>
      <div>
        <div>Admin Login</div>
        <div>
          <div>
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="id">Admin ID</label>
              <input
                type="text"
                placeholder="Enter Admin ID"
                value={id}
                name="id"
                id="id"
                onChange={(e) => setAdminID(e.target.value)}
              />
              {syntaxErrors && <>{syntaxErrors.id}</>}
              <label htmlFor="password">Admin Password</label>
              <input
                type="password"
                placeholder="Enter Admin Password"
                value={password}
                id="password"
                name="password"
                onChange={(e) => setAdminPassword(e.target.value)}
              />
              {syntaxErrors && <>{syntaxErrors.password}</>}

              <button type="submit">Submit</button>
            </form>
          </div>

          <div>
            {inputVarificationErrors.id ||
              (inputVarificationErrors.password && (
                <>
                  {inputVarificationErrors.id ||
                    inputVarificationErrors.password}
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
