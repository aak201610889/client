import React, { useState } from "react";
import "./home.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
function Home({ data }) {
  const [game, setgame] = useState(1);
const [showMore, setshowMore] = useState(false)
  const increase = () => {
    if (game < data.length) {

      setgame(game + 1);
    }
    if (game === data.length) {
      setgame(1);
    }
   
  }
  const decrease = () => {
    if (game > 1) {
      setgame(game - 1);
    }
    if (game === 1) {
      setgame(data.length);
    }
  }
  return (
    <div>
      {data
        .filter((number) => number.id === game)
        .map((item, index) => (
          <div
            key={index}
            className="home"
            style={{
              backgroundImage: `url(${item.iamge})`,
              backgroundSize: "cover",
            }}
          >
            <h1>{item.name}</h1>
            <div className="home_short__story">
              <h1>Story</h1>
              {!showMore ? (
                <p>{item.short_story.substring(0, 70)}...</p>
              ) : (
                <p>{item.short_story}</p>
              )}
              <button
                onClick={() => {
                  setshowMore(!showMore);
                }}
              >
                {!showMore?'read More':'read Less'}
              </button>
              <button> Download</button>
            </div>
          </div>
        ))}

      <div className="slider">
        <button onClick={decrease}>
          <ArrowBackIosNewIcon />
        </button>
        <div>
          {data
            .map((item, index) => (
              <img
                key={index}
                onClick={() => {
                  setgame(item.id);
                }}
                src={item.iamge}
                width="200px"
                alt=""
              />
            ))
            .slice(game - 1, game + 2)}
        </div>
        <button onClick={increase}>
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
}

export default Home;
