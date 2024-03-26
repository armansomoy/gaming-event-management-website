import React from "react";
import { FaDollarSign } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LatestEvents = ({ event }) => {
  const {id, short_description, event_date, price, image, name } = event;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl m-2 h-76">
      <figure>
        <img className="h-full w-60" src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="mr-2 text-md"> <span className="font-semibold">Price: </span>{price} $</p>
        <p className="mr-2 text-md"> <span className="font-semibold">Event Date: </span>{event_date}</p>
        <p>{short_description}</p>
        <div >
          <button className="btn btn-primary"> 
          <Link to={`/events/${id}`}>See Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestEvents;
