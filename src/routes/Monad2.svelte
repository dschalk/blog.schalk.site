<script>
import {fade} from "svelte/transition"
let visible = true;

var O = {};
var test_2 = function test_2 () {};
var name = "Mandy";
O["Mandy"] = [23];

function wait(ms) {
return new Promise(r => setTimeout(r, ms));
}

let j = 2;
$: j;

async function pause (x) {
await wait(1000)
return x;
}

var pauseP = t => async x => {
await wait(t*1000)
return x;
}

async function pauseM (x) {
await wait(600)
return Monad(x);
}

async function pauseX (x) {
await wait(x);
}

async function squareP (x) {
await wait(1200)
return x*x;
}

var divPinverse = a => async b => {
await wait (600)
return a/b;
}

var divP = a => async b => {
await wait (600)
return b/a;
}

var doubleP = async a => {
await wait (1000)
return a+a;
}

var toInt = a => parseInt(a, 10);

var addP_toInt = x => async y => {
await wait(1000)
return toInt(x) + toInt(y);
}

var addP = x => async y => {
await wait(1000)
return x + y;
}

var multP = x => async y => {
await wait(1200)
return x * y;
}

var powP = x => async y => {
await wait(1200)
return y**x;
}

async function cubeP (x) {
await wait(1200)
return x*x*x;
}

async function idP (x) {
await wait(1200)
return x;
}
async function sqrtP (x) {
await wait(1200)
return x**(1/2)
}

function intArray (n) {
return [...Array(n).keys()];
}

var cube = x => x**3;
var pow = p => x => x**p;
var square = x => x*x;
var add = x => y => x+y;
var sqrt = x => x**(1/2);
var root = r => x => x(1/r);
var div = d => x => x/d;

var f = function f () {};
var f_ = function f_ () {};
var sto = "sto";
var halt = "halt";

var O = new Object();
O.d0 = [2,3,4];
O.d1 = [2,3,4];
O.d2= [2,3,4];

var M = -1;
var Q = -1

var lock = false;

O.generic = ["Nobody"];

const  Monad =function Monad ( AR = [],  name = "generic" )  {
var x = AR.pop();
O[name] = AR;
var s = "stop";
 (function run (xx) {
if (typeof xx != "undefined"  && xx === xx  && xx !== false && xx.name !== "f_" && xx.name !== "stop" )  {
  O[name] = O[name].concat(xx)
};
var  f_ = function f_ (func) {
    if (func === 'stop'  || func === 's') return O[name]
    else if (typeof func !== "function") p = func(x)
    else if (x instanceof Promise) p = x.then(v => func(v));
    return run(p);
  }
  return f_;
}) (x);
} 


var cow = Monad([], "cow")
console.log("cow is", cow);

// var socket = new WebSocket("ws://localhost:3055")
var socket = new WebSocket("ws://167.71.168.53:3055")

socket.onclose = function (event) {
console.log('<><><> ALERT - socket is closing. <><><> ', event);
};

socket.onmessage = function(e) {
// console.log("WebSocket message is", e);
var v = e.data.split(',');
if (v[0] === "BE#$42") {
Q = Q + 1;
Monad([v[3]], "c"+Q);
if (Q === 2) Q = -1;
worker_OO.postMessage([v[3]])
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
  // socket.send(`GZ#$42,solo,${v}`);
  socket.send("BE#$42,solo,name,10000")
  socket.send("BE#$42,solo,name,100000")
  socket.send("BE#$42,solo,name,1000")
} else {
  login();
}
}, 200)
}

function isEmpty(obj) {
for(var key in obj) {
    if(obj.hasOwnProperty(key))
        return false;
}
return true;
};

function countKeys(ob, s) {
var N = 0
for(var key in ob) if (key.startsWith(s)) N+=1;
return N;
}

var groupDelete = function groupDelete (ob, x) {
for (var z in ob) if (z.startsWith("x")) delete ob[z]
}

var clearOb = function clearOb (ob) {
for (var x in ob) delete ob[x]
}

var factors = function factors () {
socket.send("BE#$42,solo,name,10000")
socket.send("BE#$42,solo,name,100000")
socket.send("BE#$42,solo,name,1000")
}

var worker_OO = new Worker('worker_OO.js');

worker_OO.onmessage = e => {
M = M + 1;
Monad([e.data], "d"+M);
if (M === 2) {
  M = -1;
}
}

