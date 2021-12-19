// Import the filesystem module
const fs = require("fs");

const directory_name = "Datatypes";
const subPath = "../Datatypes";

let exportRequired = {}

// Function to get current filepaths
// in directory
let filePaths = fs.readdirSync(directory_name);
  

filePaths.forEach((filePath) => {

  let fileExtentionIndex = filePath.indexOf(".")

  if (fileExtentionIndex != -1) {

    let extention = filePath.slice(fileExtentionIndex)
    let fileName = filePath.slice(0, fileExtentionIndex)

    if (extention == ".js") {
      
      exportRequired[fileName] = require(`${subPath}/${filePath}`)
    }
  }
  
});

module.exports = exportRequired