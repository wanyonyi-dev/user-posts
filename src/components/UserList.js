import React from 'react';
import UserItem from './UserItem';

function UserList({ users }) {
  return (
    <ul className="user-list">
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
}

export default UserList;
