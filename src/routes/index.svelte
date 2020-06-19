
<script>


import {fade} from "svelte/transition"
let visible = true;


var one = `var fact = n => (n != 1) ? n * fact(n - 1) : 1; fact(4) // 24;  fact(4) // 24`
var two =`var x = k = 1;
for (var j = 0; j < 4; j+=1) {x = k * x; k = k + 1}; x // 24
for (var j = 0; j < 4; j+=1) {x = k * x; k = k + 1}; x // 40320
for (var j = 0; j < 4; j+=1) {x = k * x; k = k + 1}; x //  479001600

`
</script>
<style>

</style>
<h1>JavaScript Functions</h1>
<div style = "font-family: Times New Roman;  text-align: center; color: hsl(210, 90%, 90%); font-size: 38px;" transition:fade>
INTRODUCTION
</div>
<br>
<p>This website is constructed with the help of Svelte and its companion, Sapper. It is hosted on a Digital Ocean droplet which is supported by a Haskell WebSockets server on a separate droplet. The Svelte code is divided into small modules, small enough to ensure confidence that side effects and mutable shared global variables won't result in name clashes, race conditions, or other unwanted behavior.  </p>
<h2>Modular Programming With Svelte</h2>
<p>Variables and arrays necessary for both the browser interface and the underlying algorithms are exposed in modules global spaces.  These "globes" are small; so there is no danger of functions interfering with one another or of state changes causing unintended behavior. </p>
<p>Small Svelte modules isolate procedures the way functions do when the global space is too expansive to conveniently comprehend every possible interaction. When modules are small and are not the parents or children of other modules, the rationalles for immutability, pure functions, and avoiding shared global state are not persuasive. They are suggestions and reminders to be careful, not mandates as they might sometimes be in large, complicated global spaces. </p>
<p>Some applications cannot be sensibly divided into small modules. In those cases, strict type checking, avoiding side effects, providing data to functions only through their arguments, avoiding global state variables, and avoiding mutations can help get bug-free applications into production faster and more reliably. </p>
<p>Developing this application with small, independent modules has been a very relaxing and pleasant experience. Adding and removing content is usually just a matter of adding or removing little modules. I can refactor modules without thinking about possible unintended consequences in other parts of the application. Svelte's built-in reactivity makes it a good choice for modular programming</p>

<div class = tao>JavaScript is a powerful language, always in need of some restraint; but in this application there is no good reason to diminish its possibilities with immutability, insisting on the purity of all functions, strict typing, and tucking state away in name-spaces and closures. Of course, immutable objects are sometimes useful. For example, cloning state prior to updating it facilitates using and displaying superseded state. This is demonstrated in  
<a href = "http://blog.schalk.site/Matrix">Matrix</a>.</div>

<br>
<h2>Functional Programming</h2>
<div class = tao>"Functional programming is an approach to programming based on function calls as the primary programming construct." -- Greg Michaelson on Page 3 of <span style = "font-style: italic">An Introduction to Functional Programming Through Lambda Calculus.</span>
</div>
<p>The WebSockets server supporting this site is written in the Haskell programming language. It supports multiplayer games in which groups compete, share a to-do list, and chat among themselves. Any player can join any existing group, and can create new groups. Players can try for points or print out all existing solutions to randomly generated puzzles. The Haskell server routes group scores, todo's, and chat messages exclusively to online group members, generates the puzzles, and reliably does all that is required of it with amazing ease and transparency. The purity of functions and immutability of variable names keeps the codebase small and the output fast and reliable. I love it.</p>
<p>I say "immutability of variable names" because the server relies on objects called "TMVars" holding ever-changing data regarding online players, game scores, etc. When state data in a TMVar becomes obsolete, it is removed and replaced. When removal and replacement are accomplished with one expression, the process looks a lot like mutating an element of a JavaScript object. </p>
<p>TMVars are generally accepted as safe and appropriate for use in critically important applications in which interrupted procedures must not be left hanging, and absolutely have to be completely reversed. Banks that use Haskell for online money transfers don't take chances by making JavaScript perform atomic transactions. All I'm trying to say here is that constantly-evolving shared global state is safe in Haskell and also in JavaScript when appropriate precautions are taken. Small isolated modules here; objects with intricate safeguards in Haskell.</p>
<p> I created this site to share my enthusiasm for JavaScript functions, and especially for the recursive closures I call "monads".  The previous section, "Modular Programming With Svelte", explains why I have no need for most of the trappings of what people these days call "functional programming". Nor do I care about the many definitions of "monad" that continue to proliferate as developers explore functional programming. </p>
<p>Trying to make JavaScript functions behave like Haskell functions can be enriching and more entertaining than working crossword puzzles. But when someone is paying you to develop an application, that fun stuff probably needs to chill in the drawer with the Rubik's cube and Shogi board.    </p>
<p>In the modules that follow, I define functions, experiment with functions, admire the power and possibilities of functions, and obsessively dwell on functions throughout. It seems I must be engaging in "functional programming", at least in the ordinary sense of the words, and in the sense of Greg Michaelson's quote (above).</p>
<p>Years ago, when I was a criminal defense attorney, I enjoyed seeing a sign on the chief court reporter's desk in a judge's office that read, "You say "bitch" like it's a bad thing." Maybe I will put a sign on my desk saying, "You say I don't adhere to functional programming aficionados' recommended "best practices" like that's a bad thing."  I might make an extra sign for Rich Harris, the inventer of Svelte.  </p>
<p>Peace, out.  -- David Schalk </p>

<br><br>
<br><br>



