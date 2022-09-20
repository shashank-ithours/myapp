import { useState } from "react";
import User from "./User.js";
import "./Table.css";
const Table = () => {
  const [users, setUsers] = useState([]);

  const addUser = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let age = e.target.age.value;
    let newUser = {
      name,
      age,
      isInEditMode: false,
      subjects: [],
    };
    
    setUsers((prev) => [...prev, newUser]);
  };

  return (
    <>
      <form onSubmit={addUser}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="age" placeholder="Age" />
        <button type="submit">Add</button>
        <hr />
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Subject</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <User
              key={i}
              user={user}
              userIndex={i}
              users={users}
              setUsers={setUsers}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
