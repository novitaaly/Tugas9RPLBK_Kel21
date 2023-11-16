import React, { useState } from 'react';

const homeContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50vh', // Menggunakan tinggi 100vh agar di tengah layar
  padding: '188px',
  backgroundColor: '#ffc0cb',
};

function UserManagementSystem({ users, onLogout, onAddUser, onDeleteUser, onEditUser }) {
  const [newUsername, setNewUsername] = useState('');
  const [editUserId, setEditUserId] = useState(null);

  const handleAddUser = () => {
    onAddUser({ newUsername });
    setNewUsername('');
  };

  const handleEditUser = (userId, newUsername) => {
    onEditUser(userId, newUsername);
    setEditUserId(null);
  };

  return (
    <div style={homeContainerStyle}>
      <h1>User Management Kelompok 21</h1>
      <div>
        <h2>Add User</h2>
        <label>
          New Username:
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
        </label>
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <div>
        <h2>User List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {editUserId === user.id ? (
                <div>
                  <input
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                  />
                  <button onClick={() => handleEditUser(user.id, newUsername)}>Save</button>
                </div>
              ) : (
                <div>
                  {user.username} -{' '}
                  <button onClick={() => onDeleteUser(user.id)}>Delete</button>{' '}
                  <button onClick={() => setEditUserId(user.id)}>Edit</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}

export default UserManagementSystem;
