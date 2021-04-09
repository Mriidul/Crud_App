import Post from "./components/Post";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddPost from "./components/AddPosts";
import "./";
import EditPost from "./components/EditPost";
import PostList from "./components/PostList";
import { PostProvider } from "./context/PostContext";
import Nav from "./components/Nav";

function App() {
  return (
    <PostProvider>
      <Nav />
      <Router>
        <Switch>
          <Route path="/update" exact component={EditPost} />
          <Route path="/create" exact component={AddPost} />
          <Route path="/" exact component={Post} />
          <Route path="/read" exact component={PostList} />
        </Switch>
      </Router>
    </PostProvider>
  );
}

export default App;
