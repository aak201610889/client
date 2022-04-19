import React, { useEffect, useState } from "react";
import "./addgame.css";
import axios from "axios";
function AddGame() {
  const [addgame, setaddgame] = useState([
    {
      gameID: "",
      name: "",
      description: "",
      // image: "",
      link: "",
      // cpu: "",
      // gpu: "",
      // ram: "",
      showInMain: "",
      typeOfGame: "",
      // date: "",
      // rate: "",
      // screen1: "",
      // screen2: "",
      // screen3: "",
      // screen4: "",
      // screen5: "",
      // screen6: "",
      // screen7: "",
    },
  ]);
  const add = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/games", { addgame })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   axios
  //     .post("http://localhost:5000/api/upload", addgame.image)
  //     .then((res) => {
  //       console.log(res);
  //     });
  // }, []);

  return (
    <div className="addgame">
      <form action="" className="addgame_form">
        <h1>Add new Game</h1>

        <input
          type="text"
          placeholder="Game id"
          onChange={(e) => setaddgame({ ...addgame, gameID: e.target.value })}
          name="gameID"
        />
        <input
          type="text"
          placeholder="Name of game"
          onChange={(e) => setaddgame({ ...addgame, name: e.target.value })}
          name="name"
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) =>
            setaddgame({ ...addgame, description: e.target.value })
          }
        />
        {/* <input
          type="file"
          placeholder="image "
          onChange={(e) => setaddgame({ ...addgame, image: e.target.value })}
        /> */}
        <input
          type="text"
          placeholder="Download link"
          onChange={(e) => setaddgame({ ...addgame, link: e.target.value })}
        />
        <input
          type="text"
          placeholder="cpu"
          onChange={(e) => setaddgame({ ...addgame, cpu: e.target.value })}
        />
        <input
          type="text"
          placeholder="ram"
          onChange={(e) => setaddgame({ ...addgame, ram: e.target.value })}
        />
        <input
          type="text"
          placeholder="gpu"
          onChange={(e) => setaddgame({ ...AddGame, gpu: e.target.value })}
        />
        <div className="addgame__selecting">
          <label htmlFor="">show in main</label>
          <select
            placeholder="Show in main"
            onChange={(e) =>
              setaddgame({ ...AddGame, showInMain: e.target.value })
            }
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Type of gamw"
          onChange={(e) =>
            setaddgame({ ...AddGame, typeOfGame: e.target.value })
          }
        />
        {/* <input
          type="date"
          placeholder="date"
          onChange={(e) => setaddgame({ ...AddGame, date: e.target.value })}
        /> */}
        {/* <input
          type="range"
          placeholder="rating"
          onChange={(e) => setaddgame({ ...AddGame, rate: e.target.value })}
        /> */}
        {/* <input
          type="file"
          placeholder="images"
          onChange={(e) => setaddgame({ ...AddGame, screen1: e.target.value })}
        />
        <input
          type="file"
          placeholder="images"
          onChange={(e) => setaddgame({ ...AddGame, screen2: e.target.value })}
        />
        <input
          type="file"
          placeholder="images"
          onChange={(e) => setaddgame({ ...AddGame, screen3: e.target.value })}
        />
        <input
          type="file"
          placeholder="images"
          onChange={(e) => setaddgame({ ...AddGame, screen4: e.target.value })}
        />

        <input
          type="file"
          placeholder="images"
          onChange={(e) => setaddgame({ ...AddGame, screen5: e.target.value })}
        />
        <input
          type="file"
          placeholder="images"
          onChange={(e) => setaddgame({ ...AddGame, screen6: e.target.value })}
        />
        <input
          type="file"
          placeholder="images"
          onChange={(e) => setaddgame({ ...AddGame, screen7: e.target.value })}
        /> */}
        <button onClick={add}>submit</button>
      </form>
    </div>
  );
}

export default AddGame;
