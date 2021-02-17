<script>

import { now } from "svelte/internal";

</script>


<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
		text-align: left;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Functional Programming Best Practices when using Svelte JavaScript.</title>
	<meta>
</svelte:head>

<p> There's more to Come. For now, I hope web developers will take a look at the "Functional JavaScript" section. You're likely to be surprised. I was, when I discovered that some of the usual coding rules don't need to be obeyed in small isolated modules. That left me free to write more concise and transparent JavaScript for the Web. </p>