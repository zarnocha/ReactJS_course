import React from "react";
import { useParams } from "react-router-dom";

const EditEventPage = () => {
  const params = useParams();
  return <h1>EditEventPage {params.id}</h1>;
};

export default EditEventPage;
