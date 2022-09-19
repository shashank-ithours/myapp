import { useState } from "react";
const Subjects = ({
  user,
  users,
  subject,
  subjectIndex,
  setUsers,
  userIndex,
}) => {
  //   const [updatedSubject, setupdatedSubject] = useState(subject);

  const toggleEditSubject = (i) => {
    let tmpUsers = { ...user };
    let sub = { ...subject, isInEditMode: !subject.isInEditMode };
    tmpUsers.subjects[subjectIndex] = sub;

    setUsers(
      users.map((usr, id) => {
        if (id === userIndex) {
          usr = tmpUsers;
        }
        return usr;
      })
    );
  };
  console.log(users);
  return (
    <tr>
      <td>
        {subject.isInEditMode ? (
          <span>{subject.sub}</span>
        ) : (
          <input
            type="text"
            name="age"
            value={subject.sub}
            //   onChange={handleUpdateStudent}
          />
        )}
        {subject.isInEditMode ? (
          <button onClick={(e) => toggleEditSubject(subjectIndex)}>Edit</button>
        ) : (
          <>
            <button>Update</button>
            <button onClick={(e) => toggleEditSubject(subjectIndex)}>
              Cancel
            </button>
          </>
        )}
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default Subjects;
