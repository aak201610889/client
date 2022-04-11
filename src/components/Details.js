import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./details.css";
function Details({ data }) {

  const { details } = useParams();
  const [video, setvideo] = useState(true);
  console.log(data);

  return (
    <div className="detail" style={{ backgroundSize: "cover" }}>
      {data
        .filter((item) => item.name === details)
        .map((item) => (
          <div key={item.id} className="detail_screens">
            <div className="detail_left">
              <img src={`./.${item.iamge}`} alt="" />
              <div className="screen">Screen</div>
              <div className="video">
                <a href={item.youtube} target="_blank">
                  Video
                </a>
              </div>
              <div className="requirment">
                <Link to={`/requirements/${item.name}`}>Requirment</Link>
              </div>
            </div>

            <div className="detail_right">
              <img src={`./.${item.screen1}`} alt="" />
              <img src={`./.${item.screen2}`} alt="" />
              <img src={`./.${item.screen3}`} alt="" />
              <img src={`./.${item.screen4}`} alt="" />
              <img src={`./.${item.screen5}`} alt="" />
              <img src={`./.${item.screen6}`} width={200} alt="" />
              <img src={`./.${item.screen7}`} width={200} alt="" />
            </div>
          </div>
        ))}
    </div>
  );
}

export default Details;
