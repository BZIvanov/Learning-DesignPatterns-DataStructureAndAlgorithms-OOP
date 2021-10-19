import CreatePost from './components/CreatePost';
import ListPosts from './components/ListPosts';

const App = () => {
  return (
    <div>
      <h2>Create New Post</h2>
      <CreatePost />
      <h2>Posts List</h2>
      <ListPosts />
    </div>
  );
};

export default App;