var mon = `function Monad ( AR = [],  name = "generic" )  {
    var x = AR.pop(); // x will be replaced in the function "run" (below)
    O[name] = AR;
    var s = "stop";
    (function run (xx) {
        if (typeof xx != "undefined"  && xx === xx  && xx !== false && 
        xx.name !== "f_" && xx.name !== "stop" )  {
            O[name] = O[name].concat(xx)
        };
        var  f_ = function f_ (func) {
            if (func === 'stop'  || func === 's') return O[name]
            else if (typeof func !== "function") p = func(x)
            else if (x instanceof Promise) p = x.then(v => func(v));
            return run(p);
        }
        return f_;
    }) (x);
}  `

var statement = `    Monad(["value"], "key")(x => "This is the " + x)(x => x + ".")(halt)
O.key   // ["value", "This is the value", "This is the value."]`

var fa = `    function factors () {
if (lock === false && j === 2) {
lock = true;
clearOb(O);
N = -1;
M = -1;
Q = -1;
groupDelete(O, "c");
groupDelete(O, "d");
fact();
}
else if (j !== 2) {return}
else {
setTimeout(()=> {
factors()
},1000)
}
}`

var onmessServer = `ar v = e.data.split(',');
if (v[0] === "BE#$42") {
Q = Q + 1;
Monad([v[3]], "c"+Q);
worker_OO.postMessage([v[3]])
}
}  `

var onmessWorker = `worker_OO.onmessage = e => {
M = M + 1;
Monad([e.data], "d"+M);
if (M === 2) {
  M = -1;
}
}`

let candle = ` socket.send(\"BE#$42,solo,name,10000\")    
socket.send('\BE#$42,solo,name,100000\")    
socket.send(\"BE#$42,solo,name,1000\")    `    

console.log ("O is", O);

</script>

<style>

button {
    margin-left: 5%;
    background-color: #CCffff;
    border-width: 0px;
    border-color: #361B01;
    border-radius: 25px;
    color: darkblue;
    font-size: 24px;
    box-shadow: 0px 0px 12px 0px rgb(0, 255, 0);
    padding: 3px 10px 3px 10px;
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
<p> Clicking the button below sends three requests to the Haskell WebSockets server asking for quasi-random integers. As the numbers come in from the server, they are placed in the object named "O" with keys prefixed by "c", and then forwarded to a web worker. The worker returns arrays containing the prime factors of the numbers it receives. These are placed in "O" with keys prefixed by "d".</p> 

<p> The WebSockets server sent these numbers (now at O.c0, O.c1, and O.c2): </p>
<p style="color:red">
{O.c0}, {O.c1}, and {O.c2}  
<p>
<p> The web worker sent these arrays of prime factors (now at O.d0, O.d1, and O.d2): </p>
<div style="color:red">
<p>[{O.d0.join(', ')}] </p><p> [{O.d1.join(', ')}]</p> <p> [{O.d2.join(', ')}<p>
</div>
<button on:click = {factors}>
<pre>{candle}</pre>
</button>
<br><br><br>

[{O.d0}].reduce((a,b) => a*b) === {O.c0}: <span style = "font-size:24px; color:#FF0B0B" >{O.d0.reduce((a,b) => a*b) == O.c0}</span>
<br>
[{O.d1}].reduce((a,b) => a*b) === {O.c1}: <span style = "font-size:24px; color:#FF0B0B" >{O.d1.reduce((a,b) => a*b) == O.c1}</span>
<br>
[{O.d2}].reduce((a,b) => a*b) ==  = {O.c2}: <span style = "font-size:24px; color:#FF0B0B" >{O.d2.reduce((a,b) => a*b) == O.c2}</span>
<br>

<p> In this demonstration, each monad's array of computed values is preserved as an attribute of an object named O. Here's the definition of "Monad" used in this module:</p>

<pre>{mon}</pre>

<p> Messages are sent to the Haskell WebSockets server requesting pseudo-random numbers between 1 and the integer specified at the end of the request. On the server, randomR from the System.Random library produces a number that is sent to the browser with the prefix "BE#$42". Messages from the server are parsed in socket.onmessage. If the prefix is "BE#$42", the payload (a number) is sent to worker_OO, which sends back the number's prime decomposition.</p>
<pre>{onmessServer}</pre>
<p> Messages from the web worker are processed in worker_OO.onmessage
<pre>{onmessWorker}</pre>
<p> When M === 2 the process is complete. M and N are set to -1 and lock is set to false, allowing another possible call to random() to call rand(). </p>
<br>
<span> The code for this Svelte application is at </span>
<a href = "https://github.com/dschalk/blog/" target = "_blank">GitHub repository</a>
