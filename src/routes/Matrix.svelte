<script>
import {fade} from "svelte/transition"

var ARR = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var ARCHIVE = [[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]]

    var index = 0;
    var ARR = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function back () {
    if (index > 0) {
        index = index - 1;
        ARR = ARCHIVE[index]
        console.log("index, ARR, ARCHIVE", index, ARR, ARCHIVE)
    }
}

function forward () {
    if (index < ARCHIVE.length - 1) {
        index = index + 1; 
        ARR = ARCHIVE[index]
        console.log("index, ARCHIVE", index, ARR)
    };
}

function sw (ar) {
    ARR = ARR.slice();
    var a, b, c, d;
    [a,b,c,d] = ar;
    ARR[a] = d;
    ARR[c] = b;
    ARCHIVE.splice(index, 0, ARR);
} 

var ar69 = [];

 function sky (a) {
        ar69.push(a[0])
        ar69.push(a[1])
        if (ar69.length === 4) {
            index =  index + 1;       
            var z = ar69.slice();
            ar69 = [];
            sw(z);
        }
    }

var code = `import {fade} from "svelte/transition"

var ARR = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var ARCHIVE = [[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]]

    var index = 0;
    var ARR = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function back () {
    if (index > 0) {
        index = index - 1;
        ARR = ARCHIVE[index]
        console.log("index, ARR, ARCHIVE", index, ARR, ARCHIVE)
    }
}

function forward () {
    if (index < ARCHIVE.length - 1) {
        index = index + 1; 
        ARR = ARCHIVE[index]
        console.log("index, ARCHIVE", index, ARR)
    };
}

function sw (ar) {
    ARR = ARR.slice();
    var a, b, c, d;
    [a,b,c,d] = ar;
    ARR[a] = d;
    ARR[c] = b;
    ARCHIVE.splice(index, 0, ARR);
} 

var ar69 = [];

 function sky (a) {
        ar69.push(a[0])
        ar69.push(a[1])
        if (ar69.length === 4) {
            index =  index + 1;       
            var z = ar69.slice();
            ar69 = [];
            sw(z);
        }
    }`
var html = `<button class = bu  id = 0 on:click = {() => sky([0, ARR[0]] )}>{ARR[0]}</button>
<button class = bu  id = 1 on:click = {() => sky([1, ARR[1]] )}>{ARR[1]}</button>
<button class = bu  id = 2 on:click = {() => sky([2, ARR[2]] )}>{ARR[2]}</button>
<button class = bu  id = 3 on:click = {() => sky([3, ARR[3]] )}>{ARR[3]}</button> <br> <br>
<button class = bu  id = 4 on:click = {() => sky([4, ARR[4]] )}>{ARR[4]}</button>
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
<button class = bu  id = 15 on:click = {() => sky([15, ARR[15]] )}>{ARR[15]}</button> `
</script>
<style>
.bu {
    width: 50px;
}
</style>

<div style = "font-family: Times New Roman;  text-align: center; color: hsl(210, 90%, 90%); font-size: 38px;" transition:fade>
IMMUTABLE ARRAYS PRESERVE PRIOR STATES
</div>
<br><br>
<div>index: {index}</div>
<div>ARR: {ARR}</div>
<div>ARCHIVE: {ARCHIVE}</div>

<br><br>
<button class = bu  id = 0 on:click = {() => sky([0, ARR[0]] )}>{ARR[0]}</button>
<button class = bu  id = 1 on:click = {() => sky([1, ARR[1]] )}>{ARR[1]}</button>
<button class = bu  id = 2 on:click = {() => sky([2, ARR[2]] )}>{ARR[2]}</button>
<button class = bu  id = 3 on:click = {() => sky([3, ARR[3]] )}>{ARR[3]}</button> <br> <br>
<button class = bu  id = 4 on:click = {() => sky([4, ARR[4]] )}>{ARR[4]}</button>
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

<p>Here are the variable and function definitions:</p>
<pre>{code}</pre>
<p>And here's some of the HTML:</p>
<pre>{html}</pre>

<p>Clicking a button sends its id and value to the function "sky". The next time a button is clicked, ar69 in sky() gets a third and fourth value. sky() forwards the ids and button values to sw() which switches the clicked buttons' values, saves a clone of the resulting array in the master array of arrays (ARCHIVE), increments index, and clears array ar69, preparing sky() for another round of data. </p>






