import React, { useState } from 'react';
import { puppyList } from "/src/data.js";
import './App.css'; 
import './index.css';

function App() {
  
  console.log(puppyList);

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const handleClick = (clickedPuppyId) => {
    setFeatPupId(clickedPuppyId);
  };

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p onClick={() => handleClick(puppy.id)} key={puppy.id}>
          {puppy.name}
        </p>
      ))}

      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;