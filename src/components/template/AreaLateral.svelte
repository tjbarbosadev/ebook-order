<script>
	import {
		IconFriends,
		IconHome,
		IconUsers,
		IconBooks,
		IconSquareChevronRight,
		IconRss,
		IconBrandFacebook,
		IconBrandInstagram,
		IconBrandYoutube
	} from '@tabler/icons-svelte';
	import autores from '../../constants/autores';
	import Menu from './Menu.svelte';
	import MenuItem from './MenuItem.svelte';
</script>

<aside class="w-72 flex flex-col self-start border border-zinc-800 rounded-md p-5 gap-7">
	<Menu titulo="Navegação">
		<MenuItem label="Início" href="/">
			<IconHome size={18} />
		</MenuItem>
		<MenuItem label="Personagens" href="/personagens">
			<IconFriends size={18} />
		</MenuItem>
		<MenuItem label="Autores" href="/autores">
			<IconUsers size={18} />
		</MenuItem>
		<MenuItem label="Séries" href="/series">
			<IconBooks size={18} />
		</MenuItem>
	</Menu>
	<Menu titulo="Principais autores">
		{#each autores as autor}
			<MenuItem label={autor.nome} href={`/autores/${autor.id}`}>
				<IconSquareChevronRight size={18} />
			</MenuItem>
		{/each}
	</Menu>
	<Menu titulo="Outras categorias">
		<MenuItem label="Últimas Notícias" href="/">
			<IconRss size={18} />
		</MenuItem>
		<MenuItem label="Séries Populares" href="/">
			<IconBooks size={18} />
		</MenuItem>
		<MenuItem label="Facebook" href="/">
			<IconBrandFacebook size={18} />
		</MenuItem>
		<MenuItem label="Instagram" href="/">
			<IconBrandInstagram size={18} />
		</MenuItem>
		<MenuItem label="YouTube" href="/">
			<IconBrandYoutube size={18} />
		</MenuItem>
	</Menu>
</aside>
