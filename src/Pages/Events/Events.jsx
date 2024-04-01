import React from "react";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import LatestEvents from "../LatestEvents/LatestEvents";
import { useLoaderData } from "react-router-dom";

const Events = () => {
  const events = useLoaderData();
  console.log(events);
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="font-bold text-6xl text-center py-3 ">All Events</h2>
      <div className="grid grid-cols-2 container py-6">
        {events.map((event) => (
          <LatestEvents key={event.id} event={event}></LatestEvents>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Events;
