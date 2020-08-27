
<script>


import {fade} from "svelte/transition"
let visible = true;

var bind = `m a -> (a -> m b) -> m b`
var e = "end";
var mF2= `ret(3).bnd(powM(3)).bnd(doubleM).bnd(addM(-12)).x`;

var functions = `var powM = x => n => ret(x**n);
var doubleM = x => ret(x + x);
var addM = x => y => ret(x + y); `

var pow = `var pow = x => n => x**n`;

var bnd =  `m.a -> (a -> m.b) -> m.b`
var monadFunction = `var M = function M ( AR = [] )  {  
    var ar = AR.slice();
    var f, run;
    return run = (function run (x) { 
        if (x) ar.push(x); 
        return f = function f (func) {
            if (func === "end") return ar
            else return run(func(x));
        };
    })(ar.pop());
}`
var monadObject = `var Monad = function Monad(z = 0) {
  var _this = this;
  this.x = z;
  this.bnd = function (func) {
      return new Monad(func(this.x).x);
  };
}

function ret (v) {
      return new Monad(v);
}  `

var objectChain = `ret(3).bnd(x => ret(x**3)).bnd(x => ret(x*2)).bnd(x=>ret(x-12)).x;  // 42`

var functionChain = `var mon = M([3]);
mon(x=>x*x*x)(x=>x*x)(x=>x/mon(e)[1])(x=>x-18)(Math.sqrt)
(x=>mon(e)[2]+x)(e)  // [3, 27, 729, 243, 225, 15, 42] `

var one = `ret(3).bnd(x => ret(x**3)).bnd(x => ret(x*2))
.bnd(x=>ret(x-12)).x  // 42`



var funcs = `var cube = x => x**3; 
var double = x => x + x;
var div = x => y => y / x;
var mult = x => y => x * y;`

var two =`var x = k = 1;
for (var j = 0; j < 4; j+=1) {x = k * x; k = k + 1}; x // 24
for (var j = 0; j < 4; j+=1) {x = k * x; k = k + 1}; x // 40320
for (var j = 0; j < 4; j+=1) {x = k * x; k = k + 1}; x //  479001600 `
var cube = x => x**3; 
var double = x => x + x;
var mult = x => y => x * y;
var div = x => y => y / x;
var add = x => y => x + y;
var comp1 = `M([3])(x=>x**3)(x=>x+x)(x=>x/18)(x=>x*14)(e) //  [3, 27, 54, 3, 42]`;
var comp1B = `M([3])(cube)(double)(div(18))(mult(14))(e)  // [3, 27, 54, 3, 42]`;
var comp1C = `var m = M([3]);
m(cube)(double)(div(18))(mult(14))
m(e)  // [3, 27, 54, 3, 42]
m(div(14))()
`;objectChain

var store = `var v1 = M([3])(cube)(double)(add(-12));
console.log("v1(e) is", v1(e));  // [3, 27, 54, 42]
v1(add(-38))(cube);
console.log("v1(e) is", v1(e));  // [3, 27, 54, 42, 4, 64] `

</script>
<style>
  .tao {margin-left: 3%;}
  em {color: darkgreen;}


a {
  color: rgb(70, 0, 128);
}

a:hover {
  color: #FF0000;
}

p {
    font-size: 20px;
}

pre {
    font-size: 20px;
    color: darkred;
}

span {
    font-size: 20px;
}
</style>

<div style = "font-family: Times New Roman;  text-align: center; color: #000000; font-size: 38px;" transition:fade>
Introduction
</div>
<div>
<br>
<div Blass = bold>
<p>This website is built on the <a href="https: //   sapper.svelte.dev/">Sapper</a> framework, an extension of <a href="https://svelte.dev/">Svelte 3.</a> It's hosted on a Digital Ocean droplet which is supported by a Haskell WebSockets server on a separate droplet. </p>
<p>Svelte modules look a lot like plain, old-fashioned HTML pages, with JavaScript inside of script tags, CSS in style tags, and mostly standard HTML. Svelte enhancements of plain vanilla HTML facilitate reactivity and animation. They are few and the official tutorials make it convenient to start using them right away. </p>
<p> The modules in this presentation are small and isolated from other modules, making them easy to understand and maintain. There are no compelling reasons to avoid mutations and side effects, or to impose explicit type constraints on functions. <p> 
<p> As global spaces increase in size it becomes increasingly likely that reassigning global variables will eventually lead to bugs. Variables should be tucked safely inside of small or medium-sized functions, or else they should be immutable.</p>
<p> Likewise, functions that manipulate data that isn't provided as arguments, or that affect data prior to returning, are abominations in large global spaces. You might be scrupulously careful, but future maintainers might not understand your code as well as you do. </p>
<p>But when the global space is just a small isolated Svelte module, what we have come to recognize as "best practices" can be safely cast aside. All the power and flexibility of the JavaScript programming language will be at your fingertips as you write concise, understandable, and easily maintainable code. Avoid security vulnerabilities, and each and every part of the language will be a "good part".  </p>
</div>
<h2>Composition With <a href = "http://blog.schalk.site/objectmonad/">Object Monads</a></h2>
<p>"Monad" is not a rigorously defined technical term in this presentation. The term is used in reference to composable containers <em>cc</em> with attributes <em>x</em>. The encapsulated value <em>cc.x</em> can be any valid JavaScriptvalue <em>v</em>. When cc operates on a function <em>func</em>, <em>func</em> operates on <em>x</em>. A new monad, <em>cc'</em> is returned with <em>x === func(v)</em> instead of the previous <em>x === v</em>.
<p>Haskell monads are inspired by Category Theory, but they are not Category Theory monads. The Haskell programming language would need to be a mathematical Category for that to be the case. But I don't call them "ersatz monads", and I don't refer to my JavaScript monads that way either. </p>
<p>This simple monad constructor returns objects with two-components:</p>
<pre>{monadObject}</pre>
<p>This vaguely resembles Haskell monads, where composition relies on the operator ">>=" (called "bind"). Bind has type</p> 
<center><pre >{bind}</pre></center> 
<span>that is,  >>= operates on a monad "m a" and a function that takes m's value"a" and returns a monad with value "b". If the function simply replaced a with m b, then the result would be m (m b), but >>= "flattens" the result.</span>
<p>The JavaScript monad described above behaves similarly: </p>
<center><pre>{bnd}</pre></center> <p>where m.x === a initially, and eventually m.x === b === func(a), where func === (a -> m.b). The algorithm for flattening is less obscure. Here's how it works:<p>                   
<pre>{one}</pre>
<p>Or, instead of using lambdas:</p>
<pre>{functions}</pre>
<pre>{mF2}</pre>


