import React from "react";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import { useLoaderData, useParams } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();

  const events = useLoaderData();

  const event = events.find((event) => event.id === parseInt(id));

  const { image, name, price, long_description, specifications, event_date } =
    event;


  return (
    <div>
      <Navbar></Navbar>
      <div className="container py-12">
        <div className="card w-full bg-gray-200 ">
          <figure>
            <img src={image} alt="Shoes" className="w-full h-96" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-4xl">{name}</h2>
            <p className="mr-2 text-md">
              {" "}
              <span className="font-semibold">Price: </span>
              {price} $
            </p>
            <p className="mr-2 text-md">
              {" "}
              <span className="font-semibold">Event Date: </span>
              {event_date}
            </p>
            <p className="pb-3">{long_description}</p>
            <div className="border p-5 bg-base-100">
              <h2 className="font-bold pb-3">Specification</h2>
              <hr />
              <p className="pt-3">
                <span className="font-semibold">Attendees : </span>{" "}
                {specifications.attendees}
              </p>
              <p className="pt-3">
                <span className="font-semibold">Featured platforms : </span>
                {specifications.featured_platforms.map((platform, id) => (
                  <li key={id}>{platform}</li>
                ))}
              </p>
              <p className="pt-3">
                <span className="font-semibold">Organizer : </span>
                {specifications.organizer}
              </p>
              <p className="pt-3">
                <span className="font-semibold">Venue : </span>
                {specifications.venue}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default EventDetails;
