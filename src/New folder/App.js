import React, { useState } from "react";
import "./App.css";
import Post from "./Post";
import car from "./Pictures/car.jpg";

const App = () => {
  const [posts, setPosts] = useState([
    { username: "Ali", imageUrl: car, caption: "Wow Ali its Work" },
    { username: "Hamza", imageUrl: car, caption: "Wow Ali its Work" },
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src="" alt="Instagram" />
      </div>

      <h1>Hello From Ali get ready for Instagram Clone!!</h1>

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}

      {/* <Post username={"username"} imageUrl={car} caption="Wow Ali its Work" />
      <Post username="Hamza" imageUrl={car} caption="Love React!" />
      <Post username="Uqba" imageUrl={car} caption="That a days!" /> */}
    </div>
  );
};

export default App;
