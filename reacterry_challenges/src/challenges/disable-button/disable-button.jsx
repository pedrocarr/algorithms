import React from 'react'

const DisableButton = () => {
  const [inputValue, setInputValue] = React.useState("")
  return (
    <>
      <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      />
      <button disabled={inputValue.length < 3}>Click</button>
    </>
  )
}

export default DisableButton
