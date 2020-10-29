<script>
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

function Monad (f,g) {
    var N1 = -1;
    var N2 = -1;
    var N3 = -1;
    var ax = "start";
    var bx = 0;
    function run (aa, bb) {
        if (aa === "b") {N1 = N1 + 1; let v = (aa + N1); O[v] = bb}
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
            console.log("aa and bb are", aa, bb)
            return run(ax, bx)
        }
    }
    return run(f,g)
}

var mon =  Monad(("start", 0))

onMount ( () => {     //******************************* Execute in the browser:

// var socket = new WebSocket("ws://localhost:3055")
var socket = new WebSocket("ws://167.71.168.53:3055")
socket.onclose = function (event) {
console.log('<><><> ALERT - socket is closing. <><><> ', event);
};

socket.onmessage = function(e) {
console.log("WebSocket message is", e);
var v = e.data.split(',');
if (v[0] === "BE#$42") {
/*Q = Q + 1;
O["c"+Q] = v[3]
if (Q === 2) Q = -1; */
mon("c", v[3]) 
// worker_OO.postMessage([v[3]])
}
}

login();

function login() {
console.log('00000000000000000000000000000000 Entering login', socket.readyState);
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
}, 200)
}

factors = function factors () {
socket.send("BE#$42,solo,name,10000")
socket.send("BE#$42,solo,name,100000")
socket.send("BE#$42,solo,name,1000")
}

})  //************************************************ End browser evaluation ("socket" is not defined in the server).

console.log("************* Worker is", Worker);
worker_OO = new Worker('worker_OO.js');

/* worker_OO.onmessage = e => {
 console.log("In worker_OO.onmessage. e is", e); 
 console.log("In worker_OO.onmessage. e.data is", e.data); 
M = M + 1;
Monad(e.data);
if (M === 2) {
  M = -1;
}
} */

worker_OO.onmessage = e => { 
  var data0 = e.data[0];
  var data1 = e.data[1];
  console.log("e is", e);
  console.log("e.data[0] is", e.data[0]);
  console.log("e.data[1] is", e.data[1]);
 /* M+=1;
  O["b"+M] = e.data[1]; 
if (e.data[1].length > 1)  O["d" + M] = `The prime factors of ${data0} are ${data1}.` 
else O["d" + M] = `${e.data[0]} is a prime number.`;
if (M === 2) M = -1;  */
if (e.data[1].length > 1)  mon("d", `The prime factors of ${data0} are ${data1}.`) 
else mon("d", `${e.data[0]} is a prime number.`);
}

var oa = O.b0.reduce((a,b) => a*b) === O.c0
var ob = O.b1.reduce((a,b) => a*b) === O.c1
var oc = O.b2.reduce((a,b) => a*b) === O.c2

var candle = `socket.send(\"BE#$42,solo,name,10000\")    
socket.send('\BE#$42,solo,name,100000\")    
socket.send(\"BE#$42,solo,name,1000\") `    

console.log ("O is", O);

</script>

<style>

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
    width: 60%;
  }

  button:hover {
    box-shadow: 0px 0px 12px 0px rgb(0,0,255);
    color: #0000FF;
    font-size: 22px;
    background-color: gold ;
    border-color: #0000AA;
  }

pre {font-size: 20px}
</style>
<svelte:head>
	<title>Async</title>
</svelte:head>

<div style = "font-family: Times New Roman;  text-align: center; 
color: #0000AA; font-size: 38px;" transition:fade>
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
<div>{O.b0}.reduce((a,b)=>a*b) == {O.c0} is <span style = "color: purple">{O.b0.reduce((a,b)=>a*b) == O.c0}</span> </div>
<div>{O.b1}.reduce((a,b)=>a*b) == {O.c1} is <span style = "color: purple">{O.b1.reduce((a,b)=>a*b) == O.c1}</span> </div>
<div>{O.b2}.reduce((a,b)=>a*b) == {O.c2} is <span style = "color: purple">{O.b2.reduce((a,b)=>a*b) == O.c2}</span> </div>
<br>
<span>Click this:</span>
<button on:click = {factors}>
{candle}
</button>


<p> In this demonstration, each monad's array of computed values is preserved as an attribute of an object named O. Here's the definition of "Monad" used in this module:</p>

<p> Messages are sent to the Haskell WebSockets server requesting pseudo-random numbers between 1 and the integer specified at the end of the request. On the server, randomR from the System.Random library produces a number that is sent to the browser with the prefix "BE#$42". Messages from the server are parsed in socket.onmessage. If the prefix is "BE#$42", the payload (a number) is sent to worker_OO, which sends back the number's prime decomposition.</p>
<p> Messages from the web worker are processed in worker_OO.onmessage
<p> When M === 2 the process is complete. M and N are set to -1 and lock is set to false, allowing another possible call to random() to call rand(). </p>
<br>
<span> The code for this Svelte application is at </span>
<a href = "https://github.com/dschalk/blog/" target = "_blank">GitHub repository</a>