<h2>Composition With <a href = "http://blog.schalk.site/FunctionMonad/">Function Monads</a></h2>

<p>You cannot write better JavaScript code by mimicking superficial aspects of Haskell - obviously. That's cargo-cult programming. So lets drop the ".bnd" and compose this way:</p>
<pre>{comp1B}</pre>
<span>where</span>
<pre>{funcs}</pre>
<p>All you need to do is define your monad constructors something like this:</p>
<pre>{monadFunction}</pre>
<p>Here's a <a href = "http://blog.schalk.site/FunctionMonad/">detailed explanation</a> </p>

<span  class = "tao">  This pattern is used to define a monad used in fetching pseudo-random numbers from the Haskell WebSockets server and then getting their prime decompositions from a Web Worker (see </span> 
<a href = "http://blog.schalk.site/Monad2/">Async</a>

<span>). Another variation on the theme defines a monad for making </span>
<a href = "http://blog.schalk.site/Monad3/">Promises</a>
<span> more useful and another simulates the behavior of </span>
<a href = "http://blog.schalk.site/Transducer/">transducers</a>
<span>. The "run" function returned by the constructor M has immense potential. In Svelte modules, It can facilitate efficient metaprogramming without relying on the ES6 Proxy and Reflect APIs.</span>
<p>In Haskell, monads isolate sequential computations from the pure, side-effect-free code. The anonymous monad in the example above can't be corrupted by other functions; it just returns the result. </p>
<p>Naming monads facilitates computing with previously returned values, as in this example: </p><pre>{functionChain}</pre>
<p>Naming also facilitates storing computations for future use. For example:</p>
<pre>{store}</pre>


<h2>Some Thoughts about Functional Programming</h2>
<p>"Functional programming is an approach to programming based on function calls as the primary programming construct." - Greg Michaelson on Page 3 of <i><b>An Introduction to Functional Programming Through Lambda Calculus.</b></i>
</p>
<p>The WebSockets server supporting this site is written in the Haskell programming language. It supports multiplayer games in which groups compete, share a to-do list, and chat among themselves. Any player can join any existing group, and can create new groups. Players can try for points or print out all existing solutions to randomly generated puzzles. The Haskell server routes group scores, todo's, and chat messages exclusively to online group members, generates the puzzles, and reliably does all that is required of it with amazing ease and transparency. The purity of functions and immutability of variables keeps the codebase easy to understand and maintain.</p>
<p>I say "immutability of variables" because elements in objects of type TMVar are routinely removed and replaced.  When removal and replacement of an element are accomplished with one expression, the process looks a lot like mutating an element in a JavaScript object.  </p>
<p>TMVars are generally accepted as safe and appropriate for use in atomic transactions; i.e., those that must completely reverse if they fail to complete. Banks that use Haskell for online money transfers don't take chances by trying to force JavaScript to perform atomic transactions. They do, however, use <a href = "http://hackage.haskell.org/package/base-4.14.0.0/docs/Control-Concurrent-MVar.html" >MVars</a>MVars, <a href = "http://hackage.haskell.org/package/stm-2.5.0.0/docs/Control-Concurrent-STM-TVar.html">TVars</a>, and <a href="https://hackage.haskell.org/package/stm-2.5.0.0/docs/Control-Concurrent-STM-TMVar.html">TMVars</a>.</p>

<p> I created this site to share my enthusiasm for JavaScript functions, and especially for the recursive closures I call "monads".  The previous paragraphs explain why I have no need for most of the trappings of what people these days call "functional programming". </p>
<p>Trying to make JavaScript functions behave like Haskell functions can be enriching and more entertaining than working crossword puzzles; but when someone is paying you to develop an application, that fun stuff probably needs to chill in the bottom drawer with the Rubik's cube and Chess set. </p>
<p>In the modules that follow, I define functions, experiment with functions, admire the power and possibilities of functions, and generally dwell on functions. If, to you, "functional JavaScript" means "cargo-cult JavaScript" (superstitiously imitating Haskell and similar languages), then call me a heretic. Still, I hope you will at least consider the possibility that abandoning strict adherence to the so-called "functional paradigm" can greatly improve your JavaScript code.     </p>
</div>
