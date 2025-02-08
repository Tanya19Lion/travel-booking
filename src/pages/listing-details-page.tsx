import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ListingDetailsCard from "@/components/listing-details-card";

import api from "../api";
import axios from "axios";
import { Spinner } from "../components/ui";
import { Listing } from "@/lib/types";

export default function ListingDetailsPage() {
	const { listingId } = useParams();

	const [listing, setListing] = useState<Listing>({} as Listing);	
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);	
	

	const abortControllerRef = useRef<AbortController | null>(null);

	useEffect(() => {
		const fetchListings = async () => {
			setIsLoading(true);
			setError(null);

			if (abortControllerRef.current) {
				abortControllerRef.current = new AbortController();
			}

			try {
				const response = await await api.get(`api/listings/${listingId}`, { 
					signal: abortControllerRef?.current?.signal
				});	
				setListing(response.data);
			} catch(error) {
				if (axios.isCancel(error)) {
					return;
				}
				setError('Something went wrong while fetching the listings. Please try again later.');
			} finally {
				setIsLoading(false);
			}
		};

		fetchListings();

		return () => {
			if (abortControllerRef.current) {
				abortControllerRef.current.abort();	
			}
		};
	}, [listingId]);

	const renderListing = () => {
		if (isLoading) {
			return (
				<div className="flex justify-center items-center h-64">
					<Spinner size="lg" />
				</div>
			);
		} 

		if (error) {
			return (
				<div className="text-center">
					<p className="text-red-500">{error}</p>
				</div>
			);
		}
		
		return <ListingDetailsCard listing={listing} />;		
	};

	return (
		<div className="container py-4">{renderListing()}</div>
	);
}
