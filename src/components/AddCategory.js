import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({handleAdd}) => {

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = ({target}) => {
    setInputValue(target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return; 
    // setCategory(category => [inputValue,...category]);
    setInputValue("")
    handleAdd(inputValue.trim())
  }

  return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
  )
}

// AddCategory.propTypes = {
//   setCategory: PropTypes.func.isRequired
// }