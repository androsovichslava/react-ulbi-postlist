import React from "react";
import "./styles/App.css";
import { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, est! Dignissimos est, laudantium illum perferendis minima adipisci nihil at aut saepe quidem earum tempore eveniet illo perspiciatis quas provident incidunt?",
    },
    {
      id: 2,
      title: "JavaScript",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, est! Dignissimos est, laudantium illum perferendis minima adipisci nihil at aut saepe quidem earum tempore eveniet illo perspiciatis quas provident incidunt?",
    },
    {
      id: 3,
      title: "JavaScript",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, est! Dignissimos est, laudantium illum perferendis minima adipisci nihil at aut saepe quidem earum tempore eveniet illo perspiciatis quas provident incidunt?",
    },
    {
      id: 4,
      title: "JavaScript",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, est! Dignissimos est, laudantium illum perferendis minima adipisci nihil at aut saepe quidem earum tempore eveniet illo perspiciatis quas provident incidunt?",
    },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList remove={removePost} posts={posts} title="Список постов новый" />
    </div>
  );
}

export default App;
