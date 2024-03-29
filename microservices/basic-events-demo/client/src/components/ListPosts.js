import { useState, useEffect } from 'react';
import axios from 'axios';
import CreateComment from './CreateComment';
import ListComments from './ListComments';

const ListPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('http://localhost:5002/posts');
      setPosts(data);
    })();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <div key={post._id}>
          <div>
            <h3>{post.title}</h3>
            <ListComments comments={post.comments} />
            <CreateComment postId={post._id} />
          </div>
        </div>
      ))}
    </>
  );
};

export default ListPosts;
