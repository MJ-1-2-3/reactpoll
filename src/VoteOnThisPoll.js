import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import { useParams } from 'react-router-dom';

function VoteOnThisPoll() {
  const { id } = useParams();
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/polls/get_poll/${id}/`);
      if (response.ok) {
        const data = await response.json();
        setQuestion(data.Question);
        const optionVotes = Object.entries(data.OptionVote).map(([option, votes]) => ({
          option,
          votes,
        }));
        setOptions(optionVotes);
      } else {
        throw new Error('Error fetching question data');
      }
    } catch (error) {
      console.error('Error fetching question data:', error);
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleVoteSubmit = () => {
    // Perform vote submission logic here
    console.log('Selected Option:', selectedOption);
  };

  return (
    <div>
      <Heading />
      <div className="left-align" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <h2>{question}</h2>
        {options.length > 0 ? (
          <form>
            {options.map(({ option, votes }) => (
              <div key={option} style={{ marginBottom: '0.5rem' }}>
                <label>
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                  />
                  {option} 
                </label>
              </div>
            ))}
          </form>
        ) : (
          <p>Loading options...</p>
        )}
        <button onClick={handleVoteSubmit}>Vote</button>
      </div>
    </div>
  );
}

export default VoteOnThisPoll;
