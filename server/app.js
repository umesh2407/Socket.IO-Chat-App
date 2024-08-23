import express from "express";
import {Server} from "socket.io";
import {createServer} from "http";

const app = express();
const server = createServer(app);
const io = new Server(server);


app.get('/',(req,res)=>{
res.send('Hello Server is Working!!!!!!!!!!!!!')
})

io.on("connection",(socket)=>{
console.log("User connected");
console.log("ID", socket.id)
})

app.listen(3000, ()=>{
    console.log('Server is running at 3000 port...')
})