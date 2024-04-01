import React, { useState } from "react";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import LatestEvents from "../LatestEvents/LatestEvents";

const Home = () => {
  const events = useLoaderData();
  const [datalength, setDataLength] = useState(4);
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="container py-12">
        <h2 className="text-center font-bold text-6xl pb-6">Latest Events</h2>
        <div className="grid grid-cols-2">
        {
           events.slice(0, datalength).map(event => <LatestEvents key={event.id} event={event}></LatestEvents>)
        }
        </div>
        <div className={datalength === events.length ? 'hidden' : 'text-center my-3 '}>
          <button className="btn btn-secondary" onClick={() => {setDataLength(events.length)}}>See All Events</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
