<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Pagina from '../components/template/Pagina.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Pagina>
	{@render children()}
</Pagina>
