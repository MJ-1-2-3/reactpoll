import React from 'react'
import Heading from './Heading'
import QandA from './QandA'

function VoteOnThisPoll() {
  return (
    <div>
        <Heading />
        <div  class="left-align" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} >
        <h2>Will India win the ICC World Cup next time?</h2>

        <div >
        <input type ="radio" name="choice" value="yes" id="id_yes" />
        <label for="id_yes">Yes</label>
        <br></br>
        <input type ="radio" name="choice" value="no" id="id_no" />       
        <label for="id_no">No</label>
        </div>
        <br></br>
        <button>Vote</button>  
        </div>  

    </div>
  )
}

export default VoteOnThisPoll