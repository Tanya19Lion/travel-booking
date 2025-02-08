
import ListingCardImages from "./listing-card-images";

import { DollarSign, Pin, Users } from "lucide-react";
import { Listing } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";

type ListingCardProps = {
	listing: Listing;
};

export default function ListingCard({ listing }: ListingCardProps) {
	const { name, price, location, maxGuests } = listing;

	return (
		<Card className="w-[320px]">
			<ListingCardImages listing={listing} />
			
			<CardContent className="flex flex-col gap-2 p-4">
				<h2 className="mb-2 text-xl font-semibold">{name}</h2>
				<div className="flex items-center gap-2">
					<DollarSign className="h-4 w-4 text-primary"/>
					<span className="text-muted-foreground">
						<span className="font-bold text-foreground">{price} </span>
						 / night
					</span>
				</div>
				<div className="flex items-center gap-2">
					<Pin className="h-4 w-4 text-primary" />
					<span className="text-muted-foreground">{location}</span>
				</div>
				<div className="flex items-center gap-2">
					<Users className="h-4 w-4 text-primary" />
					<span className="text-muted-foreground">{maxGuests} guests</span>
				</div>
			</CardContent>
		</Card>
	)
}
