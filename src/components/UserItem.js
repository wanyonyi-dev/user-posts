import React from 'react';

function UserItem({ user }) {
  return (
    <li className="user-item">
      <h2>{user.name}</h2>
      <p>Number of posts: {user.postCount}</p>
    </li>
  );
}

export default UserItem;
