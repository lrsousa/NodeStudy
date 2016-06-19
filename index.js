var createSerialGenerator = require('./serialGenerator.js');
var serialGeneratorA = createSerialGenerator();
var serialGeneratorB = createSerialGenerator();
console.log(serialGeneratorA === serialGeneratorB);