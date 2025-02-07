import { useState } from "react";
import { listings as statisListings } from "@/api/data/listings";

import ListingList from "@/components/listing-list";
import ListingFilters from "@/components/listing-filters";
import { Separator } from "@/components/ui/separator";

import { Listing } from "../lib/types";
import { DateRange } from "react-day-picker";

export default function HomePage() {
	const [listings, setListings] = useState<Listing[]>(statisListings);

	const handleChanges = (filters: { dates?: DateRange, guests?: number, search?: string }) => {};

	return (
		<div className="container py-4">
			<ListingFilters onChange={handleChanges}/>
			<Separator className="my-6"/>
			<ListingList listings={listings}/>			
		</div>
	)
}
