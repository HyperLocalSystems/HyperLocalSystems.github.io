import React from "react";
import { Redirect } from "react-router-dom";

export default function Rooturl() {
  var latlng = localStorage.getItem("latlng");
  latlng = JSON.parse(latlng);
  console.log(latlng);
  if (latlng && latlng.lat && latlng.lng) {
    return <Redirect to="/home" />;
  } else {
    return <Redirect to="/start" />;
  }
}
