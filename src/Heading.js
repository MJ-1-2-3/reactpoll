// import React from 'react'

// function Heading() {
//   return (
//     <div>
//         <h2>Heading</h2></div>
//   )
// }

// export default Heading

import React from 'react'

function Heading() {
    const headingStyle = {
        color: 'black',
        fontSize: '50px',
        fontWeight: 'bold',
        textAlign: 'left',
        width: '75%',
        height: '100px',
        backgroundColor: 'gray',
      };
      
  return (
    <div className='Heading'>
    <h1 style={headingStyle}>FlyweightPolls </h1>
  </div>

   
  );
}

export default Heading;