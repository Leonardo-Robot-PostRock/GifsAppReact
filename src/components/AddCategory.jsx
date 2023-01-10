import React, { useState } from 'react';

const AddCategory = () => {
  const [inputValue, setinputValue] = useState('');

  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={onInputChange} />;
    </form>
  );
};

export default AddCategory;
