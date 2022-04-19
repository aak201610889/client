import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import SearchIcon from "@mui/icons-material/Search";
import DehazeIcon from "@mui/icons-material/Dehaze";
function Navbar({ Data, setData, show, setshow }) {
  const [catalog, setcatalog] = useState(Data);
  const [search, setsearch] = useState("");

  const filter = () => {
    const filtered = catalog.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
    setData(filtered);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <DehazeIcon
          className="burgur"
          onClick={() => {
            setshow(!show);
          }}
        />
        <Link to={"/"}>
          <h1>GameoStore</h1>{" "}
        </Link>
      </div>
      <div className={show ? "navdontshow" : "nav_search"}>
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setsearch(e.target.value)}
        />
        <div onClick={filter}>
          <SearchIcon className="" searchicon />
        </div>
      </div>
      <div className={show ? "nav_links__show" : "nav_links"}>
        <Link to={"/"}>
          <h1>Home</h1>
        </Link>
        <Link to={"/catalog"}>
          <h1>Catalog</h1>
        </Link>

        <Link to={"/signup"}>
          <h1>Signup</h1>
        </Link>
      </div>
    </div>
  );
}

export default Navbar