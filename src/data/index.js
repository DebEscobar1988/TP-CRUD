
const {readFileSync,writeFileSync} = require('fs');
const path = require('path');

const readJSON = (json)=> JSON.parse(readFileSync(path.join(__dirname,json),'utf-8'))
/* array = se fiere al json parseado y leido con el que se esta trabajando/
/* file= que significa archivo, refiere en este caso al nombre del archivo json */
const writeJSON = (array, file)=>writeFileSync(path.join(__dirname,file),JSON.stringify(array,null,3),'utf-8')

module.exports = {
    readJSON,
    writeJSON
}