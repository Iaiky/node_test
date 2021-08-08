const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // if (req.url==='/'){
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'home.html'),
    //         (err, content) => {
    //             if (err) throw err;    
    //             res.writeHead(200, { 'content-type': 'text/html' });
    //             res.end(content);
    //     });
    // }

    // if (req.url==='/api/users'){
    //     const users = [
    //         {name:'Iaiky Naej' , age:'23'},
    //         {name:'Bill Gtaes' , age:'54'}
    //     ];    
    //     res.writeHead(200, { 'content-type': 'application/json' });
    //     res.end(JSON.stringify(users));
    //     }

    // build file path
    let filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'home.html' : req.url
    );

    //Extension file
    let extname = path.extname(filePath);

    //initial content type
    let contentType = 'text/html';

    //check ext and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
                contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read file 
    fs.readFile(filePath, (err, content) => {
        if (err){
            if (err.code == 'ENOENT'){
                //page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content)=> { 
                
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(content, 'utf8');
                });
            }else{
                //some server error
                res.writeHead(500);
                res.end(`Server error: ${err.code}`);
            }
        }else{
            //Succes
            res.writeHead(200, {'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));