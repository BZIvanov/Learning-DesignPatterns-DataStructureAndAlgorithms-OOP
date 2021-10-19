import { useState } from 'react';
import axios from 'axios';

const CreateComment = ({ postId }) => {
  const [content, setContent] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://localhost:5001/posts/${postId}/comments`, {
      content,
    });
    setContent('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='Create Comment'
        />
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateComment;
