import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] =useState(loadedUsers);

  const handleDelete = id => {
        fetch(`http://localhost:5000/user/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                console.log("Delete Successfully")
                const remaining = users.filter(user => user._id !== id);
                setUsers(remaining)
            }
        })
  }
  return (
    <div>
      <h2 className="text-4xl text-primary font-semibold text-center">
        Users: {users.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map(user => <tr key={user._id}>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td>
                <button onClick={() => handleDelete(user._id)} className="btn btn-sm bg-red-600 text-black">Delete</button>
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
