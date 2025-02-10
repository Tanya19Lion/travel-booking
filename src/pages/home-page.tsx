import { useMemo, useState } from "react";
import useFetch from "@/hooks/useFetch";

import ListingList from "@/components/listing-list";
import ListingFilters from "@/components/listing-filters";
import { Separator } from "@/components/ui";

import { DateRange } from "react-day-picker";
import { ListingExtended } from "@/lib/types";
import DataRenderer from "@/components/data-renderer";

export default function HomePage() {
	const [filters, setFilters] = useState<{ dates?: DateRange, guests?: number, search?: string }>({
		dates: undefined,
		guests: 1,
		search: ''
	});	

	const filteredOptions = useMemo(() => ({params: filters}), [filters]);

	const { data: listings, isLoading, error } = useFetch<ListingExtended[]>('api/listings', filteredOptions);

	const handleFilters = (filters: { dates?: DateRange, guests?: number, search?: string }) => {
		setFilters(filters);
	};

	return (
		<div className="container py-4">
			<div className="mb-4">
				<ListingFilters onChange={handleFilters} />
				<Separator className="my-6" />
			</div>

			<DataRenderer isLoading={isLoading} error={error}>
				{ listings && <ListingList listings={listings} /> }
			</DataRenderer>
		</div>
	)
}