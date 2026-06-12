<script>
	import Logo from './Logo.svelte';
	const { children } = $props();
</script>

<div class="flex flex-col min-h-screen bg-black text-white">
	<Logo />
	<main>
		{@render children?.()}
	</main>
</div>
