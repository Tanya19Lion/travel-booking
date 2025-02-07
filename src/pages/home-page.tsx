import { listings } from "@/api/data/listings";
import ListingList from "@/components/listing-list";

export default function HomePage() {
	return (
		<div className="container py-4">
			<ListingList listings={listings}/>
		</div>
	)
}
