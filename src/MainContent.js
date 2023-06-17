import React from 'react'
import './MainContent.css';
function MainContent() {
  return (
    <table className='my-table'>
        <thead>
            <tr>
                <th>Number</th>
                <th>Poll Question</th>
                <th>Total Votes</th>
                <th>Tags</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Will India win the ICC World Cup next time?</td>
                <td>22</td>
                <td>Sports,Games</td>
            </tr>
            <tr>
                <td>2</td>
                <td>What will be the total corona casualities by the next year globally?</td>
                <td>10</td>
                <td>Health,Politics</td>
            </tr>
        </tbody>
    </table>
  )
}

export default MainContent