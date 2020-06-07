
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
    pre {
        color: #ABABFF;
    }
    .quote {
        font-style: italic;
        color: lightblue;
    }
</style>
<div style = "font-family: Times New Roman;  text-align: center; color: hsl(210, 90%, 90%); font-size: 38px;" transition:fade>
INTRODUCTION
</div>
<br>


<p>This website is constructed with the help of Svelte. It is hosted on a Digital Ocean droplet which is supported by a Haskell WebSockets server on a separate droplet. The Svelte code is divided into small modules, small enough to ensure confidence that side effects and mutable shared global variables won't result in name clashes, race conditions, or any other kind of erratic behavior.  </p>
<p>There are still followers of what I think of as an aberation akin to a programming cargo cult. Followers mimick features of pure funtional programming languages, such as Haskell, seemingly believing their efforts will mysteriously make their code more efficient and reliable. Some cargo cult enthusiasts won't even mutate variables that exist only inside of pure functions. Some won't mutate properties of objects. That is mildly amusing because the Haskell WebSockets server supporting this site has objects called TMVars that hold ever changing values supporting registration, login, multiplayer game play, text messaging, and more. </p>
<p>Using MVars, TVars, and TMVars is safe, mainstream Haskell programming, conforming in every way with Haskell's culture of pure functional programming. True, a TMVar's value is removed and replaced, not mutated; but no copy is made of the TMVar so the anology between them and JavaScript mutable objects holds up pretty well. The analogy is stronger if an object's property can be mutated from the JavaScript primitive "undefined" to a value of whatever type is allowed, and can be mutated from any value other than undefined only to undefined.  Stated more succinctly, undefined -> anything allowed and everything else -> only to undefined.  The analogy is even stronger yet is attempts to obtain an objects value blocks on undefined and waits until it changes. </p>
<span>Of course, sometimes you want to save copies of changed objects. Time travel back and forth over a series of computations is one example. See </span>
<a href = "http://blog.schalk.site/Matrix">Matrix</a>
<p>You will also see a shared mutable global variable named lok in the "Promise Handling Monad" section. Two separate series of delayed computation can be activated multiple times in any order. Each computation waits for lok to be false before it begins. Check it out.</p>
<span>The Control.Concurrent.STM.TMVar library site features this introductory blurb:
"A TMVar is a synchronising variable, used for communication between concurrent threads. It can be thought of as a box, which may be empty or full." 
</span>
<a href = "http://web.mit.edu/cfox/share/ghc-6.6.1/html/libraries/stm/Control-Concurrent-STM-TMVar.html">STM-TMVar Library</a>

<p></p>

<br><br>
<br><br>
<br><br>



