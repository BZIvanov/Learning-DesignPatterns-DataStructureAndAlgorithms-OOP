import { useState, useEffect } from 'react';
import axios from 'axios';
import CreateComment from './CreateComment';
import ListComments from './ListComments';

const ListPosts = () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('http://localhost:5002/posts');
      setPosts(data);
    })();
  }, []);

  return (
    <>
      {Object.values(posts).map((post) => (
        <div key={post.id}>
          <div>
            <h3>{post.title}</h3>
            <ListComments comments={post.comments} />
            <CreateComment postId={post.id} />
          </div>
        </div>
      ))}
    </>
  );
};

export default ListPosts;
