import { DollarSign, Pin, Users } from "lucide-react";
import { Listing } from "@/lib/types";
import { Card, Separator } from "@/components/ui";
import ListingCardDetailsImages from "./listing-details-card-images";

type ListingDetailsCardProps = {
	listing: Listing;
};

export default function ListingDetailsCard({ listing }: ListingDetailsCardProps) {
	const { name, price, location, maxGuests, description } = listing;

	return (			
		<Card className="mx-auto p-4">
			<ListingCardDetailsImages listing={listing} />
			<Separator className="mb-4" />

			<div className="flex flex-col gap-2">
				<h1 className="mb-2 text-2xl font-bold">{name}</h1>

				<div className="flex items-center gap-2">
					<DollarSign className="h-4 w-4 text-primary" />
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
			</div>
			<Separator className="my-4"/>
			<div className="whitespace-pre-line">{description}</div>
		</Card>
	)
}
