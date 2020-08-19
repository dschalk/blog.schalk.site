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
		border-bottom: 1px solid rgba(255,62,0,0.1);

		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
		width: 12%;
		float: left;
		list-style-type: none;
	}
/*
	// clearfix 
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}
*/
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

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>
<h1 style = "color: #5AFFFF; font-style: normal">SENSIBLE FUNCTIONAL JAVASCRIPT</h1>
<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li><a aria-current="{segment === 'Basic' ? 'page' : undefined}" href="Basic">Function Monads</a></li>
		<li><a aria-current="{segment === 'Basic_II' ? 'page' : undefined}" href="Basic_II">Cowzer McScowzer</a></li>
		<li><a aria-current="{segment === 'Quadratic' ? 'page' : undefined}" href="Quadratic">Quad Monad</a></li>
		<li><a aria-current="{segment === 'Monad2' ? 'page' : undefined}" href="Monad2">Async</a></li>
		<li><a aria-current="{segment === 'ObjectMonad' ? 'page' : undefined}" href="ObjectMonad">Object Monad</a></li>
		<li><a aria-current="{segment === 'Monad3' ? 'page' : undefined}" href="Monad3">Promises</a></li>
		<li><a aria-current="{segment === 'Matrix' ? 'page' : undefined}" href="Matrix">Matrix</a></li>
		<li><a aria-current="{segment === 'Transducer' ? 'page' : undefined}" href="Transducer">Transducer</a></li>
		<li><a aria-current="{segment === 'Experiment' ? 'page' : undefined}" href="Experiment">Experiment</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
	</ul>
</nav>

