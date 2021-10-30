import React, { useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import styled from "styled-components";

const List = styled.div`
  margin: 10px;
`;

const Wrapper = styled.div`
  position: relative;
  align-items: left;
  justify-content: center;
  height: 15vh;
  margin-bottom: 10px;
  // padding: 10px;
  width: 100%;
  background-color: #ebebeb;
  border-radius: 10px;
  box-shadow: 1px 1px 1px grey;
`;

const ShopName = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  font-size: 1.1em;
  font-weight: bold;
`;
const ShopDisc = styled.div`
  position: absolute;
  margin-left: 10px;
  top: 35px;
  font-size: 0.9em;
`;
const ShopLocation = styled.div`
  position: absolute;
  bottom: 0;
  left: 10px;
  padding-bottom: 5px;
  font-size: 0.8em;
`;
const Distance = styled.div`
  position: absolute;
  padding-right: 20px;
  right: 0px;
  bottom: 0px;
  padding-bottom: 5px;
`;

const CallIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
`;
function distance(lat1, lon1, lat2, lon2, unit) {
  if (lat1 === lat2 && lon1 === lon2) {
    return 0;
  } else {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit === "K") {
      dist = dist * 1.609344;
    }
    if (unit === "N") {
      dist = dist * 0.8684;
    }
    return dist.toFixed(2);
  }
}
export default function Home() {
  const [data, setData] = React.useState([]);
  let history = useHistory();
  useEffect(() => {
    fetch("/data/shops.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
    setTimeout(() => {}, 1000);
  }, []);
  var latlng = localStorage.getItem("latlng");
  var address = localStorage.getItem("address");
  latlng = JSON.parse(latlng);
  if (address && latlng && latlng.lat && latlng.lng) {
    return (
      <div>
        <GrLocation />
        <a href="/start">{address}</a>
        <br />
        <>delivering here...</>
        <h3>Shops nearby</h3>
        <List>
          {data.map((shop) => (
            <Wrapper
              onClick={(e) => {
                console.log(shop.name);
                history.push(`/shop/${shop.id}`);
              }}
            >
              <ShopName>{shop.name}</ShopName>
              <ShopDisc>{shop.description}</ShopDisc>
              <ShopLocation>{shop.address}</ShopLocation>
              <CallIcon
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <a href={"https://wa.me/" + shop.phone}>
                  <BsWhatsapp />
                </a>
              </CallIcon>
              <Distance
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <GrLocation />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={"https://maps.google.com/?q=" + shop.latlng}
                >
                  {distance(
                    shop.latlng.split(",")[0],
                    shop.latlng.split(",")[1],
                    latlng.lat,
                    latlng.lng,
                    "K"
                  )}{" "}
                  Km
                </a>
              </Distance>
            </Wrapper>
          ))}
        </List>
      </div>
    );
  } else {
    return <Redirect to="/start" />;
  }
}
