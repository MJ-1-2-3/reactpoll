import React from 'react'

function AddOptionBtn() {
    const handleClick = () => {
        console.log("Add Option Btn clicked");
    };

    const buttonStyle={
        backgroundColor: 'lightblue',
        color: 'white',
    }
    
  return (
    <button style={buttonStyle} onClick={handleClick}>Add Option Btn</button>
    
  );
};

export default AddOptionBtn