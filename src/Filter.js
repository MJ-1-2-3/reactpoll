import React, { useState, useEffect} from 'react'

function Filter() {
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
        console.log(checkboxes);
    };

    return (
        <div style={{backgroundColor: 'gray', width:'100px'}}>
        <form onSubmit={handleSubmit}>
        {Object.entries(checkboxes).map(([tag, isChecked]) => (
          <div key={tag}>
            <label>
              {tag}:
              <input
                type="checkbox"
                name={tag}
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            </label>
            <br />
            <br />
          </div>
        ))}   
            
   
        <button type='submit'>FilterbyTags</button>

        </form>
        </div>
    
    );

}

export default Filter