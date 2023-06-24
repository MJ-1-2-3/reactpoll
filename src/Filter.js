

import React, { useState, useEffect, useContext } from 'react';
import TagsContext from './TagsContext';

function Filter() {
  const { selectedTags, setSelectedTags } = useContext(TagsContext);
  const [checkboxes, setCheckboxes] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/polls/get_tag/');
      if (response.ok) {
        const data = await response.json();
        console.log('Tag Data:', data);
        const updatedCheckboxes = {};
        data.Tags.forEach((tag) => {
          updatedCheckboxes[tag] = false;
        });
        setCheckboxes(updatedCheckboxes);
      } else {
        throw new Error('Error fetching tag data');
      }
    } catch (error) {
      console.error('Error fetching tag data:', error);
    }
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedTags = Object.entries(checkboxes)
      .filter(([tag, isChecked]) => isChecked)
      .map(([tag]) => tag);
    setSelectedTags(selectedTags);
    console.log(selectedTags);
  };

  return (
    <div style={{ backgroundColor: 'gray', width: '100px' }}>
      <form onSubmit={handleSubmit}>
        {Object.entries(checkboxes).map(([tag, isChecked]) => (
          <div key={tag}>
            <label>
              {/* {tag} */}
              <input
                type="checkbox"
                name={tag}
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              {tag}
            </label>
            <br />
            <br />
          </div>
        ))}

        <button type="submit">FilterbyTags</button>
      </form>
    </div>
  );
}

export default Filter;
