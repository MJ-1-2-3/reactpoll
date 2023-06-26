import React , {useEffect, useState} from "react";
import { Chart } from "react-google-charts";
import PropTypes from "prop-types";


const styles = {
  chartContainer: {
    position: "relative",
    width: "200px",
    height: "20px",
    // backgroundColor: "red",
  },
  totalVotes: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    fontSize: "18px",
  },

}


const options = {
  legend: "none",
  pieSliceText: "label",
  pieStartAngle: 100,
  position: "relative",
  // titleTextStyle: { fontSize: 14, fontName: "Arial" },
  // pieSliceTextStyle: { fontSize: 12, fontName: "Arial" },
  chartArea: { width: "80%", height: "80%" },
};

const PieChart = ({ questionId }) => {
  const [chartData, setChartData] = useState([]);
  const [totalVotes, setTotalVotes] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/polls/get_poll/${questionId}/`)
        const data = await response.json();
        const optionVote = data.OptionVote;
        const transformedData = Object.entries(optionVote).map(([option, votes]) => [
          option,
          votes,
        ]);
        setChartData(transformedData);
        const sumVotes = Object.values(optionVote).reduce(
          (total, votes) => total + votes,
          0
        );
        setTotalVotes(sumVotes);

      }catch(error) {
        console.error("Error fetching data: ",error)
      }
    };
    if (questionId) {
      fetchData();}
  }, [questionId]);





  return (
    <div style={styles.chartContainer}>
      <Chart
        chartType="PieChart"
        data={[["Options", "Votes"], ...chartData]} 
        options={options}
        width={"400px"}
        height={"400px"}
      />
      <p styles={styles.totalVotes}>Total Votes: {totalVotes}</p>
    </div>
  );
};

PieChart.propTypes = {
  questionId: PropTypes.string.isRequired,
};

export default PieChart;
