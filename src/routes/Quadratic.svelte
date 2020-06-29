<script>
import {fade} from "svelte/transition"
var end = "end"

    function quadF2 (a, b, c) {
      let abc;
      let d = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      let e = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    let z = (c > 0) ? "+" : "-";
    let w = Math.abs(c);  
      if (d === d) {
        abc = (`${a}*x*x + ${b}*x ${z} ${w} = 0 has the following solutions: x = ${d} and x = ${e}`);
      }
      else {
          abc = (`${a}*x*x + ${b}*x + ${c} = 0 has no solution`);
    }
    return abc + "<br>";
  }
  var window = {};
window["<br>"] = "<br>"
var RESULT = []  
  
var MI = function MI ()  {  
    var ar = [];
    let res = "";
    var result = [];
    return (function run (x) {  
        if (x) ar.push(x); // excludes null, NaN, and undefined
        if (ar.length === 3) {
        // res = quadF2(ar[0], ar[1], ar[2]) 
        RESULT.unshift(`${quadF2(ar[0], ar[1], ar[2])}`)
        RESULT.length = 6;
           ar = [];
        }
        return function f (func) {
            if (func === "end") return result;
            else return run(func(x));
        };
  })(ar.pop());
}
var m = MI();
m(()=>3)(()=>3)(()=>-36)(()=>4)(()=>4)(()=>4)(()=>1)(()=>1)(()=>-2)
 m(()=>5)(()=>-3)(()=>-54)(()=>5)(()=>10)(()=>-175)(()=>1)(()=>2)(()=>-3)
     console.log(RESULT) 
 
</script>
<svelte:head>
	<title>Async</title>
</svelte:head>

<h1>JavaScript Functions</h1>

<div style = "font-family: Times New Roman;  text-align: center; color: hsl(210, 90%, 90%); font-size: 38px;" transition:fade>
PROMISE HANDLING MONADS
</div>
<br>
<div>{@html RESULT[0]}</div>
<div>{@html RESULT[1]}</div>
<div>{@html RESULT[2]}</div>
<div>{@html RESULT[3]}</div>
<div>{@html RESULT[4]}</div>
<div>{@html RESULT[5]}</div>




























