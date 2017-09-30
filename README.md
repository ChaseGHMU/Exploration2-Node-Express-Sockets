Exploration2-Node-Express-Sockets
======================

This is my second exploration that I wrote using **Node.js**, **Express.js**, and **Sockets.io**. These three libraries are all client side libraries and with using all three, you are able to do real time interaction between seperate computers.

Link to working project: http://www.chasejordonallen.com:3000/

Dependencies and Running Project
===============

- npm
- Node

After ensuring you have Node and npm installed on your server run the following command to install the other dependencies needed:
```shell
npm install
```
This will download both express and sockets from the package.json file

Walking Through the Code
================

The main components of running through the server is involved in server.js.

```javascript
var express = require('express');
var socket = require('socket.io');
var server = app.listen(4000);
app.use(express.static('public'));

```

These two lines of code give you access to both express and socket.io. Whenever port 4000 is hit, Express tells the page to use information from the "public" folder. Express is used to listen for when a certain port is hit and return the relevant information for that selected port.

```javascript
io.sockets.on('connection', newConnection);

function newConnection(socket) {
  console.log("New connection" + socket.id);
  socket.on('mouse', mouseMessage);

  function mouseMessage(data){
    socket.broadcast.emit('mouse', data);
  }
}
```

The following code is used all for sockets. Sockets is used to pass information back and forth between the server and client. What the following code does is it interacts with Express and is told when theres a new connection. It will then call the function newConnection and write the id of the current connection. The rest of the relevant socket data is located in sketch.js here:

```javascript
  socket = io.connect("www.chasejordonallen.com:3000");
  
  
  var data = {
    x: mouseX,
    y: mouseY
  }

  socket.emit('mouse', data);
```
What this code does is make a socket variable and store the connection in it. In the function "mouseDragged" it takes the data of the X and Y coordinates and emits it as the word 'mouse'. Whenever the server receives information called mouse, it will send that data to every client connected. It will then take the information and draw the new lines on the x and y coordinates in a different color to differentiate between what you drew and what someone else drew.

Challenges
========
I decided to build this app because I wanted to have a better understanding of not only Node, but also Express and Sockets. There were a few challenges that I ran into, but overall had a lot of fun building this and I'm excited to make upgrades to this page. One of the main challenges I ran into was getting the sketch to pass onto the server and draw on a seperate client. I did some research and realized that I had to add io.connect to the sketch.js file so that it was listening to what was happening on the page. There was a little bit of trouble figuring out express and connecting to a certain port on my server. After looking around and realizing that I didn't have that port open on my EC2, I fixed that problem. I also had to figure out how to pass the data in for the server to be able to broadcast. I found out the data gets sent in a json type file, so I fixed that data and it worked like a charm. This is a pretty simple project to just show how they all work together, but I had a lot of fun and feel that I learned a lot. 
