import React, { useState } from "react";
import axios from "axios";

const UserForm = ({ user, onSave }) => {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [address, setAddress] = useState(user?.address?.street || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, phone, address };
    if (user) {
      axios
        .put(`https://jsonplaceholder.typicode.com/users/${user.id}`, newUser)
        .then((response) => onSave(response.data));
    } else {
      axios
        .post("https://jsonplaceholder.typicode.com/users", newUser)
        .then((response) => onSave(response.data));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        minLength={3}
      />
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Phone:</label>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <label>Address:</label>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <button type="submit">{user ? "Update" : "Create"} User</button>
    </form>
  );
};

export default UserForm;
