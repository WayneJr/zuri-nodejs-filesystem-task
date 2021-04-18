const http = require('http');
const port = 3000;
const request = require('request-promise');
const fs = require('fs');

let server = http.createServer((req, res) => {

    request({uri:"http://jsonplaceholder.typicode.com/posts", json: false})
    .then(response => {
        
        if (!fs.existsSync('./result')){
            fs.mkdirSync('./result');
        }
        fs.writeFile('result/posts.json', response, err => {
            if (err) console.log(err);
            res.end("posts.json created and successfully written to");
        });
    });

});

server.listen(port, () => console.log("server running on port: " + port)); 
