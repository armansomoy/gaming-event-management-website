import React from 'react';
import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <h2>This Is Home Page</h2>
            <Footer></Footer>
        </div>
    );
};

export default Home;