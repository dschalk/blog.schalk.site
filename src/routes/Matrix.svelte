<script>
import {fade} from "svelte/transition"

    var index = 0;

function back () {
    if (index > 0) {
        index = index - 1;
        ARR = ARCHIVE[index]
        console.log("index, ARCHIVE", index, ARR)
    }
}

function forward () {
    if (index < ARCHIVE.length - 1) {
        index = index + 1; 
        ARR = ARCHIVE[index]
        console.log("index, ARCHIVE", index, ARR)
    };
}

var ARR = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var ARCHIVE = [[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]];

function sw (ar) {
    var a, b, c, d;
    [a,b,c,d] = ar;
    ARR[a] = d;
    ARR[c] = b;
    ARCHIVE.push(ARR.slice());
    ARCHIVE = ARCHIVE;
    console.log("ARCHIVE", ARCHIVE);
} 

var ar69 = [];

 function sky (a) {
        ar69.push(a[0])
        ar69.push(a[1])
        if (ar69.length === 4) {
            var z = ar69.slice();
            ar69 = [];
            index += 1;
            sw(z);
        }
    }

var code = `var index = 0;

function back () {
    if (index > 0) {
        index -= 1;
        ARR = ARCHIVE[index]
    }
}

function forward () {
    if (index < ARCHIVE.length - 1) {
        index = index + 1; 
        ARR = ARCHIVE[index]
    };
}

var ARR = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var ARCHIVE = [[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]];

function sw (ar) {
    var a, b, c, d;
    [a,b,c,d] = ar;
    ar69 = [];
    index += 1;
    ARR[a] = d;
    ARR[c] = b;
    ARCHIVE.push(ARR.slice());
} 

var ar69 = [];

 function sky (a) {
        ar69.push(a[0])
        ar69.push(a[1])
        if (ar69.length === 4) {
            sw(ar69);
        }
    }

<style>
.bu {
    width: 50px;
}
</style>

<h3>index: {index}</h3>
<br>
<button class = bu  id = 0 on:click = {() => sky([0, ARR[0]] )}>{ARR[0]}</button>
<button class = bu  id = 1 on:click = {() => sky([1, ARR[1]] )}>{ARR[1]}</button>
. . .
<button class = bu  id = 15 on:click = {() => sky([1, ARR[15]] )}>{ARR[15]}</button>

<button on:click = {back}>BACK</button>
<button on:click = {forward}>FORWARD</button>`

</script>
<style>
.bu {
    width: 50px;
}
</style>

<div style = "font-family: Times New Roman;  text-align: center; color: hsl(210, 90%, 90%); font-size: 38px;" transition:fade>
IMMUTABLE ARRAYS PRESERVE STATE HISTORY
</div>
<br><br>
<div>index: {index}</div>

<br><br>
<button class = bu  id = 0 on:click = {() => sky([0, ARR[0]] )}>{ARR[0]}</button>
<button class = bu  id = 1 on:click = {() => sky([1, ARR[1]] )}>{ARR[1]}</button>
<button class = bu  id = 2 on:click = {() => sky([2, ARR[2]] )}>{ARR[2]}</button>
<button class = bu id = 3 on:click = {() => sky([3, ARR[3]] )}>{ARR[3]}</button> <br> <br>
<button class = bu id = 4 on:click = {() => sky([4, ARR[4]] )}>{ARR[4]}</button>
<button class = bu  id = 5 on:click = {() => sky([5, ARR[5]] )}>{ARR[5]}</button>
<button class = bu  id = 6 on:click = {() => sky([6, ARR[6] ])}>{ARR[6]}</button>
<button class = bu  id = 7 on:click = {() => sky([7, ARR[7]] )}>{ARR[7]}</button> <br> <br>
<button class = bu  id = 8 on:click = {() => sky([8, ARR[8]] )}>{ARR[8]}</button>
<button class = bu  id = 9 on:click = {() => sky([9, ARR[9]] )}>{ARR[9]}</button>
<button class = bu  id = 10 on:click = {() => sky([10, ARR[10]] )}>{ARR[10]}</button>
<button class = bu  id = 11 on:click = {() => sky([11, ARR[11]] )}>{ARR[11]}</button> <br> <br>
<button class = bu  id = 12 on:click = {() => sky([12, ARR[12]] )}>{ARR[12]}</button>
<button class = bu  id = 13 on:click = {() => sky([13, ARR[13]] )}>{ARR[13]}</button>
<button class = bu  id = 14 on:click = {() => sky([14, ARR[14]] )}>{ARR[14]}</button>
<button class = bu  id = 15 on:click = {() => sky([15, ARR[15]] )}>{ARR[15]}</button> <br> <br> <br>


<button on:click = {back}>BACK</button>
<button on:click = {forward}>FORWARD</button>
<br><br><br>

<p>Here's the code:</p>
<pre>{code}</pre>

<p>Clicking a button sends its id and value to the function "sky". The next time a button is clicked, ar69 in sky() gets a third and fourth value. sky() forwards the ids and button values to sw() which switches the clicked buttons' values, saves a clone of the resulting array in the master array of arrays (ARCHIVE), increments index, and clears array ar69, preparing sky() for another round of data. </p>
<p>This module has global variables but it would be cargo-cult style superstition to immagine that they presents any danger of name clashes or race conditions. The small size of the module precludes name clashes and since the global variables are not shared, race conditions and interference of any kind are impossible.</p>
<p>Small Svelte modules isolate procedures the way functions do in expansive programs. When modules are small and not the parents or children of other modules, the rationalles for immutability, pure functions, and avoiding global state evaporate. When you divide your code into small modules,  old rules are best thought of as suggestions and reminders to be careful - or just relics left over from days gone by.</p>







