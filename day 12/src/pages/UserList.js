import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // Fetch initial list of users (can be replaced with API call)
  useEffect(() => {
    // Fetch users from API or use mock data
    const initialUsers = [
      { id: 1, name: 'Darshak Don', email: 'dk11@example.com' },
      { id: 2, name: 'Hacker Bolte', email: 'h11@example.com' }
    ];
    setUsers(initialUsers);
  }, []);

  const addUser = (user) => {
    // Generate a unique ID for the new user
    const newUser = { ...user, id: Date.now() };
    setUsers([...users, newUser]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
    setEditingUser(null);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const openEditForm = (user) => {
    setEditingUser(user);
  };

  return (
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
                <button onClick={() => openEditForm(user)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <UserForm addUser={addUser} updateUser={updateUser} editingUser={editingUser} />
    </div>
  );
};

export default UserList;
