import React, { useState } from 'react'

const LocalStorage = () => {
  const [inputValue, setInputValue] = useState(localStorage.getItem("inputValue") || "")

  const handleInputValue = (e) => {
    setInputValue(e.target.value)
    localStorage.setItem("inputValue", e.target.value)
  }


  return (
    <div>
      <input
      type="text"
      value={inputValue}
      onChange={handleInputValue}
      />
    </div>
  )
}

export default LocalStorage
