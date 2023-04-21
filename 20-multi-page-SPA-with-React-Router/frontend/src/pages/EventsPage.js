import React from "react";
import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "1",
    title: "Dummy event no. 1",
    description: "A dummy event no. 1 for React's puropuse",
  },
  {
    id: "2",
    title: "Dummy event no. 2",
    description: "A dummy event no. 2 for React's puropuse",
  },
  {
    id: "3",
    title: "Dummy event no. 3",
    description: "A dummy event no. 3 for React's puropuse",
  },
];

const EventsPage = () => {
  return (
    <>
      <h1>EventsPage</h1>
      <hr />
      <ul>
        {DUMMY_EVENTS.map((ev) => (
          <li key={ev.id}>
            <Link to={ev.id}>{ev.title}</Link>
            <br />
            {ev.description}
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
