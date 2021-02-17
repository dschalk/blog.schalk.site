

<svelte:head>
	<title>JavaScript Monads for Asynchronous Functionality and Time Travel.</title>
</svelte:head>

<script>
	import Nav from './Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		padding: 0.3em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>