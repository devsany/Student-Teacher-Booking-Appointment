import { get, getDatabase, ref } from "firebase/database";
import { useParams, useSearchParams } from "react-router-dom";
import app from "../firebase/firebaseConsole";
import { useEffect, useState } from "react";

const Student_page_id = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const fetchTeacherID = async () => {
    const db = getDatabase(app);
    const dataRef = ref(db, "data /students");
    const snapshot = await get(dataRef);
    console.log(snapshot);
    if (snapshot.exists()) {
      setData(
        Object.values(snapshot.val()).filter(
          (item) => item.studentPassword == id
        )
      );
    } else {
      alert("data is not found");
    }
  };
  console.log(data);
  //   filter teacher which mobile numeber is difference
  //   const fetchTeacherWithMobileNumber = () => {
  //     const teacherIDDetail = data.filter((item) => item.number === id);
  //     setMainData(teacherIDDetail);
  //   };

  //   useeffect to fetch the teacher detail through ID
  useEffect(() => {
    fetchTeacherID();
    // fetchTeacherWithMobileNumber();
  }, []);

  return <div>Student_page_id - {id}</div>;
};

export default Student_page_id;
