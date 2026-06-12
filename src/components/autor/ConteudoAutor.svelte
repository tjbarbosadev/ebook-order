<script>
	import { marked } from 'marked';

	let { autor } = $props();
</script>

{#if autor}
	<div class="flex flex-col gap-5">
		<img src={autor.imagem} alt={autor.nome} class="h-96 object-cover object-center rounded-md" />
		<article class="prose prose-invert max-w-none">
			{@html marked.parse(autor.biografia)}
		</article>
	</div>
{/if}
