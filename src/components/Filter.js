import React, { useState } from "react";

function Filter() {

  const [filter, setFilter] = useState("");
  const search = [
    "Banana",
    "Orange",
    "Apple",
    "Mango",
    "Pineapple",
    "Watermelon",
    
  ];
  return (
    <div>
      <input
        type="text"
        placeholder="Enter here..."
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="contents">
        {search
          .filter((post) => {
            return filter === ""
              ? post
              : post.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
          })
          .map((post, index) => (
            <div key={index}>
              <p>{post}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Filter;