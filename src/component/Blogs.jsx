import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
const Blogs = () => {
  const [blogLists, setBloglists] = useState([]);
  const fetchBlogData = () => {
    axios
      .get("https://blog-site-srijan113.herokuapp.com/blog/")
      .then((response) => {
        setBloglists(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchBlogData();
  }, []);
  return (
    <div className="container">
      <div className="grid-container">
        {blogLists.map((data, index) => {
          return (
            <div className="grid-item card">
              {data.active && <Card key={index} {...data} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
