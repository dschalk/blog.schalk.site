<script>
import {fade} from "svelte/transition"
var cube = x => x**3; 
var double = x => x + x;
var div = x => y => y / x;
var mult = x => y => x * y;
var pow = x => n => x**n;
var add = x => y => x + y
var e = "end";
function M (defaultArg = [])  {  
    var ar = defaultArg.slice(); // clones the argument
    return (function run (x) {
        if (typeof x !== "undefined") ar.push(x); 
        return function f (func) {
            if (func === "end") return ar.slice();
            else return run(func(x));
        };
    })(ar.pop());
}

var mon = M();

mon(()=>3)(x=>x*x*x)(x=>x*x)(x=>x/mon("end")[0]**2)
(Math.sqrt)(x=>mon("end")[1]+x)(x=>x+2*mon("end")[0])(e)  // 42`



var v1 = M([3])(cube)(double)(add(-12));
console.log("v1(e) is", v1(e));
v1(add(-38))(cube)
console.log("v1(e) is", v1(e))



var monad1 = `function M (initialArray = [])  { // The default is the empty array.
    var ar = initialArray.slice(); // Clones the argument for subsequent manipulation.`
var monad2 = `    return (function run (x) {
        if (typeof x !== "undefined") ar.push(x); // Other tests can be applied here.
        // Additional code for handling x. ` 
var monad3 = `        return function f (func) { // Continues while composed "func" values are consumed.
            if (func === "end") return ar.slice(); // Return a clone of ar.
            //  "else if" clauses for handling func can be added.
            else return run(func(x)); // run will determine the fate of func(x).
        }; `
var monad4 = `    })(ar.pop()); // The popped value is often replaced in run().`
var monad5 = `}; `

var test = `mon = M();`

var comp = `let result = M([a])(func1)(func2)(func3)("end")`
var end = `result = [func1(a), func2(func1(a)), func3(func2(func1(a)))]`
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
pre {font-size: 18px;}
span {font-size: 18px;}
</style>

<svelte:head>
	<title>Inner Functions Monad</title>
</svelte:head>

<div style = "font-family: Times New Roman;  text-align: center; color: #0000FF; font-size: 38px;" transition:fade>
Function Monads
</div>
<br>

<p>Here's the pattern we will use for function-based monads:</p>
<pre style = "color: #0000FF">{monad1}</pre>
<pre style = "color: #F00000">{monad2}</pre>
<pre style = "color: #FF00FF">{monad3}</pre>
<pre style = "color: #F00000">{monad4}</pre>
<pre style = "color: #0000FF">{monad5}</pre>

<p>"M()" returns "run()" which returns "f". M() holds the array ("ar"). As you see, ar is available to run() and f(). </p>
<p>The first time run() executes, its argument is ar.pop(), the last element in ar. At this point, "x" in run(x) is ar.pop(). If ar.pop() passes the tests in run, it is returned to the end of ar. </p>
<p>run() returns f(). If a value "func" is in front of f(), and func is a function,  run is called in func(x) where "x" is the current argument of run(). Otherwise, func === "end" and ar is returned. If nothing is in front of the returned value f(), f() remains ready to execute whenever an argument is provided to it.</p>  
<p>run() returns f(). If there is a value "func" in front of f(), f(func) executes, returning run(f()) and run() is called again, this time on func() on ent "func" (normally a function) is applied to run()'s argument, which is the return value of the previous "func" applied to the previous value of "x".</p>
<p>Until the last function ("func") in a chain evaluates the return value of the most recent "func(x)", recursion is automatic. The array "ar" grows during each cycle in which func(x) does not return null, NaN, or undefined. Whenever func === "end", ar is returned, but that does not end a chain of computations. As shown below, ar can be used in computations.</p>

<pre>{test}</pre>

<p>Note that both "mon = M([3])" and "mon = M()(()=>3)" have the same effect. They initialize the closure array making "ar === [3]" true.</p>
<p>Now I think the Promises monad will be easier to understand. It follows the same basic pattern with a new name for "M": Mona() returns run(), and run returns f(). The array that was previously held in "M()" is now stored externally in objects A and B; more precisely, in A[sym1], A[sym2], A[sym3], B[sym1], B[sym2], and B[sym3] where sym1, sym2, and sym3 are symbols. The Promises module features branching and resuming chains and a global lock named "lok" to prevent A and B from clashing. Check it out:</p>
<a href = http://blog.schalk.site/Monad3>Promises Monad</a> 

<p>Here are some definitions:  </p>
<pre>{cow}</pre>

