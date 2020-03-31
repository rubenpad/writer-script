const fs = require('fs');

function createDir(dirname = 'unknown') {
  try {
    fs.statSync(`${dirname}`);
    console.log(
      `${dirname} directory already exists so it will not be created again!\n`
    );
  } catch (error) {
    fs.mkdirSync(`${dirname}`);
    console.log(`Successfully created ${dirname} directory!\n`);
  }

  return dirname;
}

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
