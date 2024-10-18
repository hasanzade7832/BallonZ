const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "ws://signal.isola.ir",
    methods: ["GET", "POST"],
  },
});

io.on("connection",(socket)=>{
    console.log(`User Connected: ${socket.id}`)
})

server.listen(3000, () => {
  console.log("SERVER IS RUNNING");
});
