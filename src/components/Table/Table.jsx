import React, {useEffect, useState} from 'react';
import axios from "axios";

const Table = () => {

const [users, setUsers] = useState([])

useEffect(() => {
    axios.get("https://randomuser.me/api/?results=50").then(response => {
        console.log(response.data);
        setUsers(response.data.results);
    })
}, []);

    return (
        <table className="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Photo</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
        {users.map((user) => (
                <tr>
                <th scope="row">{user.id.value}</th>
                <td><img src={user.picture.thumbnail}></img></td>
                <td>{user.name.first} {user.name.last}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
        ))}
  </tbody>
</table>
    );
};

export default Table;