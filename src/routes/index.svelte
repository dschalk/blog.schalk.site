
<script>


import {fade} from "svelte/transition"
let visible = true;

var bind = `m a -> (a -> m b) -> m b`

var mF2= `ret(3).bnd(powM(3)).bnd(doubleM).bnd(addM(-12)).x`;

var functions = `var powM = x => n => ret(x**n);
var doubleM = x => ret(x + x);
var addM = x => y => ret(x + y); `



var bnd =  `m.a -> (a -> m.b) -> m.b`
var monadFunction = `var M = function M ( AR = [] )  {  
    var ar = AR.slice();
    var f, run;
    return run = (function run (x) {  
        if (x) ar.push(x); // excludes null, NaN, and undefined
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

var functionChain = ` 
var mon = M();

mon(()=>3)(x=>x*x*x)(x=>x*x)(x=>x/mon("end")[0]**2)
(Math.sqrt)(x=>mon("end")[1]+x)(x=>x+2*mon("end")[0])("end").pop()  // 42`

var one = `ret(3).bnd(x=>ret(x**3)).bnd(x=>ret(x*2)).bnd(x=>ret(x-12)).x  // 42`

var two =`var x = k = 1;
for (var j = 0; j < 4; j+=1) {x = k * x; k = k + 1}; x // 24
for (var j = 0; j < 4; j+=1) {x = k * x; k = k + 1}; x // 40320
for (var j = 0; j < 4; j+=1) {x = k * x; k = k + 1}; x //  479001600 `

var three = 'M([3])(x=>x**3)(x=>x*2)(x=>x-12)("end").pop()  // 42'

</script>
<style>
.bold {
    font-size: 24px wonnder;
    color: #AADDFF;    
}
</style>

<div style = "font-family: Times New Roman;  text-align: center; color: hsl(210, 90%, 90%); font-size: 38px;" transition:fade>
INTRODUCTION
</div>
<div style="color:eeffcc">
<br>
<div class = bold>
<p>This website is build on the <a href="https: //   sapper.svelte.dev/">Sapper</a> framework, an extension of <a href="https://svelte.dev/">Svelte 3.</a> It's hosted on a Digital Ocean droplet which is supported by a Haskell WebSockets server on a separate droplet. </p>
<p>Svelte modules look a lot like plain, old-fashioned HTML pages, with JavaScript inside of script tags, CSS in style tags, and mostly standard HTML. Svelte enhancements of plain vanilla HTML facilitate reactivity and animation. They are few and the official tutorials make it convenient to start using them right away. </p>
<p> The modules in this presentation are small and isolated from other modules, making them easy to understand and maintain. There are no compelling reasons to avoid mutations and side effects, or to impose explicit type constraints on functions. <p> 
<p> As global spaces increase in size, it becomes increasingly likely that reassigning global variables will eventually lead to bugs. Variables should be tucked safely inside of small or medium sized functions, or else they should be immutable.</p>
<p> Likewise, functions that manipulate data that isn't provided as arguments, or that affect data prior to returning, are abominations in large global spaces. You might be scrupulously careful, but future maintainers might not understand your code as well as you do. </p>
<p>But when the global space is just a small isolated Svelte module, what we have come to recognize as "best practices" can be safely cast aside. All the power and flexibility of the JavaScript programming language will be at your fingertips as you write consise, understandable, and easily maintainable code. Avoid security vulnerabilities, and each and every part of the language will be a "good part".  </p>
</div>
<h2>Composition With Object Monads</h2>
<p>Haskell monads are not Category Theory monads. The Haskell programming language would need to be a Category for that to be the case. But we don't call them "ersatz monads", and I don't refer to my JavaScript monads that way either</p>
<p>This simple monad constructor returns objects with two-components:</p>
<pre>{monadObject}</pre>
<span>This vaguely resembles Haskell monads, where composition relies on the operator ">>=" (called "bind"). Bind has type <center><pre >{bind}</pre></center> that is,  >>= operates on a monad "m a" and a function that takes m's value"a" and returns a monad with value "b". If the function simply replaced a with m b, then the result would be m (m b), but >>= "flattens" the result. </span>
<p>The JavaScript monad described above behaves similarly: <center><pre>{bnd}</pre></center> where m.x === a initially, and eventually m.x === b === func(a), where func === (a -> m.b). The algorithm for flattening is less obscure. Here's how it works:<p>                   
<pre>{objectChain}</pre>
<p>Or, instead of using lambdas:</p>
<pre>{functions}</pre>
<pre>{mF2}</pre>

<span> Class = tao>I prefer monad constructors that return functions instead of plain objects. Here's the template I'll use to define a monad for fetching pseudo-random numbers from the Haskell WebSockets server and then getting their prime decomposition from a Web Worker.</span> 
<a href = "http://blog.schalk.site/Monad2/">Async</a>

<span>I also use it to define a monad for making Promises more useful.</span>
<a href = "http://blog.schalk.site/Monad3/">Promises</a>
<pre>{monadFunction}</pre>
<pre>{one}</pre>
<pre>{three}</pre>

