import React from "react";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import LatestEvents from "../LatestEvents/LatestEvents";

const Home = () => {
  const events = useLoaderData();
  console.log(events);
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="container py-12">
        <h2 className="text-center font-bold text-6xl pb-6">Latest Events</h2>
        <div className="grid grid-cols-2">
        {
            events.map(event => <LatestEvents key={event.id} event={event}></LatestEvents>)
        }
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
