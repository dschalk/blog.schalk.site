<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
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

<nav>
	<ul>
		<li><a aria-current="{segment === 'functional/' ? 'page' : undefined}" href="functional/">home</a></li>
		<li><a aria-current="{segment === 'functional/Monad0' ? 'page' : undefined}" href="functional/Monad0">A Simple Monad</a></li>
		<li><a aria-current="{segment === 'functional/Monad2' ? 'page' : undefined}" href="functional/Monad2">Async</a></li>
		<li><a aria-current="{segment === 'functional/Monad3' ? 'page' : undefined}" href="functional/Monad3">Promises</a></li>
		<li><a aria-current="{segment === 'functional/Matrix' ? 'page' : undefined}" href="functional/Matrix">Grid</a></li>
		<li><a aria-current="{segment === 'functional/D&D' ? 'page' : undefined}" href="functional/D&D">D&D</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->

	</ul>
</nav>
