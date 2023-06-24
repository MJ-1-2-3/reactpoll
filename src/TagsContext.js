import { createContext } from 'react';

const TagsContext = createContext({
  selectedTags: [],
  setSelectedTags: () => {},
});

export default TagsContext;
