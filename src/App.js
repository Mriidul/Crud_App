import Post from "./components/Post";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddPost from "./components/AddPosts";
import "./App.css";
import EditPost from "./components/EditPost";
import PostList from "./components/PostList";
import Nav from "./components/Nav";
import LikedPosts from "./components/LikedPosts";
import DislikedPosts from "./components/DislikedPosts";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/update" exact component={EditPost} />s
          <Route path="/create" exact component={AddPost} />
          <Route path="/" exact component={HomePage} />
          <Route path="/post" exact component={Post} />
          <Route path="/read" exact component={PostList} />
          <Route path="/liked" exact component={LikedPosts} />
          <Route path="/disliked" exact component={DislikedPosts} />
          <Route path="/disliked" exact component={PostList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
