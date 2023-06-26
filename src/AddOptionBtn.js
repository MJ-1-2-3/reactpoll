import React from 'react'

function AddOptionBtn({ onAddOption }) {
    const handleClick = () => {
        console.log("Add Option Btn clicked");
        onAddOption(); 
    };

    const buttonStyle={
        backgroundColor: 'lightblue',
        color: 'white',
        width: '200px',
        height: '40px',
    }
    
  return (
    <button type = "button" style={buttonStyle} onClick={handleClick}>Add Option Btn</button>
    
  );
};

export default AddOptionBtn