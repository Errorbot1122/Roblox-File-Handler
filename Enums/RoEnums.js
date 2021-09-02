// Import the filesystem module
const fs = require("fs");

const directory_name = "Enums";

let exportRequired = {}

// Function to get current filepaths
// in directory
let filepaths = fs.readdirSync(directory_name);
  

filepaths.forEach((filepath) => {

  let fileExtentionIndex = filepath.indexOf(".")

  if (fileExtentionIndex != -1) {

    let extention = filepath.slice(fileExtentionIndex)
    let fileName = filepath.slice(0, fileExtentionIndex)

    if (extention == ".js" && fileName != "RoEnums") {
      
      exportRequired[fileName] = require(`./${filepath}`)
    }
  }
  
});

module.exports = exportRequired