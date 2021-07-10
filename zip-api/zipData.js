const fs = require('fs');
const parse = require('csv-parse/lib/sync');

const data = fs.readFileSync('./data/free-zipcode-database.csv');
const records = parse(data, { columns: true });


const byZip = {};
const byCity = {};
const byRecordNumber = {};

records.forEach((rec) => {
  if(byZip[rec.Zipcode] === undefined) {
    byZip[rec.Zipcode] = [];
  }
  byZip[rec.Zipcode].push(rec);

  if(byCity[rec.City] === undefined) {
    byCity[rec.City] = [];
  }
  byCity[rec.City].push(rec.Zipcode);

  if(byRecordNumber[rec.RecordNumber] === undefined) {
  	byRecordNumber[rec.RecordNumber] = []
  }
  byRecordNumber[rec.RecordNumber].push(rec.RecordNumber);
  
});


module.exports = { byZip, byCity };
