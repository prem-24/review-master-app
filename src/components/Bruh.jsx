import React, { useState } from 'react'

const Bruh = () => {


  const [filterObjects, setFilterObjects] = useState([]);

  
  const objectArray = [
   {
    id:1, name:"object 1"
   },
   {
    id:2, name:"object 2"
   },
   {
    id:3, name:"object 3"
   },
  ];

  // const filterObject = () => {

  //  const filtered = objectArray.filter(obj => obj.id !== 1);

  //  setFilterObjects(filtered);

  //  console.log(filterObjects);
  
  // }
    

  // Using a splice 
  const filterObject = () => {
    
    const array = objectArray.splice(1,2)
  
    console.log(array);

    setFilterObjects(array);

  }

  return (
    <div className='container'>
      <button onClick={filterObject}>Filter Object</button>

      <ul>
        {filterObjects.map(obj => (
          <li key={obj.id}>{obj.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Bruh