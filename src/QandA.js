import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QandA.css';
import './AddOptionBtn';
import AddOptionBtn from './AddOptionBtn';

const styles = {
  optionInput: {
    marginBottom: '10px', // Add spacing between options
  },
};

function QandA() {
  const [OptionVote, setOptions] = useState(['']);//decalre state variable OptionVote and its setter function setOptions
  const [Question, setQuestion] = useState('');
  const [Tags, setTags] = useState(['']);
  const navigate = useNavigate();
  
    // const formStyle = {
    //   width: '90px',
    //   height: '300px',
    //   paddingleft : '20px',
      
    // };
    const buttonStyle = {
      backgroundColor: 'lightgreen',
      color: 'white',
      width: '200px',
      height: '50px',
    };  

  const handleAddOption = () => {
     
    setOptions([...OptionVote, '']); //spread operator that creates a shallow copy of thw options array
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...OptionVote];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleSubmit = async (e) => { //arrow function taking event e as parameter
    e.preventDefault();

    const data = {
      Question,
      OptionVote,
      Tags,
    };

    try {
      const url = 'http://127.0.0.1:8000/polls/api1/';
      const config = {     //Has the configuration options for fethch request
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        
      };

      const response = await fetch(url, config);  //await waits for the response to be resolved before continuing code execution

      if (response.ok) {
        // Redirect the user after successful submission
        navigate('/'); // Replace '/success' with your desired success page URL
      } else {
        // Handle other responses or show an error message
      }
    } catch (error) {
      // Handle error or show an error message
    }


  };

  return (
    <div className="list">
      <div className="form">
        <form onSubmit={handleSubmit} >
          <label htmlFor="question">Question</label><br/>
          <input
            className="box"
            type="text"
            id="question"
            name="question"
            placeholder="Type your poll question here"
            value={Question}
            onChange={(e) => setQuestion(e.target.value)}
          /><br /><br/>

          <label htmlFor="answer">Answer Options</label><br/>
          {OptionVote.map((OptionVote, index) => (
            <input
              key={index}
              type="text"
              className="box"
              style={styles.optionInput}
              value={OptionVote}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              placeholder={`Option${index + 1}`}
            />
          ))}

          <AddOptionBtn onAddOption={ handleAddOption} />
          <div className="Double_arrow"></div><br />
            
          <label htmlFor="tags">Comma separated tags</label><br/>
          <input
            type="text"
            className="box"
            id="tags"
            name="tags"
            placeholder="Tag1, Tag2, Tag3"
            value={Tags}
            onChange={(e) => setTags(e.target.value.split(','))}
          /><br/><br/>

        <button type="submit" style={buttonStyle} >Create Poll</button>
        </form>
        
      </div>
    </div>
  );
}

export default QandA;
