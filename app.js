// const express = require('express');
// let app = express();

// app.get('/', (req,res)=>res.send('olá Mundo'))

// app.listen(3000,()=>console.log("Servidor rodando na porta 3000"))
// const { rename } = require('fs');
const express = require('express');
const app = express();
var produto = { tipoProduto: null , preco: null , quantidade: null};
app.get('/',(req,res)=>res.send('Ola Mundo'));
app.get('/contatos',(req,res)=>res.send(["Contato1","ContaTesteto2"]));
app.get('/produto/adicionar',(req,res)=>res.send(produto));

app.listen(3000, ()=>console.log("Levantando um servidor com  etstetste"));

produto.tipoProduto = "living";
produto.preco = 1245;
produto.quantidade = 300;

app.post('/produto/criar',(req,res)=>res.send(produto));



// console.log(app); 
// const http = require('http')
// http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/plain"});
//     console.log("Teste servidor on-line")
        // switch (req.url) {
        //     case '/':
        //         res.end('Voc está na pagina home:');
        //     break;
        //     case '/contato':
        //         res.end('Você está na pagina contato!');
        //     break;
        //     case '/':
        //         res.end('Você está na pagina Sem nome');
        //     break;
        //     default:
        //         res.end('Esta na Pagina Default');
        //     break;
                
        // }
// // res.end("Meu primeiro servidor")
// }).listen(3000);



// http.createServer(function(req,res){

// }).listen(3030,"localhost");

// const http = require('http');

// http.createServer((req,res)=>{

// });listen(3000);