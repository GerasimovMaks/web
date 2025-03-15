const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res)=>{
    const readStream = fs.createReadStream('in.txt', {encoding:"utf-8"});
    readStream.pipe(res);
    /* readStream.on("data", chunk=>{
        console.log(chunk);
    })
    readStream.on("end", chunk=>{
        console.log("Чтение закончено");
    }) */
    /* if(req.url == '/about') res.write("What about is");
    else  res.write("hhh");
    res.write("GOIDA!!!!!");
    res.end(); */
})
const PORT = 3000;
server.listen(PORT, ()=>{
    console.log("Сервер запущен", PORT);
});
//const {Transform} = require("stream");
/* 
const trans = new Transform({
    transform(chunk, encoding, callback){
        const upper = chunk.toString().toUpperCase();
        callback(null, upper);
    }
}); */

//const writeStream = fs.createWriteStream('in.txt', {encoding:"utf-8"});

/* writeStream.write("Гойда!!!!!\n");
for(let i = 0; i < 10000; ++i){
    writeStream.write("Гойда!!!!!\n");
}
writeStream.end();
writeStream.on("finish", ()=>{
    console.log("VSE!");
}) */

/* const readStream = fs.createReadStream('in.txt', {encoding:"utf-8"});
readStream.on("data", chunk=>{
    console.log(chunk);
})
readStream.on("end", chunk=>{
    console.log("Чтение закончено");
})

const writeStream_ = fs.createWriteStream('out.txt', {encoding:"utf-8"});

writeStream_.on("finish", ()=>{
    console.log("VSE!");
})

readStream
.pipe(trans)
.pipe(writeStream_); */