<script>
	let { serie } = $props();
</script>

{#if serie}
	<a
		href={`/series/${serie.id}`}
		class="flex flex-col rounded-md relative overflow-hidden border border-zinc-800"
	>
		<img src={serie.imagem} alt={serie.titulo} class="h-96 object-cover object-center rounded-md" />
		<div class="flex gap-2 flex-col justify-end px-6 py-4 bg-black/50 backdrop-blur-sm w-full">
			<span class="text-2xl font-bold">{serie.titulo}</span>
			<span class="text-sm text-zinc-400 text-justify">{serie.descricao}</span>
			<button class="botao azul self-end"> Ver Detalhes </button>
		</div>
	</a>
{/if}
