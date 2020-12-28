<script>
import {fade} from "svelte/transition"

function shuffle(array) {
  var m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

let draws = 0;

import M1 from 'images/Man1.svg';
import M2 from 'images/Man2.svg';
import M3 from 'images/Man3.svg';
import M4 from 'images/Man4.svg';
import M5 from 'images/Man5.svg';
import M6 from 'images/Man6.svg';
import M7 from 'images/Man7.svg';
import M8 from 'images/Man8.svg';
import M9 from 'images/Man9.svg';

import P1 from 'images/Pin1.svg';
import P2 from 'images/Pin2.svg';
import P3 from 'images/Pin3.svg';
import P4 from 'images/Pin4.svg';
import P5 from 'images/Pin5.svg';
import P6 from 'images/Pin6.svg';
import P7 from 'images/Pin7.svg';
import P8 from 'images/Pin8.svg';
import P9 from 'images/Pin9.svg';

import S1 from 'images/Sou1.svg';
import S2 from 'images/Sou2.svg';
import S3 from 'images/Sou3.svg';
import S4 from 'images/Sou4.svg';
import S5 from 'images/Sou5.svg';
import S6 from 'images/Sou6.svg';
import S7 from 'images/Sou7.svg';
import S8 from 'images/Sou8.svg';
import S9 from 'images/Sou9.svg';

import Back from 'images/Back.svg';
import Blank from 'images/Blank.svg'

import Chun from 'images/Chun.svg'
import Haku from 'images/Haku.svg'
import Hatsu from 'images/Hatsu.svg'

import Nan from 'images/Nan.svg'
import Pei from 'images/Pei.svg'
import Ton from 'images/Ton.svg'
import Shaa from 'images/Shaa.svg'

var xyz = [M1,M2,M3,M4,M5,M6,M7,M8,M9,P1,P2,P3,P4,P5,P6,P7,P8,P9,S1,S2,S3,S4,S5,S6,S7,S8,S9,Chun,Haku,Hatsu,Nan,Pei,Ton,Shaa,M1,M2,M3,M4,M5,M6,M7,M8,M9,P1,P2,P3,P4,P5,P6,P7,P8,P9,S1,S2,S3,S4,S5,S6,S7,S8,S9,Chun,Haku,Hatsu,Nan,Pei,Ton,Shaa,M1,M2,M3,M4,M5,M6,M7,M8,M9,P1,P2,P3,P4,P5,P6,P7,P8,P9,S1,S2,S3,S4,S5,S6,S7,S8,S9,Chun,Haku,Hatsu,Nan,Pei,Ton,Shaa,M1,M2,M3,M4,M5,M6,M7,M8,M9,P1,P2,P3,P4,P5,P6,P7,P8,P9,S1,S2,S3,S4,S5,S6,S7,S8,S9,Chun,Haku,Hatsu,Nan,Pei,Ton,Shaa]

var xx = [M1,M2,M3,M4,M5,M6,M7,M8,M9,P1,P2,P3,P4,P5,P6,P7,P8,P9,S1,S2,S3,S4,S5,S6,S7,S8,S9,Chun,Haku,Hatsu,Nan,Pei,Ton,Shaa,M1,M2,M3,M4,M5,M6,M7,M8,M9,P1,P2,P3,P4,P5,P6,P7,P8,P9,S1,S2,S3,S4,S5,S6,S7,S8,S9,Chun,Haku,Hatsu,Nan,Pei,Ton,Shaa,M1,M2,M3,M4,M5,M6,M7,M8,M9,P1,P2,P3,P4,P5,P6,P7,P8,P9,S1,S2,S3,S4,S5,S6,S7,S8,S9,Chun,Haku,Hatsu,Nan,Pei,Ton,Shaa,M1,M2,M3,M4,M5,M6,M7,M8,M9,P1,P2,P3,P4,P5,P6,P7,P8,P9,S1,S2,S3,S4,S5,S6,S7,S8,S9,Chun,Haku,Hatsu,Nan,Pei,Ton,Shaa]
console.log("xx.length is", xx.length);

var A = Array.from(Array(136).keys())
var B = A.slice();
var B = shuffle(B);
var ARR = B.splice(0,14);
var ARCHIVE = [ARR];
var index = 0;
console.log("ARR is", ARR);

function shuf() {
    B = A.slice();
    B = shuffle(B);
    ARR = B.splice(0,14);
    index = 0;
    draws = 0;
    ARR = ARR.slice()
    ARCHIVE = [ARR]
    return ARR; 
}

function back () {
    console.log("In back -- ARCHIVE is", ARCHIVE);
    if (index > 0) {
        index = index - 1;
        ARR = ARCHIVE[index]
    }
}

function forward () {
    console.log("In forward -- ARCHIVE is", ARCHIVE);
    if (index < ARCHIVE.length - 1) {
        index = index + 1; 
        ARR = ARCHIVE[index]
    };
}

function sw (ar) {
    ARR = ARR.slice();
    var a, b, c, d;
    [a,b,c,d] = ar;
    ARR[a] = d;
    ARR[c] = b;
    ARR = ARR.slice();
    ARCHIVE.push(ARR);
    ARCHIVE = ARCHIVE;
    ar69 = [];
    if (a === 13 || c === 13) getR();
} 

var ar69 = [];
 
function sky (a) {
        ar69.push(a[0])
        ar69.push(a[1])
        if (ar69.length === 4) {
            if (ar69[0] === 13 && ar69[2] === 13) {
                getR();
            }

            else if(ar69[0] === ar69[2]) {
                ARR[ar69[0]] = ARR[13];
                getR();
            }
            else sw(ar69);
    }
 };

function getR() {
    draws+=1
    B = shuffle(B);
    ARR[13] = B.splice(0,1)[0];
    ar69 = [];
    index+=1;
    ARCHIVE.push(ARR.slice());
    ARCHIVE = ARCHIVE;
}

shuf();
console.log("ARR is", ARR);
</script>
<style>

h2 {
    color: purple;
    text-align: center;
}

img {
    opacity: 1;
    background-color:#FFFFFF
}

</style>


<div     style = "font-family: Times New Roman;  text-align: center; color: yellow; font-size: 38px;" transition:fade>
Immutable Data Structures
</div>
<!-- <h2>Preserving records of past states</h2> -->

<br><br>
<p>The tile on the right is your draw. To keep it, double click on the tile you wish to discard. Double click on the drawn tile in order to discard it and draw another. </p>
<p>You can make any two mahjong tiles change places by clicking one and then the other.</p>
<div>index: {index}</div>
<div>draws: {draws}</div>
<div>Current tile indeces: {ARR}</div>
<br><br>    
<div style = "color: #FF0000; text-align: center">
<span   id = 0 on:click = {() => sky([0, ARR[0]] )}><img src={xyz[ARR[0]]}></span>
<span   id = 1 on:click = {() => sky([1, ARR[1]] )}><img src={xyz[ARR[1]]}></span>
<span   id = 2 on:click = {() => sky([2, ARR[2]] )}><img src={xyz[ARR[2]]}></span>
<span   id = 3 on:click = {() => sky([3, ARR[3]] )}><img src={xyz[ARR[3]]}></span>
<span   id = 4 on:click = {() => sky([4, ARR[4]] )}><img src={xyz[ARR[4]]}></span>
<span   id = 5 on:click = {() => sky([5, ARR[5]] )}><img src={xyz[ARR[5]]}></span>
<span   id = 6 on:click = {() => sky([6, ARR[6]] )}><img src={xyz[ARR[6]]}></span>
<span   id = 7 on:click = {() => sky([7, ARR[7]] )}><img src={xyz[ARR[7]]}></span>
<span   id = 8 on:click = {() => sky([8, ARR[8]] )}><img src={xyz[ARR[8]]}></span>
<span   id = 9 on:click = {() => sky([9, ARR[9]] )}><img src={xyz[ARR[9]]}></span>
<span   id = 10 on:click = {() => sky([10, ARR[10]] )}><img src={xyz[ARR[10]]}></span>
<span   id = 11 on:click = {() => sky([11, ARR[11]] )}><img src={xyz[ARR[11]]}></span>
<span   id = 12 on:click = {() => sky([12, ARR[12]] )}><img src={xyz[ARR[12]]}></span>
<span> . </span>
<span   id = 13 on:click = {() => sky([13, ARR[13]] )}><img src={xyz[ARR[13]]}></span>
</div>
<!--<span   id = 13 on:click = {() => sky([13, xx[draw] )}><img src={xx[    draw]]}></span>-->

<br><br><br>
<button on:click = {shuf}>SHUFFLE</button>
<button on:click={getR}>Draw</button> 
<br><br>
<h2>{ar69}</h2>
<button on:click = {back}>BACK</button>
<button on:click={forward}>Forward</button> 

<br><br><br>


<p>Clicking a button sends its id and value to the function "sky". The next time a button is clicked, ar69 in sky() gets a third and fourth value. sky() forwards the ids and button values to sw() which switches the clicked buttons' values, saves a clone of the resulting array in the master array of arrays (ARCHIVE), increments index, and clears array ar69, preparing sky() for another round of data. </p>







