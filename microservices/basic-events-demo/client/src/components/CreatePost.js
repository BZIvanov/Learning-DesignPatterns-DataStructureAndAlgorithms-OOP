import { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [title, setTitle] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post('http://localhost:5000/posts', {
      title,
    });
    setTitle('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Post title'
        />
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreatePost;
