<script>
	const { label, children, href = '/' } = $props();
</script>

<li>
	<a
		{href}
		class="flex gap-2 items-center cursor-pointer text-sm hover:text-white/80 transition-colors"
	>
		{@render children?.()}
		<span>{label}</span>
	</a>
</li>
