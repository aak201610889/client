import React from 'react'
import { useParams } from 'react-router-dom'
import './requirement.css'
function Reduirements({ data}) {
  const item = useParams()
  console.log(item.requirements);
  console.log(data);
  return (
    <>
      {data
        .filter((items) => items.name === item.requirements)
        .map((item, index) => (
          <div
            className="requirements"
            key={index}
            style={{
              backgroundImage: `url(../${item.iamge})`,
              backgroundSize: "cover",
            }}
          >
            <div className="require_container">
              <div className="require_left">
                <h2>{item.name}</h2>
                <img src={`../${item.screen1}`} alt="" />
              </div>
              <div className='require_right'>
                <h2>Requirements</h2>
                <div className="req_text">

                <p>Cpu:{item.cpu}</p>
                <p>Gpu:{item.gpu}</p>
                <p>Ram:{item.ram}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default Reduirements