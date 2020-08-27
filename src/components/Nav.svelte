<script>
	export let segment;
var ARR;
var jack;
var AR = [];

var ARR = AR.map(v => "color: #" + v)
$: ARR;
$: num = 0;
// setInterval(function () {jack = (num ++)%130; jack = jack}, 3)

</script>

<style>
  
nav {
  position: fixed;
  top: 25;
  left: 30;
  width: 20%;
  padding: 0 1em;
}

	ul {
		margin: 0;
		padding: 0;
		width: 80%;
		float: left;
		list-style-type: none;
		font-size: 18px;
	}

   	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}
    h1 {font-size: 40px;}
	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

</style>
<br><br><br>
<h1 style = "color: #000099; font-style: normal; font-family: times; font-size: 52px">SENSIBLE FUNCTIONAL JAVASCRIPT</h1>
<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
		<br>
		<br>
		<li><a aria-current="{segment === 'ObjectMonad' ? 'page' : undefined}" href="ObjectMonad">Object Monad</a></li>
		<br>
		<br>
		<li><a aria-current="{segment === 'FunctionMonad' ? 'page' : undefined}" href="FunctionMonad">Function Monads</a></li>
		<br>
		<br>
		<li><a aria-current="{segment === 'Monad2' ? 'page' : undefined}" href="Monad2">Async</a></li>
		<br>
		<br>
		<li><a aria-current="{segment === 'Monad3' ? 'page' : undefined}" href="Monad3">Promises</a></li>
		<br>
		<br>
		<li><a aria-current="{segment === 'Transducer' ? 'page' : undefined}" href="Transducer">Transducer</a></li>
		<br>
		<br>
		<li><a aria-current="{segment === 'Matrix' ? 'page' : undefined}" href="Matrix">Matrix</a></li>
		<br>
		<br>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen 
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">Sapper Blog</a></li> -->
	</ul>
</nav>