<pre>{functions}</pre>
<pre>{mF2}</pre>




<p>Naming the monad, and making "mon.x" hold every result rather than only the most recent one, facilitates computing with previously returned values. Check this out: </p> <pre>{functionChain}</pre>

<h2>Some Thoughts about Functional Programming</h2>
<p>"Functional programming is an approach to programming based on function calls as the primary programming construct." - Greg Michaelson on Page 3 of <i><b>An Introduction to Functional Programming Through Lambda Calculus.</b></i>
</p>
<p>The WebSockets server supporting this site is written in the Haskell programming language. It supports multiplayer games in which groups compete, share a to-do list, and chat among themselves. Any player can join any existing group, and can create new groups. Players can try for points or print out all existing solutions to randomly generated puzzles. The Haskell server routes group scores, todo's, and chat messages exclusively to online group members, generates the puzzles, and reliably does all that is required of it with amazing ease and transparency. The purity of functions and immutability of variables keeps the codebase easy to understand and maintain.</p>
<p>I say "immutability of variables" because elements in objects monads to be precise, of type TMVar are routinely replaced in  the server. Changing an element's value, either by mutating or replacing it, mutates the object that contains it. When removal and replacement of an element are accomplished with one expression, the process looks a lot like mutating an element in a JavaScript object. The server maintains state in  </p>
<p>TMVars are generally accepted as safe and appropriate for use in applications in which procedures must be atomic; i.e., go all the way to completion or completely reverse. Banks that use Haskell for online money transfers don't take chances by forcing JavaScript to perform atomic transactions. They do, however, allow <a href = "http://hackage.haskell.org/package/base-4.14.0.0/docs/Control-Concurrent-MVar.html" >MVars</a>MVars, <a href = "http://hackage.haskell.org/package/stm-2.5.0.0/docs/Control-Concurrent-STM-TVar.html">TVars</a>, and <a href="https://hackage.haskell.org/package/stm-2.5.0.0/docs/Control-Concurrent-STM-TMVar.html">TMVars</a>.</p>
<p>Mutable shared global state is safe in small JavaScript applications and small isolated Svelte modules, just as it is safe in Haskell monads when appropriate precautions are taken. </p>
<p> I created this site to share my enthusiasm for JavaScript functions, and especially for the recursive closures I call "monads".  The previous paragraphs explain why I have no need for most of the trappings of what people these days call "functional programming". Nor do I care about the many definitions of "monad" that continue to proliferate as developers explore functional programming. </p>
<p>Trying to make JavaScript functions behave like Haskell functions can be enriching and more entertaining than working crossword puzzles. But when someone is paying you to develop an application, that fun stuff probably needs to chill in the drawer with the Rubik's cube and Shogi board.    </p>
<p>In the modules that follow, I define functions, experiment with functions, admire the power and possibilities of functions, and obsessively dwell on functions. If to you, "functional JavaScript" means "cargo-cult JavaScript" (superstitiously immitating Haskell), then call my heresy whatever seems appropriate to you. I hope you will, at least, consider the possibility that abandoning strict adherence to the functional paradigm might greatly improve your code.     </p>
</div>


<p> Using small Svelte modules opens the possibility of safely defining functions that mutate global variables holding shared state. These mutable global variable can be synced with the DOM, making it easy for people unfamiliar with the code to see what is happening. 


<p>Functions that behave as noted above are not mathematical functions by any stretch of the imagination. They are foreign to the culture of Haskell programming and should remain that way. But in JavaScript, they are marvelous additions to any serious developers tool kit.</p>

<h2>Functional Programming Nonsense</h2>
<p>I enjoy working on the Haskell WebSockets server that supports some of the modules on this site, along with some elaborate game sites that are not included here.  Haskell can get complicated, but the server code is fairly simple.</p> 

