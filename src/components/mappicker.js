import React, { useEffect, useCallback } from "react";
import { Loader, LoaderOptions } from "google-maps";
import styled from "styled-components";
import { BiCurrentLocation } from "react-icons/bi";
import { useHistory } from "react-router-dom";

import { GrLocation } from "react-icons/gr";

const options: LoaderOptions = {
  /* todo */
};
const loader = new Loader("AIzaSyA89Ry51DT28yrjSGJHGe9-zTYLCZO0zCY", options);

const Title = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  padding: 0.25em;
  // margin: 0.5em;
  text-align: center;
  color: #550394;
  height: 50px;
  background-color: #eee;
`;

const MapBox = styled.div`
  position: absolute;
  top: 50px;
  bottom: 150px;
  width: 100%;
  z-index: 0;
`;

const AddrDiv = styled.div`
  font-weight: bold;
  font-size: 1em;
  padding-top: 0.5em;
`;

const ConfirmButton = styled.button`
  width: 90%;
  left: 5%;
  height: 50px;
  position: absolute;
  margin-top: 10px;
  bottom: 15px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 8px;
  color: #fff;
  border: none;
  background-color: #550394;

  &:disabled {
    background-color: #9fa3e3;
  }
`;

const BottomDiv = styled.div`
  position: absolute;
  font-size: 13px;
  width: 100%;
  height: 150px;
  bottom: 0;
  background-color: #eee;

  div {
    padding-left: 0.75em;
    padding-right: 0.75em;
    padding-top: 0.5em;
  }
`;
const DelLocDiv = styled.div`
  color: #969595;
  font-weight: bold;
  font-size: 12px;
`;

const MapText = styled.div`
  clear: both;
  background: #000;
  border-radius: 8px;
  color: #fff;
  // display: inline-block;
  font-size: 0.7em;
  font-weight: bold;
  padding: 6px;
  line-height: 1em;
  margin: 0 auto;
  margin-top: -89px; // high precision stuff
  top: 50%;
  left: 55%; // high precision stuff
  margin-left: -100px;
  position: absolute;
  text-align: center;
  pointer-events: none;
  vertical-align: top;
  min-width: 7em;

  &:after {
    border: 1em solid transparent;
    border-top-color: #000;
    content: "";
    margin-left: -1em;
    position: absolute;
    top: 90%;
    left: 50%;
    width: 0;
    height: 0;
  }

  span {
    font-size: 0.9em;
    color: #c2c2c2;
    font-weight: normal;
  }
`;

const ShotIcon = styled.div`
  position: absolute;
  bottom: 170px;
  right: 10px;

  button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

var google_top;
var geocoder;
var timeoutVar;
let map;

var latlngst = localStorage.getItem("latlng");
latlngst = JSON.parse(latlngst);
if (latlngst && latlngst.lat && latlngst.lng) {
  
} else {
  latlngst = { lat: 10.61878, lng: 76.21538 };
}

export default function Mappicker() {
  const [latlng, setlatlng] = React.useState(latlngst);
  const [address, setaddress] = React.useState("");
  const [btndisabled, setbtndisabled] = React.useState(false);
  let history = useHistory();
  useEffect(() => {
    // Runs once, after mounting
    console.log("Mappicker mounted");
    loader.load().then(function (google) {
      google_top = google;
      geocoder = new google_top.maps.Geocoder();
      map = new google.maps.Map(document.getElementById("map"), {
        center: latlngst,
        zoom: 10,
        disableDefaultUI: true,
      });
      // pickLocation(); // enable later

      map.addListener("center_changed", () => {
        if (timeoutVar) clearTimeout(timeoutVar);
        timeoutVar = window.setTimeout(() => {
          var lat = map.getCenter().lat();
          var lng = map.getCenter().lng();
          setlatlng({ lat: lat, lng: lng });
          // geocodeLatLng(lat, lng)
        }, 500);
      });
    });
  }, []);
  useEffect(() => {
    console.log("latlng changed");
    console.log(latlng);
    if (geocoder) {
      setaddress("updating...");
      setbtndisabled(true);
      geocoder
        .geocode({ location: { lat: latlng.lat, lng: latlng.lng } })
        .then((response) => {
          if (response.results[0]) {
            setbtndisabled(false);

            setaddress(response.results[0].formatted_address);
          } else {
            window.alert("No results found");
          }
        })
        .catch((e) => window.alert("Geocoder failed due to: " + e));
    }
  }, [latlng]);
  const pickLocation = useCallback(() => {
    setaddress("Please wait...");
    setbtndisabled(true);
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var center = new google_top.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
        map.panTo(center);
        map.setZoom(18);
        setlatlng({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setbtndisabled(false);
        // geocodeLatLng(latlng.lat, latlng.lng);
      },
      () => {
        console.log("User blocked location access");
        setbtndisabled(false);
      }
    );
  }, []);
  const confirmLocation = useCallback(() => {
    console.log("confirmLocation");
    console.log(latlng);
    localStorage.setItem("latlng", JSON.stringify(latlng));
    localStorage.setItem("address", address);
    // this.props.history.push("/home");
    history.push("/home");
  }, [address, latlng, history]);

  return (
    <div>
      <div>
        <Title>HyperLocal</Title>
        <MapBox id="map"> </MapBox>
        <MapText>
          <div> Order will be delivered here</div>
          <span>Place the pin accurately on the map</span>
        </MapText>
      </div>

      <ShotIcon>
        <button onClick={pickLocation} disabled={btndisabled}>
          <BiCurrentLocation />
        </button>
      </ShotIcon>

      <BottomDiv>
        <DelLocDiv> SELECT DELIVERY LOCATION </DelLocDiv>
        <AddrDiv>
          <GrLocation />
          {address}
        </AddrDiv>

        <ConfirmButton onClick={confirmLocation} disabled={btndisabled}>
          CONFIRM LOCATION
        </ConfirmButton>
      </BottomDiv>
    </div>
  );
}
