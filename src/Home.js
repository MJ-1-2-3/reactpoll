import React from 'react';
import Heading from './Heading';
import SideBar  from './SideBar';
import MainContent from './MainContent';
import "./QandA.css";

function Home() {
  return (
    <div>
      <Heading />
      <div class = "Main_table">
      <SideBar />
      <MainContent />
      </div>
    </div>
  );
}

export default Home;
