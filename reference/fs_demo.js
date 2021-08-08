const fs = require('fs');
const path = require('path');

//Create folder
// fs.mkdir(path.join(__dirname, 'test'), {}, err => {
//     if (err) throw err; 
//     console.log('Folde created...'); 
// });

//Create and write file
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err; 
//     console.log('File written to ...'); 

//     //appendfile
//     fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), 'I love node js', err => {
//         if (err) throw err; 
//         console.log('File written to ...');
//     });
// });

//readfile
fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
        if (err) throw err; 
        console.log(data); 
    });