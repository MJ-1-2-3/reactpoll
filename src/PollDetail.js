import React ,  { useEffect ,useState} from "react";
import Heading from "./Heading";
import VoteOnThisPollBtn from "./VoteOnThisPollBtn";
import Table2 from "./Table2";
import { PieChart } from "./PieChart";
import { useNavigate ,useParams} from "react-router-dom";

const styles = {
  main: {
    height: "100vh",
    width: "75%",
    display: "flex",
    flexDirection: "column",
  },
  container: {
    height: "auto",
    width: "auto",
    display: "flex",
    padding: "3rem",
  },
  content: {
    width: "70%",
    height: "auto",
  },
  figure: {
    width: "30%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    // background-color: "red",
  },
  heading: {
    fontSize: "1.2rem",
  },
  btn: {},
  table: {
    display: "grid",
    gridTemplateRows: "1fr 3fr 3fr",
    gridTemplateColumns: "1fr 4fr 6fr",
  },
 
  caption: {
    justifyContent: "center",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    border: "1px solid black", // Add border to the table
  },
  th: {
    border: "1px solid black",
    padding: "8px",
    textAlign: "left",
    backgroundColor: "#f2f2f2", // Add background color to table header
  },
  td: {
    border: "1px solid black",
    padding: "8px",
  },
};

export default function PollDetail() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [question, setQuestion] = useState("");
  const [tableData, setTableData] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // Function to make the API call
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/polls/get_poll/${id}/`);
        const data = await response.json();
        console.log(data); // Print the response data in the console
        setQuestion(data.Question); // Set the question in the state
        setTableData(data.OptionVote); // Set the table data in the state
        setTags(data.Tags);
      } catch (error) {
        console.error(error); // Print any error that occurred
      }
    };

    fetchData(); // Call the function to make the API call
  }, [id]);

  const handleVoteClick = () => {
    navigate(`/vote/${id}`);
  };
//   return (
//     <div style={styles.main}>
//       <Heading />
//       <div style={styles.container}>
//         <div style={styles.content}>
//           <h1 style={styles.heading}> {question}</h1> {/* Display the question here */}
//           <button style={styles.btn} onClick={handleVoteClick}>
//             Vote on this Poll
//           </button>
//           <br />
//           <br />
//           <Table2 data={tableData} /> {/* Pass the table data as props */}
//         </div>
//         <div style={styles.figure}>
//           <PieChart />
//           <div>
//             <p style={styles.caption}>Total Votes : 22</p>
//           </div>
//         </div>
//       </div>
//       <div style={styles.footer}>
//         <p>Tags: Sports, Games</p>
//       </div>
//     </div>
//   );
// }




return (
  <div style={styles.main}>
    <Heading />
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>{question}</h1>
        <button style={styles.btn} onClick={handleVoteClick}>
          Vote on this Poll
        </button>
        <br />
        <br />
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Option</th>
              <th style={styles.th}>TotalVotes</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(tableData).map(([option, totalVotes], index) => (
              <tr key={index}>
              
                <td style={styles.td}>{option}</td>
                <td style={styles.td}>{totalVotes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={styles.figure}>
        <PieChart />
        <div>
          <p style={styles.caption}>Total Votes: 22</p>
        </div>
        
      </div>
    </div>
    <p>Tags: {tags.join(", ")}</p>
    
  </div>
);
}