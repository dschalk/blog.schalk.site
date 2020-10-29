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
		<li><a aria-current="{segment === 'undefined' ? 'page' : undefined}" href="cattle/">home</a></li>
		<li><a aria-current="{segment === 'cattle/cow1' ? 'page' : undefined}" href="cattle/cow1">cow1</a></li>
		<li><a aria-current="{segment === 'cattle/cow2' ? 'page' : undefined}" href="cattle/cow2">cow2</a></li>
		<li><a aria-current="{segment === 'cattle/cow3' ? 'page' : undefined}" href="cattle/cow3">cow3</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->

	</ul>
</nav>
