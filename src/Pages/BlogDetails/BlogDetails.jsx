import React from "react";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import { useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const blogs = useLoaderData();
  console.log(blogs);

  const singleBlog = blogs.find((blog) => blog._id === id);
  console.log(singleBlog);

  const { author, details, title, image_url } = singleBlog;
  return (
    <div>
      <Navbar></Navbar>
      <div className="my-10">
        <div className="card card-compact w-full p-6 bg-base-100 shadow-xl container ">
          <figure>
            <img src={image_url} alt="Shoes" />
          </figure>
          <div className="flex my-3 pl-2">
            <div>
              <img className="h-20 rounded-full" src={author.img} alt="" />
            </div>
            <div className="pl-4 pt-3">
              <p className="font-bold text-2xl">{author.name}</p>
              <p className="text-xl text-[#706F6F]">{author.published_date}</p>
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title text-4xl">{title}</h2>
            <p className="py-2 text-xl text-[#706F6F]">{details}</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BlogDetails;
