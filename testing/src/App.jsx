import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [posts, setposts] = useState([]);

  axios
    .get("https://www.naijaloaded.com.ng/wp-json/wp/v2/posts")
    .then((res) => setposts(res.data));

  return (
    <>
      <div className="">
        {posts
          ? posts.map((post, idx) => (
              <div key={idx} className="flex">
                <div>
                  <a href={post.link} target="_blank">
                    Go to post
                  </a>
                </div>
              </div>
            ))
          : "Loading..."}
      </div>
    </>
  );
};

export default App;
