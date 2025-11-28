import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../features/cartSlice";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const homeBestSellingItems = useSelector((state) => state.allCart.homeBestSellingItems);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = homeBestSellingItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log('filteredItems:', filteredItems);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {/* <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}

  
      {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.dic}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
        ))

        ) : (

          <p>No matching items found.</p>
        )}
    </div>
  );
};

export default SearchBox;
