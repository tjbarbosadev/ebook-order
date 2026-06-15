import { error } from '@sveltejs/kit';
import autores from '../../../constants/autores';

export function load({ params }) {
	const { id } = params;

	for (const autor of autores) {
		if (autor.id === id) {
			return {
				autor
			};
		}
	}

	error(404, 'Autor não encontrado');
}
