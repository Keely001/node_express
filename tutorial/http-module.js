const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.url == '/'){
        res.write('Welcome Home')
    }
    else if (req.url === '/about'){
        res.write('About page')
    }
    else 
    { res.end(`<h1> Wacha Ujinga</h1>
    <a href = "/">back home?</a>`);
    }

    res.end();
})

server.listen(3000);