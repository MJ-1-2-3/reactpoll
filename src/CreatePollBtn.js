import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePollBtn = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log("Create Poll button clicked");
        navigate('/create');
    };

    const buttonStyle = {
        backgroundColor: 'lightblue',
        color: 'white',
    };

    return (
        <button style={buttonStyle} onClick={handleClick}>
            Create Poll
        </button>
    );
};

export default CreatePollBtn;
