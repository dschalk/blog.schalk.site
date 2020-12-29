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
		<li><a aria-current="{segment === undefined ? 'pagev' : undefined}" href=".">home</a></li>
		<li><a aria-current="{segment === 'functional' ? 'page' : undefined}" href="functional">Functional_JavaScript</a></li>
		<li><a aria-current="{segment === 'mahjong' ? 'page' : undefined}" href="mahjong">Mahjong</a></li>
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">Sapper_posts</a></li>
		<li><a aria-current="{segment === 'Waits' ? 'page' : undefined}" href="Waits">Waits</a></li>
	</ul>
</nav>		
	