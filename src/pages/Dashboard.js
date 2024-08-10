// src/Dashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css'; // Ensure you have this CSS file

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [editPost, setEditPost] = useState(null);
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setPosts(response.data.slice(0, 10)));
  }, []);

  const handleAddPost = () => {
    const post = { id: posts.length + 1, title: newPost };
    setPosts([post, ...posts]);
    setNewPost('');
  };

  const handleEditPost = (post) => {
    setEditPost(post);
    setEditContent(post.title);
  };

  const handleUpdatePost = () => {
    setPosts(
      posts.map((post) =>
        post.id === editPost.id ? { ...post, title: editContent } : post
      )
    );
    setEditPost(null);
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <div className='dashboard-container'>
      <h2>Dashboard</h2>
      <div className='form-container'>
        <input
          type='text'
          placeholder='New Post'
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          className='input-field'
        />
        <button onClick={handleAddPost} className='btn add-btn'>
          Add Post
        </button>
      </div>

      {editPost && (
        <div className='form-container'>
          <input
            type='text'
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className='input-field'
          />
          <button onClick={handleUpdatePost} className='btn update-btn'>
            Update Post
          </button>
        </div>
      )}

      <ul className='post-list'>
        {posts.map((post) => (
          <li key={post.id} className='post-item'>
            <div className='post-title'>{post.title}</div>
            <div className='post-actions'>
              <button
                className='btn edit-btn'
                onClick={() => handleEditPost(post)}
              >
                Edit
              </button>
              <button
                className='btn delete-btn'
                onClick={() => handleDeletePost(post.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
