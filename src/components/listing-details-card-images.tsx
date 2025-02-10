import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Listing } from "@/lib/types";
import { getImageUrl } from "@/lib/utils/images";

type ListingCardDetailsImagesProps = {
	listing: Listing;
};

export default function ListingCardDetailsImages({ listing }: ListingCardDetailsImagesProps) {
	const [currentimageIndex, setCurrentimageIndex] = useState(0);	

	return (
        <>
        <img 
            className="mb-4 h-[650px] w-full rounded-md object-contain"
            src={getImageUrl(listing.images[currentimageIndex])}
            alt={listing.name}
        />
		<Carousel className="mx-auto mb-4 w-[90%]">
			<CarouselContent>
				{listing.images.map((image, index) => (
					<CarouselItem 
                        key={image} 
                        className="basis-1/3 cursor-pointer"
                        onClick={() => setCurrentimageIndex(index)}
                        isSelected={index === currentimageIndex}
                    >
						<img 
							src={getImageUrl(image)} 
							alt={`${listing.name} Image ${index+1}`} 
							className="w-full h-52 object-cover shadow-sm" 
						/> 
					</CarouselItem>
				))}
			</CarouselContent>	

			<CarouselPrevious />
			<CarouselNext />
	  	</Carousel>
        </>
	);
}