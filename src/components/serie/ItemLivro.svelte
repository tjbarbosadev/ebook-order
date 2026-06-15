<script>
	let { livro } = $props();
</script>

{#if livro}
	<a
		href={livro.link}
		class="no-underline text-inherit flex flex-col rounded-md overflow-hidden gap-3 bg-zinc-800 p-4"
	>
		<img src={livro.imagem} alt={livro.titulo} class="object-cover object-center rounded-md" />
		<div class="flex flex-col gap-2">
			<span class="text-xl font-bold flex-1 text-center">{livro.titulo}</span>
			<button class="botao azul">Comprar</button>
		</div>
	</a>
{/if}
