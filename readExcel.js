const XLSX = require('xlsx');
const fs = require('fs');

const workbook = XLSX.readFile('testcases/Assignment1_ITPM_TestCases.xlsx');

const sheetName = workbook.SheetNames[0]; // assuming first sheet

const worksheet = workbook.Sheets[sheetName];

const jsonData = XLSX.utils.sheet_to_json(worksheet);

// Write to testData.js as a module export
const content = `const testData = ${JSON.stringify(jsonData, null, 2)};\n\nexport default testData;`;

fs.writeFileSync('testData.js', content);

console.log('testData.js updated successfully.');