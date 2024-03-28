import React from 'react';
import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import { useLoaderData } from 'react-router-dom';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div >
            <Navbar></Navbar>
            <div>
            <h2 className='text-6xl font-bold text-center py-24'>Our Blogs</h2>
            </div>
            <div className='grid grid-cols-4 container'>
                
                <div className="col-span-3">
                    {
                        news.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                    }
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