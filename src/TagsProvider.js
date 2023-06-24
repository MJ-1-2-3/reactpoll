import React, { useState, useEffect } from 'react';
import TagsContext from './TagsContext';

const TagsProvider = ({ children }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    console.log('Selected Tags:', selectedTags); // Print selected tags in the console whenever they change
  }, [selectedTags]);

  return (
    <TagsContext.Provider value={{ selectedTags, setSelectedTags }}>
      {children}
    </TagsContext.Provider>
  );
};

export default TagsProvider;
