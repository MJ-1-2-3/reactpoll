import React from "react";
import Heading from "./Heading";
import VoteOnThisPollBtn from "./VoteOnThisPollBtn";
import Table2 from "./Table2";
import Tags from "./Tags";
import { PieChart } from "./PieChart";
import { useNavigate } from "react-router-dom";

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
  footer: {
    padding: "0 3rem",
  },
  caption: {
    justifyContent: "center",
  },
};

export default function PollDetail() {
  const navigate = useNavigate();

  const handleVoteClick = () => {
    navigate("/vote");
  };
  return (
    <div style={styles.main}>
      <Heading />
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.heading}>
            Will India win the ICC World Cup next time?
          </h1>
          <button style={styles.btn} onClick={handleVoteClick}>
            Vote on this Poll
          </button>
          <br />
          <br />
          <Table2 />
        </div>
        <div style={styles.figure}>
          <PieChart />
          <div>
            <p style={styles.caption}>Total Votes : 22</p>
          </div>
        </div>
      </div>
      <div style={styles.footer}>
        <p>Tags: Sports, Games</p>
      </div>
    </div>
  );
}
