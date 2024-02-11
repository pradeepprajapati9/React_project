import React from 'react'
import Allproduct from './Allproduct';
import { useState } from 'react';
import "./App.css";
const App = () => {

  const [searchQuery, setSearchQuery] = useState(' ');
  const [items, setitems] = useState(Allproduct);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = items.filter((curElement) =>
    curElement.Cat.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className='search-item'>
        <input
          type="text"
          placeholder="Search items..."
          className='search'
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className='container'>
          {
            filteredItems.map((curElement) => {
              return (
                <>
                  <div className="product-card" key={curElement.Id}>
                    <img src={curElement.Img} alt={curElement.Title} />
                    <div className='Product-content'>
                      <h1>{curElement.Cat}</h1>
                      <p>{curElement.Price}</p>
                      <p>{curElement.Title}</p>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </div>

  )
}

export default App