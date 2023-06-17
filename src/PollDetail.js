import React from 'react'
import Heading from './Heading'
import VoteOnThisPollBtn from './VoteOnThisPollBtn'
import Table2 from './Table2'
import Tags from './Tags'
function PollDetail() {
  return (
    <div >
        <Heading />
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <h2>Will India win the World Cup next time?</h2>
        
        <VoteOnThisPollBtn />
        <br></br>
        <Table2  />
        <Tags />
        </div>
    </div>
  )
}




export default PollDetail