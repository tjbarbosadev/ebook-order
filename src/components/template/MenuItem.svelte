<script>
	const { label, href = '/' } = $props();
</script>

<li>
	<a
		{href}
		class="flex gap-2 items-center cursor-pointer text-sm hover:text-white/80 transition-colors"
	>
		<span>{label}</span>
	</a>
</li>
