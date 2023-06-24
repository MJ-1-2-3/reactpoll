import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import TagsContext from './TagsContext';

function MainContent() {
  const [data, setData] = useState([]);
  const { selectedTags } = useContext(TagsContext);
  const location = useLocation();

  useEffect(() => {
    let url = 'http://127.0.0.1:8000/polls/getpolls/';

    if (selectedTags.length !== 0) {
      const tagsString = selectedTags.join(',');
      console.log('Tags:', tagsString);
      url = 'http://127.0.0.1:8000/polls/tag/' + tagsString + '/';
      console.log('URL:', url);
    }

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error fetching data');
        }
      })
      .then((data) => {
        console.log('API response:', data);
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [selectedTags]);

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
                <Link
                  to={{
                    // pathname: `/vote/${item.id}`,
                    pathname: `/polls/${item.id}`,
                    state: { background: location },
                  }}
                >
                  {item.Question}
                </Link>
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
