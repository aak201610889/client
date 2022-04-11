import React, { useState } from 'react'
import './addgame.css'
function AddGame() {
  const [addgame, setaddgame] = useState(
    [
      {
        gameID: 1, name: '', description: '', image: '', link: '', requirements: '', showInMain: '', typeOfGame: '', rating: '', images: '',
      }

    ]
  )
  return (
    <div className='addgame'>
      <form action="">
        <input type="text" placeholder='Game id' />
        <input type="text" placeholder='Name of game' />
        <input type="text" placeholder='Description' />
        <input type="file" placeholder='image ' />
        <input type="text" placeholder='Download link' />
        <input type="text" placeholder='Requirments' />
        <select type="" placeholder='Show in main' >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <input type="text" placeholder='Type of gamw' />
        <input type="date" placeholder='date' />
        <input type='range' placeholder='rating' />
        <input type="file" placeholder='images' />
        <input type="file" placeholder='images' />
        <input type="file" placeholder='images' />
        <input type="file" placeholder='images' />
        <input type="file" placeholder='images' />
        <input type="file" placeholder='images' />
        <input type="file" placeholder='images' />
        <button >submit</button>
      </form>
    </div>
  );
}

export default AddGame