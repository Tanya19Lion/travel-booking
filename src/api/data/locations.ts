import { Location, LocationExtended } from '../../lib/types';	

export const createLocation = (location: Location): LocationExtended => {
	const { id, name, country } = location;

	return {
		id,
		country,
		name,
		createdAt: new Date(),
		modifiedAt: new Date(),
	};
};

export const locations: LocationExtended[] = [
	createLocation({
		id: 1,
		name: 'London',
		country: 'United Kingdom',
	}),
	createLocation({
		id: 2,
		name: 'Paris',
		country: 'France',
	}),
];
