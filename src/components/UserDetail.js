import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) =>
        console.error("There was an error fetching the user details:", error)
      );
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
          <p>Company: {user.company.name}</p>
          <p>
            Address: {user.address.street}, {user.address.city}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserDetail;
