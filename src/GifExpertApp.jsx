import React, { useState } from 'react';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = () => {
    setCategories(['Naruto', ...categories]);
    // setCategories(cat => [...cat, 'Naruto'])
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
