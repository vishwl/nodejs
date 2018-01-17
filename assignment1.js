const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');

const csvPath = path.join(__dirname, 'customer-data.csv');
const jsonPath = path.join(__dirname, 'customer-data.json');
const arr = [];

csv()
    .fromFile(csvPath)
    .on('json', (obj) => {
        arr.push(obj);
    })
    .on('done', () => {
        const jsonContent = JSON.stringify(arr, null, '\t');
        fs.writeFile(jsonPath, jsonContent, (err) => {
            if (err) {
                console.log('Error writing JSON file: ', err);
            }

            console.log('Conversion successful! File created at: ', jsonPath);
        });
    });