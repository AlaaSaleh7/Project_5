import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./funerals.css";
import ShowPlaces from "../showPlaces/index";

const Funerals = () => {
  const history = useHistory();
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/places/type/funerals`).then((result) => {
      if (result.status == 200) {
        setPlaces(result.data);
      }
    });
  }, []);

  return (
    <>
      <div className="funeralsPlace">
        <ShowPlaces places={places} />
      </div>
    </>
  );
};

export default Funerals;
