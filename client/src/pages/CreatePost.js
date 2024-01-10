import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreatePost = ({ onPost }) => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handlePost = () => {
    if (!title || !summary) {
      alert('Please fill in all fields.');
      return;
    }

   
    const newPost = {
      id: Date.now(), 
      title,
      author: 'Your Name', 
      date: new Date().toISOString().slice(0, 10),
      image: image ? URL.createObjectURL(image) : '', 
      para: summary,
    };

  
    onPost(newPost);

 
    setTitle('');
    setSummary('');
    setImage(null);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <div>
        <label htmlFor="image">Choose Image:</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <ReactQuill value={''} /> 
      <button type="button" onClick={handlePost}>
        Post
      </button>
    </form>
  );
};

export default CreatePost;
