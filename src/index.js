const fs = require('fs');
const getDate = require('./utils/getDate');
const { createDir, createFile } = require('./utils/manageFileSystem');
const greetings = require('./greetings');

const DIRNAME = 'greetings';
const TIME_TO_WRITE_IN_MINUTES = 5;
const INTERVAL_TO_WRITE_IN_MINUTES = 1;

function convertMinutesToMilliseconds(timeInMinutes) {
  return timeInMinutes * 60 * 1000;
}

function chooseAMessage(arrayOfMessages) {
  const randomNumber = Math.floor(Math.random() * greetings.length);
  const { language, greeting } = arrayOfMessages[randomNumber];
  const message = `${greeting} - ${language} - ${getDate()}`;

  return message;
}

function writingFiles(totalTimeToWrite, intervalTimeToWrite) {
  const timeToWriteInMilliseconds = convertMinutesToMilliseconds(
    totalTimeToWrite
  );
  const intervalTimeToWriteInMilliseconds = convertMinutesToMilliseconds(
    intervalTimeToWrite
  );
  const end =
    totalTimeToWrite > 1 || totalTimeToWrite < 1 ? 'minutes' : 'minute';

  console.log(`Starting to write...\n`);
  console.log(`Estimated time: ${totalTimeToWrite} ${end}`);
  console.log(`I will write each ${intervalTimeToWrite} ${end}\n`);

  const dirname = createDir(DIRNAME);

  const intervalId = setInterval(() => {
    const fileName = getDate();
    const message = chooseAMessage(greetings);

    createFile(dirname, fileName, message);
  }, intervalTimeToWriteInMilliseconds);

  setTimeout(() => {
    clearInterval(intervalId);
    console.log(`Writing process finished!`);
  }, timeToWriteInMilliseconds);
}

writingFiles(TIME_TO_WRITE_IN_MINUTES, INTERVAL_TO_WRITE_IN_MINUTES);
