<script lang="ts">
	import { marked } from 'marked';
	import ItemLivro from './ItemLivro.svelte';

	let { serie } = $props();
</script>

{#if serie}
	<div class="flex flex-col gap-5">
		<h1 class="text-3xl font-black">{serie.titulo}</h1>
		<a class="text-sm text-zinc-400 -mt-4" href="/autores/{serie.autor.id}">{serie.autor.nome}</a>
		<img src={serie.imagem} alt={serie.titulo} class="h-96 object-cover object-center rounded-md" />
		<article class="px-4 py-6 flex flex-col gap-4">
			{@html marked.parse(serie.descricao)}
			<div class="grid grid-cols-3 gap-6">
				{#each serie.livros as livro}
					<ItemLivro {livro} />
				{/each}
			</div>
		</article>
	</div>
{/if}
