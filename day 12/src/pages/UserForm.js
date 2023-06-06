import React, { useState } from 'react';

const UserForm = ({ addUser, updateUser }) => {
  const [user, setUser] = useState({ id: '', name: '', email: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (user.id) {
      // Existing user, update
      updateUser(user);
    } else {
      // New user, add
      addUser(user);
    }

    // Clear the form
    setUser({ id: '', name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{user.id ? 'Edit User' : 'Add User'}</h2>
      <label>
        Name:
        <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={user.email} onChange={handleInputChange} />
      </label>
      <button type="submit">{user.id ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default UserForm;
