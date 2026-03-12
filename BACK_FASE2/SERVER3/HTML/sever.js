const http = require ('http')
let port = 3000;
let host = 'localhost'
const fs = reuire ('fs')

const server = http.createServer((req,res)=>{
    res.setHeader("content-tyoe ",'text/html');

    //preparar o conteudo em html
    fs.readfile('./html/pag1.html',(err,data)=>{
        if(err){
            console.log('erro ao carregar a pagina');
            res.write("sinto muito não conseguimos carregar a pagina");
            res.end ();
        }   else{
                res.write(data);
                res.end();
            }
        
    })
})

server.listen(port,host,()=>{
    console.log("server no ar!!!")
})