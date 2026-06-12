<script>
	import Cabecalho from './Cabecalho.svelte';
	import Rodape from './Rodape.svelte';

	const { children } = $props();
</script>

<div class="flex flex-col min-h-screen bg-black text-white">
	<Cabecalho />
	<main class="flex-1">
		{@render children?.()}
	</main>
	<Rodape />
</div>
