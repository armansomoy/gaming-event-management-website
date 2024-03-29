import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { _id, details, title, image_url } = blog;

  return (
    <div className="card card-compact w-full p-6 my-6 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl">{title}</h2>
        {details.length > 150 ? (
          <p className="py-2 text-xl text-[#706F6F]">{details.slice(0, 150)}</p>
        ) : (
          <p>{details}</p>
        )}

        <div className="card-actions">
          <button className="btn btn-primary rounded text-xl"> <Link to={`/blog/${_id}`}>Read More</Link> </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
