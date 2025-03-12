import Users from "./components/Additional/Users";
import Posts from "./components/Read/Posts";
import SearchBar from "./components/Search/Search";
import AddBar from "./components/Create/Add";
import { Post } from "./components/Read/Posts";

import { useState } from "react";

const App = () => {

  const [query, setQuery] = useState<string>("");
  const [newPosts, addNewPost] = useState<Post[]>([]);

  return (

    <div id="main" style={{ position: "absolute", left: "25%", top: "5%" }}>
      <Users />
      <AddBar newPosts={newPosts} addNewPost={addNewPost} />
      <SearchBar query={query} setQuery={setQuery} />
      <Posts query={query} postColor="#F5F5F5" newPosts={newPosts} />
    </div>

  )

}

export default App;
