import React, { useState, useEffect } from "react";
import axios from "axios";
import Blogs from "./component/Blogs";
import Form from "./component/Form";
const App = () => {
  const [blogLists, setBloglists] = useState([]);

  const fetchBlogData = () => {
    axios
      .get("http://localhost:3001/blogs/")
      .then((res) => {
        setBloglists(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchBlogData();
  }, []);
  return (
    <div>
      <Form fetchBlogData={fetchBlogData} />
      <Blogs blogLists={blogLists} />
    </div>
  );
};

export default App;
