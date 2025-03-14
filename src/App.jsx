import { useState, useEffect } from "react";
import GetData from "./components/GetData";
import "./App.css";

const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [posts, setPosts] = useState([{ title: "hallo hier" }]);

  return (
    <>
      <GetData />
    </>
  );
}

export default App;
