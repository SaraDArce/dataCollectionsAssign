//Part1
// Split the CSV string into rows based on newline characters.
const csvString = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;
let rows = csvString.split("\n");
for (let i = 0; i < rows.length; i++) {
  // Split the current row into individual elements (id, name, occupation, age)
  // based on the comma delimiter and assign them to respective variables.
  let [cell1, cell2, cell3, cell4] = rows[i].split(",");
  //console.log(cell1, cell2, cell3, cell4);
}

//Part2
let lines = csvString.split("\n");
let colNum = lines[0].split(",").length;
let twoD = [];
for (let line of lines) {
  let row = line.split(",");
  if (row.length === colNum) twoD.push(row);
}
console.log(twoD);
