<script>

import * as WebSock from 'ws';
console.log("WebSock is", WebSock);
/*const wss = new WebSock.Server({ port: 3000 });
wss.on('connection', function connection(ws) {
  ws.onmessage = (message) => {
    updateClients(message.data);
  };
});

const updateClients = (message) => {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
};  */
import {fade} from "svelte/transition"
let visible = true;
var worker_OO;
import {onMount} from "svelte";

var factors =  () => {console.log ("Hello David")};  // factors() is redefined in the browser (see the onMount section below).

function wait(ms) {
return new Promise(r => setTimeout(r, ms));
}

var powP = x => async y => {
await wait(1200)
return y**x;
}

var M = -1;
var Q = -1

var O = new Object;

O.b0 = O.b1 = O.b2 = [3,3,3,3];
O.c0 = O.c1 = O.c2 = [2,4,6,8];
O.d0 = O.d1 = O.d2 = [2,2,2,2,2,2];

function Monad () {
    var N1 = -1;
    var N2 = -1;
    var N3 = -1;
    var ax = "start";
    var bx = 0;
    function run (aa, bb) {
        if (aa === "b") {
          N1 = N1 + 1; 
          let v = (aa + N1); 
          O[v] = bb
          console.log("************************O[v] is **********************",  O[v])
          }
        if (aa === "c") {
            N2 = N2 + 1; 
            let v = aa + N2.toString(); 
            O[v] = bb;
            worker_OO.postMessage(bb);
        }
        if (aa === "d") {N3 = N3 + 1; let v = aa + N3; O[v] = bb}
        if (N1 === 2) N1 = -1;
        if (N2 === 2) N2 = -1;
        if (N3 === 2) N3 = -1;
        return function f (s,t) {
            ax = s;
            bx = t;
            return run(ax, bx)
        }
    }
    return run(ax, bx);
}


/* onMount ( () => {     //******************************* Execute in the browser:

// var socket = new WebSocket("ws://localhost:3055")
var socket = new WebSocket("wss://67.207.86.226")
socket.onclose = function (event) {
console.log('<><><> ALERT - socket is closing. <><><> ', event);
};

socket.onmessage = function(e) {
console.log("WebSocket message is", e);
var v = e.data.split(',');
if (v[0] === "BE#$42") {
Q = Q + 1;
O["c"+Q] = v[3]
if (Q === 2) Q = -1; 
mon("c", v[3]) 
// worker_OO.postMessage([v[3]])
  }
}

login();

function login() {
console.log('00000000000000000000000000000000 Entering login');
setTimeout(function () {
if (socket.readyState === 1) {
  console.log('readyState is', socket.readyState);
  var v = Math.random().toString().substring(5);
  var v2 = v.toString().substring(2);
  var combo = v + '<o>' + v2;
  socket.send('CC#$42' + combo);
  socket.send("BE#$42,solo,name,10000")
  socket.send("BE#$42,solo,name,100000")
  socket.send("BE#$42,solo,name,1000") 
} else {
  login();
}
}, 1000)
}

factors = function factors () {
socket.send("BE#$42,solo,name,10000")
socket.send("BE#$42,solo,name,100000")
socket.send("BE#$42,solo,name,1000")
}

}) */  //************************************************ End browser evaluation ("socket" is not defined in the server).

console.log("************* Worker is", Worker);
worker_OO = new Worker('worker_OO.js');

worker_OO.onmessage = e => { 
  var data0 = e.data[0];
  var data1 = e.data[1];
  if (e.data[1].length > 1)  mon("d", `The prime factors of ${data0} are ${data1}.`) 
  else mon("d", `${e.data[0]} is a prime number.`);
  mon("b", e.data[1]);
}
// var oa = O.b0.reduce((a,b) => a*b) === O.c0
// var ob = O.b1.reduce((a,b) => a*b) === O.c1
// var oc = O.b2.reduce((a,b) => a*b) === O.c2

