<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: #FFFFEE;
        color: #000066;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
		font-size: 20px;
	}
  
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
