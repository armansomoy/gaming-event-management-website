import React, { useState } from "react";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import { useLoaderData } from "react-router-dom";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const news = useLoaderData();
  const [datalength, setDataLength] = useState(10);

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-6xl font-bold text-center py-24">Our Blogs</h2>
      </div>
      <div className="grid grid-cols-4 container">
        <div className="col-span-3">
          <div className="grid grid-cols-2 py-6">
            { news.slice(0, datalength).map((blog) => (
              <Blog key={blog._id} blog={blog}></Blog>
            ))}
          </div>
          <div className={datalength === news.length ? 'hidden' : 'py-2 px-4 my-6 text-center'}>
            <button className="btn btn-primary" onClick={() => {setDataLength(news.length)}}>Sell All Blogs</button>
          </div>
        </div>
        <div>
          <h2>Sidebar</h2>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
