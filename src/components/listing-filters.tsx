import { useState } from "react";

import { Search } from "lucide-react";
import { Button, Input, DatePickerWithRange, Stepper } from "@/components/ui";
import { DateRange } from "react-day-picker";

type ListingFiltersProps = {
	onChange: (filters: { dates?: DateRange, guests?: number, search?: string }) => void;
};

export default function ListingFilters({ onChange }: ListingFiltersProps) {
	// const [dates, setDates] = useState<DateRange | undefined>({});
	const [guests, setGuests] = useState<number | undefined>(1);
	const [search, setSearch] = useState<string | undefined>("");

	const handleSubmit = () => {
		onChange({ guests, search });
	};

	return (
		<div className="flex flex-row items-center justify-center gap-2">
			<Input 
				className="w-[400px]" 
				placeholder="Search destinations..." 
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<DatePickerWithRange />
			<Stepper label="guest" value={guests} onChange={setGuests}/>
			<Button onClick={handleSubmit}>
				<Search className="h-4 w-4"/>
			</Button>
		</div>
	)
}
