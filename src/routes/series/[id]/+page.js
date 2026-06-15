import { error } from '@sveltejs/kit';
import series from '../../../constants/series';

export function load({ params }) {
	const { id } = params;

	for (const serie of series) {
		if (serie.id === id) {
			return {
				serie
			};
		}
	}

	error(404, 'Série não encontrada');
}
