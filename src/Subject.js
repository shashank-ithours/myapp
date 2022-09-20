import { useState } from "react";
const Subjects = ({
  user,
  users,
  subject,
  subjectIndex,
  setUsers,
  userIndex,
}) => {
  const [updatedSubject, setupdatedSubject] = useState(subject);

  const toggleEditSubject = (i) => {
    let tmpUsers = { ...user };
    let sub = { ...subject, isInEditMode: !subject.isInEditMode };
    console.log(sub);
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

  const DeleteSubject = (i) => {
    let delSub = { ...user };
    let Sub = delSub.subjects.filter((val, idx) => i !== idx);
    delSub.subjects = Sub;
    setUsers(
      users.map((usr, id) => {
        if (id === userIndex) {
          usr = delSub;
        }
        return usr;
      })
    );
  };

  const handleUpdateSub = (e) => {
    let newSub = { ...updatedSubject };
    newSub.sub = e.target.value;
    newSub.isInEditMode = false;
    setupdatedSubject(newSub);
  };

  const UpdateSubject = () => {
    let updtsub = { ...user };
    let sub = { ...updatedSubject, isInEditMode: !subject.isInEditMode };
    updtsub.subjects[subjectIndex] = sub;
    setUsers(
      users.map((val, id) => {
        if (id === userIndex) {
          val = updtsub;
        }
        return val;
      })
    );
  };

  return (
    <tr>
      <td>
        {subject.isInEditMode ? (
          <span>{subject.sub}</span>
        ) : (
          <input
            type="text"
            name="age"
            value={updatedSubject.sub}
            onChange={handleUpdateSub}
          />
        )}
        {subject.isInEditMode ? (
          <button onClick={(e) => toggleEditSubject(subjectIndex)}>Edit</button>
        ) : (
          <>
            <button onClick={UpdateSubject}>Update</button>
            <button onClick={(e) => toggleEditSubject(subjectIndex)}>
              Cancel
            </button>
          </>
        )}
        <button onClick={(e) => DeleteSubject(subjectIndex)}>Delete</button>
      </td>
    </tr>
  );
};

export default Subjects;
