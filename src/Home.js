import React from 'react';
import Heading from './Heading';
import SideBar  from './SideBar';
import MainContent from './MainContent';
import TagsProvider from './TagsProvider';
import "./QandA.css";

function Home() {
  return (
    <div>
      <Heading />
      <div class = "Main_table">
      <TagsProvider> {/* Wrap your components with the TagsProvider */}
          <SideBar />
          <MainContent />
        </TagsProvider>
      </div>
    </div>
  );
}

export default Home;
