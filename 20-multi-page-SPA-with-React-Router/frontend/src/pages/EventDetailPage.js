import React from "react";
import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();
  return <h1>EventDetailPage {params.id}</h1>;
};

export default EventDetailPage;
