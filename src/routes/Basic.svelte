<script>
import {fade} from "svelte/transition"

var monad = `var M = function M ( AR = [] )  {  
    var ar = AR.slice();
    return run = (function run (x) {  
        if (x) ar.push(x); // excludes null, NaN, and undefined
        return f = function f (func) {
            if (func === "end") return ar
            else return run(func(x));
        };
    })(ar.pop());
}`

var test = `mon = M();

var result = mon(()=>3)(x=>x*x*x)(x=>x*x)(x=>x/mon("end")[0]**2)
(Math.sqrt)(x=>mon("end")[1]+x)(x=>x+2*mon("end")[0])("end")

console.log(result)  // [3, 27, 729, 81, 9, 36, 42]`
var cow = `const sym1 = Symbol('sym1');
const sym2 = Symbol('sym2');
const sym3 = Symbol('sym3');

let B = {};
B[sym1] = [];
B[sym2] = [];
B[sym3] = [];

const  Mona = function Mona ( AR = [],  ar = "name" )  {  
  let p, run, f;
  B[ar] = AR.slice();
  return run = (function run (x) {
  if (x instanceof Promise) {x.then(y => {
    if (!( typeof y === "function" || y == lok || y == NaN || 
        typeof y == "undefined" ))   {B[ar] = B[ar].concat(y)}
    else if (typeof x !== "function" && x != lok  &&  typeof x !== "undefined"
       && x != NaN  && !(x instanceof Promise)) {B[ar] = B[ar].concat(x);
  }})}
    f = function f (func) {
      if (func === 'halt' || func === 'h' || func == undefined ||
        typeof func == "undefined" || func == NaN ) {
        B[ar] = B[ar]; 
        return B[ar].slice();
      }
      if (typeof func == "function" && x instanceof Promise) p = x.then(v => func(v))
      else if (typeof func != "function" && x instanceof Promise) p = x.then(v => v)
      else if (typeof func != "function") p = func
      else p = func(x);
      return run(p);
    };
    return f;
  })( B[ar].slice(-1)[0]);
}`
</script>

<style>
  .tao {text-indent: 3%;}
  .tai {text-indent: 3%; font-style: italic; color: #EFE}
  h2 {text-align: center;}
</style>

<svelte:head>
	<title>Basic Monad</title>
</svelte:head>

<h1>JavaScript Functions</h1>
<div style = "font-family: Times New Roman;  text-align: center; color: hsl(210, 90%, 90%); font-size: 38px;" transition:fade>
BASIC MONAD
</div>
<br>
<div class = tai>In functional programming, a monad is a design pattern[1] that allows structuring programs generically while automating away boilerplate code needed by the program logic. Monads achieve this by providing their own data type (a particular type for each type of monad), which represents a specific form of computation, along with one procedure to wrap values of any basic type within the monad (yielding a monadic value) and another to compose functions that output monadic values (called monadic functions).</div>
<br>

<div class = tai>This allows monads to simplify a wide range of problems, like handling potential undefined values (with the Maybe monad), or keeping values within a flexible, well-formed list (using the List monad). With a monad, a programmer can turn a complicated sequence of functions into a succinct pipeline that abstracts away auxiliary data management, control flow, or side-effects. </div>
<span> -- https://en.wikipedia.org/wiki/Monad_(functional_programming)</span>

<p>That is spot on with respect to the Haskell programming language; and to a large extent, it describes the monads I'll define in this module. The main difference concerns the pattern described in the second sentence of of the first paragraph: "Monads achieve this by providing their own data type . . .". </p>
<p>Forcing JavaScript to adhere to strict typing rules probably helps large development teams speed up the process of getting large, complicated applications into production. It might also be soothing to people who feel secure in highly structured environments. But here, in this application, insisting on data types and having monads "lift" from one type to another would entail overhead while providing little or no value. </p>
<p>That doesn't mean there is a dearth of variety. As you will see in later modules, there's a monad that handles data from a WebSocket server and a Web Worker, one that handles Promises, another that serves as a transducer, and so on.  </p>
<p>Here's a basic design pattern; it's the definition of a very simple monad:</p>
<pre>{monad}</pre>
<p>"M()" returns "run()" which returns "f". M() holds the array ("ar") that can be augmented and manipulated by run(). If run() returns f() in front of a function, f()'s argument "func" (normally a function) is applied to run()'s argument, which is the return value of the previous "func" applied to the previous value of "x".</p>
<p>Until the last function ("func") in a chain evaluates the return value of the most recent "func(x)", recursion is automatic. The array "ar" grows during each cycle in which func(x) does not return null, NaN, or undefined. Whenever func === "end", ar is returned, but that does not end a chain of computations. As shown below, ar can be used in computations.</p>

<pre>{test}</pre>

<p>Note that both "mon = M([3])" and "mon = M()(()=>3)" have the same effect. They initialize the closure array making "ar === [3]" true.</p>
<p>Now I think the Promises monad will be easier to understand. It follows the same basic pattern with a new name for "M": Mona() returns run(), and run returns f(). The array that was previously held in "M()" is now stored externally in objects A and B; more precisely, in A[sym1], A[sym2], A[sym3], B[sym1], B[sym2], and B[sym3] where sym1, sym2, and sym3 are symbols. The Promises module features branching and resuming chains and a global lock named "lok" to prevent A and B from clashing. Check it out:</p>
<a href = http://blog.schalk.site/Monad3>Promises Monad</a> 

<p>Here are some definitions:  </p>
<pre>{cow}</pre>

