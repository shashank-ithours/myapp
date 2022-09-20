import { useState } from "react";
import Subject from "./Subject.js";
const Table = ({ users, setUsers, user, userIndex }) => {
  const [updatedUser, setUpdatedUser] = useState(user);

  const toggleEditStud = (i) => {
    let editStud = [...users];
    editStud = editStud.map((val, idx) => {
      if (i === idx) {
        val.isInEditMode = !val.isInEditMode;
      }
      return val;
    });
    setUsers(editStud);
  };

  const DeleteStud = (i) => {
    let delStud = [...users];
    delStud = delStud.filter((val, idx) => i !== idx);
    setUsers(delStud);
  };

  const handleUpdateStudent = (e) => {
    let updtstdnt = { ...updatedUser };
    if (e.target.name === "name") {
      updtstdnt.name = e.target.value;
    } else if ((e.target.name = "age")) {
      updtstdnt.age = e.target.value;
    }
    updtstdnt.isInEditMode = false;
    setUpdatedUser(updtstdnt);
  };

  const updateStudent = (i) => {
    let updatedstudent = [...users];
    updatedstudent = updatedstudent.map((val, idx) => {
      if (i === idx) {
        
        val = updatedUser;
      }
      return val;
    });
    setUsers(updatedstudent);
  };

  const addSub = (userIndex) => {
    let newSubject = [...users];
    let subName = prompt("enter your subject name");
    let subValue = {
      sub: subName,
      isInEditMode: true,
    };

    newSubject = newSubject.map((val, idx) => {
      if (userIndex === idx) {
        val.subjects.push(subValue);
      }
      return val;
    });
    setUsers(newSubject);
  };
  return (
    <tr>
      {!user.isInEditMode ? (
        <>
          <td>{user.name}</td>
          <td>{user.age}</td>
        </>
      ) : (
        <>
          <td>
            <input
              type="text"
              name="name"
              value={updatedUser.name}
              onChange={handleUpdateStudent}
            />
          </td>
          <td>
            <input
              type="text"
              name="age"
              value={updatedUser.age}
              onChange={handleUpdateStudent}
            />
          </td>
        </>
      )}
      <td>
        {user.subjects.map((subject, i) => (
          <Subject
            key={i}
            user={user}
            users={users}
            subject={subject}
            subjectIndex={i}
            setUsers={setUsers}
            userIndex={userIndex}
          />
        ))}
        <button onClick={(e) => addSub(userIndex)}>Add Subject</button>
      </td>

      {!user.isInEditMode ? (
        <td>
          <button onClick={(e) => toggleEditStud(userIndex)}>Edit</button>
          <button onClick={(e) => DeleteStud(userIndex)}>Delete</button>
        </td>
      ) : (
        <td>
          <button onClick={(e) => updateStudent(userIndex)}>Update</button>
          <button onClick={(e) => toggleEditStud(userIndex)}>Cancel</button>
          <button onClick={(e) => DeleteStud(userIndex)}>Delete</button>
        </td>
      )}
    </tr>
  );
};

export default Table;
