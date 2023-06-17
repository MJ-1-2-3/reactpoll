import React from 'react'
import './MainContent.css';
function Table2() {
  return (
    <div>
    <table class="my-table" >
        <tr>
            <th>Number</th>
            <th>Option</th>
            <th>Votes</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Yes, India will win the next ICC World Cup</td>
            <td>12</td>
        </tr>
        <tr>
            <td>2</td>
            <td>No, India won't win thw next ICC World Cup</td>
            <td>10</td>
        </tr>
    </table>
        
    </div>
  )
}

export default Table2