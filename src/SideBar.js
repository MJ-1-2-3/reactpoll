import React from 'react'
import CreatePollBtn from './CreatePollBtn'
import Filter from './Filter'


function SideBar() {
  return (
    <div style={{marginLeft: '10px', paddingLeft: '10px' }}><CreatePollBtn/><br/>
    <Filter/>
    </div>
    
  )
}

export default SideBar