<p>Pattern recognition  makes this site's Haskell functions easy to understand and modify. Using only immutable variables and making sure functions cause no side effects almost entirely eliminates the danger of additions and modifications creating bugs. It will surprise some readers to learn that Haskell programs with variable mutations and side effects compile and run. That's not how the server is coded.</p>
<p>I like to follow Haskell conventions, letting it be what it was intended to be: a purely functional programming language, coexisting with, and oblivious to, the machinations of its monads. The GHC compiler combines the pure code with the monads, resulting in programs that are safe and useful in Industry and Commerce. </p>
<h3>The "Mimicing Haskell" Cargo Cult</h3>
<p>Making JavaScript clumsy, verbose, and stilted in attempts to mimic Haskell can be great fun. Unfortunately, too many bloggers, authors, and video personalities take this pasttime way too seriously. They seem to think, strange as it seems, that stifling JavaScript with immutable variables, and even immutable objects, improves it! Some will create a million useless intermediate values inside of a function's scope out of pure superstition. They can't say how mutating variables inside in the confines of functions can cause mischief, but suggesting it does nothing but make work for the garbage collector seems to be viewed as programming heresy.   </p>
<p>Being a Haskell programmer, I eagerly participated in efforts to impose the "functional paradigm" on JavaScript. I'm leaving the remnants on Github and not pretending it was just a pastime. I thought imposing the "functional paradigm" - immutability, pure higher-order functions reusing smaller pure functions, and strict type checking - might improve JavaScript.   </p>
<p>For me, programming is almost as good as sex. And there they are, the "functional JavaScript" crowd insisting on only missionary-style programming. JavaScript and I work best together with the alternative, nothing-is-off-limits  approach.  </p>
<p>JavaScript is a wonderful programming language. JavaScript programs can be built on ersatz classes -- functions with restrictions, shortcuts, and syntactic sugar-coating -- but I'm seeing too much elegance and performance working directly with JavaScript's first-class functions to bother with such trivia. </p>
<p>I'm sure the classes help C++ programmers, and the poor souls still laboring with the Java programming language, make the transition to programming directly for the World Wide Web. I've paid some dues here too, being a Sun-certified Java programmer and Java Web component developer.  That dinosaur will be trashing the landscape for some time to come,  but it's not coming back into my shop. </p>

<p>Small Svelte modules isolate procedures the way functions do when the global space is too expansive to conveniently comprehend every possible interaction. When modules are small and are not the parents or children of other modules, the rationales for immutability, pure functions, and avoiding shared global state are not persuasive. They are suggestions and reminders to be careful, not mandates as they might sometimes be in large, complicated global spaces. </p>
<p>Some applications cannot be sensibly divided into small modules. In those cases, strict type checking, avoiding side effects, providing data to functions only through their arguments, avoiding global state variables, and avoiding mutations can help get bug-free applications into production faster and more reliably. </p>
<p>Developing this application with small, independent modules has been a very relaxing and pleasant experience. Adding and removing content is usually just a matter of adding or removing little modules. I can refactor modules without thinking about possible unintended consequences in other parts of the application. Svelte's built-in reactivity makes it a good choice for modular programming</p>

<div class = tao>JavaScript is a powerful language, always in need of some restraint; but in this application there is no good reason to diminish its possibilities with immutability, insisting on the purity of all functions, strict typing, and tucking state away in name-spaces and closures. Of course, immutable objects are sometimes useful. For example, cloning state prior to updating it facilitates using and displaying superseded state. This is demonstrated in  
<a href = "http://blog.schalk.site/Matrix">Matrix</a>.</div>

<br><br>
<br><br>



<br>
<h2>Functional Programming</h2>
<div class = tao>"Functional programming is an approach to programming based on function calls as the primary programming construct." -- Greg Michaelson on Page 3 of <span style = "font-style: italic">An Introduction to Functional Programming Through Lambda Calculus.</span>
</div>
<p>The WebSockets server supporting this site is written in the Haskell programming language. It supports multiplayer games in which groups compete, share a to-do list, and chat among themselves. Any player can join any existing group, and can create new groups. Players can try for points or print out all existing solutions to randomly generated puzzles. The Haskell server routes group scores, todo's, and chat messages exclusively to online group members, generates the puzzles, and reliably does all that is required of it with amazing ease and transparency. The purity of functions and immutability of variable names keeps the codebase small and the output fast and reliable. I love it.</p>
<p>I say "immutability of variable names" because the server relies on objects called "TMVars" holding ever-changing data regarding online players, game scores, etc. When state data in a TMVar becomes obsolete, it is removed and replaced. When removal and replacement are accomplished with one expression, the process looks a lot like mutating an element of a JavaScript object. </p>
<p>TMVars are generally accepted as safe and appropriate for use in critically important applications in which interrupted procedures must not be left hanging, and absolutely have to be completely reversed. Banks that use Haskell for online money transfers don't take chances by making JavaScript perform atomic transactions. All I'm trying to say here is that constantly-evolving shared global state is safe in Haskell and also in JavaScript when appropriate precautions are taken. Small isolated modules here; objects with intricate safeguards in Haskell.</p>
<p> I created this site to share my enthusiasm for JavaScript functions, and especially for the recursive closures I call "monads".  The previous section, "Modular Programming With Svelte", explains why I have no need for most of the trappings of what people these days call "functional programming". Nor do I care about the many definitions of "monad" that continue to proliferate as developers explore functional programming. </p>
<p>Trying to make JavaScript functions behave like Haskell functions can be enriching and more entertaining than working crossword puzzles. But when someone is paying you to develop an application, that fun stuff probably needs to chill in the drawer with the Rubik's cube and Shogi board.    </p>
<p>                                  
 </p>
<p>In the modules that follow, I define functions, experiment with functions, admire the power and possibilities of functions, and obsessively dwell on functions. If to you, "functional JavaScript" means "cargo-cult JavaScript" (superstitiously immitating Haskell), then call my heresy whatever you like. I do hope you will consider the possibility that abandoning strict adherence to the functional paradigm might greatly improve your code.     </p>
