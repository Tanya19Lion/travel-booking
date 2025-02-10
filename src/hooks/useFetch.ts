import { useState, useEffect, useRef } from "react";

import api from "../api";
import axios from "axios";

function useFetch<T>(url:  string, options: {}) {
	const [data, setData] = useState<T | null>(null);	
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);	

	const abortControllerRef = useRef<AbortController | null>(null);
	
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			setError(null);

			if (abortControllerRef.current) {
				abortControllerRef.current = new AbortController();
			}

			try {
				const response = await await api.get(url, { 
					...options, 
					signal: abortControllerRef?.current?.signal
				});			
				setData(response.data);
			} catch(error) {
				if (axios.isCancel(error)) {
					return;
				}

				setError('Something went wrong while fetching the data. Please try again later.');
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();

		return () => {
			if (abortControllerRef.current) {
				abortControllerRef.current.abort();	
			}
		};
	}, [options, url]);

    return { data, isLoading, error };
}

export default useFetch;