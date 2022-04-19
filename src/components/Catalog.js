import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./catalog.css";
function Catalog({ data, setdata }) {
  
  const [count, setcount] = useState(0)
  console.log(count);

  useEffect(() => {
    setdata(data)

    
  }, [data])


console.log(data);
  return (
    <div
      className="catalog"
      style={{
        backgroundImage: `url(./images/gobg.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "black",
        minHeight: "100vh",
        height: "100%",
        width: "100%",
      }}
    >
      <div className="cat_leftside">
        <div
          onClick={() => {
            setdata(data.sort((a, b) => a.rate - b.rate));
            setcount(count + 1);
          }}
        >
          Best game
        </div>
        <div
          onClick={() => {
            setdata(
              data.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
            );
            setcount(count - 1);
          }}
        >
          New
        </div>
        <div> Type of Game</div>
      </div>
      <div className="cat_rigthside">
        <div className="cards">
          {data.map((item, index) => (
            <div key={index} className="card">
              <img src={`${item.iamge}`} alt="" />

              <h3>{item.name}</h3>
              <div className="cat__card_btn">
                <Link to={item.name}>
                  <button className="view__btn">view</button>
                </Link>
                <Link to={item.name}>
                  <button className="download__btn">download</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalog