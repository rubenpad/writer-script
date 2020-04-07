const fs = require('fs');

/**
 * Checks if the directory exists. If it doesn't, it creates the directory.
 * @param {string} dirname The name for directory
 * @returns the name of created directory
 */
function createDir(dirname = 'unknown') {
  const path = './src/'
  try {
    fs.statSync(`${path}${dirname}`);
    console.log(
      `${path}${dirname} directory already exists so it will not be created again!\n`
    );
  } catch (error) {
    fs.mkdirSync(`${path}${dirname}`);
    console.log(`Successfully created ${path}${dirname} directory!\n`);
  }

  return `${path}${dirname}`
}

/**
 * @param {string} path Where to save the file
 * @param {string} fileName How will be named the file
 * @param {string} data What will be the content to write in the file
 */
function createFile(path, fileName, data) {
  const ext = '.txt';
  fs.writeFile(`${path}/${fileName}${ext}`, data, error => {
    if (error) {
      console.log('An unexpected error!');
    } else {
      console.log(`Writing the message ${data} in the file...`);
      console.log(`Successfully created ${fileName}${ext} file!\n`);
    }
  });
}

module.exports = { createDir, createFile };
