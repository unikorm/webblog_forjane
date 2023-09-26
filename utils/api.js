
// Import the required modules
import fs from 'fs';
import path from 'path';

// Function to read and return the content of a .md file
const getMarkdownContent = (fileName) => {
  const filePath = path.join(process.cwd(), 'markdown', fileName); // Construct the file path
  const fileContent = fs.readFileSync(filePath, 'utf-8'); // Read the file synchronously
  return fileContent;
};

export default getMarkdownContent;

