import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [data, setData] = useState("");
  const [id, setAdminID] = useState("");
  const [password, setAdminPassword] = useState("");
  const [syntaxErrors, setSyntaxError] = useState({});
  const [inputVarificationErrors, setInputVarificationErrors] = useState({});

  const nav = useNavigate();

  // handle form on form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(import.meta.VITE_APP_ADMIN_ID);
    // syntax error
    const syntaxError = {};
    const inputVarificationError = {};

    if (!id) {
      syntaxError.id = "require";
    } else if (!password) {
      syntaxError.password = "require";
    } else {
      // input field check
      if (id !== import.meta.env.VITE_API_ADMIN_ID) {
        inputVarificationError.id = "ID is not Correct";
      } else if (password !== import.meta.env.VITE_API_ADMIN_PASSWORD) {
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
        <div className=" mt-10 text-center block mb-2 text-xl font-medium text-gray-900 dark:text-white">
          Admin Login
        </div>
        <div>
          <div className=" ">
            <form action="" onSubmit={handleSubmit}>
              <div className="flex justify-center items-center">
                <div className="w-[300px] border">
                  <div className="m-4">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="id"
                    >
                      Admin ID
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                      placeholder="Enter Admin ID"
                      value={id}
                      name="id"
                      id="id"
                      onChange={(e) => setAdminID(e.target.value)}
                    />
                    {syntaxErrors && <>{syntaxErrors.id}</>}
                  </div>
                  <div className="m-4">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="password"
                    >
                      Admin Password
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="password"
                      placeholder="Enter Admin Password"
                      value={password}
                      id="password"
                      name="password"
                      onChange={(e) => setAdminPassword(e.target.value)}
                    />
                    {syntaxErrors && <>{syntaxErrors.password}</>}
                  </div>
                  <div className="m-4">
                    <div className="text-red-600">
                      {inputVarificationErrors.id ||
                        (inputVarificationErrors.password && (
                          <>
                            {inputVarificationErrors.id ||
                              inputVarificationErrors.password}
                          </>
                        ))}
                    </div>
                    <button
                      type="submit"
                      className="border pl-2 pr-2 pt-1 pb-1 rounded-md bg-blue-200"
                    >
                      <span className="block  text-md font-medium text-gray-900 dark:text-white">
                        Submit
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
