import React from 'react'
import './QandA.css';
import './AddOptionBtn'
import AddOptionBtn from './AddOptionBtn';
import CreatePollBtn from './CreatePollBtn';
function QandA() {
  return (
        <div class="list">
          <div class="form">
            <form />
            <label for="question" >Question</label><br/>
            <input class="box" type="text" id="question" name="question" placeholder="Type your poll question here"  /><br />

            <label for="answer">Answer Options</label><br/>
            <input type = "text" class="box" id = "option1" name="option1" placeholder="Option1"  /><br/>
            <input type = "text" id = "option2" class="box"  name="option2" placeholder="Option2"  /><br/>
            
            <AddOptionBtn />
            <div class="Double_arrow"></div><br />
            
            <label for="tags">Comma separated tags</label><br/>
            <input type = "text"  class="box" id="tags" name="tags" placeholder="Tag1, Tag2, Tag3" /><br/><br/>

            </div>
            <br />
            <CreatePollBtn />


          </div> 
    
  )
}

export default QandA