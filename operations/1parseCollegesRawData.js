const fs = require("fs");

// Read the college data from a file
fs.readFile("./data/colleges.txt", "utf8", (err, dataString) => {
  if (err) throw err;

  // Parse the data string into an array of objects
  const data = dataString.split("\n").map((line) => {
    const [collegeName, state, tuition] = line.split("\t"); //   \t  represents tab spacing
    return { collegeName, state, tuition: parseInt(tuition.replace(",", "")) };
  });

  // Write the parsed data to a file
  fs.writeFile("parsedColleges.json", JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log("Data written to file successfully!");
  });
});
