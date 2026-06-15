<script>
	import autores from '../../constants/autores';
	import Menu from './Menu.svelte';
	import MenuItem from './MenuItem.svelte';
</script>

<aside class="w-72 flex flex-col self-start border border-zinc-800 rounded-md p-5 gap-7">
	<Menu titulo="Navegação">
		<MenuItem label="Início" href="/" />
		<MenuItem label="Personagens" href="/	" />
		<MenuItem label="Autores" href="/autores" />
		<MenuItem label="Séries" href="/" />
	</Menu>
	<Menu titulo="Principais autores">
		{#each autores as autor}
			<MenuItem label={autor.nome} href={`/autores/${autor.id}`} />
		{/each}
	</Menu>
	<Menu titulo="Outras categorias">
		<MenuItem label="Últimas Notícias" href="/" />
		<MenuItem label="Séries Populares" href="/" />
		<MenuItem label="Facebook" href="/" />
		<MenuItem label="Instagram" href="/" />
		<MenuItem label="YouTube" href="/" />
	</Menu>
</aside>
