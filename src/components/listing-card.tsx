import { Listing } from "@/lib/types";
import { getImageUrl } from "@/lib/utils/images";
import { Card, CardContent } from "@/components/ui/card";

type ListingCardProps = {
	listing: Listing;
};

export default function ListingCard({ listing }: ListingCardProps) {
	return (
		<Card className="w-[320px]">
			<img src={getImageUrl(listing.images[0])} alt={listing.name} className="w-full h-[200px] object-cover rounded-md" />
			<CardContent className="p-4">
				<h2 className="mb-0 text-xl font-semibold">{listing.name}</h2>
			</CardContent>
		</Card>
	)
}
