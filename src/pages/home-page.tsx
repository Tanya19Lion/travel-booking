import { useState, useEffect, useRef } from "react";

import api from "../api";
import axios from "axios";

import ListingList from "@/components/listing-list";
import ListingFilters from "@/components/listing-filters";
import { Separator, Spinner } from "@/components/ui";

import { DateRange } from "react-day-picker";
import { ListingExtended } from "@/lib/types";

export default function HomePage() {
	const [listings, setListings] = useState<ListingExtended[]>([]);	
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);	
	const [filters, setFilters] = useState<{ dates?: DateRange, guests?: number, search?: string }>({
		dates: undefined,
		guests: 1,
		search: ''
	});	

	const abortControllerRef = useRef<AbortController | null>(null);
	
	useEffect(() => {
		const fetchListings = async () => {
			setIsLoading(true);
			setError(null);

			if (abortControllerRef.current) {
				abortControllerRef.current = new AbortController();
			}

			try {
				const response = await await api.get('api/listings', { 
					params: filters, 
					signal: abortControllerRef?.current?.signal
				});			
				setListings(response.data);
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
	}, [filters]);

	const handleFilters = (filters: { dates?: DateRange, guests?: number, search?: string }) => {
		setFilters(filters);
	};

	const renderListingList = () => {
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
		
		return <ListingList listings={listings} />;		
	};

	return (
		<div className="container py-4">
			<ListingFilters onChange={handleFilters} />
			<Separator className="my-6" />
			{ renderListingList() }
		</div>
	)
}
