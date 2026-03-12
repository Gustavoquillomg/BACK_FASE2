const http = require("http");
const fs = require("fs");
let port = 3000;
let host = 'localhost';

const server = http.createServer((req,res)=>{
    //header
    res.setHeader("Contnt-Type","text/html");

    //roteamente
    let html_page = '';

    switch(req.url){
        case '/':
            html_page = 'home.html'
            res.statusCode = 200;
            break;

        case 'home':
            html_page = 'home.html'
            res.statusCode = 200;
            break;
        case '/about': 
            html_page = 'about.html';
            res.statusCode = 200;
            break;
        case '/services':
            html_page = 'services.html';
            res.statusCode = 200;
            break;

        default:
            html_page = '404.html';
            res.statusCode = 404
            break;
    }

    //preparar a página html
    fs.readFile('./HTML/'+html_page,(err,data)=>{
        if(err){
            console.log("erro");
            res.statusCode = 404;
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    })
})

server.listen(port, host,()=>{
    console.log('servidor está no ar!!');
} 
)