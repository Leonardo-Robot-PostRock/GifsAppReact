import React, { useState } from 'react';

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');
  const inputToLowerCase = inputValue.toLowerCase();
  const words = inputToLowerCase.split(' ');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  
  const onSubmit = (event) => {
    event.preventDefault();
    
    if (inputToLowerCase.trim().length <= 1) return;

    const capitalizedWord = words.map((word) => { 
        return word[0].toUpperCase() + word.substring(1); 
    }).join(" ");

    // setCategories((cat) => [inputValue, ...cat]);
    onNewCategory(capitalizedWord);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={onInputChange} />
    </form>
  );
};

export default AddCategory;
