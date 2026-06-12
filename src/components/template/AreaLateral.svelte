<script>
	import Menu from './Menu.svelte';
	import MenuItem from './MenuItem.svelte';
</script>

<aside class="w-72 flex flex-col self-start border border-zinc-800 rounded-md p-5 gap-10">
	<Menu titulo="Navegação">
		<MenuItem label="Início" href="/" />
		<MenuItem label="Personagens" href="/	" />
		<MenuItem label="Autores" href="/autores" />
		<MenuItem label="Séries" href="/" />
	</Menu>
</aside>
