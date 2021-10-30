import React, { useEffect } from "react";
import { useParams } from "react-router";

export default function Shop(props) {
  let { shopId } = useParams();
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch("/data/shop/" + shopId + ".json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
        console.log(data);
      });
  }, [shopId]);

  console.log(shopId);
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>{data.shop_details.shop_name}</h1>
        {data.items.map((item) => (
          <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
  }
}
