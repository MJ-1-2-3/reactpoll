import React, { useState} from 'react'

function Filter() {
    const [checkboxes, setCheckboxes] = useState({
        Sports: false,
        Games: false,
        Health: false,
        Politics: false,
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes((prevCheckboxes) => ({
            ...prevCheckboxes,
            [name]: checked,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(checkboxes)
    };

    return (
        <div style={{backgroundColor: 'gray', width:'100px'}}>
        <form onSubmit={handleSubmit}>
        <label>
        Sports:
        <input
            type='checkbox'
            name='Sports'
            checked={checkboxes.checkbox1}
            onChange={handleCheckboxChange}
            />
        </label>
        <br /><br/>
        <label>
        Games:
        <input
            type='checkbox'
            name='Games'
            checked={checkboxes.checkbox2}
            onChange={handleCheckboxChange}
            /> 
        </label>
        <br /><br/>
        <label>
        Health:
        <input
            type='checkbox'
            name='Health'
            checked={checkboxes.checkbox3}
            onChange={handleCheckboxChange}
            /> 
        </label>
        <br /><br/>
        <label>
        Politics:
        <input
            type='checkbox'
            name='Politics'
            checked={checkboxes.checkbox4}
            onChange={handleCheckboxChange}
            /> 
        </label>
        <br /><br/>
        <button type='submit'>FilterbyTags</button>

        </form>
        </div>
    
    );

}

export default Filter