import React from 'react'

function CreatePollBtn() {
    const handleClick = () => {
        console.log("Create Poll button clicked");
    };

    const buttonStyle={
        backgroundColor: 'lightblue',
        color: 'white',
    }
    
  return (
    <button  style={buttonStyle} onClick={handleClick}>Create Poll</button>
    
  );
};

export default CreatePollBtn