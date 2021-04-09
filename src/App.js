 import Post from "./components/Post";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddPost from "./components/AddPosts";
import "./App.css";
import EditPost from "./components/EditPost";
import PostList from "./components/PostList";
import { PostProvider, PostContext } from "./context/PostContext";
import Nav from "./components/Nav";
import { useEffect, useContext } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useContext(PostContext);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts ")
      .then(function (response) {
        // handle success
        setPosts(response.data);
        console.log("Hello");
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/update" exact component={EditPost} />
          <Route path="/create" exact component={AddPost} />
          <Route path="/" exact component={Post} />
          <Route path="/read" exact component={PostList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
