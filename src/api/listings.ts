import { isListingAvailable, listings as staticListings} from './data/listings';
// import { getDatabaseTable } from './helpers';
import { Listing, ListingExtended } from '../lib/types';

// Gets listing by id
export const getListingById = (id: number): Listing | undefined => {
	// const listings = getDatabaseTable('listings');
	const listings = staticListings;
	if (!listings) {
		console.log('No listings table found');
		return;
	}

	return listings.find((listing: Listing) => listing.id === id);
};

type getListingsProps = {
	dates: {
        from: Date;
        to: Date;
    };
    guests: number;
    search: string
};

// Gets listings using optional date range and search parameters
export const getListings = (params: getListingsProps): ListingExtended[] | undefined => {
	const { dates, guests, search } = params;

	// Gets the listings table
	// const listings = getDatabaseTable('listings');
	const listings = staticListings;
	if (!listings) {
		console.log('No listings table found');
		return;
	}

	// Sets a new variable for the filtered listings
	let filteredListings = listings;

	// Handles date range
	if (dates) {
		filteredListings = filteredListings.filter((listing: Listing) =>
			isListingAvailable(listing, dates),
		);
	}

	// Handles guests
	if (guests) {
		filteredListings = filteredListings.filter(
			(listing: Listing) => guests <= listing.maxGuests,
		);
	}

	// Handles search
	if (search) {
		filteredListings = filteredListings.filter((listing: Listing) =>
			listing.name.toLowerCase().includes(search.toLowerCase()),
		);
	}

	return filteredListings;
};