var candle = `socket.send(\"BE#$42,solo,name,10000\")    
socket.send('\BE#$42,solo,name,100000\")    
socket.send(\"BE#$42,solo,name,1000\") `    

console.log ("O is", O);

</script>

<style>
h3 {color: #B0B  }
a {
  color: #eb93eb;
}

a:hover {
  color: #f7f700;
}

button {
    margin-left: 1%;
    background-color: #CCffff;
    border-width: 0px;
    border-color: #361B01;
    border-radius: 25px;
    color: darkblue;
    font-size: 20px;
    box-shadow: 0px 0px 12px 0px rgb(0, 255, 0);
    padding: 3px 5px 3px 5px;
    text-align: center;
    width: 100%;
  }

  button:hover {
    box-shadow: 0px 0px 12px 0px rgb(0,0,255);
    color: #0000FF;
    font-size: 22px;
    background-color: gold ;
    border-color: #0000AA;
  }

pre {font-size: 20px}

p {text-indent: 3%}

</style>

<svelte:head>
	<title>Async</title>
</svelte:head>

<div style = "font-family: Times New Roman;  text-align: center; color: yellow; font-size: 38px;" transition:fade>
Asynchronous Information Handling
</div>
<br>
<p> Clicking the button below fetches three quasi-random integers from the Haskell WebSockets server which are then sent to a Web Worker. The Worker returns the prime factors of the number. </p> 

<div> The WebSockets server sent these numbers (now at O.c0, O.c1, and O.c2): 
<div style="color:red">
{O.c0}, {O.c1}, and {O.c2}</div></div>
<div> The web worker decomposed the numbers into prime factors (now at O.b0, O.b1, and O.b2): </div>
<div style="color:red">
<div>{O.d0} </div><div> {O.d1}</div> <div> {O.d2}</div>
</div>
<div>{O.b0.reduce((a,b)=>a*b)} == {O.c0} is <span style = "color: red">{O.b0.reduce((a,b)=>a*b) == O.c1}</span> </div>
<div>{O.b1.reduce((a,b)=>a*b)} == {O.c1} is <span style = "color: red">{O.b1.reduce((a,b)=>a*b) == O.c1}</span> </div>
<div>{O.b2.reduce((a,b)=>a*b)} == {O.c2} is <span style = "color: red">{O.b2.reduce((a,b)=>a*b) == O.c2}</span> </div>
<br>
<span>Click this:</span>
<br>
<button on:click = {factors}>
{candle}
</button>


<p> In this demonstration, Monad() returns a function run() that returns a function f(). f() takes two arguments and calls run(a,b). run makes the assignment O[a1] = b, O[a2] =b, or O[a3] = b on the global object O, and returns f(). The cycle is repeated whenever f() encounters more arguments.  </p>

<p> Functions that cause side effects during execution can cause hard-to-find bugs. There is, however, no danger of that occurring here. This module is small, run() is the only function that modifies O, and there are no functions in the script that fetch data from O. O exists for the sole purpose of keeping browser displays refreshed when data arrives from the WebSockets server and the Web Worker. Svelte's built-in reactivity keeps the HTML page in sync with O.  </p>

<p>Here's the definition of "Monad" used in this module:</p>

<p> Messages are sent to the Haskell WebSockets server requesting pseudo-random numbers between 1 and the integer specified at the end of the request. On the server, randomR from the System.Random library produces a number that is sent to the browser with the prefix "BE#$42". Messages from the server are parsed in socket.onmessage. If the prefix is "BE#$42", mon(p) executes, where p is the payload (a number) and mon is defined by "mon = Monad()". mon sends p to worker_OO, which sends back the prime decomposition of p.</p>
<p> mon(m) then executes, where m is an array co from the web worker are processed in worker_OO.onmessag
<p> When M === 2 the process is complete. M and N are set to -1 and lock is set to false, allowing another possible call to random() to call rand(). </p>



<br>
<br>
<span> The code for this Svelte application is at </span>
<a href = "https://github.com/dschalk/blog/" target = "_blank">GitHub repository</a>
