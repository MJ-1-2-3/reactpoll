// import React from "react";
// import { Chart } from "react-google-charts";

// export const data = [
//   ["Options", "Votes"],
//   ["Yes.India will win the ICC world cup.", 12],
//   ["No.India will not  win the ICC world cup.", 10],

// ];

// export const options = {
// //   title: "My Daily Activities",
// };

// export function PieChart() {
//   return (
//     <Chart
//       chartType="PieChart"
//       data={data}
//       options={options}
//       width={"100%"}
//       height={"200px"}
//     />
//   );
// }

import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Options", "Votes"],
  ["Yes. India will win the ICC world cup.", 12],
  ["No. India will not  win the ICC world cup.", 10],
];

export const options = {
  legend: "none",
  pieSliceText: "label",
  //   title: "Swiss Language Use (100 degree rotation)",
  pieStartAngle: 100,
  position: 'relative'
};

// Extract the first word from the options for labels
const labels = data
  .slice(1)
  .map(([option]) => option.split(" ")[0].replace(/[^\w\s]/gi, ""));
data.slice(1).forEach((row, index) => {
  row[0] = labels[index];
});

export function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"400px"}
      height={"400px"}
    />
  );
}
