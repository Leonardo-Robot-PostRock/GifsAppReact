import React, { useState } from 'react';

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');
  const inputToLowerCase = inputValue.toLowerCase();
  const word = inputToLowerCase.split(' ');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  
  const onSubmit = (event) => {
    event.preventDefault();
    
    if (inputToLowerCase.trim().length <= 1) return;
    
    const capitalizedWord = word.map((palabra) => { 
        return palabra[0].toUpperCase() + palabra.substring(1); 
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
