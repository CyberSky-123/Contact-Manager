import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import UpdateContact from "./component/UpdateContact";
import Contact from "./component/Contact";
import DisplayUser from "./component/DisplayUser";

const baseURL = "https://jsonplaceholder.typicode.com/users";

export default function App() {
  const [user, setUser] = React.useState([]);
  // const [inputs, setInputs] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  // });
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUser(response.data);
      console.log(response.data);
    });
  }, []);

  const deleteUser = (id) => {
    const newTodos = user.filter((item) => item.id !== id);
    setUser(newTodos);
  };
  const displayUser = (id) => {
    setUser(console.log(id));
  };
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Contact user={user} deleteUser={deleteUser} />}
        />
        <Route
          path="/UpdateContact"
          element={<UpdateContact displayUser={displayUser} />}
        />
   
      <Route
          path="/DisplayUser"
          element={<DisplayUser user={user} />}
        />
      </Routes>
    </div>
  );
}
