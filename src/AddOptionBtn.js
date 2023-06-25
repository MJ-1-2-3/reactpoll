import React from 'react'

function AddOptionBtn({ onAddOption }) {
    const handleClick = () => {
        console.log("Add Option Btn clicked");
        onAddOption(); 
    };

    const buttonStyle={
        backgroundColor: 'lightblue',
        color: 'white',
    }
    
  return (
    <button type = "button" style={buttonStyle} onClick={handleClick}>Add Option Btn</button>
    
  );
};

export default AddOptionBtn