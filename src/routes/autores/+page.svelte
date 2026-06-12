<script>
	import ItemAutor from '../../components/autor/ItemAutor.svelte';
	import Titulo from '../../components/shared/Titulo.svelte';
	import autores from '../../constants/autores';
</script>

<div class="flex flex-col gap-5">
	<Titulo titulo="Autores">
		Conheça os autores por trás das maiores obras de fantasia, suas histórias de vida, inspirações e
		contribuições para o mundo da literatura.
	</Titulo>

	<div class="grid grid-cols-2 gap-4">
		{#each autores as autor}
			<ItemAutor {autor} />
		{/each}
	</div>
</div>
