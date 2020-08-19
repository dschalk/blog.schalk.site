<script>
    import { count, lock, light, jay, zebra } from './store.js';
    import { writable } from 'svelte/store';
    console.log("In Count.svelte -- writable(false) is ", writable(false))
    console.log("$count is ", $count)

    console.log("$lock is ", $lock)
    function zeb (n) {zebra.setZebra(n)};
    function log () {console.log("$count is ", $count)}
    var zz;
</script>

<h3>The count is {$count}</h3>
<h3>lock is {$lock}</h3>
<h3>The light is {$light}</h3>
<h3>jay is {$jay}</h3>

<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>reset</button>
<br><br>
<button on:click={lock.setTrue}>setTrue</button>
<button on:click={lock.setFalse}>setFalse</button>
<button on:click={lock.reset}>lock.reset</button>
<br><br>
<button on:click={light.setGreen}>setGreen</button>
<button on:click={light.setRed}>setRed</button>
<button on:click={light.reset}>light.reset</button>
<br><br>
<button on:click={jay.increment}>+</button>
<button on:click={jay.decrement}>-</button>
<button on:click={jay.reset}>reset</button>
<br><br>
<input bind:value = {zz} />

<h2>lock is {$lock}</h2>
<h2>zz is {$zz}</h2>
<button on:click={log}>log</button>

