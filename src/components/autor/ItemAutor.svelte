<script lang="ts">
	let { autor } = $props();
</script>

{#if autor}
	<a
		href={`/autores/${autor.id}`}
		class="flex flex-col rounded-md relative overflow-hidden border border-zinc-800"
	>
		<img src={autor.imagem} alt={autor.nome} class="h-96 object-cover object-center rounded-md" />
		<div class="absolute bottom-0 flex justify-end px-6 py-4 bg-black/50 backdrop-blur-sm w-full">
			<span class="text-2xl font-bold">{autor.nome}</span>
		</div>
	</a>
{/if}
