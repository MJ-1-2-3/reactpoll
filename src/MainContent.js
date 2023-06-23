

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useLocation } from 'react-router-dom';

function MainContent() {
  const [data, setData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/polls/getpolls/');
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setData(data);
      } else {
        throw new Error('Error fetching data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <table className="my-table">
        <thead>
          <tr>
            <th>Number</th>
            <th>Poll Question</th>
            <th>Total Votes</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                
              <Link to={{
                pathname: `/vote/${item.id}`,
                state: { background: location }

              }}>{item.Question}</Link>
              </td>
              
              <td>{calculateTotalVotes(item.OptionVote)}</td>
              <td>{item.Tags.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function calculateTotalVotes(optionVotes) {
  let totalVotes = 0;
  for (const option in optionVotes) {
    
    
    totalVotes += optionVotes[option];
    
  }
  return totalVotes;
}

export default MainContent;
