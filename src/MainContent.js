import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import TagsContext from "./TagsContext";

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    border: "1px solid black",
  },
  th: {
    border: "1px solid black",
    padding: "8px",
    textAlign: "left",
    backgroundColor: "#f2f2f2",
  },
  td: {
    border: "1px solid black",
    padding: "8px",
  },
};

function MainContent() {
  const [data, setData] = useState([]);
  const { selectedTags } = useContext(TagsContext);
  const location = useLocation();

  useEffect(() => {
    let url = "http://127.0.0.1:8000/polls/getpolls/";

    if (selectedTags.length !== 0) {
      const tagsString = selectedTags.join(",");
      console.log("Tags:", tagsString);
      url = "http://127.0.0.1:8000/polls/tag/" + tagsString + "/";
      console.log("URL:", url);
    }

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error fetching data");
        }
      })
      .then((data) => {
        console.log("API response:", data);
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedTags]);

  return (
    <div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Number</th>
            <th style={styles.th}>Poll Question</th>
            <th style={styles.th}>Total Votes</th>
            <th style={styles.th}>Tags</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={styles.td}>{index + 1}</td>
              <td style={styles.td}>
                <Link
                  to={{
                    pathname: `/polls/${item.id}`,
                    state: { background: location },
                  }}
                >
                  {item.Question}
                </Link>
              </td>
              <td style={styles.td}>{calculateTotalVotes(item.OptionVote)}</td>
              <td style={styles.td}>{item.Tags.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function calculateTotalVotes(optionVotes) {
  let totalVotes = 0;
  for (const option in optionVotes) {
    totalVotes += optionVotes[option];
  }
  return totalVotes;
}

export default MainContent;
