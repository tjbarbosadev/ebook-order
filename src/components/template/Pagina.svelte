<script>
	import Cabecalho from './Cabecalho.svelte';

	const { children } = $props();
</script>

<div class="flex flex-col min-h-screen bg-black text-white">
	<Cabecalho />
	<main>
		{@render children?.()}
	</main>
</div>
