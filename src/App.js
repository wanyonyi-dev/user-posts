import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');
      const userData = await userResponse.json();

      const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
      const postsData = await postsResponse.json();

      const usersWithPostCount = userData.map(user => ({
        ...user,
        postCount: postsData.filter(post => post.userId === user.id).length
      }));

      setUsers(usersWithPostCount);
      setLoading(false);
    } catch (error) {
      setError('Error fetching data');
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="App">
      <h1>User Posts</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;