import { useParams } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import ListingDetailsCard from "@/components/listing-details-card";

import { Listing } from "@/lib/types";
import { useMemo } from "react";
import DataRenderer from "@/components/data-renderer";

export default function ListingDetailsPage() {
	const { listingId } = useParams();

	const filteredOptions = useMemo(() => ({}), []);
	const { data: listing, isLoading, error } = useFetch<Listing>(`api/listings/${listingId}`, filteredOptions);
	
	return (
		<div className="container py-4">
			<DataRenderer isLoading={isLoading} error={error}>
				{ listing && <ListingDetailsCard listing={listing} /> }
			</DataRenderer>
		</div>
	);
}
