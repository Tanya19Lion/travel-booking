import { Listing } from "@/lib/types";
import ListingCard from "./listing-card";

type ListingProps = {
	listings: Listing[];
};

export default function ListingList({ listings }: ListingProps) {
	return (
		<div className="flex flex-wrap justify-center gap-4">
			{
				listings.length > 0 ? (
					listings.map(listing => {
						return <ListingCard key={listing.id} listing={listing}/>
					})
				) : (
					 <p>No listings found</p>
				)				
			}
		</div>
	)
}
