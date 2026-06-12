<script>
	let { children, titulo = 'Título' } = $props();
</script>

<div class="flex flex-col">
	<h1 class="text-3xl font-black">{titulo}</h1>
	<p class="text-sm text-zinc-400">
		{@render children?.()}
	</p>
</div>
