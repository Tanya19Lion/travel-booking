import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Listing } from "@/lib/types";
import { getImageUrl } from "@/lib/utils/images";

type ListingCardImagesProps = {
	listing: Listing;
};

export default function ListingCardImages({ listing }: ListingCardImagesProps) {
	const [isHovered, setIsHovered] = useState(false);	

	return (
		<Carousel 
			className="w-full" 
			onMouseEnter={() => setIsHovered(true)} 
			onMouseLeave={() => setIsHovered(false)}
		>
			<CarouselContent className="ml-0">
				{listing.images.map((image, index) => (
					<CarouselItem key={image} className="pl-0">
						<img 
							src={getImageUrl(image)} 
							alt={`${listing.name} Image ${index+1}`} 
							className="w-full h-[200px] object-cover rounded-md" 
						/> 
					</CarouselItem>
				))}
			</CarouselContent>	
			{
				isHovered && (
					<>
						<CarouselPrevious className="absolute left-4"/>
						<CarouselNext className="absolute right-4"/>
					</>
				)
			}	
	  	</Carousel>
	);
}