import React, { useState } from 'react';

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const inputToLowerCase = inputValue.toLowerCase();
    if (inputToLowerCase.trim().length <= 1) return;
    const palabras = inputToLowerCase.split(' ');

    for (let i = 0; i < palabras.length; i++) {
      palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substr(1);
    }

    // setCategories((cat) => [inputValue, ...cat]);
    onNewCategory(palabras.join(' '));
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={onInputChange} />
    </form>
  );
};

export default AddCategory;
