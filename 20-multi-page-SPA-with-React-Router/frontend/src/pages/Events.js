import React from "react";
import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Dummy event no. 1",
    description: "A dummy event no. 1 for React's puropuse",
  },
  {
    id: "e2",
    title: "Dummy event no. 2",
    description: "A dummy event no. 2 for React's puropuse",
  },
  {
    id: "e3",
    title: "Dummy event no. 3",
    description: "A dummy event no. 3 for React's puropuse",
  },
];

const EventsPage = () => {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
