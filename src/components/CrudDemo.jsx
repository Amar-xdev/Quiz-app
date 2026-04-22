import { useState } from "react";

const CrudDemo = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updated = [...users];
      updated[editIndex] = name;
      setUsers(updated);
      setEditIndex(null);
    } else {
      setUsers([...users, name]);
    }

    setName("");
  };

  const handleEdit = (index) => {
    setName(users[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = users.filter((_, i) => i !== index);
    setUsers(filtered);
  };

  return (
    <div>
      <h1>CRUD app</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button  type="submit">
          {editIndex !== null ? "Update" : "Add"  }
        </button>
      </form>

      {users.map((user, index) => (
        <li key={index}>
          {user}
          <button style={{ marginLeft: "10px" }} onClick={() => handleEdit(index)}>Edit</button>
          < button style={{ marginLeft: "10px" }} onClick={() => handleDelete(index)}>Delete</button>
        </li>
      ))}
    </div>
  );
};

export default CrudDemo;