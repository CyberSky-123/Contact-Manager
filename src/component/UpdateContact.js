import React, { useEffect, useState } from "react";
import "./contact.css";
import axios from "axios";
import { Button } from "react-bootstrap";

const UpdateContact = ({ user }) => {
  const [input, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleUpdate = () => {
    axios
      .put("https://jsonplaceholder.typicode.com/users", {
        name: input.name,
        email: input.email,
        phone: input.phone,
      })
      .then((response) => {
        if (response) {
          alert("Laundry Updated !");
        }
      });
  };

  return (
    <div className="updateContact">
      <h2>Edit Contact</h2>
      <p>Name</p>
      <input
        name="name"
        onChange={(e) =>
          setInputs((prop) => ({ ...prop, [e.target.name]: e.target.value }))
        }
        value={input.name}
      />
      <p>Email</p>
      <input
        name="email"
        onChange={(e) =>
          setInputs((prop) => ({ ...prop, [e.target.name]: e.target.value }))
        }
        value={input.email}
      />
      <p>Phone No</p>
      <input onChange={(e) => setInputs(e.target.value)} value={input.phone} />
      <Button onSubmit={handleUpdate}>Update</Button>
    </div>
  );
};

export default UpdateContact;
