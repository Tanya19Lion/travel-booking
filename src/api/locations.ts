import { getDatabaseTable } from './helpers';
import { Location } from '../lib/types';

export const getLocationById = (id: number): Location | undefined => {
	const locations = getDatabaseTable('locations');
	if (!locations) {
		console.log('No locations table found');
		return;
	}

	return locations.find((location: Location) => location.id === id);
};
