const fs = require("fs");

const baseUrl = "https://nces.ed.gov/collegenavigator/?id=";

const ids = require("./inputs/parsedIpeds.json");

const newArray = ids.map((id) => baseUrl + id);

const outputFilename = "outputs/ipedsIDs.json";

fs.writeFile(outputFilename, JSON.stringify(newArray), (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`File ${outputFilename} written successfully`);
  }
});
