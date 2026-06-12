<script>
	const { children, titulo = 'Menu' } = $props();
</script>

<div class="flex flex-col gap-3">
	<div class="text-sm font-bold text-white/30">{titulo}</div>
	<ul class="flex flex-col gap-2">
		{@render children?.()}
	</ul>
</div>
